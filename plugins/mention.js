let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention ᴱˢᶜʳᶦᵇᵉ']
handler.tags = ['tools']

handler.command = /^mentiin$/i

module.exports = handler
