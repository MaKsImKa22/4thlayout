const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});



// Initialize Swiper for course section
const courseSwiper = new Swiper('.courseSwiper', {
    loop: true, // Enable looping
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Show one slide at a time on phones
    spaceBetween: 20, // Add space between slides
    breakpoints: {
        600: {
            slidesPerView: 2, // Show 2 slides on tablets
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3, // Show 3 slides on desktops
            spaceBetween: 40,
        },
    },
});


// Initialize Swiper for mentors section
const mentorsSwiper = new Swiper('.mentorsSwiper', {
    loop: true, // Enable looping
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1, // Show one slide at a time on phones
    spaceBetween: 20, // Add space between slides
    autoplay: {
        delay: 10000, // Change slides every 10 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
        
        1024: {
            slidesPerView: 1, // Show 3 slides on desktops
            spaceBetween: 40,
        },
    },
});

// Initialize Swiper for testimonials section
const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
  loop: true, // Enable looping
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1, // Show one slide at a time on phones
  spaceBetween: 20, // Add space between slides

  effect: 'fade', // Use fade effect for transitions
  fadeEffect: {
    crossFade: true, // Smooth transition between slides
  },
  autoplay: {
    delay: 10000, // Change slides every 10 seconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },

  breakpoints: {
    768: {
      slidesPerView: 1, // Show 2 slides on tablets
      spaceBetween: 30,
    },
    
  },
});


