function init() {
  window.addEventListener("load", startScript);
  let windowWidth = window.innerWidth;

  function startScript() {
    if (windowWidth < 768) {
      openCloseMenu();
    }
    if (windowWidth < 1024) {
      thirdSectionDropDownAndSliderFunc();
    }

    if (windowWidth >= 1024) {
      thirdMenuSelectingAndSliderFunc();
    }

    let swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      centeredSlides: false,
      spaceBetween: 30,
      grabCursor: true,
      slidesOffsetAfter: 80,
      breakpoints : {
        768: {
          spaceBetween: 60
        }
      }
    });
  }

  // Menu func
  function openCloseMenu() {
    let humIcon = document.querySelector(".hum-icon");
    let nav = document.querySelector("nav");
    let navheight = nav.scrollHeight;

    humIcon.addEventListener("click", () => {
      if (nav.classList.contains("nav-show")) {
        nav.classList.remove("nav-show");
        nav.style.height = "0";
        humIcon.classList.remove("close-state");
      } else {
        nav.classList.add("nav-show");
        nav.style.height = navheight + "px";
        humIcon.classList.add("close-state");
      }
    });
  }

  // third section drop down func
  function thirdSectionDropDownAndSliderFunc() {
    let dropDownPart = document.querySelector(".third__menu-wrapper");
    let dropDownBox = document.querySelector(".third__drop-down-box");
    let selected = document.querySelector(".third__menu__tab--active");

    let slider = document.querySelector(".third__destinations-container");

    let dropDownPartHeight = dropDownPart.scrollHeight;

    dropDownPart.classList.add("third__menu-wrapper-hide");

    dropDownBox.addEventListener("click", () => {
      if (dropDownPart.classList.contains("third__menu-wrapper-hide")) {
        dropDownPart.style.height = dropDownPartHeight + "px";
        dropDownPart.classList.remove("third__menu-wrapper-hide");
      } else {
        dropDownPart.style.height = "0px";
        dropDownPart.classList.add("third__menu-wrapper-hide");
      }
    });

    dropDownPart.addEventListener("click", (e) => {
      let previousChoiceText = selected.textContent;
      let previousChoiceSliderN = selected.getAttribute("slider-n");
      let choice = e.target;
      let choiceSliderN = choice.getAttribute("slider-n");
      selected.textContent = choice.textContent;
      selected.setAttribute("slider-n", choiceSliderN);
      choice.textContent = previousChoiceText;
      choice.setAttribute("slider-n", previousChoiceSliderN);
      if (choiceSliderN == 1) {
        slider.style.left = "0px";
      } else if (choiceSliderN == 2) {
        slider.style.left = "-100vw";
      } else if (choiceSliderN == 3) {
        slider.style.left = "-200vw";
      } else if (choiceSliderN == 4) {
        slider.style.left = "-300vw";
      }
    });
  }

  // third section func on the desktop
  function thirdMenuSelectingAndSliderFunc() {
    let menuTabs = document.querySelectorAll(
      ".third__menu-for-desktop .third__menu__tab"
    );
    let bottomLine = document.querySelector(".third__moving-line");
    let slider = document.querySelector(".third__destinations-container");

    bottomLine.style.width = menuTabs[0].clientWidth + "px";

    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        menuTabs.forEach((t) => {
          if (t.classList.contains("third__menu__tab--active")) {
            t.classList.remove("third__menu__tab--active");
          }
        });
        tab.classList.add("third__menu__tab--active");
        let sliderNValue = tab.getAttribute("tab-n");
        if (sliderNValue == 1) {
          bottomLine.style.left = "0px";
          slider.style.left = "0px";
        } else if (sliderNValue == 2) {
          bottomLine.style.left = tab.clientWidth + "px";
          slider.style.left = -slider.clientWidth + "px";
        } else if (sliderNValue == 3) {
          bottomLine.style.left = tab.clientWidth * 2 + "px";
          slider.style.left = -(slider.clientWidth * 2) + "px";
        } else if (sliderNValue == 4) {
          bottomLine.style.left = tab.clientWidth * 3 + "px";
          slider.style.left = -(slider.clientWidth * 3) + "px";
        }
      });
    });
  }
}

init();
