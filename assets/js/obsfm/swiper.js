const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  mousewheel: true,
  lazy: true,
  loop: true,
  parallax: true,
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
// const slides = document.querySelectorAll('.swiper-slide');

// // 随机生成四个颜色
// function getRandomColors() {
//   const colors = [];
//   for (let i = 0; i < 4; i++) {
//     const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     colors.push(color);
//   }
//   return colors;
// }


















// const colorCombinations = [
//   ['#0041c4', '#490094'],
//   ['#4e0085', '#a56100'],
//   ['#0041c4', '#490094'],
//   ['#002b80', '#800080'],
//   ['#003366', '#660066'],
//   ['#0041c4', '#490094'],
//   ['#002b80', '#800080'],
//   ['#003366', '#660066'],
//   ['#0041c4', '#006633'],
//   ['#002b80', '#004d33'],
//   ['#003366', '#006633'],
// ];

// function getRandomColors() {
//   const randomIndex = Math.floor(Math.random() * colorCombinations.length);
//   return colorCombinations[randomIndex];
// }


// // 为每个滑块设置随机的渐变颜色
// slides.forEach((slide) => {
//   const colors = getRandomColors();
//   const gradient = `linear-gradient(-45deg, ${colors[0]}, ${colors[1]})`;
//   slide.style.background = gradient;
// });