/* ═══════════════════════════════════════════════════════
   Canton Fair Booth — Interactive TV Display
   ═══════════════════════════════════════════════════════ */

// ── City Data ──
const cities = [
  {
    name: "Guangzhou",
    slug: "guangzhou",
    categories: ["Electronics", "Apparel", "Beauty"],
    description: "Canton Fair host city and gateway to the Pearl River Delta manufacturing belt.",
    image: "images/guangzhou.webp",
    hasDetail: true,
  },
  {
    name: "Shenzhen",
    slug: "shenzhen",
    categories: ["Electronics", "Hardware", "LED"],
    description: "China\u2019s tech manufacturing powerhouse and hardware startup capital.",
    image: "images/shenzhen.webp",
    hasDetail: false,
  },
  {
    name: "Dongguan",
    slug: "dongguan",
    categories: ["Electronics", "Toys", "Apparel"],
    description: "The world\u2019s factory floor \u2014 OEM capital for global brands.",
    image: "images/dongguan.webp",
    hasDetail: false,
  },
  {
    name: "Foshan",
    slug: "foshan",
    categories: ["Building", "Furniture", "Ceramics"],
    description: "Building materials and furniture capital of China.",
    image: "images/foshan.webp",
    hasDetail: false,
  },
  {
    name: "Yiwu",
    slug: "yiwu",
    categories: ["Commodities", "Packaging", "Toys"],
    description: "World\u2019s largest small commodities market.",
    image: "images/yiwu.webp",
    hasDetail: false,
  },
  {
    name: "Ningbo",
    slug: "ningbo",
    categories: ["Home", "Appliances", "Auto Parts"],
    description: "Major port city with diverse export manufacturing.",
    image: "images/ningbo.webp",
    hasDetail: false,
  },
  {
    name: "Shanghai",
    slug: "shanghai",
    categories: ["Trade Hub", "Fashion", "Finance"],
    description: "China\u2019s international trade, logistics, and fashion hub.",
    image: "images/shanghai.webp",
    hasDetail: false,
  },
];

// ── Guangzhou Category Data ──
const guangzhouCategories = [
  { name: "Apparel & Fashion",        stars: 5, phase: 2, phaseLabel: "Phase 2 \u2014 Consumer Goods" },
  { name: "Leather Goods & Bags",     stars: 5, phase: 2, phaseLabel: "Phase 2 \u2014 Consumer Goods" },
  { name: "Beauty & Cosmetics",       stars: 5, phase: 3, phaseLabel: "Phase 3 \u2014 Health Products" },
  { name: "Textiles & Fabrics",       stars: 4, phase: 2, phaseLabel: "Phase 2 \u2014 Textiles" },
  { name: "Furniture & Home",         stars: 4, phase: 2, phaseLabel: "Phase 2 \u2014 Home Decor" },
  { name: "Toys & Gifts",             stars: 4, phase: 2, phaseLabel: "Phase 2 \u2014 Gifts" },
  { name: "Jewelry & Accessories",    stars: 3, phase: 2, phaseLabel: "Phase 2 \u2014 Consumer Goods" },
  { name: "Electronics Accessories",  stars: 3, phase: 1, phaseLabel: "Phase 1 \u2014 Electronics" },
];

// ── DOM References ──
const mainView     = document.getElementById("main-view");
const cityView     = document.getElementById("city-view");
const cityBg       = document.getElementById("city-bg");
const modal        = document.getElementById("city-modal");
const modalBg      = document.getElementById("modal-bg");
const modalName    = document.getElementById("modal-city-name");
const modalCats    = document.getElementById("modal-categories");
const modalDesc    = document.getElementById("modal-desc");
const modalClose   = document.getElementById("modal-close");
const backBtn      = document.getElementById("back-btn");
const track        = document.getElementById("carousel-track");
const wrapper      = document.querySelector(".carousel-track-wrapper");
const arrowLeft    = document.getElementById("arrow-left");
const arrowRight   = document.getElementById("arrow-right");
const catGrid      = document.getElementById("categories-grid");

