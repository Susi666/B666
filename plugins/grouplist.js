let handler = async (m, { conn }) => {
  let txt = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  conn.reply(m.chat, 'List Groups:\n' + txt, m)
}
handler.help = ['groups ᴳʳᵘᵖᵒˢ ᵉⁿ ˡᵒˢ ᑫᵘᵉ ˢᵉ ᵉⁿᶜᵘᵉⁿᵗʳᵃ ᵉˡ ᵇᵒᵗ', 'grouplist ᴳʳᵘᵖᵒˢ ᵉⁿ ˡᵒˢ ᑫᵘᵉ ˢᵉ ᵉⁿᶜᵘᵉⁿᵗʳᵃ ᵉˡ ᵇᵒᵗ']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
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

