const btnsContainer = document.querySelector(".tabs-buttons");

const btns = document.querySelectorAll(".tabs-buttons .btn");
const tabsContent = document.querySelectorAll(".tab-content");

const lineProgress = document.querySelector(".line");

const adjustLine = (btn = btns[0]) => {
  let btnWidth = btn.offsetWidth;
  let btnLeft = btn.offsetLeft;
  let btnTop = btn.offsetTop;

  lineProgress.style.width = `${btnWidth}px`;
  lineProgress.style.left = `${btnLeft}px`;
  lineProgress.style.bottom = `${btnTop}px`;
  console.log(btnWidth);
};
adjustLine();
console.log(btnsContainer);

btnsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn");

  if (!clicked) return;
  adjustLine(clicked);
  btns.forEach((btn) => {
    btn.classList.remove("active");
    clicked.classList.add("active");
  });
  tabsContent.forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelector(`.tab-${clicked.dataset.tab}`).classList.add("active");
});

// slideshow
// auto SlideShow
const sliderContainer = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider .slide");

let currentSlide = 0;

const updateSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

  slides.forEach((slide, index) => {
    // console.log(prevSlide, (prevSlide + 1) % slides.length);
    slide.classList.remove("active", "prev", "slide-out");
    if (index === currentSlide) {
      slide.classList.add("active");
    } else if (prevSlide === index) {
      slide.classList.add("prev");
    } else if (index === (prevSlide - 1 + slides.length) % slides.length) {
      console.log("achi");
      slide.classList.add("slide-out");
    }
  });
};
let autoSlideShow;
const startSlideShow = () => {
  autoSlideShow = setInterval(updateSlide, 2000);
};

const stopSlideShow = () => {
  clearInterval(autoSlideShow);
};

startSlideShow();

sliderContainer.addEventListener("mouseover", () => {
  stopSlideShow();
});
sliderContainer.addEventListener("mouseleave", () => {
  startSlideShow();
});
