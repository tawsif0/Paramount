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
function toggleMattressSection() {
  var arrowIcon = document.getElementById("arrow-iconss");
  var matGrid = document.getElementById("mattress-grid");
  arrowIcon.classList.toggle("show");
  matGrid.classList.toggle("hidden");
}
function toggleDecSection() {
  var arrowIcon = document.getElementById("arrow-iconsss");
  var decGrid = document.getElementById("dec-grid");
  arrowIcon.classList.toggle("show");
  decGrid.classList.toggle("hidden");
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
function toggleMattressSections() {
  var arrowIcon = document.getElementById("arrow-iconssss");
  var MattressGrid = document.getElementById("mattress-grids");
  arrowIcon.classList.toggle("visible");
  MattressGrid.classList.toggle("hidden");
}
function toggleDecSections() {
  var arrowIcon = document.getElementById("dec-arrow-icons");
  var decGrid = document.getElementById("dec-grids");
  arrowIcon.classList.toggle("visible");
  decGrid.classList.toggle("hidden");
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
function closeAllDropdowns(exceptElement = null) {
  // Close all dropdowns except the one provided
  const allDropdowns = document.querySelectorAll(".products-sub-links");
  allDropdowns.forEach((dropdown) => {
    if (dropdown !== exceptElement) {
      dropdown.classList.remove("shown");
    }
  });
}

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isCurrentlyShown = dropdown.classList.contains("shown");

  // Close all other dropdowns
  closeAllDropdowns(isCurrentlyShown ? dropdown : null);

  // Toggle the visibility of the clicked dropdown
  dropdown.classList.toggle("shown");
}

// Attach event handlers
function toggleBedsProductLinks() {
  toggleDropdown("products-sub-links");
}

function toggleBedroomProductLinks() {
  toggleDropdown("products-sub-links-bedroom");
}

function toggleMattressProductLinks() {
  toggleDropdown("products-sub-links-mat");
}

function toggleDiningProductLinks() {
  toggleDropdown("products-sub-links-din");
}

function toggleLivingProductLinks() {
  toggleDropdown("products-sub-links-liv");
}

function toggleDecProductLinks() {
  toggleDropdown("products-sub-links-dec");
}

//button click
function redirectToDeal() {
  const dealSection = document.getElementById("deal");
  dealSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
//form input for file
function triggerInput(inputId) {
  document.getElementById(inputId).click();
}

function updatePlaceholder(input) {
  const placeholder = document.getElementById(`placeholder-${input.id}`);
  placeholder.textContent =
    input.files[0]?.name || placeholder.getAttribute("placeholder");
}
//Toggle button for Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleInput = document.getElementById("check");
  function applyTheme(isLightMode) {
    if (isLightMode) {
      // Light theme
      document.documentElement.style.setProperty("--ash-color", "#6f5f52");
      document.documentElement.style.setProperty("--white-color", "#000000");
      document.documentElement.style.setProperty(
        "--background-color",
        "#ffffff"
      );
      toggleInput.checked = true; // Ensure the toggle reflects the light mode
    } else {
      // Dark theme
      document.documentElement.style.setProperty("--ash-color", "#b7ab98");
      document.documentElement.style.setProperty("--white-color", "#ffffff");
      document.documentElement.style.setProperty(
        "--background-color",
        "#0d0d0d"
      );
      toggleInput.checked = false;
    }
  }
  const savedTheme = localStorage.getItem("theme");
  const isLightMode = savedTheme === "light";
  applyTheme(isLightMode);
  if (toggleInput) {
    toggleInput.addEventListener("change", function () {
      const isChecked = this.checked;

      applyTheme(isChecked);
      localStorage.setItem("theme", isChecked ? "light" : "dark");
    });
  } else {
    console.error('Checkbox with ID "check" not found.');
  }
});
//Partner
document.addEventListener("DOMContentLoaded", () => {
  const partnerGrid = document.getElementById("partnerGrid");
  const leftArrow = document.getElementById("prevPage");
  const rightArrow = document.getElementById("nextPage");
  const items = Array.from(
    partnerGrid.getElementsByClassName("partner-grid-item")
  );
  const totalImages = items.length;
  const imagesPerPage = 9; // Adjustable for different grid configurations
  let currentPage = 1;

  // Update grid display based on the current page
  function updateGridDisplay() {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = Math.min(startIndex + imagesPerPage, totalImages);

    // Hide all items
    items.forEach((item, index) => {
      item.style.display =
        index >= startIndex && index < endIndex ? "flex" : "none";
    });

    // Update arrow visibility and disable state
    if (currentPage === 1) {
      leftArrow.classList.add("disabled"); // Disable left arrow
    } else {
      leftArrow.classList.remove("disabled"); // Enable left arrow
    }

    if (endIndex === totalImages) {
      rightArrow.classList.add("disabled"); // Disable right arrow
    } else {
      rightArrow.classList.remove("disabled"); // Enable right arrow
    }
  }

  // Navigate to the next page
  function goToNextPage() {
    if (currentPage * imagesPerPage < totalImages) {
      currentPage++;
      updateGridDisplay();
    }
  }

  // Navigate to the previous page
  function goToPreviousPage() {
    if (currentPage > 1) {
      currentPage--;
      updateGridDisplay();
    }
  }

  // Handle touch swipe for mobile navigation
  let touchStartX = 0;
  let touchEndX = 0;

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      goToNextPage(); // Swipe left
    } else if (touchEndX > touchStartX) {
      goToPreviousPage(); // Swipe right
    }
  }

  partnerGrid.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX; // Get initial touch position
  });

  partnerGrid.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX; // Get end touch position
    handleSwipe(); // Check swipe direction
  });

  // Add event listeners for arrow buttons (for larger screens)
  rightArrow.addEventListener("click", goToNextPage);
  leftArrow.addEventListener("click", goToPreviousPage);

  // Initialize the grid display
  updateGridDisplay();
});
//header background
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolling");
    } else {
      header.classList.remove("scrolling");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-container");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      menu.classList.add("scrolling");
    } else {
      menu.classList.remove("scrolling");
    }
  });
});
