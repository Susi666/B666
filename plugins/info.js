let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Hecho con javascript y modificado por Susi

Rec: Susi
Script: Modificado al español por Susi
Whatsapp de la editora: 
wa.me/642766660666

*Redes Sociales :*
Mas redes sociales porque si xd.
Instagram: @susana_monterroza_
➥ YouTube ( No tengo pero escuchen este rolón):
https://youtu.be/KMiDW0g2U0o

*Gracias a :*
El colegio
Internet
Traductor Google :)

╠═〘 DONACIÓN 〙 ═
╠➥ Numero del bot: +64 27 666 6066
╠➥ Numero de la creadora: +503 6427 4191
╠➥ Numero donde paso mas conectada: +679 5484
║>Dudas? Wa.me/642766660666
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

