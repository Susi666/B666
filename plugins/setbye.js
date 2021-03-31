let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    else global.DATABASE._data.chats.sBye = text
    m.reply('Bye berhasil diatur\n@user (Mention)')
  } else throw 'Pero escribe lo que quieres que diga gil'
}
handler.help = ['setbye ᴱˢᶜʳᶦᵇᵉ ᵗᵘ ᵈᵉˢᵖᵉᵈᶦᵈᵃ']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

