var tema = 1;
var fondo = document.getElementById("body");
var nav = document.getElementById("nav");
var btn = document.getElementById('btn');
var hr = document.getElementById('hr');

function dark() {
    if (tema == 1) {
        fondo.style.backgroundImage = "url('../img/fondo2.png')";
        nav.className = 'navbar nav navbar-expand-lg navbar-dark bg-primary';
        btn.className = 'btn btn-primary';
        hr.style.color = '#007bff';
        fondo.style.color = "#007bff"
        tema = 2;
    } else {
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

// console.log(hijos.value);
h.textContent = hijos.value;

hijos.addEventListener('input', function () {
    h.textContent = hijos.value
});





///pdf
const form = document.querySelector('.needs-validation');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const edad = document.getElementById('edad');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const estado = document.getElementById('estado');
    const hijos = document.getElementById('hijos');
    const cumple = document.getElementById('cumple');
    const foto = document.getElementById('foto');
    const web = document.getElementById('web');
    const radio = document.getElementsByName('sexo');
    const habilidades = document.getElementsByName('habilidades');
    const color = document.getElementById('color');
    const hora = document.getElementById('hora');
    const descripcion = document.getElementById('descripcion');

    var sexo = '',
        hablilidad = [];

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            sexo = radio[i].value;
            break;
        }
    }

    for (let i = 0; i < habilidades.length; i++) {
        if (habilidades[i].checked) {
            hablilidad.push(habilidades[i].value);
        }
    }


    if (nombre.value === '') {
        alert('Ingrese su nombre');
        return false;
    } else if (apellido.value === '') {
        alert('Ingrese su apellido');
        return false;
    } else if (edad.value === null) {
        alert('Ingrese su edad');
        return false;
    } else if (correo.value === '') {
        alert('Ingrese su correo');
        return false;
    } else if (telefono.value === '' && telefono.length >= 8) {
        alert('Ingrese su telefono');
        return false;
    } else if (estado.value === '') {
        alert('Ingrese su estado');
        return false;
    } else if (hijos.value === null) {
        alert('Ingrese cantidad de hijos');
        return false;
    } else if (cumple.value === '') {
        alert('Ingrese su cumpleanos');
        return false;
    } else if (foto.value === '') {
        alert('Ingrese su foto');
        return false;
    } else if (web.value === '') {
        alert('Ingrese su web');
        return false;
    } else if (sexo.value === '') {
        alert('Ingrese su sexo');
        return false;
    } else if (color.value === '') {
        alert('Ingrese su color favorito');
        return false;
    } else if (color.value === '') {
        alert('Ingrese su color favorito');
        return false;
    } else if (hora.value === '') {
        alert('Ingrese la hora');
        return false;
    } else if (descripcion.value === '') {
        alert('Ingrese su Descripcion personal');
        return false;
    }

    const hexValue = color.value;

    // Convertir el valor hexadecimal a RGB
    const red = parseInt(hexValue.slice(1, 3), 16);
    const green = parseInt(hexValue.slice(3, 5), 16);
    const blue = parseInt(hexValue.slice(5, 7), 16);

    // var foto1 = foto.value.replace(/\\/g, "/");
    // console.log(foto1);
    var doc = new jsPDF();

    // var img = new Image();
    // img.src = foto1.toString();


    // doc.addImage(img, 'PNG', 5, 0, 50,50)
    doc.setTextColor(red,green,blue);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text('Nombre: ' + nombre.value, 10, 20);
    doc.text('Apellido: ' + apellido.value, 10, 30);
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text('Edad: ' + edad.value, 10, 40);
    doc.text('Correo: ' + correo.value, 10, 50);
    doc.text('Telefono: ' + telefono.value, 10, 60);
    doc.text('Estado Civil: ' + estado.value, 10, 70);
    doc.text('Numero de Hijos: ' + hijos.value, 10, 80);
    doc.text('Fecha de Nacimiento: ' + cumple.value, 10, 90);
    doc.text('Foto: ' + foto.value, 10, 100);
    doc.text('Website: ' + web.value, 10, 110);
    doc.text('Sexo: ' + sexo, 10, 120);
    doc.text('Color Favorito: ' + color.value, 10, 130);
    doc.text('Hora: ' + hora.value, 10, 140);
    doc.setFont("helvetica", "bold");
    doc.text('Habilidades Personales:', 10, 150);
    doc.setFont("helvetica", "normal");;
    let e = 160;
    for (let i = 0; i < hablilidad.length; i++) {
        doc.text('-' + hablilidad[i], 10, e);
        e=e+10;
    }
    doc.setFont("helvetica", "bold")
    doc.text('Descripcion Personal:', 10, 190);
    doc.setFont("helvetica", "normal");
    doc.text(descripcion.value, 10, 200);
    doc.save('Datos.pdf')

    form.submit();
});