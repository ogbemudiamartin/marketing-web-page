

AOS.init({
  duration: 1000,
  once: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

const icon = document.querySelector(".fa-solid");
const links = document.querySelector(".content");
const background = document.querySelector(".body");
const iconss = document.querySelector(".fa-xmark")

icon.addEventListener('click', () => {
  links.classList.toggle("active");
  icon.classList.toggle('fa-xmark')
  background.classList.toggle("open");

})
iconss.addEventListener('click', () => {

  iconss.classList.remove('active')
  iconss.classList.remove('.open')
})
