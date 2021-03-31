const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn }) => {
  if (!m.quoted) return conn.reply(m.chat, '¡La etiqueta adhesiva!', m)
  let q = { message: { [m.quoted.mtype]: m.quoted }}
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    let bufs = []
    let im = spawn('convert', ['webp:-', 'png:-'])
    im.on('error',e =>  conn.reply(m.chat, util.format(e), m))
    im.stdout.on('data', chunk => bufs.push(chunk))
    im.stdin.write(sticker)
    im.stdin.end()
    im.on('exit', () => {
      conn.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, {
        quoted: m
      })
    })
  }
}
handler.help = ['toimg ᵀᵉ ᶜᵒⁿᵛᶦᵉʳᵗᵉ ᵉˡ ˢᵗᶦᶜᵏᵉʳ ᵉⁿ ᶦᵐᵃᵍᵉⁿ']
handler.tags = ['sticker']
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

