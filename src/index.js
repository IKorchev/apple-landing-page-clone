const navToggler = document.querySelector(".navbar-toggler")
const lines = document.querySelectorAll(".line")

navToggler.addEventListener("click", (e) => {
  e.preventDefault()
  lines[0].classList.toggle("rotate1")
  lines[1].classList.toggle("rotate2")
})
