const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  mousewheel: true,
  lazy: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// 获取所有的滑块元素
const slides = document.querySelectorAll('.swiper-slide');

// 随机生成四个颜色
function getRandomColors() {
  const colors = [];
  for (let i = 0; i < 4; i++) {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(color);
  }
  return colors;
}

// 为每个滑块设置随机的渐变颜色
slides.forEach((slide) => {
  const colors = getRandomColors();
  const gradient = `linear-gradient(-45deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
  slide.style.background = gradient;
  slide.style.backgroundSize = '400% 400%';
  slide.style.animation = 'gradient 15s ease infinite';
  slide.style.height = '100vh';
});