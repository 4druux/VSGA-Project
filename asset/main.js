document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("darkModeToggle")
    .addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".text-rekomen").forEach((container) => {
    const p = container.querySelector("p");
    const button = container.querySelector(".read-more-btn");
    const originalText = p.textContent;

    button.addEventListener("click", () => {
      if (button.textContent === "Baca Selengkapnya") {
        p.classList.remove("short-text");
        button.textContent = "Baca Lebih Sedikit";
      } else {
        p.classList.add("short-text");
        button.textContent = "Baca Selengkapnya";
      }
    });
  });
});

const imageSets = {
  kota: [
    "asset/img/img-populer/Kota/1.jpg",
    "asset/img/img-populer/Kota/2.jpg",
    "asset/img/img-populer/Kota/3.jpg",
    "asset/img/img-populer/Kota/4.jpg",
  ],
  pantai: [
    "asset/img/img-populer/Pantai/1.jpg",
    "asset/img/img-populer/Pantai/2.jpg",
    "asset/img/img-populer/Pantai/3.jpg",
    "asset/img/img-populer/Pantai/4.jpg", 
    "asset/img/img-populer/Pantai/5.jpg",
  ],
  pedesaan: [
    "asset/img/img-populer/Pedesaan/1.jpg",
    "asset/img/img-populer/Pedesaan/2.jpg",
    "asset/img/img-populer/Pedesaan/3.jpg",
    "asset/img/img-populer/Pedesaan/4.jpg",
    "asset/img/img-populer/Pedesaan/5.jpg",
    "asset/img/img-populer/Pedesaan/6.jpg",
  ],
  pulau: [
    "asset/img/img-populer/Pulau/1.jpg",
    "asset/img/img-populer/Pulau/2.jpg",
    "asset/img/img-populer/Pulau/3.jpg",
    "asset/img/img-populer/Pulau/4.jpg",
  ],
  pegunungan: [
    "asset/img/img-populer/pegunungan/1.jpg",
    "asset/img/img-populer/pegunungan/2.jpg",
    "asset/img/img-populer/pegunungan/3.jpg",
    "asset/img/img-populer/pegunungan/4.jpg",
  ],
};

let currentCategory = "kota";

function showImages(category) {
  currentCategory = category;
  currentIndex = 0;

  const imageContainer = document.getElementById("scrollImages");
  imageContainer.innerHTML = "";

  imageSets[category].forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = category;
    img.style.flexShrink = "0"; // Ensure images do not shrink
    imageContainer.appendChild(img);
  });

  updateButtons();
  updateActiveLink(category);
}

function scrollToLeft() {
  const scrollImages = document.getElementById("scrollImages");
  const scrollAmount = scrollImages.clientWidth;
  scrollImages.scrollLeft -= scrollAmount;
  setTimeout(updateButtons, 200); // Ensure updateButtons is called after scrolling
}

function scrollToRight() {
  const scrollImages = document.getElementById("scrollImages");
  const scrollAmount = scrollImages.clientWidth;
  scrollImages.scrollLeft += scrollAmount;
  setTimeout(updateButtons, 200); // Ensure updateButtons is called after scrolling
}

function updateButtons() {
  const scrollImages = document.getElementById("scrollImages");
  const scrollLeftButton = document.getElementById("scrollLeft");
  const scrollRightButton = document.getElementById("scrollRight");

  if (scrollImages.scrollLeft === 0) {
    scrollLeftButton.classList.add("hidden");
  } else {
    scrollLeftButton.classList.remove("hidden");
  }

  if (
    scrollImages.scrollLeft + scrollImages.clientWidth >=
    scrollImages.scrollWidth
  ) {
    scrollRightButton.classList.add("hidden");
  } else {
    scrollRightButton.classList.remove("hidden");
  }
}

function updateActiveLink(category) {
  const links = document.querySelectorAll(".populer a");
  links.forEach((link) => {
    if (link.getAttribute("onclick").includes(category)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showImages(currentCategory);
  document
    .getElementById("scrollImages")
    .addEventListener("scroll", updateButtons);
  updateButtons(); // Initial call to set correct button visibility
});
