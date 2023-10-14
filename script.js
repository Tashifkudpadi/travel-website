const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')

hamburger.addEventListener('click', () => {
 navUl.classList.toggle('show')
})

// slider logic
const slide = document.getElementById("slide");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
const dotsContainer = document.getElementById("dots-container");
const dots = dotsContainer.querySelectorAll(".dot");

let x = 0;
let currentSlide = 0;

// Function to update the active dot
function updateDots() {
 dots.forEach((dot, index) => {
  if (index === currentSlide) {
   dot.classList.add("active-dot");
  } else {
   dot.classList.remove("active-dot");
  }
 });
}

downArrow.onclick = function () {
 if (currentSlide < 2) {
  // Assuming 3 testimonials (0, 1, 2)
  currentSlide++;
  x = -currentSlide * 270;
  slide.style.top = x + "px";
  updateDots();
 }
};

upArrow.onclick = function () {
 if (currentSlide > 0) {
  currentSlide--;
  x = -currentSlide * 270;
  slide.style.top = x + "px";
  updateDots();
 }
};

// Click event for dots
dots.forEach((dot, index) => {
 dot.addEventListener("click", function () {
  currentSlide = index;
  x = -currentSlide * 270;
  slide.style.top = x + "px";
  updateDots();
 });
});