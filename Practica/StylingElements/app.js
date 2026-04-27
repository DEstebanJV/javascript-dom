/* modificar el estilo de los elementos */

const menu = document.querySelector('.menu')

/* por style */
/* menu.style.backgroundColor = 'red' */

/* por classname sobreescribe la clase */

/* menu.className = 'main-menu' */

/* Adicionando clases 
• classList: Es una propiedad en JavaScript que proporciona una manera conveniente de acceder y manipular las clases CSS de un elemento HTML. Te permite agregar, quitar, alternar y verificar la presencia de clases en los elementos sin necesidad de manipular directamente la cadena completa de la propiedad "className".


METODOS DE classList:

• .add : Agrega clases.

• .remove: Elimina clases.

• .toggle: Alterna la presecia de una clase.

• .contains: Verifica si una clase esta presente.

• .replace: Remplaza una clase por otra.

• .lenght: Devuelve el numero de clases en el elemento.

Usar classList es mucho mas limpio y seguro que manipular la propiedad className directamente, ya que evita problemas con la manipulacion de cadenas y garantiza que las clases se gestionen correctamente.
*/
menu.classList.add('main-menu', "visible")

const button = document.querySelector('button')
button.addEventListener('click', () => {
  menu.classList.toggle('visible')
  menu.classList.toggle('invisible')
})
