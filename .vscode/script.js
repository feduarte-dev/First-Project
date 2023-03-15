function toggleMode() {
  const html = document.documentElement
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/
  html.classList.toggle("light") /*tem o mesmo efeito do codigo acima  */

  const img = document.querySelector("#profile img") /*aqui busca a imagem */
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "hehehe"
    ) /*aqui se ele encontrar light ele coloca avatar light*/
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Aqui pode ficar a descrição da imagem para caso ela apareça como inválida, este texto entra no lugar"
    )

    /*se ele nao encontrar light ele coloco avatar normal*/
  }
}
