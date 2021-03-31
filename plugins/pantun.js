let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun ᶠʳᵃˢᵉˢ ᑫᵘᵉ ʳᵒᵇᵉ ᵈᵉ ᶜᵃⁿᶜᶦᵒⁿᵉˢ ˣᵈ']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\n\nEs que tiene unos ojos que iluminarían Manhattan,\nY una voz hermosa que mil paisajes retratan,\nAcaso no ves que cuando caminas, desfilas,\nMiremos el cielo hasta que se ponga lila.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nPerreando duro, les gusta mi culo,\nHace tiempo te 'toy esperando,\nNo sé tú, pero yo aquí pensando,\nNo haces na' pa' lo que está' roncando.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nSiempre hay un amor,\nQue sin ser el primero,\nTe hace olvidar todo,\nEse es el verdadero.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nSinceramente solo siento pánico en escena,\nY sostenerte la mirada me quema,\nPero que hoy vivas con mi amor corriendo por tus venas,\nEs por robarme el corazón tu condena.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nI know you, you're like this,\nWhen shit don't go your way you needed me to fix it,\nAnd like me, I did,\nBut I ran out of every reason.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nA otra persona no he podido amar,\nY te juro que lo he tratado,\nPero es que ninguna se te para al la'o,\nDesde que te fuiste sigo trastorna'o.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nTú mataste la' emocione',\nTe fuiste sin darme razone',\nEn la calle te pinta' de santa, pero lo tuyo e' romper corazone',\nAhora tengo má' opcione'.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nAntes que se acabe todo esto,\nVoy a vivir mi vida, si me muero e' contento,\nY hoy quiero alcohol y sexo en exceso,\nPa' darte problema' mejor te doy un beso.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nTrato de vivir sin ti pero no puedo,\nDe quedarme solo tengo miedo,\nSoy como un niño pequeño en esta oscuridad,\nLa vida no vale prefiero estar muerto.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nY ojalá nunca te abracen por última vez,\nHay tantos con quien estar, pero no quien ser\nTan solo somos caminos que suelen torcer,\nMiles de complejos sueltos que debemos de vencer.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nMi cabeza está tan rota que no puede más,\nY mi corazón tan negro que no puede amar\nUna lágrima se escapa y rueda por mi piel\nLa culpa es tan solo mía, no de los demás.\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nSi me dices para ti quién soy\nNo durare en hacerte tan feliz, eres especial para mí\nDime por qué me haces sufrir\nYo te olvidaré desde las Fuentes de Ortiz\n *Sigueme en Instagram:* @susana_monterroza_",
" *PANTUN:*\n\nEl amor es una balanza,\nPierde el primero que se cansa,\nSi tú quieres la correr la chansa\nSi te dañan, no puedes tomar venganza.\n *Sigueme en Instagram:* @susana_monterroza_",
]
