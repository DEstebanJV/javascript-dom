/* Como llamar un atributo de un elemento */

const input  = document.getElementById('input-id')
console.log(input.value)
console.log(input.type)
console.log(input.className)

/* Como cambiar un atributo de un elemento */

input.value = 'David'
console.log(input.value)


/* modificar el texto de forma dinamica */

const appTitle = document.getElementById('app-title')
appTitle.textContent = 'Soy el nuevo header escrito dinamicamente'

appTitle.innerText = 'Soy el nuevo header escrito dinamicamente 2'