function init() {
  window.addEventListener("load", startScript);
  let windowWidth = window.innerWidth;

  function startScript() {
    if(windowWidth < 768) {
      openCloseMenu();
      thirdSectionDropDown()
    }
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
  function thirdSectionDropDown() {
    let dropDownPart = document.querySelector('.third__menu-wrapper');
    let dropDownBox = document.querySelector('.third__drop-down-box');
    let selected = document.querySelector('.third__menu__tab--active');

    let dropDownPartHeight = dropDownPart.scrollHeight;

    dropDownPart.classList.add("third__menu-wrapper-hide");

    dropDownBox.addEventListener("click", () => {
      if(dropDownPart.classList.contains("third__menu-wrapper-hide")) {
        dropDownPart.style.height = dropDownPartHeight + "px";
        dropDownPart.classList.remove("third__menu-wrapper-hide");
      } else {
        dropDownPart.style.height = "0px";
        dropDownPart.classList.add("third__menu-wrapper-hide");
      }
    });

    dropDownPart.addEventListener("click", (e) => {
      let previousChoiceText = selected.textContent;
      let choice = e.target;
      selected.textContent = choice.textContent;
      choice.textContent = previousChoiceText;
    });

  }

}

init();
