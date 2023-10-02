// handling nav collapse
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-hs-collapse="#navbar-collapse-with-animation"]');
    const navbarCollapse = document.getElementById("navbar-collapse-with-animation");
  
    toggleButton.addEventListener("click", function () {
      navbarCollapse.classList.toggle("hidden");
    });
  });
  