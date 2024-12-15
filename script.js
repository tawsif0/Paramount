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
//end.................................................................................
document.addEventListener("DOMContentLoaded", function () {
  // Function to hide all sections
  function hideAllSections() {
    var sections = document.querySelectorAll(".grid-contain");
    var arrows = document.querySelectorAll(".arrows-icons");

    // Hide all sections
    sections.forEach(function (section) {
      section.classList.add("hidden"); // Ensure section is hidden
    });

    // Remove 'show' class from all arrows
    arrows.forEach(function (arrow) {
      arrow.classList.remove("show");
    });
  }

  // Function to toggle Bedroom section
  function toggleBedroomSection() {
    var arrowIcon = document.getElementById("arrow-icon");
    var bedroomGrid = document.getElementById("bedroom-grid");

    // Check if the bedroom grid is already visible
    if (bedroomGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the bedroom section
      bedroomGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the bedroom section if it's already visible
      bedroomGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Mattress section
  function toggleMattressSection() {
    var arrowIcon = document.getElementById("arrow-iconss");
    var matGrid = document.getElementById("mattress-grid");

    // Check if the mattress grid is already visible
    if (matGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the mattress section
      matGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the mattress section if it's already visible
      matGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Decor section
  function toggleDecSection() {
    var arrowIcon = document.getElementById("arrow-iconsss");
    var decGrid = document.getElementById("dec-grid");

    // Check if the decor grid is already visible
    if (decGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the decor section
      decGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the decor section if it's already visible
      decGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Dining section
  function toggleDiningSection() {
    var arrowIcon = document.getElementById("dining-arrow-icon");
    var diningGrid = document.getElementById("dining-grid");

    // Check if the dining grid is already visible
    if (diningGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the dining section
      diningGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the dining section if it's already visible
      diningGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Living Room section
  function toggleLivingRoomSection() {
    var arrowIcon = document.getElementById("arrow-icon-living");
    var livingRoomGrid = document.getElementById("living-room-grid");

    // Check if the living room grid is already visible
    if (livingRoomGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the living room section
      livingRoomGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the living room section if it's already visible
      livingRoomGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Initially hide all sections
  hideAllSections();

  // Event listeners for each section toggle
  document
    .getElementById("bedroom-toggle")
    .addEventListener("click", toggleBedroomSection);
  document
    .getElementById("mattress-toggle")
    .addEventListener("click", toggleMattressSection);
  document
    .getElementById("dec-toggle")
    .addEventListener("click", toggleDecSection);
  document
    .getElementById("dining-toggle")
    .addEventListener("click", toggleDiningSection);
  document
    .getElementById("living-room-toggle")
    .addEventListener("click", toggleLivingRoomSection);
});

//end.................................................................................
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
//End.................................................
document.addEventListener("DOMContentLoaded", function () {
  // Function to hide all sections
  function hideAllSections() {
    var sections = document.querySelectorAll(".grid-contains");
    var arrows = document.querySelectorAll(".arrow-toggles");

    // Hide all sections
    sections.forEach(function (section) {
      section.classList.add("hidden"); // Ensure section is hidden
    });

    // Remove 'show' class from all arrows
    arrows.forEach(function (arrow) {
      arrow.classList.remove("show");
    });
  }

  // Function to toggle Bedroom section
  function toggleBedroomSections() {
    var arrowIcon = document.getElementById("arrow-icons");
    var bedroomGrid = document.getElementById("bedroom-grids");

    // Check if the bedroom grid is already visible
    if (bedroomGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the bedroom section
      bedroomGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the bedroom section if it's already visible
      bedroomGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Mattress section
  function toggleMattressSections() {
    var arrowIcon = document.getElementById("arrow-iconssss");
    var mattressGrid = document.getElementById("mattress-grids");

    // Check if the mattress grid is already visible
    if (mattressGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the mattress section
      mattressGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the mattress section if it's already visible
      mattressGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Decor section
  function toggleDecSections() {
    var arrowIcon = document.getElementById("dec-arrow-icons");
    var decGrid = document.getElementById("dec-grids");

    // Check if the decor grid is already visible
    if (decGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the decor section
      decGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the decor section if it's already visible
      decGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Dining section
  function toggleDiningSections() {
    var arrowIcon = document.getElementById("dining-arrow-icons");
    var diningGrid = document.getElementById("dining-grids");

    // Check if the dining grid is already visible
    if (diningGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the dining section
      diningGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the dining section if it's already visible
      diningGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Function to toggle Living Room section
  function toggleLivingRoomSections() {
    var arrowIcon = document.getElementById("arrow-icon-livings");
    var livingRoomGrid = document.getElementById("living-room-grids");

    // Check if the living room grid is already visible
    if (livingRoomGrid.classList.contains("hidden")) {
      // Hide all sections first
      hideAllSections();

      // Show the living room section
      livingRoomGrid.classList.remove("hidden");
      arrowIcon.classList.add("show");
    } else {
      // Hide the living room section if it's already visible
      livingRoomGrid.classList.add("hidden");
      arrowIcon.classList.remove("show");
    }
  }

  // Event listeners for each section toggle
  document
    .getElementById("bedroom-toggles")
    .addEventListener("click", toggleBedroomSections);
  document
    .getElementById("mattreess-toggles")
    .addEventListener("click", toggleMattressSections);
  document
    .getElementById("dec-toggles")
    .addEventListener("click", toggleDecSections);
  document
    .getElementById("dining-toggles")
    .addEventListener("click", toggleDiningSections);
  document
    .getElementById("living-room-toggles")
    .addEventListener("click", toggleLivingRoomSections);

  // Initially hide all sections
  hideAllSections();
});

//end............................................................
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
// document.addEventListener("DOMContentLoaded", function () {
//   var workBg = document.querySelector(".motto_bg");

//   function setBackground(imageUrl, isMobile) {
//     workBg.style.backgroundImage = "url('" + imageUrl + "')";
//     workBg.style.backgroundSize = "cover";
//     workBg.style.backgroundRepeat = "no-repeat";
//     workBg.style.transition = "background-image 0.5s ease-in-out";
//     if (isMobile) {
//       workBg.style.backgroundAttachment = "fixed";
//     } else {
//       workBg.style.backgroundAttachment = "fixed";
//     }
//   }
//   function updateBackground() {
//     const isMobile = window.innerWidth <= 768;
//     if (isMobile) {
//       setBackground("./assets/img/mobile.jpeg", true);
//     } else {
//       setBackground("./assets/img/join_us.png", false);
//     }
//   }
//   updateBackground();
//   window.addEventListener("resize", function () {
//     clearTimeout(this.resizeTimeout);
//     this.resizeTimeout = setTimeout(function () {
//       updateBackground();
//     }, 200);
//   });

//   if ("scrollBehavior" in document.documentElement.style) {
//     document.documentElement.style.scrollBehavior = "smooth";
//   }
// });
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
      document.documentElement.style.setProperty(
        "--nav-black",
        "rgba(255, 255, 255, 0.3)"
      );
      document.documentElement.style.setProperty(
        "--nav-blacks",
        "rgba(255, 255, 255, 0.1)"
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
      document.documentElement.style.setProperty(
        "--nav-black",
        "rgba(0, 0, 0, 0.3)"
      );
      document.documentElement.style.setProperty(
        "--nav-blacks",
        "rgba(0, 0, 0, 0.1)"
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
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  // Listen for the scroll event
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // When you scroll down 50px
      // Add the class to apply the blackish glass effect
      header.classList.add("scrolled");
    } else {
      // Remove the class when scrolled back to the top
      header.classList.remove("scrolled");
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
//Category redirection
document.addEventListener("DOMContentLoaded", function () {
  const categoryElement = document.getElementById("category-all");
  if (categoryElement) {
    categoryElement.addEventListener("click", function () {
      window.location.href = "products.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const categoryElement = document.getElementById("category-all-mobile");
  if (categoryElement) {
    categoryElement.addEventListener("click", function () {
      window.location.href = "products.html";
    });
  }
});
//Product page js
document.addEventListener("DOMContentLoaded", function () {
  // Set the first tab as active by default
  const defaultTab = document.querySelector(".tab.active");
  const defaultSection = document.getElementById(
    defaultTab.getAttribute("data-target")
  );

  // Show the default section
  defaultSection.classList.remove("hidden");

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove 'active' class from all tabs
      document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));

      // Add 'active' class to the clicked tab
      this.classList.add("active");

      // Hide all content sections
      document.querySelectorAll(".info-section").forEach((section) => {
        section.classList.add("hidden");
      });

      // Show the clicked section
      const target = this.getAttribute("data-target");
      document.getElementById(target).classList.remove("hidden");
    });
  });
});
//Option Button
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
//Thumbnail image change
document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      this.classList.add("active");
      mainImage.src = this.src;
    });
  });
});
//Pagination
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".products-grid-item");
  let currentPage = 1;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginationContainer = document.querySelector(".pagination");

  // Function to show products for the current page
  function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    products.forEach((product) => (product.style.display = "none"));

    for (let i = startIndex; i < endIndex && i < products.length; i++) {
      products[i].style.display = "block";
    }

    // Update active page button styling
    document.querySelectorAll(".pagination-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    const activeButton = document.querySelector(
      `.pagination-btn[data-page="${page}"]`
    );
    if (activeButton) activeButton.classList.add("active");
  }

  // Function to create pagination buttons
  function createPaginationButtons() {
    paginationContainer.innerHTML = "";

    const maxVisibleButtons = 5;
    const pageButtons = [];

    if (totalPages <= maxVisibleButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(i);
      }
    } else {
      const startPage = Math.max(
        2,
        currentPage - Math.floor(maxVisibleButtons / 2)
      );
      const endPage = Math.min(
        totalPages - 1,
        currentPage + Math.floor(maxVisibleButtons / 2)
      );

      pageButtons.push(1);
      if (startPage > 2) pageButtons.push("...");

      for (let i = startPage; i <= endPage; i++) {
        pageButtons.push(i);
      }

      if (endPage < totalPages - 1) pageButtons.push("...");
      pageButtons.push(totalPages);
    }

    pageButtons.forEach((page) => {
      const button = document.createElement("button");
      button.classList.add("pagination-btn");
      button.textContent = page;

      if (page === "...") {
        button.disabled = true;
      } else {
        button.setAttribute("data-page", page);

        button.addEventListener("click", function () {
          currentPage = parseInt(page);
          createPaginationButtons();
          showPage(currentPage);
        });
      }

      paginationContainer.appendChild(button);
    });
  }

  createPaginationButtons();
  showPage(currentPage);
});

//Product Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const productsTitle = document.querySelector(".products-title");
  const productsMenu = document.querySelector(".products-menus");

  productsTitle.addEventListener("click", function () {
    productsMenu.classList.toggle("active");
  });
});
//Search Suggestions
document.addEventListener("DOMContentLoaded", function () {
  const suggestions = [
    {
      title: "Adult Bedroom Sets",
      img: "./assets/img/adult.jpeg",
      url: "Adult Bedroom Sets.html"
    },
    {
      title: "Children/Kids Bedroom Sets",
      img: "Children-Kids Bedroom Sets.png",
      url: "Children-Kids Bedroom Sets.html"
    },
    {
      title: "Italian Bedroom Sets",
      img: "./assets/img/italian.jpg",
      url: "Italian Bedroom Sets.html"
    },
    {
      title: "Twin/Double Beds",
      img: "Twin-Double Beds.png",
      url: "Twin-Double Beds.html"
    },
    {
      title: "Queen/King Beds",
      img: "Queen-King Beds.png",
      url: "Queen-King Beds.html"
    },
    {
      title: "Storage Beds",
      img: "Storage Beds.png",
      url: "Storage Beds.html"
    },
    { title: "Bunk Beds", img: "Bunk Beds.png", url: "Bunk Beds.html" },
    {
      title: "Trundle/Day Beds",
      img: "./assets/img/day.jpg",
      url: "Trundle-Day Beds.html"
    },
    {
      title: "Armoire/Wardrobe",
      img: "Armoire-Wardrobe.png",
      url: "Armoire-Wardrobe.html"
    },
    {
      title: "Children/Kids Mattresses",
      img: "Children-Kids Mattresses.png",
      url: "Children-Kids Mattresses.html"
    },
    {
      title: "Firm/Hard Mattresses",
      img: "Firm-Hard Mattresses.png",
      url: "Firm-Hard Mattresses.html"
    },
    {
      title: "Medium Firm Mattresses",
      img: "Medium Firm Mattresses.png",
      url: "Medium Firm Mattresses.html"
    },
    {
      title: "Soft/Plush Mattresses",
      img: "Soft-Plush Mattresses.png",
      url: "Soft-Plush Mattresses.html"
    },
    {
      title: "Gel/Memory Foam Mattresses",
      img: "Gel-Memory Foam Mattresses.png",
      url: "Gel-Memory Foam Mattresses.html"
    },
    {
      title: "Roll Pack Box Mattresses",
      img: "Roll Pack Box Mattresses.png",
      url: "Roll Pack Box Mattresses.html"
    },
    {
      title: "Mattress Box Springs",
      img: "./assets/img/mattress_box.jpg",
      url: "Mattress Box Springs.html"
    },
    {
      title: "Metal Frames",
      img: "Metal Frames.png",
      url: "Metal Frames.html"
    },
    {
      title: "Electric Adjustable Bed Frames",
      img: "Electric Adjustable Bed Frames.png",
      url: "Electric Adjustable Bed Frames.html"
    },
    { title: "Pillows", img: "Pillows.png", url: "Pillows.html" },
    {
      title: "Small Dining Sets",
      img: "Small Dining Sets.png",
      url: "Small Dining Sets.html"
    },
    {
      title: "Regular Dining Sets",
      img: "Regular Dining Sets.png",
      url: "Regular Dining Sets.html"
    },
    {
      title: "Large Dining Sets",
      img: "Large Dining Sets.png",
      url: "Large Dining Sets.html"
    },
    {
      title: "Marble Dining Sets",
      img: "Marble Dining Sets.png",
      url: "Marble Dining Sets.html"
    },
    {
      title: "Italian Dining Sets",
      img: "Italian Dining Sets.png",
      url: "Italian Dining Sets.html"
    },
    {
      title: "Counter/Pub Height Dining Sets",
      img: "Counter-Pub Height Dining Sets.png",
      url: "Counter-Pub Height Dining Sets.html"
    },
    {
      title: "Dining Chairs",
      img: "Dining Chairs.png",
      url: "Dining Chairs.html"
    },
    { title: "Barstools", img: "Barstools.png", url: "Barstools.html" },
    {
      title: "Counter Chairs",
      img: "Counter Chairs.png",
      url: "Counter Chairs.html"
    },
    { title: "Pub Chairs", img: "Pub Chairs.png", url: "Pub Chairs.html" },
    {
      title: "Servers/Buffets",
      img: "Servers-Buffets.png",
      url: "Servers-Buffets.html"
    },
    {
      title: "China Cabinets",
      img: "China Cabinets.png",
      url: "China Cabinets.html"
    },
    {
      title: "Curio/Vitrin",
      img: "Curio-Vitrin.png",
      url: "Curio-Vitrin.html"
    },
    { title: "Food Carts", img: "Food Carts.png", url: "Food Carts.html" },
    {
      title: "Micro Oven Shelf",
      img: "Micro Oven Shelf.png",
      url: "Micro Oven Shelf.html"
    },
    {
      title: "Fabric Sofa Sets",
      img: "Fabric Sofa Sets.png",
      url: "Fabric Sofa Sets.html"
    },
    {
      title: "Fabric Sectional Sofa Sets",
      img: "Fabric Sectional Sofa Sets.png",
      url: "Fabric Sectional Sofa Sets.html"
    },
    {
      title: "Leather Sofa Sets",
      img: "Leather Sofa Sets.png",
      url: "Leather Sofa Sets.html"
    },
    {
      title: "Leather Sectional Sofa Sets",
      img: "Leather Sectional Sofa Sets.png",
      url: "Leather Sectional Sofa Sets.html"
    },
    {
      title: "Gel/Bonded/Leather Air Sofa Sets",
      img: "Gel-Bonded-Leather Air Sofa Sets.png",
      url: "Gel-Bonded-Leather Air Sofa Sets.html"
    },
    {
      title: "Fabric Recliner Sofa & Sectional Sets",
      img: "Fabric Recliner Sofa Sectional Sets.png",
      url: "Fabric Recliner Sofa Sectional Sets.html"
    },
    {
      title: "Leather Recliner Sofa & Sectional Sets",
      img: "Leather Recliner Sofa Sectional Sets.png",
      url: "Leather Recliner Sofa Sectional Sets.html"
    },
    { title: "Day Beds", img: "Day Beds.png", url: "Day Beds.html" },
    { title: "Sofa Beds", img: "Sofa Beds.png", url: "Sofa Beds.html" },
    {
      title: "Sectional Sofa Beds",
      img: "Sectional Sofa Beds.png",
      url: "Sectional Sofa Beds.html"
    },
    {
      title: "Futons/Klick Klacks",
      img: "Futons-Klick Klacks.png",
      url: "Futons-Klick Klacks.html"
    },
    {
      title: "Recliner Chairs",
      img: "Recliner Chairs.png",
      url: "Recliner Chairs.html"
    },
    {
      title: "Medical Lift Chairs",
      img: "Medical Lift Chairs.png",
      url: "Medical Lift Chairs.html"
    },
    {
      title: "Accent Chairs",
      img: "Accent Chairs.png",
      url: "Accent Chairs.html"
    },
    { title: "Ottomans", img: "Ottomans.png", url: "Ottomans.html" },
    { title: "Benches", img: "Benches.png", url: "Benches.html" },
    {
      title: "Coffee & End Tables",
      img: "Coffee-End Tables.png",
      url: "Coffee-End Tables.html"
    },
    {
      title: "Console/Hall/Sofa Tables",
      img: "Console-Hall-Sofa Tables.png",
      url: "Console-Hall-Sofa Tables.html"
    },
    {
      title: "Rugs & Carpets",
      img: "Rugs-Carpets.png",
      url: "Rugs-Carpets.html"
    },
    { title: "TV Stands", img: "TV Stands.png", url: "TV Stands.html" },
    { title: "Study Desks", img: "Study Desks.png", url: "Study Desks.html" },
    {
      title: "Computer Desks",
      img: "Computer Desks.png",
      url: "Computer Desks.html"
    },
    {
      title: "Computer Chairs",
      img: "Computer Chairs.png",
      url: "Computer Chairs.html"
    },
    {
      title: "Office Desks",
      img: "Office Desks.png",
      url: "Office Desks.html"
    },
    {
      title: "Office Chairs",
      img: "./assets/img/chair.png",
      url: "product.html"
    },
    { title: "Bookshelves", img: "Bookshelves.png", url: "Bookshelves.html" },
    {
      title: "Shoe Benches",
      img: "Shoe Benches.png",
      url: "Shoe Benches.html"
    },
    { title: "Mirrors", img: "Mirrors.png", url: "Mirrors.html" },
    {
      title: "Arts & Picture Frames",
      img: "Arts-Picture Frames.png",
      url: "Arts-Picture Frames.html"
    },
    { title: "Lamps", img: "Lamps.png", url: "Lamps.html" },
    {
      title: "Coat Hangers",
      img: "Coat Hangers.png",
      url: "Coat Hangers.html"
    },
    {
      title: "Nesting Table",
      img: "Nesting Table.png",
      url: "Nesting Table.html"
    }
  ];

  const searchBox = document.getElementById("search-box");
  const suggestionsList = document.getElementById("suggestions-list");

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.toLowerCase();
    suggestionsList.innerHTML = "";
    suggestionsList.style.display = query ? "grid" : "none";

    if (query) {
      const filteredSuggestions = suggestions.filter((item) =>
        item.title.toLowerCase().includes(query)
      );

      if (filteredSuggestions.length === 0) {
        // Show "Not Found" message
        const notFoundMessage = document.createElement("div");
        notFoundMessage.className = "not-found";
        notFoundMessage.textContent = "No results found.";
        suggestionsList.appendChild(notFoundMessage);
      } else {
        filteredSuggestions.forEach((item) => {
          const suggestionItem = document.createElement("div");
          suggestionItem.className = "suggestion-item";
          suggestionItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}" />
            <span>${item.title}</span>
          `;
          suggestionItem.addEventListener("click", () => {
            window.location.href = item.url; // Navigate to the item's URL
          });
          suggestionsList.appendChild(suggestionItem);
        });
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search")) {
      suggestionsList.style.display = "none";
    }
  });
});
