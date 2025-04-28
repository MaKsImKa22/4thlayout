// Select the burger menu and nav menu
const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');

// Toggle the active class on burger menu click
burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close the burger menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
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



// Select the form
const heroForm = document.querySelector('.hero-form');

// Add submit event listener to the form
heroForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Validate the form (example: check if all required fields are filled)
  const inputs = heroForm.querySelectorAll('input[required]');
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error'); // Add error class if input is empty
    } else {
      input.classList.remove('error'); // Remove error class if input is valid
    }
  });

  // If the form is valid, show the success message
  if (isValid) {
    alert('Реєстрація успішна!'); // Show success message
    heroForm.reset(); // Reset the form fields
  }
});


