let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Para Bot WA:
Credit: *Susi*

Escribir *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Para GitHub...
5) $git clone No esta disponible en estos momentos
6) $ls
7) $cd SusiBOT

Lo *ultimo*..
Para instalarlo :)
8) npm i
9) node index.js

_Escucha mi canción favorita mejor XD_
*Youtube:*
https://youtu.be/KMiDW0g2U0o
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

