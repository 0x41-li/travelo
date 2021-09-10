function init() {
  window.addEventListener("load", startScript);

  function startScript() {
    openCloseMenu();
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
}

init();
