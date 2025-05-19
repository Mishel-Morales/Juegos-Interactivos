let botonCreador = document.querySelector('#botonCreador')
let newName = document.querySelector('#newName')
let poder = document.querySelector('span')
let imgMoustro = document.querySelector('#img-moustro')

let inicio = ["Gro", "Kuro", "Slen", "Zor", "Ho", "Kra", "Flo", "Mur"]

let fin = ["zzu", "rak", "ggy", "gul", "tter", "vack", "rry", "flys", "phy"]

let powers = ["Controlar la Tierra","Viajar en el tiempo", "Controlar el Fuego", "Leer Mentes", "Invisibilidad", "Controlar el Agua", "Controlar el Aire", "Manipulacion Mental", "Alimentarse del Miedo", "Suelta Gases Tóxicos", "Velocidad", "Teletransportación", "Traspasa cualquier Materia", "Super Fuerza", "Respirar bajo el agua", "Volar"]

let moustro = ["./img/moustro-araña.jpg", "./img/moustro-tierno.jpg", "./img/moustro-verde-baboso.jpg", "./img/moustro-agua.jpg", "./img/moustro-bicho.jpg", "./img/moustro-cabezon.jpg", "./img/moustro-de-agua.jpg", "./img/moustro-duende.jpg", "./img/moustro-hongo.jpg", "./img/moustro-morado.jpg", "./img/moustro-murcielago.jpg", "./img/moustro-negro-baboso.jpg", "./img/moustro-patas.jpg", "./img/moustro-peludo-alto.jpg", "./img/moustro-ojos.jpg", "./img/moustro-girl.jpg", "./img/moustro-rojo.jpg", "./img/moustro-verde-flota.jpg", "./img/moustro-blanco.jpg", "./img/moustro-cienpies.jpg", "./img/moustro-piraña.jpg"]

botonCreador.addEventListener('click', () => {
    let ini = inicio[Math.floor(Math.random() * inicio.length)];
    let fi = fin[Math.floor(Math.random() * fin.length)];
    let power = powers[Math.floor(Math.random() * powers.length)]
    let moustroSeleccionado = moustro[Math.floor(Math.random() * moustro.length)];

    let names = ini + fi;

    newName.textContent = names
    poder.textContent = power
    imgMoustro.setAttribute('src', moustroSeleccionado)
})