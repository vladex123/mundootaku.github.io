

    document.addEventListener("DOMContentLoaded", function () {
        var navToggler = document.querySelector(".navbar-toggler");
        var navCollapse = document.querySelector(".navbar-collapse");

        navToggler.addEventListener("click", function () {
            navCollapse.classList.toggle("show");
        });
    });
 
  
        document.addEventListener("DOMContentLoaded", function () {
            var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
                interval: 3000, // Cambiar cada 3 segundos (ajusta según tus preferencias)
                wrap: true
            });
        });
  
    
