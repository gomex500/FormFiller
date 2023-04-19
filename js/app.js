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
        tema = 2;
    }else{
        fondo.style.backgroundImage = "url('../img/fondo1.png')";
        nav.className = 'navbar nav navbar-expand-lg navbar-dark bg-dark';
        btn.className = 'btn btn-dark';
        hr.style.color = '#f2f2f2';
        tema = 1;
    }
}