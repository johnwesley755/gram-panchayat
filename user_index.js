var sidenav = document.querySelector(".side-navbar");
sidenav.style.display = "none";
function showNavbar() {
  sidenav.style.display = "block";
}
function closeNavbar() {
  sidenav.style.display = "none";
}
 const slides = document.querySelector(".slides");
 const images = document.querySelectorAll(".slides img");
 const prevButton = document.querySelector(".prev");
 const nextButton = document.querySelector(".next");
 let index = 0;

 function showSlide(i) {
   index += i;
   if (index < 0) index = images.length - 1;
   if (index >= images.length) index = 0;
   slides.style.transform = `translateX(${-index * 100}%)`;
 }

 prevButton.addEventListener("click", () => showSlide(-1));
 nextButton.addEventListener("click", () => showSlide(1));

 // Optional: Auto slide
 setInterval(() => showSlide(1), 3000);

 const slide = document.querySelector(".slide");
 const image = document.querySelectorAll(".slide img");
 const previousButton = document.querySelector(".previous");
 const nexttButton = document.querySelector(".next-one");
 let indexes = 0;

 function showSlides(i) {
   indexes += i;
   if (indexes < 0) indexes = image.length - 1;
   if (indexes >= image.length) indexes = 0;
   slide.style.transform = `translateX(${-indexes * 100}%)`;
 }

 previousButton.addEventListener("click", () => showSlides(-1));
 nexttButton.addEventListener("click", () => showSlides(1));

 // Optional: Auto slide
 setInterval(() => showSlides(1), 3000);
 