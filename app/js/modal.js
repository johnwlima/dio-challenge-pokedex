function modal() {

  const modal = document.querySelector(".popup-wrapper")
  const closePopup = document.querySelector(".popup-close")
  const h1 = document.querySelector("h1")
  const body = document.querySelector("body")
  
  desativaModal = () => { 
      modal.style.display ="none"
  }
  
  ativaPeloTitulo = () => {
    h1.addEventListener("click", () => {
      modal.style.display ="flex"
      body.style.overflowY = "hidden"
    })
  }
  
  desativaModalNoClick = () => {
    closePopup.addEventListener("click", () => {
      modal.style.display ="none"
    })
  }
  
  ativaPeloTitulo()
  desativaModal()
  desativaModalNoClick()

}

modal()