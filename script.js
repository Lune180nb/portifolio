
let btnNav = document.getElementById("btn-nav")
let btnVoltar = document.getElementById("btn-voltar")
let responsividade = document.getElementById("menu-responsivo")

function Menu(){
  btnNav.classList.toggle("desativar")
  btnVoltar.classList.toggle("ativo")
  responsividade.classList.toggle("ativo")
}

btnVoltar.addEventListener("click", () => {
  Menu()
})

btnNav.addEventListener("click", () => {
  Menu()
})





