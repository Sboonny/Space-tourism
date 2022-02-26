const nav = document.querySelector(".primary-navigation");
const navButton = document.querySelector(".nav-toggle");

navButton.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  const expanded = navButton.setAttribute("aria-expanded", true)
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true)
  } else if (visiblity === "true") {
    nav.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false)
  } else {
    console.log("data-visible or aria-expanded attribute is unknown", visiblity, expanded );
  }
});
