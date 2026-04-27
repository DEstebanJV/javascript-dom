/* Seleccionar elementos por id, class, tag y atributo */
/* por ID */
// document.getElementById('app-title'),
// document.getElementById('app-title')
/* por clase */
// document.getElementsByClassName('menu-items')
/* por tag */
// document.getElementsByTagName('menu')
/* por atributo */
// document.querySelectorAll('[href="#"]')

//document.querySelector /* Siempre trae el primer elemento */

/* Tranversing DOM */

//* Navegación del elemento padre a hijo

const menu = document.querySelector('.menu')
console.log("Hijos de menu")
console.log(menu.children)
/*
 children → nos retorna un HTMLCollection con los nodos hijos del nodo padre.
*/

//? Acceder al primer nodo → firstElementChild
console.log("Primer hijo de menu")
console.log(menu.firstElementChild)

//? Acceder a un node específico → []
console.log("Segundo hijo de menu")
console.log(menu.children[1]);

//? Acceder al último elemento → lastElementChild
console.log("Último hijo de menu")
console.log(menu.lastElementChild);
const parent = document.querySelector('#parent')
console.log("Hijos de parent")
console.log(parent.lastElementChild)

//* Navegación de un nodo hijo a padre
const link = document.querySelector('.menu-items')
/*parentElement → nos retorna su nodo padre */
console.log("Nodo padre de link")
console.log(link.parentElement)
// Para conocer el abuelo de ese nodo podemos usar nuevamente parentElement y asi sucesivamente .
console.log("Nodo abuelo de link")
console.log(link.parentElement.parentElement)

//* Navegación entre nodos hermanos
/*
previousSiblind → Hermano anterior
nextSibling → Hermano siguiente
*/
console.log(link)
console.log(link.previousElementSibling.textContent)
console.log(link.nextElementSibling.textContent)