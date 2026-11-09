(function () {
  "use strict";

  function initializePortfolioSlideshows() {
    document.querySelectorAll(".portfolio-hero-slideshow").forEach(function (slideshow) {
      var image = slideshow.querySelector(".portfolio-hero-slideshow__image");
      var images = (slideshow.getAttribute("data-images") || "").split("|").filter(Boolean);
      if (!image || images.length < 2) return;

      var currentIndex = 0;
      var interval = parseInt(slideshow.getAttribute("data-interval"), 10) || 5000;
      var timer;

      function showSlide(nextIndex) {
        currentIndex = (nextIndex + images.length) % images.length;
        image.style.opacity = "0";

        window.setTimeout(function () {
          image.src = images[currentIndex];
          image.style.opacity = "1";
        }, 500);
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
