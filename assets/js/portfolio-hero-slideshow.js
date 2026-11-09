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
      var timer;

      function showSlide(nextIndex) {
        slides[currentIndex].classList.remove("is-active");
        slides[currentIndex].setAttribute("aria-hidden", "true");

        currentIndex = (nextIndex + slides.length) % slides.length;

        slides[currentIndex].classList.add("is-active");
        slides[currentIndex].removeAttribute("aria-hidden");
      }

      function startTimer() {
        window.clearInterval(timer);
        timer = window.setInterval(function () {
          if (!document.hidden) showSlide(currentIndex + 1);
        }, interval);
      }

      var previousButton = slideshow.querySelector(".portfolio-hero-slideshow__arrow--previous");
      var nextButton = slideshow.querySelector(".portfolio-hero-slideshow__arrow--next");

      if (previousButton) {
        previousButton.addEventListener("click", function () {
          showSlide(currentIndex - 1);
          startTimer();
        });
      }

      if (nextButton) {
        nextButton.addEventListener("click", function () {
          showSlide(currentIndex + 1);
          startTimer();
        });
      }

      startTimer();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePortfolioSlideshows);
  } else {
    initializePortfolioSlideshows();
  }
})();
