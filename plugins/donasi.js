let handler = async m => m.reply(`
╭─「 Mis canciones fav xdddddd 」
│ • Hasta Abajo
│ • Canción Con Yandel
│ • Antes Que Se Acabe
╰────
╭─「 Mi número 」
│ > Wa.me/50364274191
╰────

No c que poner acá :v
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
