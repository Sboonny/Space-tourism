const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

for (const tab of tabs) {
  tab.addEventListener("click", changeTabPanel);
}

let focusedTab = 0;
function changeTabFocus(event) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (event.keyCode === keydownRight || event.keyCode === keydownLeft) {
    tabs[focusedTab].setAttribute("tabindex", -1);
  }

  if (event.keyCode === keydownRight) {
    focusedTab++;
    if (focusedTab >= tabs.length) {
      focusedTab = 0;
    }
  }
  if (event.keyCode === keydownLeft) {
    focusedTab--;
    if (focusedTab < 0) {
      focusedTab = tabs.length - 1;
    }
  }

  tabs[focusedTab].setAttribute("tabindex", 0);
  tabs[focusedTab].focus();
}

function changeTabPanel (event) {
  const targetedTab = event.target;
  const tabPanel = targetedTab.getAttribute()
}