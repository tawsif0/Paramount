document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".header").classList.add("show-nav");
  }, 200);
});
function toggleLocations() {
  var locations = document.getElementById("locations");
  locations.classList.toggle("hidden");
}
function toggleLocation() {
  const locationElement = document.getElementById("location");
  if (
    locationElement.style.display === "none" ||
    locationElement.style.display === ""
  ) {
    locationElement.style.display = "block";
  } else {
    locationElement.style.display = "none";
  }
}

// Function to toggle the visibility of the category section and rotate the arrow
document.addEventListener("DOMContentLoaded", function () {
  const toggleArrow = document.getElementById("toggleArrow");
  const categorySection = document.getElementById("categorySection");
  toggleArrow.addEventListener("click", function () {
    categorySection.classList.toggle("show");
    toggleArrow.classList.toggle("active");
  });
});

function toggleBedroomSection() {
  var arrowIcon = document.getElementById("arrow-icon");
  var bedroomGrid = document.getElementById("bedroom-grid");
  arrowIcon.classList.toggle("show");
  bedroomGrid.classList.toggle("hidden");
}
function toggleDiningSection() {
  var arrowIcon = document.getElementById("dining-arrow-icon");
  var diningGrid = document.getElementById("dining-grid");
  arrowIcon.classList.toggle("show");
  diningGrid.classList.toggle("hidden");
}
function toggleLivingRoomSection() {
  var arrowIcon = document.getElementById("arrow-icon-living");
  var livingRoomGrid = document.getElementById("living-room-grid");
  arrowIcon.classList.toggle("show");
  livingRoomGrid.classList.toggle("hidden");
}
// Toggle menu visibility
const toggleMenu = document.getElementById("toggleMenu");
const toggleSection = document.getElementById("toggleSection");
document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById("toggleMenu");
  const closeMenu = document.getElementById("closeMenu");
  const toggleSection = document.getElementById("toggleSection");
  toggleMenu.addEventListener("click", () => {
    toggleSection.classList.remove("hidden");
  });
  closeMenu.addEventListener("click", () => {
    toggleSection.classList.add("hidden");
  });
});

// Function to toggle the visibility of the category section and rotate the arrow
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleArrows");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const categorySections = document.getElementById("categorySections");
      if (categorySections) {
        categorySections.classList.toggle("visible");
        this.classList.toggle("active");
      }
    });
  }
});

function toggleBedroomSections() {
  var arrowIcon = document.getElementById("arrow-icons");
  var bedroomGrid = document.getElementById("bedroom-grids");
  arrowIcon.classList.toggle("visible");
  bedroomGrid.classList.toggle("hidden");
}
function toggleDiningSections() {
  var arrowIcon = document.getElementById("dining-arrow-icons");
  var diningGrid = document.getElementById("dining-grids");
  arrowIcon.classList.toggle("visible");
  diningGrid.classList.toggle("hidden");
}
function toggleLivingRoomSections() {
  var arrowIcon = document.getElementById("arrow-icon-livings");
  var livingRoomGrid = document.getElementById("living-room-grids");
  arrowIcon.classList.toggle("visible");
  livingRoomGrid.classList.toggle("hidden");
}
//parallox video
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  const parallax = document.querySelector(".hero_bg");
  parallax.style.transform = `translateY(${scroll * 0.5}px)`;
});
const fadeElements = document.querySelectorAll(".anim--fade");
const fadeConfig = {
  threshold: 0.4
};
const fadeIn = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = "1";
    observer.unobserve(entry.target);
  });
};
const observer = new IntersectionObserver(fadeIn, fadeConfig);
fadeElements.forEach((element) => {
  observer.observe(element);
});
// scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll(".scroll-reveal");
  function revealSections() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    sections.forEach(function (section) {
      var sectionTop = section.getBoundingClientRect().top;
      var revealAt = windowHeight - section.offsetHeight / 2;

      if (sectionTop < revealAt) {
        section.classList.add("revealed");
      } else {
        section.classList.remove("revealed");
      }
    });
    var elements = document.querySelectorAll(".scroll-reveal span");
    var words = [];
    elements.forEach(function (element) {
      words.push(element.parentElement);
    });
    var revealUp = false;
    words.reverse();
    words.forEach(function (word) {
      if (isElementInViewport(word)) {
        word.classList.add("revealed");
        revealUp = true;
      } else {
        if (!revealUp) {
          word.classList.remove("revealed");
        }
      }
    });
  }
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  revealSections();
  window.addEventListener("scroll", debounce(revealSections, 100));
  function debounce(func, wait) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
});

//Moto background
document.addEventListener("DOMContentLoaded", function () {
  var workBg = document.querySelector(".motto_bg");

  function setBackground(imageUrl, isMobile) {
    workBg.style.backgroundImage = "url('" + imageUrl + "')";
    workBg.style.backgroundSize = "cover";
    workBg.style.backgroundRepeat = "no-repeat";
    workBg.style.transition = "background-image 0.5s ease-in-out";
    if (isMobile) {
      workBg.style.backgroundAttachment = "fixed";
    } else {
      workBg.style.backgroundAttachment = "fixed";
    }
  }
  function updateBackground() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setBackground("./assets/img/mobile.jpeg", true);
    } else {
      setBackground("./assets/img/join_us.png", false);
    }
  }
  updateBackground();
  window.addEventListener("resize", function () {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      updateBackground();
    }, 200);
  });

  if ("scrollBehavior" in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = "smooth";
  }
});
//Sub-links dropdown
function toggleSubLinks() {
  const subLinks = document.getElementById("explore-sub-links");
  subLinks.classList.toggle("shown");
}
//button click
function redirectToDeal() {
  const dealSection = document.getElementById("deal");
  dealSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
