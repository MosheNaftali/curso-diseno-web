var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

//primeraCaja.textContent = 'Hola Mundo';
//primeraCaja.innerHTML = '<u>Hola Mundo</u>';

// ----- Creando nodos
//1.- Crear el elemento
var caja = document.createElement('div');
//2.- Crear un nodo de texto
var contenido = document.createTextNode('Hola Mundo');
//3.- Añadir el nodo de texto al elemento
caja.appendChild(contenido);
//4.- Agregar atributos a los caja
//caja.setAttribute('class', 'caja naranja');

//5.- Agregar el elemento al documento
//var contenedor = document.getElementById('contenedor');
//contenedor.appendChild(caja);

// ----- Modificando la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

//Para conocer el elemento padre
var padre = cajas[0].parentNode;

//padre.insertBefore(caja, cajas[2]);

padre.replaceChild(caja,cajas[1]);

padre.removeChild(caja, cajas[2])