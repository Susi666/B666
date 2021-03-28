let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('PA KSAA GIL!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat <Dar bam>']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = true

module.exports = handler
