window.onload = function () {
    valors();
    document.getElementById("numeroEstrelles").onchange = valorNumeroEstrelles;
    document.getElementById("radiEstrella").onchange = valorRadiEstrella;
    document.getElementById("distanciaEstrelles").onchange = valorDistanciaEstrelles;
}
function valors() {
    document.getElementById("printNumeroEstrelles").innerHTML = localStorage.getItem("numeroEstrelles");
    document.getElementById("numeroEstrelles").value = localStorage.getItem("numeroEstrelles");
    document.getElementById("printRadiEstrella").innerHTML = localStorage.getItem("radiEstrella");
    document.getElementById("radiEstrella").value = localStorage.getItem("radiEstrella");
  }

function valorNumeroEstrelles() {
    document.getElementById("printNumeroEstrelles").innerHTML = document.getElementById("numeroEstrelles").value;
    if (typeof(Storage) !== "undefined") {
    localStorage.setItem("numeroEstrelles", document.getElementById("numeroEstrelles").value);
    }else{
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function valorRadiEstrella() {
    document.getElementById("printRadiEstrella").innerHTML = document.getElementById("radiEstrella").value;
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("radiEstrella", document.getElementById("radiEstrella").value);
    }else{
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
function valorDistanciaEstrelles() {
    document.getElementById("printDistanciaEstrelles").innerHTML = document.getElementById("distanciaEstrelles").value;
}
