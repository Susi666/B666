let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menú configurado correctamente\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'El menú se reiniciara', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' berhasil diatur\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' ᴱˢᶜʳᶦᵇᵉ ᵉˡ ᵐᵉⁿᵘ')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Exp)
%limit (Limite)
%name (Nombre)
%weton (No c)
%week (Dia)
%date (Fecha)
%time (Tiempo)
%uptime (Tiempo del bot)
%totalreg (El número de usuarios en la base de datos.)
%npmname
%npmdesc
%version
%github

Sección de menú de encabezado y pie de página:
%category (Categoría)

Sección del cuerpo del menú:
%cmd (Comando)
%islimit (Si el comando es limitado)
`.trim()
