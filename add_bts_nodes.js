const fs = require('fs');

const path = 'src/data/organizationWork.js';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('export const allBtsNodes')) {
  content += \n\n// Menggabungkan semua canvasNodes (Behind The Scenes) menjadi satu array global
export const allBtsNodes = [
  ...hmjGallery.filter(item => item.canvasNodes).flatMap(item => item.canvasNodes),
  ...hmjReels.filter(item => item.canvasNodes).flatMap(item => item.canvasNodes)
];
;
  fs.writeFileSync(path, content);
  console.log('Added allBtsNodes');
} else {
  console.log('allBtsNodes already exists');
}
