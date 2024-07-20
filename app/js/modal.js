function modal() {

  const modal = document.querySelector(".popup-wrapper")
  const closePopup = document.querySelector(".popup-close")
  const h1 = document.querySelector("h1")
  const body = document.querySelector("body")
  
  desativaModal = () => { 
      modal.style.display ="none"
  }
  
  ativaModalClicandoNoTitulo = () => {
    h1.addEventListener("click", () => {
      modal.style.display ="flex"
      body.style.overflowY = "hidden"
    })
  }
  
  desativaModalNoClick = () => {
    closePopup.addEventListener("click", () => {
      modal.style.display ="none"
      body.style.overflowY = "auto"
    })
  }
  
  ativaModalClicandoNoTitulo()
  desativaModal()
  desativaModalNoClick()

}

modal()

// desativa scroll do body

function desativaScroolBody() {
  const body = document.querySelector("body")
  body.style.overflowY = "hidden"
}

desativaModal = () => { 
  const modal = document.querySelector(".popup-wrapper")
  modal.style.display ="none"
}

// desativaModal()
// desativaScroolBody()