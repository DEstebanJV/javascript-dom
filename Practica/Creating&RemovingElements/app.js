/* Manipulacion del dom con InnerHTML e insertAdjacentHTML */

/* Formas con html strings
tambien con createElements
*/

/* 
innerHTML -> reemplaza todo lo que hay en el elemento por lo que asignemos.

insertAdjacentHTML -> agrega el contenido en cualquiera de las posiciones declaradas disponibles.
 */

const contentArea = document.getElementById('contentArea')

/* Agregar un string de html */
contentArea.innerHTML = '<p>Soy el nuevo parrafo</p>'

/* InsertadjecenteHTML */
/* Posiciones de insertAdjacentHTML
• beforebegin: Inserta el contenido antes del primer nodo hijo.
• afterbegin: Inserta el contenido despues del primer nodo hijo.
• beforeend: Inserta el contenido antes del ultimo nodo hijo.
• afterend: Inserta el contenido despues del ultimo nodo hijo.
*/
contentArea.insertAdjacentHTML('beforeend', '<p>Soy el nuevo parrafo creado</p>')

/* agregar un string elemento sin reemplazar el contenido */

const listArea = document.getElementById('listArea')
listArea.insertAdjacentHTML('beforeend', '<li>item 5</li>')

/* otra forma Mala practica */

/* listArea.innerHTML += '<li>item 6</li>' */