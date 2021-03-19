const navToggler = document.querySelector(".navbar-toggler")
const lines = document.querySelectorAll(".line")
const body = document.querySelector("body")
const collapseContent = document.querySelector("#collapseMe")
const myCollapse = document.getElementById("collapseMe")
const bsCollapse = new bootstrap.Collapse(myCollapse, {
  toggle: false,
})
const toggleCollapse = (e) => {
  lines[0].classList.toggle("rotate1")
  lines[1].classList.toggle("rotate2")
  body.classList.toggle("overflow-hidden")
  window.scrollTo(0, 0)
}
navToggler.addEventListener("click", toggleCollapse)

const checkWindowSize = () => {
  if (window.innerWidth > 1200) {
    bsCollapse.hide()
    lines[0].classList.remove("rotate1")
    lines[1].classList.remove("rotate2")
    body.classList.remove("overflow-hidden")
  }
}

window.onresize = checkWindowSize // call to determine how big the screen is in order to collapse the navbar
