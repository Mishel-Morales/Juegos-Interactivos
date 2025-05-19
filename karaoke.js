let seleccionDeCancion = document.querySelector('.select')
let titulo = document.querySelector('.card-title')
let artista = document.querySelector('small')
let mostrarLetra = document.querySelector('.mostrarLetra')
let insertarBoton = document.querySelector('.card-body')
let mostrar = document.querySelector('.enLinea')
let yaCantada = document.querySelector('.yaCantada')
let cambioTexto = document.querySelector('span')
let cuadro = document.querySelector('.border')

let Canciones = [
    {
        cancionName: 'Forever-Alone',
        artista: 'Paulo Londra',
        letra: [
            'Forever alone (O-O-Ovy On The Drums)',
            'Forever alone',
            'Sigo pensando en qué les puedo contestar',
            'Cuando me preguntan de cómo soy en realidad',
            'Pasa que a eso nunca lo había analizao´',
            'Sin conocerme tanto les puedo contar que soy',
            'Chico tranquilo, sin nada para opinar',
            'Siempre en lo mío, tal vez soy egoísta',
            'Pocos amigos, pero mucha historia pa´ contar',
            'Un reservado, loco, tímido, pero pegao´',
            'Algunos dicen "Sí", otros dicen que no',
            'Y las buenas pa´ ti, también las buenas pa´ vos',
            'Yo sólo sigo aquí, sentadito en el sillón',
            'Siendo un chico aburrido, perezoso y dormilón',
            'Perezoso y dormilón',
            '(Ah-oh, ah-oh, ah-oh)',
            'Perezoso y dormilón',
            '(Ah-oh, ah-oh, ah-oh...)',
            'Perezoso y dormilón',
            'Forever alone, no me hablen de amor',
            'Estoy bien con mis gatas, mi flia, mis panas, mi gira, mi roll',
            'Así me siento mejor, má´-má´ piquete, más flow',
            'Salgo siempre en luna llena y mis fellas condenados para el millón',
            'Me tiene mal ese ron y ese Fernet de litro',
            'Y la Play 4 y el sushi, los party, las mamis que vienen al show',
            'Pero para despejarme sólo prefiero acostarme',
            'Quedar ´quilito en mi cama, olvidar los celulares',
            'Ese ratito no llamen, en ese momento no llamen',
            'Que no voy a contestarles, no llamen, no llamen',
            'Voy a contarles, contarles, contarles',
            'Que no soy nadie tan interesante',
            'Y por si queda duda cómo soy en serio',
            'Aprovecho el ratito para confesarles que soy',
            'Chico tranquilo, sin nada para opinar',
            'Siempre en lo mío, tal vez soy egoísta',
            'Pocos amigos, pero mucha historia pa´ contar',
            'Un reservado, loco, tímido, pero pegao´',
            'Algunos dicen "Sí", otros dicen que no',
            'Y las buenas pa´ ti, también las buenas pa´ vos',
            'Yo sólo sigo aquí, sentadito en el sillón',
            'Siendo un chico aburrido, perezoso y dormilón',
            '(Ah-oh, ah-oh, ah-oh)',
            'Perezoso y dormilón',
            '(Ah-oh, ah-oh, ah-oh...)',
            'Perezoso y dormilón',
            '(Ah-oh, ah-oh, ah-oh...)',
            'Perezoso y dormilón',
            '(Ovy On The Drums, On The Drums)',
            '(Yeah, Paulo Londra)',
            '(Big Ligas)',
            '(Lo Mayores)',
            '(Hey, The Kristoman)',
            '(Leones con Flow, yeah)'
        ]
    },
    {
        cancionName: 'Lento',
        artista: 'Santy-p y Moree Neri',
        letra: [
            'Lento, lento, seguro y sin prisa',
            'Me hablaron de droga les hablé de tu sonrisa',
            'Me hablaron de estrella y les mostré la que más brilla',
            'Una dama hermosa humilde y sencilla',
            'Por eso entiendo el proceso',
            'Y quiero que me quieras hasta el último ´e mis huesos',
            'Y siento, presiento que esta vez salgo ileso',
            'Y no me como el cuento de amores de dos pesos, no',
            'Pienso en el pasado mientras miro mi futuro',
            'Si te veo a mi lado y juro que me quedo duro',
            'Nuestros corazones laten a la misma frecuencia',
            'No sé si somos hechos o solo coincidencias',
            'En un lapso de un segundo enamoraste mi conciencia',
            'La belleza de tu alma supera tu apariencia',
            'No sé lo que me pasa cuando se trata de vos',
            'Quiero estar toda la noche escuchando tu voz',
            'Feeling bad I´m not myself',
            'I don´t know why I love your name',
            'So do we are so far away',
            'So far away, so far away',
            'Lento, lento y seguro sin prisa',
            'Me hablaron de droga, les hablé de tu sonrisa',
            'Hablaron de estrellas y les mostré la que más brilla',
            'Una dama hermosa, humilde y sencilla',
            'Por eso, entiendo el proceso',
            'Y quiero que me quieras hasta el último ´e mis huesos',
            'Y siento, presiento que esta vez salgo ileso',
            'Y no me como el cuento de amores de dos pesos, no',
            'Ma´ me cansé de ser un farsante en esto',
            'De poner pretexto para así no ser honesto',
            'Y declararme al mundo que lo sepa todo el resto',
            'Que te amo como nadie y en un tema lo demuestro',
            'Solo quiero ser el que vea tu amanecer',
            'Quiero sentir el placer de al fin poderte ver',
            'Cada parte de tu piel, te lo ruego mujer',
            'Voy a enloquecer si no pruebo tu miel',
            'I´m feeling bad I´m not myself',
            'I don´t know why I love your name',
            'So do we are so far away',
            'So far away, so far away',
            'Perdiendo el sentido de la puta orientación',
            'La Luna no me brilla como me brillabas vos',
            'El vaso se llena y se vacía mi corazón',
            'Denme una receta pa´ sanármelo',
            'Me hiciste tan feliz que no sé serlo si no estás',
            'Yo sé que es medio enfermo no te quiero ni asustar',
            'Mi vida es un infierno y el incendio lo apagas',
            'Lo único que pido es una oportunidad',
        ]
    },
    {
        cancionName: 'Recien-Soltera',
        artista: 'Paulo Londra',
        letra: [
            '… Ey, diga usted',
            '¿Cuál es su intención esta noche ?',
            'Ey, yeah, ey, yeah, ey',
            'Quiero saber, si ya no tiene quien le reproche',
            'Porque se le ve que',
            '… Ella está recién soltera, de hace poquito',
            'Salió pa la calle, pa hacer delitos',
            'El pelo se lo suelta, el vestido cortito',
            'Que Dios me bendiga, a ver si se lo quito',
            '… ¿Cómo le va ?',
            'Ese vestido es tan genial',
            'Hasta no parece real, contigo todo se ve mágico',
            'Chica de novela, ah, chica de novela, ah',
            '… Alguien la dañó, no importa quién fue',
            'Seguro que se arrepiente si la ve',
            'Si vino hasta aquí, a bailar así',
            'Díganle a su ex que ya se le fue',
            '… Que ya le duele, por lo menos, ya no se le nota',
            'Que la luna llena se hace de miel si le invito a otra copa',
            'Que ya no le duele, por lo menos, ya no se le nota',
            'Que la luna llena se hace de miel si le invito a otra copa',
            '… Porque ella está recién soltera, de hace poquito',
            'Salió pa la calle, pa hacer delitos',
            'El pelo se lo suelta, el vestido cortito',
            'Que Dios me bendiga, a ver si se lo quito',
            '… ¿Cómo le va ?',
            'Ese vestido es tan genial',
            'Hasta no parece real, contigo, todo se ve mágico',
            'Chica de novela, ah, chica de novela, ah',
            'Chica de novela, ah, chica de novela, ah(sí)',
            '… Si tú viniste con tu pareja',
            'Este es el momento de agarrarla por la cintura, ah',
            'Cintura, cintura, cintura, dale, cintura',
            'Cintura, cintura, cintura, dale, cintura',
            'Hasta abajo, hasta abajo, hasta abajo, dale, hasta abajo',
            'Hasta abajo, hasta abajo, hasta abajo, dale, hasta abajo',
            '… Ella está recién soltera, de hace poquito',
            'Salió pa la calle, pa hacer delitos',
            'El pelo se lo suelta, el vestido cortito',
            'Que Dios me bendiga, a ver si se lo quito',
            '… Ella está recién soltera(Leones con flow)',
            'Ella está recién soltera(Paulo Londra)',
            'Ella está recién soltera(Naisgai, ey)',
            'Ella está recién soltera(ja, ja, ja)'
        ]
    }
]

