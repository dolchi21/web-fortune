const simpsons = [
    'Plan dental...',
    'Lisa necesita frenos',
    'A la grande le puse Cuca',
    'Batman?',
    'Batman es un científico!',
    'Bonjourrrrrrr!!! Pedazo de Soquetes!!!',
    'Comer una naranja es como llevar un buen matrimonio',
    '¡Ya cómete la maldita naranja!',
    'Exaaaacto',
    'Soy como ese tipo que hizo un cohete a mano y llegó a la Luna... ¿cómo se llamaba? ¿Apollo Creed?',
    'En esta casa respetamos las leyes de la termodinámica!',
    '20 dolares? Yo quería maní...',
    'No te engañes Jimmy, si una vaca pudiera te comeria a ti y a todos tus seres queridos',
    'El postre el postre el postre',
    'Ay, esta grasa no se quita',
    'Es un extraterrestre, como Alf, y aparece todos los viernes, ¡como Alf!',
    'Y como olvidarme del niño rata...',
    '¡Marge, creo que odio a Michael Jackson! No, no, la verdad es que canta bien y es muy noble, buenas noches.',
    '¿Que hacen en mi alcantarilla para cadaveres? Alcantarilla para cadaveres, quise decir tuberia de la inocencia.',
    'Me llama usted, y entonces voy. ¡Don Barredora es quien yo soy!',
    'Me encantan estos sábados de flojera... Es miércoles, Homero.',
    'Me encantan los sábados de verdad, no como los falsos sábados que casi hacen que me corran.',
    '¿Acaso no podría hacerlo otro?',
    '...como ingleses y escoceses, o galeses y escoceses, o japoneses y escoceses, o escoceses y otros escoceses... ¡Malditos escoceses, arruinaron a Escocia!',
    'No... ese no es el inspector de billeteras... mmmm...',
    '¿Y cuánto cuesta el fin de semana gratis?',
    'Usted es Tony Randall!',
    'Usted no aprende, verdad?',
    'Hable mas fuerte que tengo una toalla',
    '¡Entra cuchillo, salen las tripas!',
    'Así que... mono significa uno y riél significa riél. Así termina nuestro curso intensivo.',
    'Bart... no quiero asustarte, pero tal vez el coco, ¡el coco esté en la casa!',
    '¿Escuela de payasos? Eso no se come.',
    'Increible pero me lo comí todo',
    'Si me vas a regañar cada vez que digo una estupidez, voy a tener que dejar de decir estupideces.',
    'Los blancos tienen nombres como Lenny y los negros tienen nombres como Carl.',
    'Y si algún día regresas en el tiempo, no vayas a tocar nada!',
    'Cuando crezca voy a ir a la Universidad Bovina.',
    'Hola Director Skinner, hola Super Nintendo Chalmers.',
    'El señor X le dice: Marge, si esto no enciende tu motor, dejo de llamarme Homero J. Simpson!',
    'Cama arriba, cama abajo... cama arriba, cama abajo',
    'Yo se que oyes mis pensamientos muchacho. Ñam ñam ñam...'
]

var messages = [].concat(simpsons)

module.exports = function fortune() {
    var i = Math.floor(Math.random() * messages.length)
    return messages[i]
}
