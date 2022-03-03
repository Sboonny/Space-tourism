const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

let focusedTab = 0;
function changeTabFocus(event) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (event.keycode === keydownRight || event.keycode === keydownLeft) {
    tabs[focusedTab].setAttribute("tabindex", -1);
  }

  if (event.keycode === keydownRight) {
    focusedTab++;
    if (focusedTab >= tabs.length) {
      focusedTab = 0;
    }
  }
  if (event.keycode === keydownLeft) {
    focusedTab--;
    if (focusedTab < 0) {
      focusedTab = tabs.length - 1;
    }
  }

  tabs[focusedTab].setAttribute("tabindex", 0);
  tabs[focusedTab].focus();
}
