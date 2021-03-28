let handler = function (m) {
  // this.sendContact(m.chat, '642766660666', 'Susi', m)
  this.sendContact(m.chat, '642766660666', 'My Owner BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
