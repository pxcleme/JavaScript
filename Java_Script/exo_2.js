function Aire(){

    var longueur=prompt("veillez saisir la longeur du cercle");
    var peri = 2* Math.PI * (longueur /2);
    var air = Math.PI * Math.pow((longueur /2), 2);
    alert("perimetre du cercle " + peri.toFixed(2) + " cm");
    alert("air du cercle " + air.toFixed(2) + " cm²");
    
}