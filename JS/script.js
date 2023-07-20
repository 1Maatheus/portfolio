if (window.SimpleAnime) {
  new SimpleAnime();
}

const botao = document.getElementById("mobile-button");

botao.addEventListener("click", function () {
  const menu = document.getElementById("menu-mobile");

  menu.classList.toggle("open");
});

const modal = document.getElementById("modal");
const btn = document.getElementById("fechar");

btn.addEventListener("click", function () {
  if (modal) {
    modal.classList.toggle("show");
  }
});

function exibirPopup() {
  modal.classList.add("show");
}
const tempoAtraso = 2000;
setTimeout(exibirPopup, tempoAtraso);
