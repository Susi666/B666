let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Términos y condiciones de Bot * ESA. *
1. El texto y su nombre de usuario de WhatsApp se almacenarán en el servidor mientras el bot esté activo
2. Los datos se eliminarán cuando el bot esté desconectado.
3. No almacenamos imágenes, videos, archivos, audios ni documentos que envíe.
4. Nunca le pediremos que proporcione información personal.
5. Si encuentra un error / error, infórmelo directamente al propietario del bot
6. Además, si desea crear un TUTORIAL BOT, omítalo, no regalamos codigo
7. Cualquier cosa que pidas en este bot, NO SEREMOS RESPONSABLES!

Gracias y que disfrutes el bot!
2021©Susi BOT
`.trim(), m)
}
handler.help = ['rules ᴸᵉᵉˡᵃˢ ᵖᵒʳᶠᵃᵛᵒʳ']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

