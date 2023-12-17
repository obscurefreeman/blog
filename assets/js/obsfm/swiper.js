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

// // 获取所有的滑块元素
// const slides = document.querySelectorAll('.swiper-slide');

// // // 随机生成四个颜色
// // function getRandomColors() {
// //   const colors = [];
// //   for (let i = 0; i < 4; i++) {
// //     const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
// //     colors.push(color);
// //   }
// //   return colors;
// // }

// // 随机生成蓝色且较暗的颜色
// function getRandomColors() {
//   const colors = [];
//   for (let i = 0; i < 4; i++) {
//     const color = getRandomDarkBlueColor();
//     colors.push(color);
//   }
//   return colors;
// }

// // 生成蓝色且较暗的随机颜色
// function getRandomDarkBlueColor() {
//   const hue = Math.floor(Math.random() * 240); // 0-240之间的随机色相
//   const saturation = Math.floor(Math.random() * 50) + 50; // 50-100之间的随机饱和度
//   const lightness = Math.floor(Math.random() * 30) + 20; // 20-50之间的随机亮度
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// }


// // 为每个滑块设置随机的渐变颜色
// slides.forEach((slide) => {
//   const colors = getRandomColors();
//   const gradient = `linear-gradient(-45deg, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
//   slide.style.background = gradient;
//   slide.style.backgroundSize = '400% 400%';
//   slide.style.animation = 'gradient 15s ease infinite';
//   slide.style.height = '100vh';
// });





const slides = document.querySelectorAll('.swiper-slide');

function getRandomColor() {
  // 生成随机的RGB颜色值
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function setRandomGradientBackground(element) {
  // 获取两种随机颜色
  var color1 = getRandomColor();
  var color2 = getRandomColor();

  // 创建渐变背景样式
  var gradientStyle = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
}

// 使用示例
var swiperElement = document.querySelector('.swiper');
setRandomGradientBackground(swiperElement);

slides.forEach((slide) => {
  slide.style.background = gradientStyle;
  slide.style.backgroundSize = '400% 400%';
  slide.style.animation = 'gradient 15s ease infinite';
  slide.style.height = '100vh';
});