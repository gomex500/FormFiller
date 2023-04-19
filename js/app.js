var tema = 1;
var fondo = document.getElementById("body");
var nav = document.getElementById("nav");
function dark(){
    if(tema == 1){
        fondo.style.backgroundImage = "url('../img/fondo2.png')";
        nav.className = 'navbar nav navbar-expand-lg navbar-dark bg-primary';
        tema = 2;
    }else{
        fondo.style.backgroundImage = "url('../img/fondo1.png')";
        nav.className = 'navbar nav navbar-expand-lg navbar-dark bg-dark';
        tema = 1;
    }
}