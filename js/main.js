// backtop
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}
// backtop

// loading 


const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);
// loading

// owl carousel
$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg"/>'],
    dots: false,
    autoplay: true,
    // stagePadding: 70,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
        dots:false,
      },
    },
  });
});
// owl carousel















// owl carousel-2
$(document).ready(function () {
  $(".carousel-2").owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg"/>'],
    dots: false,
    autoplay: true,
    // stagePadding: 70,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
        dots:false,
      },
    },
  });
});
// owl carousel-2
// owl carousel-3
$(document).ready(function () {
  $(".carousel-3").owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg"/>'],
    dots: false,
    autoplay: true,
    stagePadding: 10,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
        dots:false,
      },
    },
  });
});
// owl carousel-3














// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()