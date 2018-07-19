// set your variables for later use
let sections = document.getElementsByClassName("wrapper")
let firstSection = sections[0]
let secondSection = sections[1]
let thirdSection = sections[2]
let fourthSection = sections[3]
let fifthSection = sections[4]
let sixthSection = sections[5]
let lastSection = sections[6]

// run this code on window scroll
window.addEventListener("scroll", (event) => {

  if (window.scrollY > 1) {
    firstSection.classList.add("fadeIn")
  }

  if (window.scrollY > 200) {
    secondSection.classList.add("fadeIn")
  }

  if (window.scrollY > 500) {
    thirdSection.classList.add("fadeIn")
  }

  if (window.scrollY > 900) {
    fourthSection.classList.add("fadeIn")
  }

  if (window.scrollY > 1100) {
    fifthSection.classList.add("fadeIn")
  }


  if (window.scrollY > 1100) {
    sixthSection.classList.add("fadeIn")
  }

  if (window.scrollY > 1400) {
    lastSection.classList.add("fadeIn")
  }
})
