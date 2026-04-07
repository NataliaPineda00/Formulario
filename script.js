//Importe de infomracion de formulario 
const form = document.getElementById('Formulario')

//const - es una declaracion de una variable constante (No se puede cambiar)
//from - es el nombre de la variable que se esta declarando 
// document - es el objeto global que representa el documento HTML
// getElementById - es un metodo que devuelve el elemento del documento
// Dentro de parentesis - Nombre del id a cargar en la variable

if (form) {
    form.addEventListener('submit', function (event) {
      const nombre = document.getElementById('usuario').value.trim();
      const correo = document.getElementById('email').value.trim();    
      const password = document.getElementById('password').value.trim();

      if (nombre === "" || correo === "" || password === "") {
      alert('Por favor, complete todos los campos del formulario.');
      return false;
    }
     return true;
     });
}
// || OR
// && AND
// Dicha validacion verifica el ingreso "NULO" en los campos del formulario