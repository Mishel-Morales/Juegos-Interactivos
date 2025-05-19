let cartas = document.querySelectorAll('.cartas')
let intentos = document.querySelector('span')
let reiniciar = document.querySelector('#reiniciar')

let codigo = Math.floor(Math.random()*25)
let intento = 0
console.log(codigo)
cartas.forEach(carta => {
    carta.addEventListener('click', (event) => {
        if(event.target.id == codigo){
            carta.className = ('cartas col-2 border border-1 border-black p-4')
            carta.innerHTML = '<span>¡Me encontraste!</span>'
            carta.classList.replace('border', 'ganador')
            alert('¡¡Eres un Genio!!')
        } else{
            carta.classList.replace('border', 'bg-secondary')
            intento++
            intentos.innerText = intento
        }
    })
})

reiniciar.addEventListener('click', () => {
    intentos.innerText = 0
    codigo = Math.floor(Math.random()*25)
    cartas.forEach(carta => {
        carta.classList.replace('bg-secondary', 'border')
        carta.classList.replace('ganador', 'border')
        carta.innerHTML = '<span></span>'
    })
})