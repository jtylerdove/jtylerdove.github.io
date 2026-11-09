(function () {
  "use strict";

  function initializePortfolioSlideshows() {
    var slideshows = document.querySelectorAll(".portfolio-hero-slideshow");

    slideshows.forEach(function (slideshow) {
      var slides = Array.prototype.slice.call(
        slideshow.querySelectorAll(".portfolio-hero-slideshow__image")
      );

      if (slides.length < 2) return;

      var currentIndex = 0;
      var interval = parseInt(slideshow.getAttribute("data-interval"), 10) || 5000;

      window.setInterval(function () {
        if (document.hidden) return;

        slides[currentIndex].classList.remove("is-active");
        slides[currentIndex].setAttribute("aria-hidden", "true");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("is-active");
        slides[currentIndex].removeAttribute("aria-hidden");
      }, interval);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePortfolioSlideshows);
  } else {
    initializePortfolioSlideshows();
  }
})();
