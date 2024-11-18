const home = document.querySelector(".home");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio-link");
const homeSection = document.querySelector(".main-section");
const burgerMenu = document.querySelector(".menu-svg");
const mainAbout = document.querySelector("#about");
const mainPortfolio = document.querySelector("#portfolio");
const toggleEng = document.querySelector("#pageEng");
const toggleUkr = document.querySelector("#pageUkr");
const aside = document.querySelector('.aside');
const close = document.querySelector('.menu-close')
home.addEventListener("click", () => {
  if (homeSection.style.display === "none") {
    homeSection.style.display = "block";
    mainAbout.style.display = "none";
    mainPortfolio.style.display = "none";
  } else {
    homeSection.style.display = "block";
    mainAbout.style.display = "none";
    mainPortfolio.style.display = "none";
  }
});
about.addEventListener("click", () => {
  if (mainAbout.style.display === "none") {
    mainAbout.style.display = "block";
    homeSection.style.display = "none";
    mainPortfolio.style.display = "none";
  } else {
    homeSection.style.display = "none";
    mainAbout.style.display = "block";
    mainPortfolio.style.display = "none";
  }
  console.log(mainAbout.style.display);
});
portfolio.addEventListener("click", () => {
  if (mainPortfolio.style.display === "none") {
    mainPortfolio.style.display = "block";
    homeSection.style.display = "none";
    mainAbout.style.display = "none";
  } else {
    mainPortfolio.style.display = "block";
    homeSection.style.display = "none";
    mainAbout.style.display = "none";
  }
});

toggleEng.addEventListener("click", () => {
  if (toggleEng.classList === "switch-on") {
    toggleEng.classList = "switch-btn";
    toggleUkr.classList = "switch-on";
  } else {
    toggleEng.classList = "switch-on";
    toggleUkr.classList = "switch-btn";
  }
});
toggleUkr.addEventListener("click", () => {
  if (toggleUkr.classList === "switch-btn") {
    toggleEng.classList = "switch-on";
    toggleUkr.classList = "switch-btn";
  } else {
    toggleEng.classList = "switch-btn";
    toggleUkr.classList = "switch-on";
  }
});

burgerMenu.addEventListener('click', ()=>{
    aside.style.display = "block";
    burgerMenu.style.display = "none";
    close.style.display = "block";
    homeSection.style.display = "none";
    mainAbout.style.display = "none";
    about.style.display = "flex"
    mainPortfolio.style.display = "none";
})
close.addEventListener('click', ()=>{
    aside.style.display = "none";
    burgerMenu.style.display = "block";
    close.style.display = "none"
    homeSection.style.display = "block"
})

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-list-link");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

function checkScreenSizeAndActAbout() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 360 && screenWidth < 580) {
    console.log("The screen width is between 360px and 580px.");
    about.addEventListener('click', ()=>{
      if (about.style.display === "none") {
        about.style.display = "block";
        homeSection.style.display = "none";
        mainPortfolio.style.display = "none";
        close.style.display = "block";
        burgerMenu.style.display = "none";

      } else {
        homeSection.style.display = "none";
        about.style.display = "block";
        mainPortfolio.style.display = "none";
        aside.style.display = "none";
        close.style.display = "none";
        burgerMenu.style.display = "block";
        burgerMenu.style.fill = "#FFA800";
        console.log('ok about');

      }
    })

  }

}
function checkScreenSizeAndActPortfolio() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 360 && screenWidth < 580) {
    console.log("The screen width is between 360px and 580px.");
    portfolio.addEventListener('click', ()=>{
      if (mainPortfolio.style.display === "none") {
        about.style.display = "block";
        homeSection.style.display = "none";
        mainPortfolio.style.display = "none";
        close.style.display = "block";
        burgerMenu.style.display = "none";

      } else {
        homeSection.style.display = "none";
        about.style.display = "none";
        mainPortfolio.style.display = "block";
        aside.style.display = "none";
        close.style.display = "none";
        burgerMenu.style.display = "block";
        burgerMenu.style.fill = "#FFA800";
        console.log('ok portfolio');

      }
    })

  }

}

checkScreenSizeAndActAbout();
checkScreenSizeAndActPortfolio();

window.addEventListener('resize', checkScreenSizeAndActAbout);
window.addEventListener('resize', checkScreenSizeAndActPortfolio);

