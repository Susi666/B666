let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 800000
    m.reply('+800000 XP')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Ya reclamaste hoy rata, pasa mañana')
}
handler.help = ['daily ᴿᵉᶜˡᵃᵐᵃ ˣᵖ ˢᵒˡᵒ ᵘⁿᵃ ᵛᵉᶻ ᵖᵒʳ ᵈᶦᵃ', 'claim ᴿᵉᶜˡᵃᵐᵃ ˣᵖ ˢᵒˡᵒ ᵘⁿᵃ ᵛᵉᶻ ᵖᵒʳ ᵈᶦᵃ']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

