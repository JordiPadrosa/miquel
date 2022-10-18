let fons = document.querySelector('.fons');
window.onload = function () {
  numeroEstrelles();
  dibuixarEstrelles(localStorage.getItem("numeroEstrelles"));
  document.getElementById("numeroEstrelles").onchange = valorNumeroEstrelles;
}
function numeroEstrelles() {
  document.getElementById("printNumeroEstrelles").innerHTML = localStorage.getItem("numeroEstrelles");
  document.getElementById("numeroEstrelles").value = localStorage.getItem("numeroEstrelles");
}
function valorNumeroEstrelles() {
  document.getElementById("printNumeroEstrelles").innerHTML = document.getElementById("numeroEstrelles").value;
  console.log(localStorage.getItem("numeroEstrelles"));
  if(parseInt(document.getElementById("numeroEstrelles").value) > localStorage.getItem("numeroEstrelles")){
    dibuixarEstrelles((document.getElementById("numeroEstrelles").value)-(localStorage.getItem("numeroEstrelles")));
    localStorage.setItem("numeroEstrelles", document.getElementById("numeroEstrelles").value);
    console.log(localStorage.getItem("numeroEstrelles"));

  }else{
    borrarEstrelles(localStorage.getItem("numeroEstrelles")-document.getElementById("numeroEstrelles").value);
    localStorage.setItem("numeroEstrelles", document.getElementById("numeroEstrelles").value);
    console.log(localStorage.getItem("numeroEstrelles"));
  }

}

function crearEstrelles() {
  let estrella = document.createElement("div");
  estrella.classList.add("estrella");
  estrella.style.opacity = Math.random();
  estrella.style.height = estrella.style.width = random((localStorage.getItem("radiEstrella")*2), "px");
  estrella.style.left = random(1380, "px");
  estrella.style.top = random(580, "px");
  fons.appendChild(estrella);
}

function dibuixarEstrelles(estrelles) {
  for (let i = 0; i < estrelles; i++) {
    crearEstrelles();
  }
}

function borrarEstrelles(estrelles) {
  for (let i = 0; i < estrelles; i++) {
    fons.removeChild(document.querySelector(".estrella:last-child"));
  }
}

function random(mida, unitat) {
  let numeroRandom = Math.floor(Math.random() * mida) + 1;
  return `${numeroRandom}${unitat}`;
}
