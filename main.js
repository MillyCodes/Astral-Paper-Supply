// set your variables for later use
let sections = document.getElementsByClassName("wrapper")
let firstSection = sections[0]
let secondSection = sections[1]
let thirdSection = sections[2]
let fourthSection = sections[3]
let fifthSection = sections[4]
let lastSection = sections[5]

// run this code on window scroll
window.addEventListener("scroll", (event) => {

  if (window.scrollY > 50) {
    firstSection.classList.add("fadeIn")
  }

  if (window.scrollY > 300) {
    secondSection.classList.add("fadeIn")
  }

  if (window.scrollY > 800) {
    thirdSection.classList.add("fadeIn")
  }

  if (window.scrollY > 1100) {
    fourthSection.classList.add("fadeIn")
  }

  if (window.scrollY > 1500) {
    fifthSection.classList.add("fadeIn")
  }

  if (window.scrollY > 1600) {
    lastSection.classList.add("fadeIn")
  }
})
