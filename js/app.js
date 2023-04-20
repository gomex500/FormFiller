var tema = 1;
var fondo = document.getElementById("body");
var nav = document.getElementById("nav");
var btn = document.getElementById('btn');
var hr = document.getElementById('hr');
function dark(){
    if(tema == 1){
        fondo.style.backgroundImage = "url('../img/fondo2.png')";
        nav.className = 'navbar nav navbar-expand-lg navbar-dark bg-primary';
        btn.className = 'btn btn-primary';
        hr.style.color = '#007bff';
        fondo.style.color = "#007bff"
        tema = 2;
    }else{
        fondo.style.backgroundImage = "url('../img/fondo1.png')";
        nav.className = 'navbar nav navbar-expand-lg navbar-dark bg-dark';
        btn.className = 'btn btn-dark';
        hr.style.color = '#f2f2f2';
        fondo.style.color = "#f2f2f2"
        tema = 1;
    }
}

const hijos = document.querySelector('#hijos');
const h = document.querySelector('.h');

console.log(hijos.value);
h.textContent = hijos.value;

hijos.addEventListener('input', function() {
  h.textContent = hijos.value
});





///pdf
const form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('NombreAgente');
  if (nombre.value === '') {
    alert('Ingrese su nombre');
    return false;
  }
  var doc = new jsPDF()

doc.text('Nombre: '+nombre.value, 10, 10)
doc.save('a4.pdf')

  form.submit();
});
