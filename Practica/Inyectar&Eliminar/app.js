/* La inyección se puede realizar con 4 métodos diferentes:

Before: Convierte el elemento en el hermano del elemento referenciado (Pero ANTES).
After: Convierte al elemento en el hermano del elemento referenciado (Pero DESPUÉS).
Prepend: Lo agrega como hijo (Pero al inicio).
Append: Lo agrega como hijo al final. */

/* Crear un elemento */

const newPElement = document.createElement('p')
newPElement.textContent = 'Soy un nuevo párrafo creado con createElement'

const contentArea = document.getElementById('contentArea')
contentArea.prepend(newPElement) // antes del primer hijo
contentArea.append(newPElement) // después del ultimo hijo

const newListElement = document.createElement('li')
newListElement.textContent = 'item 5'

const listArea = document.getElementById('listArea')
/* agregar atributos */
listArea.setAttribute('name', 'list-area')

listArea.append(newListElement)

