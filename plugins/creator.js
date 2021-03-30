let handler = function (m) {
  // this.sendContact(m.chat, '642766660666', 'Susi', m)
  this.sendContact(m.chat, '642766660666', 'Susi', m)
}
handler.help = ['owner ᴺᵘᵐᵉʳᵒ ᵈᵉ ˡᵃ ᶜʳᵉᵃᵈᵒʳᵃ ᵈᵉˡ ᵇᵒᵗ', 'creator ᴺᵘᵐᵉʳᵒ ᵈᵉ ˡᵃ ᶜʳᵉᵃᵈᵒʳᵃ ᵈᵉˡ ᵇᵒᵗ']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
