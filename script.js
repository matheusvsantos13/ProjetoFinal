function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/assets/avatar-light.png")
    } else {
      img.setAttribute("src", "./assets/assets/avatar.png")
    }
    if (html.classList.contains("light")) {
      img.setAttribute("alt", "Foto do Mayk de Óculos de Sol")
    } else {
      img.setAttribute("alt", "Foto do Mayk")
    }
  }
  