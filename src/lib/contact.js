/**
 * Generate a WhatsApp link with pre-filled message template.
 * @param {string} waNumber - WhatsApp number in format 628xxx
 * @param {string} template - Message template text
 * @returns {string} WhatsApp deep link URL
 */
export function getWhatsAppLink(waNumber, template) {
  const encoded = encodeURIComponent(template)
  return `https://wa.me/${waNumber}?text=${encoded}`
}

/**
 * Generate a Discord user profile link.
 * @param {string} discordUsername - Discord username
 * @returns {string} Discord user URL
 */
export function getDiscordLink(discordUsername) {
  return `https://discord.com/users/${discordUsername}`
}
