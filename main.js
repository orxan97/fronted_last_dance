var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

let products = [
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "Men",
    pic: "./photo/latest1.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "women",
    pic: "./photo/latest2.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "Men",
    pic: "./photo/latest1.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "baby",
    pic: "./photo/latest3.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "Men",
    pic: "./photo/latest1.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "women",
    pic: "./photo/latest2.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "baby",
    pic: "./photo/latest3.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "Men",
    pic: "./photo/latest1.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "women",
    pic: "./photo/latest2.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "baby",
    pic: "./photo/latest3.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "women",
    pic: "./photo/latest2.jpg",
  },
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "baby",
    pic: "./photo/latest3.jpg",
  },
];
let MayYouLikeProducts = [
  {
    name: "Cashmere Tank+Bag",
    oldPrice: 120,
    price: 98,
    category: "baby",
    pic: "./photo/latest5.jpg",
  },
];
let swiperWrapper = document.querySelector(".swiper-wrapper");
let MayYouLike = document.querySelector(".wrapper2");
products.forEach((product) => {
  swiperWrapper.innerHTML += `
     <div class="swiper-slide">
          <div class="swiper-slide-img">

            <img src="${product.pic}" alt="" />
            <div class="corusel_item_icons">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </div>
          <div class="slider_corusel_text">
          <p class="productName">${product.name}</p>
          <p class="productPrice"> $${product.price} <del>$${product.oldPrice}</del></p>
        </div>
        
        </div>`;

  MayYouLike.innerHTML += `
        <div class="swiper-slide">
             <div class="swiper-slide-img">
   
               <img src="${product.pic}" alt="" />
               <div class="corusel_item_icons">
                 <i class="fa-solid fa-cart-shopping"></i>
                 <i class="fa-regular fa-heart"></i>
                 <i class="fa-solid fa-magnifying-glass-plus"></i>
               </div>
             </div>
             <div class="slider_corusel_text">
             <p class="productName">${product.name}</p>
             <p class="productPrice"> $${product.price} <del>$${product.oldPrice}</del></p>
           </div>
           
           </div>`;
});

let calcScrollValue = () => {
  let scrollProgress = document.querySelector(".progress");
  let progressValue = document.querySelector(".progress-value");

  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