mostrar.className = 'text-light'

const reproducir = (name) => {

    let cancion = Canciones.find(object => object.cancionName == name)
    mostrar.textContent = cancion.letra[0]
    mostrarLetra.classList.replace('bg-dark-subtle', 'fondo')

    let contador = 0
    if (!document.querySelector('.btn-success')) {
        insertarBoton.insertAdjacentHTML('beforeend', '<button type="button" class="container btn btn-success">Siguiente Línea</button>')
    }
    let otraLinea = document.querySelector('.btn-success')
    otraLinea.addEventListener('click', () => {
        contador++
        mostrar.textContent = cancion.letra[contador]
        yaCantada.textContent = cancion.letra[contador-1]
    })    
    if (!document.querySelector('.btn-info')) {
        insertarBoton.insertAdjacentHTML('beforeend', '<button type="button" class="container btn btn-info mt-3">Reiniciar Canción</button>')
    }
    let reiniciar = document.querySelector('.btn-info')
    reiniciar.addEventListener('click', () => {
        mostrar.textContent = cancion.letra[0]
        yaCantada.textContent = ''
        contador = 0
    })
}

seleccionDeCancion.addEventListener('change', (event) => {
    cambioTexto.textContent = 'Seleccione la Canción a la que desea Cambiar:'
    let music = Canciones.find(object => object.cancionName == event.target.value)
        titulo.textContent = music.cancionName
        artista.textContent = music.artista
        yaCantada.textContent = ''
        reproducir(event.target.value)

})

