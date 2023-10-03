var tabSelectors = [
  document.getElementById("tab-selector-1"),
  document.getElementById("tab-selector-2"),
  document.getElementById("tab-selector-3"),
  document.getElementById("tab-selector-4"),
  document.getElementById("tab-selector-5"),
];
var tabContent = [
  document.getElementById("tab-1"),
  document.getElementById("tab-2"),
  document.getElementById("tab-3"),
  document.getElementById("tab-4"),
  document.getElementById("tab-5"),
];
var tabIndicators = [
  document.getElementById("indicator-1"),
  document.getElementById("indicator-2"),
  document.getElementById("indicator-3"),
  document.getElementById("indicator-4"),
  document.getElementById("indicator-5"),
];
var tabIndicatorCtr = document.querySelector(".tab-indicator-container");

tabSelectors[0].addEventListener("click", () => {
  tabIndicatorCtr.style.display = "flex";
  tabIndicators[0].style.opacity = 1;
  tabIndicators[1].style.opacity = 0;
  tabIndicators[2].style.opacity = 0;
  tabIndicators[3].style.opacity = 0;
  tabIndicators[4].style.opacity = 0;
  tabContent[0].style.display = "flex";
  tabContent[1].style.display = "none";
  tabContent[2].style.display = "none";
  tabContent[3].style.display = "none";
  tabContent[4].style.display = "none";
});

tabSelectors[1].addEventListener("click", () => {
    tabIndicatorCtr.style.display = "flex";
    tabIndicators[1].style.opacity = 1;
    tabIndicators[0].style.opacity = 0;
    tabIndicators[2].style.opacity = 0;
    tabIndicators[3].style.opacity = 0;
    tabIndicators[4].style.opacity = 0;
    tabContent[1].style.display = "flex";
    tabContent[0].style.display = "none";
    tabContent[2].style.display = "none";
    tabContent[3].style.display = "none";
    tabContent[4].style.display = "none";
  });

  tabSelectors[2].addEventListener("click", () => {
    tabIndicatorCtr.style.display = "flex";
    tabIndicators[2].style.opacity = 1;
    tabIndicators[1].style.opacity = 0;
    tabIndicators[0].style.opacity = 0;
    tabIndicators[3].style.opacity = 0;
    tabIndicators[4].style.opacity = 0;
    tabContent[2].style.display = "flex";
    tabContent[1].style.display = "none";
    tabContent[0].style.display = "none";
    tabContent[3].style.display = "none";
    tabContent[4].style.display = "none";
  });

  tabSelectors[3].addEventListener("click", () => {
    tabIndicatorCtr.style.display = "flex";
    tabIndicators[3].style.opacity = 1;
    tabIndicators[1].style.opacity = 0;
    tabIndicators[2].style.opacity = 0;
    tabIndicators[0].style.opacity = 0;
    tabIndicators[4].style.opacity = 0;
    tabContent[3].style.display = "flex";
    tabContent[1].style.display = "none";
    tabContent[2].style.display = "none";
    tabContent[0].style.display = "none";
    tabContent[4].style.display = "none";
  });

  tabSelectors[4].addEventListener("click", () => {
    tabIndicatorCtr.style.display = "flex";
    tabIndicators[4].style.opacity = 1;
    tabIndicators[1].style.opacity = 0;
    tabIndicators[2].style.opacity = 0;
    tabIndicators[3].style.opacity = 0;
    tabIndicators[0].style.opacity = 0;
    tabContent[4].style.display = "flex";
    tabContent[1].style.display = "none";
    tabContent[2].style.display = "none";
    tabContent[3].style.display = "none";
    tabContent[0].style.display = "none";
  });