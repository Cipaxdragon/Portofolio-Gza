const fs = require('fs');
const path = require('path');

const kreasiDir = 'public/images/showcase/instagram/Other/kreasi';
const saintekDir = 'public/images/showcase/instagram/Other/Inagurasi Saintek';

function parseDir(baseDir, category) {
  const folders = fs.readdirSync(baseDir).filter(f => f.startsWith('Reel_'));
  const results = [];
  
  for (const folder of folders) {
    const p = path.join(baseDir, folder);
    const dataPath = path.join(p, 'Data.txt');
    const captionPath = path.join(p, 'Caption.txt');
    
    let likes = '0';
    let url = '';
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      const likesMatch = data.match(/Likes:\s*([\d,]+)/);
      if (likesMatch) likes = likesMatch[1];
      const urlMatch = data.match(/URL:\s*(https?:\/\/[^\s]+)/);
      if (urlMatch) url = urlMatch[1];
    }
    
    let caption = '';
    if (fs.existsSync(captionPath)) {
      caption = fs.readFileSync(captionPath, 'utf8').trim();
    }
    
    const parts = folder.split('_');
    const shortcode = parts.length > 2 ? parts[2] : '';
    if (!url && shortcode) {
      url = 'https://instagram.com/p/' + shortcode + '/';
    }
    
    let thumb = '';
    if (fs.existsSync(path.join(p, 'Thumbnail.png'))) thumb = 'Thumbnail.png';
    else if (fs.existsSync(path.join(p, 'Thumbnail.jpg'))) thumb = 'Thumbnail.jpg';
    
    let video = '';
    if (fs.existsSync(path.join(p, 'Video.mp4'))) video = 'Video.mp4';
    
    // Replace 'public/' with '/' for web paths
    const webBaseDir = '/' + baseDir.replace(/^public\//, '').replace(/\\/g, '/');
    
    results.push({
      id: folder,
      type: 'video',
      category: category,
      url: `${webBaseDir}/${folder}/${thumb}`,
      videoUrl: video ? `${webBaseDir}/${folder}/${video}` : '',
      likes: likes,
      caption: caption,
      link: url
    });
  }
  return results;
}

const kreasi = parseDir(kreasiDir, 'Kreasi');
const saintek = parseDir(saintekDir, 'Saintek');

const all = [...kreasi, ...saintek];
fs.writeFileSync('src/data/committeeData.js', 'export const committeeReels = ' + JSON.stringify(all, null, 2) + ';\n');
console.log('Generated committeeData.js with ' + all.length + ' items');
