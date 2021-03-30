let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin ˢᶦ ᵃⁿᵈᵃˢ ˢᵃᵈ ʸ ᑫᵘᵉʳᵉˢ ᵘⁿᵃ ᶠʳᵃˢᵉ ᶦⁿˢᵖᶦʳᵃᵈᵒʳᵃ, ˢᵒˡᵒ ᵘˢᵃ ᵉˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
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

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Elijo estar solo, no por esperar lo perfecto, pero nunca tengo que rendirme".
  "Se creó una sola persona con una pareja que no había encontrado",
  "Solteros. Tal vez esa sea la manera de Dios de decir 'Descansa del amor equivocado'.",
  "Los solteros son jóvenes que priorizan el desarrollo personal para un amor con más clase en el futuro",
  "No busco a alguien que sea perfecto, sino a alguien que se vuelva perfecto gracias a mi fuerza".
  "El novio de alguien es nuestro alma gemela pendiente",
  "Los solteros deben pasar. Todo llega un momento, en el que toda soledad se convierte en unión con su amante halal. Ten paciencia.",
  "Romeo está dispuesto a morir por Julieta, Jack murió porque salvó a Rose. En esencia, si todavía quieres vivir, sé soltero".
  "Busco personas no por sus fortalezas, sino por su sinceridad",
  "Matchmaking no son chanclas, que a menudo se cambian. Así que, mantén la lucha que debería ser",
  "Si eres la cuerda de la guitarra, yo no quiero ser el guitarrista. Porque no quiero romper contigo",
  "Si amarte es una ilusión, déjame imaginar para siempre",
  "Cariño ... Mi trabajo es solo amarte, no contra el destino",
  "Cuando estoy contigo, se siente como 1 hora y solo 1 segundo, pero si estoy lejos de ti, siento que 1 día se convierte en 1 año",
  "La compota de plátano sabe sumedang, aunque la distancia se extienda, mi amor nunca desaparecerá".
  "Quiero ser el único, no el indicado",
  "No puedo prometer ser bueno. Pero prometo estar siempre ahí para ti",
  "Si me convierto en el representante del pueblo definitivamente fracasaré, ¿cómo quieres pensar en la gente si todo lo que tengo en mente eres tú?",
  "Mira mi jardín, lleno de flores. Mira tus ojos, mi corazón está floreciendo",
  "Prométeme estar conmigo ahora, mañana y siempre",
  "La falta surge no solo por la distancia que los separa. Sino también por deseos que no se hacen realidad.",
  "Nunca estarás lejos de mí, donde sea que vaya tú siempre estás ahí, porque siempre estás en mi corazón, que es solo nuestro cuerpo, no nuestro corazón".
  "Sé que en cada una de mis miradas, estamos bloqueados por la distancia y el tiempo. Pero estoy seguro de que luego nos uniremos".
  "Extrañarte sin siquiera conocerte es como crear una canción que nunca se canta",
  "Hay momentos en que la distancia es siempre una barrera entre tú y yo, pero aún en mi corazón siempre estamos cerca",
  "Si este corazón no es capaz de contener todo el anhelo, qué poder puedo hacer sino orar por ti".
  "Tal vez en este momento sólo pueda soportar este anhelo. Hasta que llegue el momento puedo encontrarme y dejar ir este anhelo contigo",
  "A través del anhelo que estalla en mi corazón, a veces realmente necesito sostener tu abrazo de amor".
  "En la noche fría, ya no recuerdo; con qué frecuencia pienso en ti también te extraño",
  "Extrañarte es como una lluvia que viene de repente y dura mucho tiempo. E incluso después de que la lluvia amainó, mi anhelo todavía se sentía",
  "Desde que te conocí, naturalmente quiero seguir aprendiendo, aprendiendo a ser el mejor para ti",
  "¿Sabes la diferencia entre pensi y tu cara? Si el lápiz de escribir se puede borrar, pero si tu cara no está no habrá nada que se pueda borrar de mi mente",
  "No es el Examen Nacional de mañana de lo que tengo que preocuparme, sino la prueba de vida por la que pasé después de que me dejaste".
  "Una cosa de la felicidad en la escuela que me mantiene emocionado es poder ver tu sonrisa todos los días",
  "¿Sabes cuál es la diferencia entre ir a la escuela e ir a tu casa? Cuando vas a la escuela, definitivamente lo que traes son libros y bolígrafos, pero si vas a tu casa, solo necesito traer mi corazón y amor". ,
  "No estoy triste si es lunes mañana, estoy triste si no te veo",
  "El momento de mi amor es perpendicular al momento de tu amor. Haciendo de nuestro amor un perfecto punto de equilibrio",
  "Estoy dispuesto a participar en una carrera alrededor del mundo, siempre que tú estés en la línea de meta",
  "Mi tarea te extraña. Más fuerte que las matemáticas, más amplio que la física, más fuerte que la biología".
  "Mi amor por ti es como un metabolismo, que no se detendrá hasta la muerte",
  "Si la distancia es como tú, iré a recogerte, haré cola en casa",
  "Come lo que me guste de ti, incluido comer hígado",
  "El amor es como una sentencia de muerte. Si no te disparan, cuelgas",
  "Amarte es como una droga: una vez que tratas de ser adictivo, no tratas de hacerte sentir curioso, dejar atrás te hace abstinencia",
  "Me gusta más picar porque picar es delicioso. Además, tenerte completamente ...",
  "Este mundo nos pertenece sólo a nosotros dos. Los otros simplemente se están contrayendo",
  "Para mí, todos esos días son martes. Martes en el cielo si cerca de ti ...",
  "¿Qué pasa si los dos nos convertimos en delincuentes de bandas? Te robé el corazón y tú me robaste el mío"
  "Eres como el café que tomé esta mañana. Amargo, pero adictivo.",
]