// ── Carousel State ──
const GAP = 12;
const VISIBLE = 5;
const CITY_COUNT = cities.length;
let currentOffset = 0;
let cardWidth = 220;
let autoScrollTimer = null;
let idleTimer = null;

// ═══════════════════════════════════════════════════════
// CAROUSEL
// ═══════════════════════════════════════════════════════

function renderCarousel() {
  // Triple for infinite loop
  const tripled = [...cities, ...cities, ...cities];
  track.innerHTML = tripled
    .map((city, i) => {
      const isActive = city.hasDetail;
      return `
      <div class="carousel-card ${isActive ? "active-city" : ""}"
           data-slug="${city.slug}"
           data-index="${i % CITY_COUNT}"
           role="button"
           tabindex="0"
           aria-label="${city.name} \u2014 ${city.categories.join(", ")}">
        <div class="card-image" style="background-image: url(${city.image})"></div>
        <div class="card-overlay"></div>
        ${isActive ? '<div class="card-active-dot"></div>' : ""}
        <div class="card-categories">
          ${city.categories.map((c) => `<span class="card-cat-pill">${c}</span>`).join("")}
        </div>
        <div class="card-bottom">
          <h3 class="card-city-name">${city.name}</h3>
          <div class="card-cta ${isActive ? "card-cta-explore" : ""}">
            ${isActive ? "Explore sourcing guide" : "Guide coming soon"}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

function calcCardWidth() {
  const wrapperW = wrapper.clientWidth;
  const wrapperH = wrapper.clientHeight;

  // Try height-based sizing first (fill available vertical space)
  let cardH = wrapperH * 0.94;
  let cardW = cardH * 0.75; // 3:4 ratio

  // If 5 cards don't fit in the width, fall back to width-based
  const totalW = VISIBLE * cardW + (VISIBLE - 1) * GAP;
  if (totalW > wrapperW) {
    cardW = (wrapperW - (VISIBLE - 1) * GAP) / VISIBLE;
    cardH = cardW / 0.75;
  }

  cardWidth = cardW;

  track.querySelectorAll(".carousel-card").forEach((card) => {
    card.style.width = cardW + "px";
    card.style.height = cardH + "px";
  });
}

function setTrackPosition(animate) {
  track.style.transition = animate
    ? "transform 0.55s cubic-bezier(0.22, 0.61, 0.36, 1)"
    : "none";
  track.style.transform = `translateX(${currentOffset}px)`;
}

function scrollToMiddleSet(animate) {
  // Start at the beginning of the middle (original) set
  currentOffset = -(CITY_COUNT * (cardWidth + GAP));
  setTrackPosition(animate);
}

function checkBoundaries() {
  const setWidth = CITY_COUNT * (cardWidth + GAP);
  const minOffset = -(2 * setWidth - (wrapper.clientWidth - (VISIBLE - 1) * GAP));

  // If scrolled past the end of the second set, snap to first set
  if (currentOffset < -(setWidth * 2 - cardWidth)) {
    currentOffset += setWidth;
    setTrackPosition(false);
  }
  // If scrolled before the start of the first set, snap to second set
  else if (currentOffset > 0) {
    currentOffset -= setWidth;
    setTrackPosition(false);
  }
}

function scrollByCards(n) {
  const step = cardWidth + GAP;
  currentOffset -= n * step;
  setTrackPosition(true);

  // Check boundaries after animation
  setTimeout(checkBoundaries, 600);
}

function nextCard() {
  scrollByCards(1);
}

function prevCard() {
  scrollByCards(-1);
}

// ── Touch / Swipe ──
let touchStartX = 0;
let touchStartTime = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
  touchStartTime = Date.now();
  resetIdleTimer();
}

function handleTouchEnd(e) {
  const diff = touchStartX - e.changedTouches[0].screenX;
  const elapsed = Date.now() - touchStartTime;

  // Only register as swipe if distance > 40px and time < 500ms
  if (Math.abs(diff) > 40 && elapsed < 500) {
    if (diff > 0) nextCard();
    else prevCard();
  }
}

// ── Auto Scroll ──
function startAutoScroll() {
  stopAutoScroll();
  autoScrollTimer = setInterval(() => nextCard(), 4000);
}

function stopAutoScroll() {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
}

function resetIdleTimer() {
  stopAutoScroll();
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => startAutoScroll(), 12000);
}

// ── Card Click ──
function handleCardClick(e) {
  const card = e.target.closest(".carousel-card");
  if (!card) return;

  resetIdleTimer();
  const index = parseInt(card.dataset.index, 10);
  const city = cities[index];

  if (city.hasDetail) {
    showCityView(city);
  } else {
    showCityModal(city);
  }
}

// ═══════════════════════════════════════════════════════
// GUANGZHOU DETAIL VIEW
// ═══════════════════════════════════════════════════════

function renderCategories() {
  catGrid.innerHTML = guangzhouCategories
    .map((cat) => {
      const stars = Array.from({ length: 5 }, (_, i) => {
        const cls = i < cat.stars ? "cat-star-filled" : "cat-star-empty";
        return `<svg class="cat-star" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon class="${cls}" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>`;
      }).join("");

      return `
      <div class="category-card">
        <span class="cat-name">${cat.name}</span>
        <div class="cat-stars">${stars}</div>
        <span class="cat-phase phase-${cat.phase}">CF ${cat.phaseLabel}</span>
      </div>`;
    })
    .join("");
}

function showCityView(city) {
  stopAutoScroll();

  // Set background
  cityBg.style.backgroundImage = `url(${city.image})`;

  // Transition views
  mainView.classList.add("exit-left");
  mainView.classList.remove("active");
  cityView.classList.add("active");
}

function hideCityView() {
  cityView.classList.remove("active");
  mainView.classList.remove("exit-left");
  mainView.classList.add("active");

  resetIdleTimer();
}

// ═══════════════════════════════════════════════════════
// CITY MODAL (non-Guangzhou)
// ═══════════════════════════════════════════════════════

function showCityModal(city) {
  modalBg.style.backgroundImage = `url(${city.image})`;
  modalName.textContent = city.name;
  modalDesc.textContent = city.description;
  modalCats.innerHTML = city.categories
    .map((c) => `<span class="modal-cat-pill">${c}</span>`)
    .join("");

  modal.classList.add("active");
}

function hideCityModal() {
  modal.classList.remove("active");
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════

function init() {
  // Render
  renderCarousel();
  renderCategories();

  // Calculate sizes
  calcCardWidth();
  scrollToMiddleSet(false);

  // Event listeners — carousel
  arrowLeft.addEventListener("click", () => {
    prevCard();
    resetIdleTimer();
  });
  arrowRight.addEventListener("click", () => {
    nextCard();
    resetIdleTimer();
  });

  track.addEventListener("touchstart", handleTouchStart, { passive: true });
  track.addEventListener("touchend", handleTouchEnd, { passive: true });
  track.addEventListener("click", handleCardClick);

  // Event listeners — city view
  backBtn.addEventListener("click", hideCityView);

  // Event listeners — modal
  modalClose.addEventListener("click", hideCityModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideCityModal();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      if (e.key === "Escape") hideCityModal();
      return;
    }
    if (cityView.classList.contains("active")) {
      if (e.key === "Escape" || e.key === "Backspace") hideCityView();
      return;
    }
    if (e.key === "ArrowLeft") {
      prevCard();
      resetIdleTimer();
    }
    if (e.key === "ArrowRight") {
      nextCard();
      resetIdleTimer();
    }
  });

  // Resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      calcCardWidth();
      scrollToMiddleSet(false);
    }, 150);
  });

  // Start auto-scroll after 5 seconds
  idleTimer = setTimeout(() => startAutoScroll(), 5000);
}

// Boot
document.addEventListener("DOMContentLoaded", init);
