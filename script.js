
let btnNav = document.getElementById("btn-nav")
let btnVoltar = document.getElementById("btn-voltar")
let responsividade = document.getElementById("menu-responsivo")
let overlay = document.getElementById("overlay")
let link = document.querySelectorAll(".link")
let header = document.querySelector("header")


function Menu(){
  btnNav.classList.toggle("desativar")
  btnVoltar.classList.toggle("ativo")
  responsividade.classList.toggle("ativo")
  overlay.classList.toggle("ativo")
}

link.forEach(i => {
  i.addEventListener("click", () => {
    Menu()
  })
})

window.addEventListener("scroll", () => {
  if(window.scrollY > 19){
    header.classList.add("scroll")
  }else{
    header.classList.remove("scroll")
  }
})

overlay.addEventListener("click", () => {
  Menu()
})

btnVoltar.addEventListener("click", () => {
  Menu()
})

btnNav.addEventListener("click", () => {
  Menu()
})





