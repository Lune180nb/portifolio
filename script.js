
let btnNav = document.getElementById("btn-nav")
let btnVoltar = document.getElementById("btn-voltar")
let responsividade = document.getElementById("menu-responsivo")
let overlay = document.getElementById("overlay")

function Menu(){
  btnNav.classList.toggle("desativar")
  btnVoltar.classList.toggle("ativo")
  responsividade.classList.toggle("ativo")
  overlay.classList.toggle("ativo")
}

overlay.addEventListener("click", () => {
  Menu()
})

btnVoltar.addEventListener("click", () => {
  Menu()
})

btnNav.addEventListener("click", () => {
  Menu()
})





