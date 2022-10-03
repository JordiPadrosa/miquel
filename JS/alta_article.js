window.onload = function () {
    familia();
    document.getElementById("codi").onchange = comprovarCodi;
    document.getElementsByName("familia")[0].onchange = comprovarCodi;
    document.getElementById("amplada").onchange = comprovarMides;
    document.getElementById("llargada").onchange = comprovarMides;
    document.getElementById("altura").onchange = comprovarMides;
    document.getElementsByName("passadis")[0].onchange = comprovarPassadis;
    document.getElementsByName("estanteria")[0].onchange = comprovarEstanteria;
    document.getElementsByName("forat")[0].onchange = comprovarForat;
    document.getElementsByTagName("button")[0].onclick = escriureValors;


}
function familia() {
    var familia = ["Llibres", "Revistes", "Mobles"];
    var select = document.getElementsByName("familia")[0];
    for (value in familia) {
        var option = document.createElement("option");
        option.text = familia[value];
        select.appendChild(option);
    }
}
function comprovarCodi() {
    var tresLletres = document.getElementsByName("familia")[0].value.substr(0, 3);
    var regex = new RegExp('^' + tresLletres + '-[0-9]{7}-' + buscarLletra() + '$', 'i');
    if (regex.test(document.getElementById("codi").value)) {
        document.getElementsByTagName("img")[0].src = "Imatges/tick.png";
    }
    else {
        document.getElementsByTagName("img")[0].src = "Imatges/creu.png";
    }
}
function buscarLletra() {
    var lletres = ["A", "X", "M", "T", "B", "C", "S", "O", "P", "Z"];
    var suma = 0;
    for (var i = 4; i < 11; i++) {
        suma = suma + parseInt(document.getElementById("codi").value.substr(i, 1));
    }
    suma = suma % 10;
    return lletres[suma];
}
function comprovarMides() {
    if (!isNaN(parseInt(document.getElementById("amplada").value)) && parseInt(document.getElementById("amplada").value) > 0
        && !isNaN(parseInt(document.getElementById("llargada").value)) && parseInt(document.getElementById("altura").value) > 0
        && !isNaN(parseInt(document.getElementById("altura").value)) && parseInt(document.getElementById("altura").value) > 0) {
        escriureMides();
    } else {
        document.getElementsByClassName("mides")[0].innerHTML = "";
    }
}
function escriureMides() {
    var mides = document.getElementById("amplada").value + "x" + document.getElementById("llargada").value + "x" + document.getElementById("altura").value;
    document.getElementById("mides").innerHTML = mides;
}
function comprovarPassadis() {
    var regex = new RegExp('^P-[0-9]{2}-[D-E]{1}$', 'i');
    if (regex.test(document.getElementsByName("passadis")[0].value)) {
        document.getElementsByClassName("imatgePassadis")[0].src = "Imatges/tick.png";
    }
    else {
        document.getElementsByClassName("imatgePassadis")[0].src = "Imatges/creu.png";
    }
}
function comprovarEstanteria() {
    var regex = new RegExp(/^EST\+[0-9]{2}.[0-9]{2}$/, 'i');
    if (regex.test(document.getElementsByName("estanteria")[0].value)) {
        document.getElementsByClassName("imatgeEstanteria")[0].src = "Imatges/tick.png";
    }
    else {
        document.getElementsByClassName("imatgeEstanteria")[0].src = "Imatges/creu.png";
    }
}
function comprovarForat() {
    var regex = new RegExp(/^[0-9]{2}\*[A-z]{3}\*[0-9]{2}\\[0-9]{2}$/);
    if (regex.test(document.getElementsByName("forat")[0].value)) {
        document.getElementsByClassName("imatgeForat")[0].src = "Imatges/tick.png";
    }
    else {
        document.getElementsByClassName("imatgeForat")[0].src = "Imatges/creu.png";
    }

}
function escriureValors() {
    if (comprovarCodi && comprovarMides && comprovarPassadis && comprovarEstanteria && comprovarForat) {
        document.getElementsByClassName("familia")[0].innerHTML = "Familia: " + document.getElementsByName("familia")[0].value;
        document.getElementsByClassName("codi")[0].innerHTML = "Codi: " + document.getElementById("codi").value;
        document.getElementsByClassName("caracteristiques")[0].innerHTML = "Característiques: " + document.getElementById("amplada").value +
        "x" + document.getElementById("llargada").value + "x" + document.getElementById("altura").value;
        document.getElementsByClassName("passadis")[0].innerHTML = "Ubicació: " + document.getElementsByName("passadis")[0].value;
        document.getElementsByClassName("estanteria")[0].innerHTML = document.getElementsByName("estanteria")[0].value;
        document.getElementsByClassName("forat")[0].innerHTML = document.getElementsByName("forat")[0].value;
    }
}
