/*
  ====>> BackGround
*/
VANTA.NET({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  // minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x30111,
  backgroundColor: 0xf2f2f2,
});

/*
  ====>> NavBar Border Bottom
*/
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  if (window.location.pathname.endsWith(link.getAttribute("href"))) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

/*
  ====>> Card Courses 
*/
// Interactive star rating logic ★ ★ ★ ★ ★
function initStarRatings() {
  document.querySelectorAll(".star-rating").forEach(function (rating) {
    const productId = rating.dataset.product;
    const stars = rating.querySelectorAll(".star");
    let selected = -1;

    const savedRating = localStorage.getItem("rating-" + productId);
    if (savedRating !== null) {
      selected = parseInt(savedRating) - 1;
      stars.forEach((s, i) => s.classList.toggle("selected", i <= selected));
    }

    stars.forEach(function (star, idx) {
      star.addEventListener("click", function () {
        selected = idx;
        localStorage.setItem("rating-" + productId, idx + 1);
        stars.forEach((s, i) => s.classList.toggle("selected", i <= idx));
      });

      star.addEventListener("mouseenter", function () {
        stars.forEach((s, i) => s.classList.toggle("selected", i <= idx));
      });

      star.addEventListener("mouseleave", function () {
        stars.forEach((s, i) => s.classList.toggle("selected", i <= selected));
      });
    });
  });
}
document.addEventListener("DOMContentLoaded", initStarRatings);

/*
  ====>> Icons count NavBar Border
*/
let cartCount = 1;
let bellCount = 1;

document.getElementById("cart-badge").textContent =
  cartCount > 0 ? cartCount : "";
document.getElementById("bell-badge").textContent =
  bellCount > 0 ? bellCount : "";

/*
  ====>> Bottom scroll top
*/
const scrollTopBtn = document.getElementById("scroll-top-btn");
onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*
  ====>> log in
*/
function showSignUp() {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("signup-section").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signup-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
}

/*
  ====>> FeedBack
*/
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 8,
  loop: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
  grabCursor: false,
  loopedSlides: 6,
  breakpoints: {
    1200: { slidesPerView: 4 },
    991: { slidesPerView: 3 },
    767: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
  on: {
    setTranslate: function () {
      this.wrapperEl.style.transitionTimingFunction = "linear";
    },
    slideChangeTransitionStart: function () {
      this.wrapperEl.style.transitionTimingFunction = "linear";
    },
  },
});

addEventListener("scroll", () => {
  const content = document.querySelector(".fade-in");
  const contentPosition = content.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (contentPosition < screenPosition) {
    content.classList.add("show");
  }
});

/*
  ====>> Video In About Us
*/

let videoId = "sn1Bj7aBHvU";
let videoModalEl = document.getElementById("videoModal");
let videoFrame = document.getElementById("videoFrame");
let videoModal = new bootstrap.Modal(videoModalEl);

document.getElementById("playBtn").onclick = function () {
  videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  videoModal.show();
};
videoModalEl.addEventListener("hidden.bs.modal", function () {
  videoFrame.src = "";
});

/* Videos in courses */
function playVideo() {
  const container = document.getElementById("video-container");
  container.innerHTML = `
      <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/sn1Bj7aBHvU?autoplay=1&rel=0&modestbranding=1" 
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>`;
}
