if (window.SimpleAnime) {
  new SimpleAnime();
}

const botao = document.getElementById("mobile-button");

botao.addEventListener("click", function () {
  const menu = document.getElementById("menu-mobile");

  menu.classList.toggle("open");
});
