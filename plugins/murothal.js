let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Te dejo unas rolitas 

*YouTube:*


Canción 1 ⇨ https://www.youtube.com/watch?v=Xrywra2AgSU
Canción 2 ⇨ https://www.youtube.com/watch?v=SOJT4_Z2dYE
Canción 3 ⇨ https://www.youtube.com/watch?v=EKMbtN008WY
Canción 4 ⇨ https://www.youtube.com/watch?v=MROasfPsJnM
Cnación 5 ⇨ https://www.youtube.com/watch?v=wOjzo02Tmck
Cnación 6 ⇨ https://www.youtube.com/watch?v=tLcfAnN2QgY
Canción 7 ⇨ https://www.youtube.com/watch?v=4DO8GsIYfhQ
Canción 8 ⇨ https://www.youtube.com/watch?v=aJOTlE1K90k
Canción 9 ⇨ https://www.youtube.com/watch?v=ekzHIouo8Q4
Canción 10 ⇨ https://www.youtube.com/watch?v=SR6iYWJxHqs
Canción 11 ⇨ https://www.youtube.com/watch?v=QZKrLIoMyxY
Canción 12 ⇨ https://www.youtube.com/watch?v=weGzdKxLzss
Canción 13 ⇨ https://www.youtube.com/watch?v=iajZ1R5dIXU
Canción 14 ⇨ https://www.youtube.com/watch?v=SFQRgTgq1vM
Canción 15 ⇨ https://www.youtube.com/watch?v=ECUq3tCFhXs
Canción 16 ⇨ https://www.youtube.com/watch?v=RoayB0pLRC0
Canción17 ⇨ https://www.youtube.com/watch?v=KEElZdEWz0M
Canción 18 ⇨ https://www.youtube.com/watch?v=PJYpZ4hkXJE
Canción 19 ⇨ https://www.youtube.com/watch?v=_Z5-P9v3F8w
Canción 20 ⇨ https://www.youtube.com/watch?v=CHC6_9j72ro
Canción 21 ⇨ https://www.youtube.com/watch?v=PDsdKrKohH0
Canción 22 ⇨ https://www.youtube.com/watch?v=oCoKTTel8KE
Canción 23 ⇨ https://www.youtube.com/watch?v=W0yp3rSfx3I
Canción 24 ⇨ https://www.youtube.com/watch?v=q1TIKQwsyrE
Canción 25 ⇨ https://www.youtube.com/watch?v=7BfNAEK0Gn4
Canción 26 ⇨ https://www.youtube.com/watch?v=lRWqYR3e7xE
Canción 27 ⇨ https://www.youtube.com/watch?v=3rgwIp6D3ow
Canción 28 ⇨ https://www.youtube.com/watch?v=wZRWpr1G1Qw
Canción 29 ⇨ https://www.youtube.com/watch?v=vGBdcJHA93Y
Canción 30 ⇨ https://www.youtube.com/watch?v=hcm55lU9knw
`.trim(), m)
}
handler.help = ['murothal ᴾᵃʳᵃ ᑫᵘᵉ ᵉˢᶜᵘᶜʰᵉˢ ᵇᵘᵉⁿᵃ ᵐᵘˢᶦᶜᵃ']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

