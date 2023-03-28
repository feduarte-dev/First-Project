function toggleMode() {
  const html = document.documentElement
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/
  html.classList.toggle("light") /*different way to write the same code*/

  const img = document.querySelector("#profile img") /*searches the image*/
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "xxx")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "yyy")
    /*the alt was just homework*/
    /*if it doesnt finds class light, use default avatar image*/
  }
}

const targetDiv = document.getElementById("third")
const btn = document.getElementById("toggle")
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none"
  } else {
    targetDiv.style.display = "block"
  }
}
