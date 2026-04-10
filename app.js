/* ═══════════════════════════════════════════════════════
   Canton Fair Booth — Interactive TV Display
   ═══════════════════════════════════════════════════════ */

// ── City Data (sourced from sourcing.worldfirst.com) ──
const cities = [
  {
    name: "Guangzhou",
    slug: "guangzhou",
    categories: ["Apparel", "Leather", "Beauty"],
    topCategories: ["Apparel & Fashion", "Leather Goods & Bags", "Beauty & Cosmetics", "Textiles & Fabrics", "Toys & Gifts", "Furniture & Home", "Jewelry & Accessories", "Electronics Accessories"],
    description: "Canton Fair host city. China\u2019s oldest trade capital.",
    longDesc: "Home to 11+ wholesale markets within 30 minutes of Canton Fair. Shahe ships 3,000+ tons of clothing daily. Shisanhang runs fast fashion from sketch to rack in 72 hours. 1,857 cosmetics manufacturers produce nearly a third of China\u2019s output.",
    markets: ["\u5341\u4e09\u884c Shisanhang \u2014 6,000+ vendors, fast fashion", "\u767d\u9a6c Baima \u2014 2,000 shops, 10 floors, ISO 9001", "\u6c99\u6cb3 Shahe \u2014 3,000+ tons of clothing daily"],
    wfHook: "Pay Guangzhou suppliers in CNY same-day via World Account \u2014 90% of payments arrive within hours.",
    image: "images/guangzhou.webp",
    hasDetail: true,
  },
  {
    name: "Shenzhen",
    slug: "shenzhen",
    categories: ["Electronics", "Hardware", "Drones"],
    topCategories: ["Consumer Electronics", "Smart Hardware & IoT", "LED & Lighting", "Drones & Robotics", "Phone Accessories", "Consumer Audio", "Jewelry & Gold", "Fashion & Apparel"],
    description: "China\u2019s hardware capital. Prototype to production in weeks.",
    longDesc: "Huaqiangbei: 1.45 km\u00b2, 40+ markets, 20,000 merchants, 480B+ RMB annual transactions. SEG Plaza: 3,000+ component shops across 10 floors. 70%+ of global consumer drone production runs through this city. Shuibei handles 60% of China\u2019s gold jewelry trade.",
    markets: ["\u8d5b\u683c SEG Plaza \u2014 3,000+ component shops, 10 floors", "\u534e\u5f3a Huaqiang Electronics \u2014 7 floors, 3,000+ stores", "\u5357\u6cb9 Nanyou \u2014 4,000+ merchants, original-design fashion"],
    wfHook: "Lock in USD\u2192CNY rates before you send \u2014 protect margins on high-value electronics orders.",
    image: "images/shenzhen.webp",
    hasDetail: false,
  },
  {
    name: "Dongguan",
    slug: "dongguan",
    categories: ["Electronics", "Toys", "Moulds"],
    topCategories: ["Plastics & Moulds", "Electronics Assembly", "Furniture & Home", "Toys & Games", "Footwear", "Apparel & Knitwear", "Paper & Packaging", "Precision Parts"],
    description: "The world\u2019s factory floor. 1 in 5 smartphones built here.",
    longDesc: "10,000+ electronics factories. 1 in 5 smartphones worldwide. 75% of global toy exports. Dalang produces 900 million sweaters a year. Houjie: 5km Furniture Avenue with 600+ companies. South China\u2019s largest plastic mould cluster.",
    markets: ["\u5bcc\u6c11 Fumin \u2014 300,000 sqm, women\u2019s fashion", "\u9ec4\u6cb3 Yellow River Fashion City \u2014 Korean-style, menswear", "Houjie Furniture Avenue \u2014 5km, 600+ companies"],
    wfHook: "Verify supplier bank accounts against business registrations \u2014 built into every WorldFirst payment.",
    image: "images/dongguan.webp",
    hasDetail: false,
  },
  {
    name: "Foshan",
    slug: "foshan",
    categories: ["Furniture", "Ceramics", "Aluminium"],
    topCategories: ["Furniture & Home", "Ceramics & Tiles", "Aluminium & Metals", "Lighting", "Building Materials", "Appliances", "Doors & Windows", "Sanitaryware"],
    description: "World\u2019s largest furniture market. 54% of China\u2019s tiles.",
    longDesc: "7,000+ furniture factories. 20 million sqm of showroom space. 1,000+ ceramic tile production lines producing 1.2 billion sqm annually \u2014 54% of China\u2019s output. Midea and Galanz HQ. Shunde produces 50%+ of the world\u2019s air conditioners.",
    markets: ["\u7f57\u6d6e\u5bab Louvre \u2014 380,000 sqm, 2M visitors/year", "\u7ea2\u661f\u7f8e\u51ef\u9f99 Red Star Macalline \u2014 wholesale format, 90% factory-direct", "\u5357\u5e84 Nanzhuang \u2014 2,000+ ceramic enterprises"],
    wfHook: "Send CNY payments to multiple Foshan suppliers from one World Account \u2014 no intermediary bank fees.",
    image: "images/foshan.webp",
    hasDetail: false,
  },
  {
    name: "Yiwu",
    slug: "yiwu",
    categories: ["Commodities", "Christmas", "Socks"],
    topCategories: ["Small Commodities", "Hosiery & Socks", "Jewelry & Accessories", "Toys & Novelties", "Christmas & Seasonal", "Packaging & Print", "Hardware & Tools", "Crafts & Gifts"],
    description: "World\u2019s largest small commodities market. 75,000 booths.",
    longDesc: "75,000 booths across 26 product categories. 2.1 million products. 6.4 million sqm of trading space. 220,000 daily visitors. Datang Town produces 27 billion pairs of socks annually \u2014 70% of China\u2019s market. 60\u201380% of the world\u2019s Christmas decorations.",
    markets: ["Int\u2019l Trade City D1 \u2014 toys, jewelry, crafts, 10,000+ booths", "Int\u2019l Trade City D2 \u2014 bags, hardware, electronics", "Int\u2019l Trade City D3 \u2014 stationery, cosmetics, sports"],
    wfHook: "Pay Yiwu\u2019s 1688 suppliers directly in CNY with 1688 World Pay \u2014 no trading company markup.",
    image: "images/yiwu.webp",
    hasDetail: false,
  },
  {
    name: "Ningbo",
    slug: "ningbo",
    categories: ["Kitchenware", "Appliances", "Tools"],
    topCategories: ["Home Products & Kitchenware", "Hardware & Tools", "Small Appliances", "Stationery & Office", "Auto Parts", "Textiles & Garments", "Plastics", "Die-Casting Moulds"],
    description: "Major port city. ~60% of world\u2019s small appliances from Cixi.",
    longDesc: "China\u2019s second-busiest port. Cixi produces ~60% of the world\u2019s small appliances. Yuyao: 2,000+ plastic manufacturers. Beilun: 25% of China\u2019s die-casting mould output. 200+ container routes globally. 70% of suppliers provide product development within 15 days.",
    markets: ["Cixi Small Appliance Cluster \u2014 ~60% global output", "Yuyao Plastic Industrial Zone \u2014 \u201cChina Plastic City\u201d", "Beilun Mould District \u2014 25% of China\u2019s die-casting"],
    wfHook: "Hold USD, EUR, GBP and 17 more currencies \u2014 convert to CNY only when rates are right.",
    image: "images/ningbo.webp",
    hasDetail: false,
  },
  {
    name: "Shanghai",
    slug: "shanghai",
    categories: ["Trade Hub", "Fashion", "Auto"],
    topCategories: ["Trade Services & Logistics", "Fashion & Design", "Automotive Parts", "Semiconductors", "Chemicals", "F&B Equipment", "Medical Devices", "Luxury Goods"],
    description: "World\u2019s busiest port. Supply chain command centre.",
    longDesc: "Port of Shanghai: 55+ million TEU \u2014 world\u2019s busiest 16 years running. China\u2019s first Free Trade Zone. Qipu Road: 100+ year apparel wholesale hub. South Bund: 285 bespoke tailoring shops, custom suits at \u2153 European pricing.",
    markets: ["\u4e03\u6d66\u8def Qipu Road \u2014 100+ year apparel wholesale, 680m street", "South Bund Fabric Market \u2014 285 tailoring shops, bespoke", "\u51ef\u65cb\u57ce Kaixuancheng \u2014 20,000+ sqm fashion wholesale"],
    wfHook: "Open a free WorldFirst World Account in minutes \u2014 collect, hold, and pay in 20+ currencies.",
    image: "images/shanghai.webp",
    hasDetail: false,
  },
  {
    name: "Zhongshan",
    slug: "zhongshan",
    categories: ["Lighting", "Appliances", "Locks"],
    topCategories: ["Lighting & LED", "Electrical Appliances", "Locks & Hardware", "Furniture", "Apparel"],
    description: "China\u2019s lighting capital. 70% of national production.",
    longDesc: "Guzhen: 30,000+ lighting companies producing 70% of China\u2019s lighting output. 100+ billion RMB annual cluster output. Xiaolan: one-third of China\u2019s lock exports with 150+ smart lock manufacturers. Shaxi: 4,000+ casual wear companies.",
    markets: ["Star Alliance Global Lighting Center \u2014 premium, international", "Huayi International Lighting \u2014 200,000 sqm, R&D", "Century Lighting Square \u2014 mid-range bulk sourcing"],
    wfHook: "Pay multiple lighting suppliers in one batch \u2014 WorldFirst bulk payments save time and fees.",
    image: "images/zhongshan.webp",
    hasDetail: false,
  },
  {
    name: "Suzhou",
    slug: "suzhou",
    categories: ["Silk", "Precision", "Bridal"],
    topCategories: ["Silk & Textiles", "Precision Components", "Electronics Assembly", "Metal Products", "Bridal & Wedding"],
    description: "City of Silk. Precision manufacturing. Bridal capital.",
    longDesc: "4,700 years of silk heritage. Shengze: 13+ billion metres of fabric annually, 50% of China\u2019s chemical fiber market. Huqiu: 1,200 bridal factories producing 70\u201380% of China\u2019s wedding dresses. SIP hosts 108 Fortune Global 500 companies.",
    markets: ["Eastern Silk Market \u2014 7,000+ booths, 100B RMB", "Changshu Garment City \u2014 9,000+ shops, 35 markets", "Huqiu Bridal City \u2014 1,200 factories, 70\u201380% of China"],
    wfHook: "Pay Suzhou\u2019s precision manufacturers in CNY \u2014 no double conversion through USD.",
    image: "images/suzhou.webp",
    hasDetail: false,
  },
  {
    name: "Xiamen",
    slug: "xiamen",
    categories: ["Eyewear", "Fitness", "Stone"],
    topCategories: ["Eyewear & Sunglasses", "Fitness Equipment", "Stone & Building Materials", "LED & Lighting", "Tea & Food", "Tungsten & Minerals"],
    description: "80% of world\u2019s sunglasses. Stone and fitness hub.",
    longDesc: "80% of world\u2019s sunglasses manufactured here. 6 of 10 global home treadmills made in the region. World\u2019s #1 stone import/export hub. 40% of China\u2019s LED lighting exports originate from Xiamen. Historic tea export gateway since 1689.",
    markets: ["Jingshang Eyewear Market \u2014 sunglasses and optical frames", "Int\u2019l Stone Center \u2014 56,000 sqm showroom", "Xiashang Wucun Lighting City \u2014 LED and commercial"],
    wfHook: "Pay Chinese suppliers directly \u2014 instant confirmation when they\u2019re on WorldFirst.",
    image: "images/xiamen.webp",
    hasDetail: false,
  },
  {
    name: "Qingdao",
    slug: "qingdao",
    categories: ["Tires", "Appliances", "Eyelashes"],
    topCategories: ["Tires & Rubber", "Home Appliances", "Eyelashes & Beauty", "Marine Equipment", "Food & Beverage", "Textiles & Garments"],
    description: "Haier, Hisense, and 70% of the world\u2019s eyelashes.",
    longDesc: "700+ rubber enterprises, 35+ tire plants. Haier: $55.9B global revenue. Hisense: 14% global TV market share. Pingdu: 70% of world\u2019s false eyelashes, 5,000+ companies, 10B+ RMB output. Qingdao Port: 230+ international shipping routes.",
    markets: ["Jimo Clothing Market \u2014 9,000+ shops, knitwear hub", "Qingdao Int\u2019l Jewellery City \u2014 pearls, gemstones", "Yiwu Smallware Market \u2014 daily necessities"],
    wfHook: "Hold multiple currencies and pay when rates are right \u2014 protect margins on bulk orders.",
    image: "images/qingdao.webp",
    hasDetail: false,
  },
  {
    name: "Hangzhou",
    slug: "hangzhou",
    categories: ["E-commerce", "Silk", "Digital"],
    topCategories: ["E-commerce & Digital Trade", "Silk & Textiles", "Tea", "Fashion & Apparel", "AI & Software"],
    description: "Alibaba HQ. E-commerce and digital trade capital.",
    longDesc: "Home to Alibaba, 1688, and China\u2019s largest digital trade ecosystem. Sijiqing: one of China\u2019s largest garment wholesale markets. Rich silk heritage. 1688 headquarters \u2014 the gateway to online sourcing from Chinese factories.",
    markets: ["Sijiqing \u2014 one of China\u2019s largest garment wholesale hubs", "1688 HQ \u2014 online sourcing gateway to Chinese factories", "China Silk City \u2014 traditional silk and fabric market"],
    wfHook: "Pay 1688 suppliers directly in CNY with 1688 World Pay \u2014 no trading company markup.",
    image: "images/hangzhou.webp",
    hasDetail: false,
  },
  {
    name: "Quanzhou",
    slug: "quanzhou",
    categories: ["Sportswear", "Footwear", "Stone"],
    topCategories: ["Sportswear & Athletic Wear", "Footwear", "Stone & Ceramics", "Tea", "Textiles"],
    description: "China\u2019s sportswear capital. Anta, Peak, 361\u00b0 HQ.",
    longDesc: "Home to Anta, Peak, and 361\u00b0 \u2014 China\u2019s sportswear giants. Jinjiang: China\u2019s shoe capital with thousands of footwear factories. Shishi: major textile and garment production hub. Ancient Maritime Silk Road starting point.",
    markets: ["Jinjiang \u2014 China\u2019s shoe capital, sportswear hub", "Shishi \u2014 textile and garment production cluster", "Nan\u2019an Shuitou \u2014 stone processing and trading"],
    wfHook: "Verify your supplier\u2019s business license before sending payment \u2014 built into WorldFirst.",
    image: "images/quanzhou.webp",
    hasDetail: false,
  },
  {
    name: "Kunshan",
    slug: "kunshan",
    categories: ["Laptops", "Electronics", "Optics"],
    topCategories: ["Laptop Assembly", "Electronics Components", "Precision Parts", "Optical Products", "Packaging"],
    description: "Laptop assembly hub. Precision electronics gateway.",
    longDesc: "Historically produced one-third of world\u2019s laptops. Now a semiconductor and automotive electronics cluster. Gateway between Shanghai and Suzhou. Strong in precision manufacturing and electronic component supply chains.",
    markets: ["Kunshan IT Zone \u2014 electronics assembly cluster", "Huaqiao Business Zone \u2014 trade services hub", "KTD Industrial Park \u2014 precision components"],
    wfHook: "Convert and pay in CNY at transparent rates \u2014 see your costs before you send.",
    image: "images/kunshan.webp",
    hasDetail: false,
  },
  {
    name: "Danyang",
    slug: "danyang",
    categories: ["Optical Lenses", "Eyeglasses", "Tools"],
    topCategories: ["Optical Lenses", "Eyeglasses & Frames", "Hand Tools", "Hardware", "Chemical Products"],
    description: "China\u2019s optical lens capital. 75% of national output.",
    longDesc: "Produces 75% of China\u2019s optical lenses and a significant share of the world\u2019s eyeglasses. Complete optical supply chain from raw materials to finished frames. Also a hub for hardware and hand tools.",
    markets: ["Danyang Optical City \u2014 lenses and frames wholesale", "Yunyang Industrial Zone \u2014 tools and hardware", "China Eyeglasses Market \u2014 wholesale distribution"],
    wfHook: "Pay suppliers directly in CNY \u2014 no double conversion, no hidden bank markup.",
    image: "images/danyang.webp",
    hasDetail: false,
  },
  {
    name: "Zhengzhou",
    slug: "zhengzhou",
    categories: ["Smartphones", "Food", "Machinery"],
    topCategories: ["Smartphone Assembly", "Food Processing", "Textiles", "Machinery & Equipment", "Automotive Parts"],
    description: "Central China\u2019s logistics hub. iPhone assembly capital.",
    longDesc: "Foxconn\u2019s largest campus assembles ~50% of the world\u2019s iPhones. Central China\u2019s rail and logistics crossroads. Major food processing and textile manufacturing base. Gateway to inland China\u2019s manufacturing capacity.",
    markets: ["Zhongyuan \u2014 Central China\u2019s largest wholesale market", "Foxconn Zhengzhou \u2014 electronics assembly campus", "Jinshui Textile City \u2014 fabrics and garments"],
    wfHook: "Pay Chinese factories in seconds, not days \u2014 90% of WorldFirst payments arrive same day.",
    image: "images/zhengzhou.webp",
    hasDetail: false,
  },
  {
    name: "Chengdu",
    slug: "chengdu",
    categories: ["IT", "Aerospace", "Food"],
    topCategories: ["IT & Software", "Aerospace & Defence", "Biotech & Pharma", "Food & Agriculture", "Sichuan Ingredients"],
    description: "Western China\u2019s tech hub. 600+ companies in Tianfu Park.",
    longDesc: "Tianfu Software Park: 600+ companies, 34 Fortune 500 tenants, 60,000 IT workers. Labour costs 30\u201340% below Beijing/Shanghai. FDA-certified pharma manufacturers. 6,500+ exhibitors at China Food & Drinks Fair. Sichuan spices and tea exports.",
    markets: ["Hehuachi \u2014 Southwest China\u2019s largest wholesale", "Wukuaishi \u2014 Sichuan spices, tea, ingredients", "Kowloon Plaza \u2014 clothing, electronics, leather"],
    wfHook: "Open a free World Account in minutes \u2014 collect, hold, and pay in 20+ currencies.",
    image: "images/chengdu.webp",
    hasDetail: false,
  },
  {
    name: "Chongqing",
    slug: "chongqing",
    categories: ["Auto", "Laptops", "Motorcycles"],
    topCategories: ["Automotive", "Laptop Manufacturing", "Motorcycles", "Chemical Products", "Food & Ingredients"],
    description: "Western manufacturing powerhouse. #1 motorcycle base.",
    longDesc: "China\u2019s #1 motorcycle and major laptop production base. Western China\u2019s largest industrial city. Growing automotive cluster with 300+ parts manufacturers. Major inland port on the Yangtze River. Gateway to Belt and Road markets.",
    markets: ["Chaotiamen \u2014 largest wholesale market in West China", "Auto Industrial Park \u2014 300+ parts manufacturers", "Nanping Trade Centre \u2014 electronics and machinery"],
    wfHook: "Send payments to multiple suppliers in one batch \u2014 save time with WorldFirst bulk payments.",
    image: "images/chongqing.webp",
    hasDetail: false,
  },
  {
    name: "Pingxiang",
    slug: "pingxiang",
    categories: ["Bicycles", "Strollers", "Castings"],
    topCategories: ["Bicycles & Parts", "Baby Strollers", "Auto Parts", "Castings & Hardware", "Fitness Equipment"],
    description: "Bicycle and baby stroller capital of China.",
    longDesc: "Produces ~50% of China\u2019s baby strollers and a major share of bicycles and parts. Complete supply chain from raw materials to finished products. Also strong in castings, auto parts, and fitness equipment manufacturing.",
    markets: ["Hejigou \u2014 bicycle parts wholesale hub", "Pingxiang Industrial Zone \u2014 stroller manufacturing cluster", "Hebei Hardware Market \u2014 castings and auto parts"],
    wfHook: "Verify supplier credentials before sending deposits \u2014 WorldFirst checks business and export licenses.",
    image: "images/pingxiang.webp",
    hasDetail: false,
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    categories: ["Trade Services", "Jewelry", "Electronics"],
    topCategories: ["Trade Services & Logistics", "Jewelry & Watches", "Electronics", "Fashion & Design", "Financial Services"],
    description: "Free port. Zero tariffs. English-speaking trade gateway.",
    longDesc: "Free port with zero tariffs, common law, and English-speaking business environment. World-class trade shows year-round at AsiaWorld-Expo and HKCEC. Quality assurance and inspection hub. Gateway between mainland Chinese factories and global buyers.",
    markets: ["AsiaWorld-Expo \u2014 mega trade shows year-round", "Sham Shui Po \u2014 fabric and accessories wholesale", "HKCEC \u2014 electronics, jewelry, and gift fairs"],
    wfHook: "Collect payments in HKD, convert to CNY at transparent rates \u2014 all from one World Account.",
    image: "images/hong-kong.webp",
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
const modalTagline = document.getElementById("modal-tagline");
const modalCats    = document.getElementById("modal-categories");
const modalDesc    = document.getElementById("modal-desc");
const modalQr      = document.getElementById("modal-qr");
const modalQrUrl   = document.getElementById("modal-qr-url");
const modalClose   = document.getElementById("modal-close");
const backBtn      = document.getElementById("back-btn");
const track        = document.getElementById("carousel-track");
const wrapper      = document.getElementById("carousel-wrapper");
const catGrid      = document.getElementById("categories-grid");

// ── Carousel State ──
const GAP = 12;
const VISIBLE = 5;
const CITY_COUNT = cities.length;
let cardWidth = 220;
let scrollPos = 0;
let scrollSpeed = 0.5; // pixels per frame
let isPaused = false;
let animFrame = null;

// ═══════════════════════════════════════════════════════
// CAROUSEL — Continuous seamless scroll
// ═══════════════════════════════════════════════════════

function renderCarousel() {
  // Triple for seamless infinite loop
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
            ${isActive ? "Explore sourcing guide" : "Tap to explore"}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

function calcCardWidth() {
  const wrapperH = wrapper.clientHeight;
  const wrapperW = wrapper.clientWidth;

  let cardH = wrapperH * 0.94;
  let cardW = cardH * 0.75;

  const totalW = VISIBLE * cardW + (VISIBLE - 1) * GAP;
  if (totalW > wrapperW) {
    cardW = (wrapperW - (VISIBLE - 1) * GAP) / VISIBLE;
  }

  cardWidth = cardW;
  track.querySelectorAll(".carousel-card").forEach((card) => {
    card.style.width = cardW + "px";
    card.style.height = (cardW / 0.75) + "px";
  });
}

// ── Continuous scroll animation ──
let idleTimer = null;
const IDLE_TIMEOUT = 10000; // 10 seconds of no mouse movement

function continuousScroll() {
  if (!isPaused) {
    scrollPos += scrollSpeed;
    const setWidth = CITY_COUNT * (cardWidth + GAP);
    if (scrollPos >= setWidth) {
      scrollPos -= setWidth;
    }
    track.style.transform = `translateX(${-scrollPos}px)`;
  }
  animFrame = requestAnimationFrame(continuousScroll);
}

function pauseScroll() {
  isPaused = true;
}

function resumeScroll() {
  isPaused = false;
}

// Reset idle timer on any mouse/touch activity
function resetIdleTimer() {
  pauseScroll();
  clearTimeout(idleTimer);
  idleTimer = setTimeout(resumeScroll, IDLE_TIMEOUT);
}

// ── Idle-based scroll: pause on any activity, resume after 10s idle ──
function setupIdleScroll() {
  // Any mouse movement or touch pauses, then resumes after 10s
  document.addEventListener("mousemove", resetIdleTimer);
  document.addEventListener("touchstart", resetIdleTimer, { passive: true });
  document.addEventListener("click", resetIdleTimer);

  // Start scrolling immediately (no mouse activity yet)
  resumeScroll();
}

// ── Card Click ──
function handleCardClick(e) {
  const card = e.target.closest(".carousel-card");
  if (!card) return;

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
  pauseScroll();

  modalBg.style.backgroundImage = `url(${city.image})`;
  modalName.textContent = city.name;
  modalTagline.textContent = city.description;
  modalDesc.textContent = city.longDesc;
  modalCats.innerHTML = (city.topCategories || city.categories)
    .map((c) => `<span class="modal-cat-pill">${c}</span>`)
    .join("");

  // Render wholesale markets as cards
  const marketsEl = document.getElementById("modal-markets");
  if (marketsEl && city.markets) {
    marketsEl.innerHTML = city.markets
      .map((m) => {
        // Parse "Name — Detail" format
        const parts = m.split(" \u2014 ");
        const name = parts[0] || m;
        const detail = parts[1] || "";
        return `
        <div class="market-card">
          <div class="market-card-img" style="background-image: url(${city.image})">
            <div class="market-card-img-overlay"></div>
          </div>
          <div class="market-card-body">
            <div class="market-card-name">${name}</div>
            ${detail ? `<div class="market-card-detail">${detail}</div>` : ""}
          </div>
        </div>`;
      })
      .join("");
    marketsEl.parentElement.style.display = "";
  } else if (marketsEl) {
    marketsEl.parentElement.style.display = "none";
  }

  // QR code to city page
  const csnUrl = `https://sourcing.worldfirst.com/cities/${city.slug}`;
  const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(csnUrl)}&format=svg`;
  modalQr.src = qrApi;
  modalQrUrl.textContent = `sourcing.worldfirst.com`;

  modal.classList.add("active");
}

function hideCityModal() {
  modal.classList.remove("active");
  resumeScroll();
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════

function init() {
  renderCarousel();
  renderCategories();
  calcCardWidth();

  // Start continuous scroll from the middle set
  scrollPos = CITY_COUNT * (cardWidth + GAP);
  track.style.transform = `translateX(${-scrollPos}px)`;

  // Setup interactions
  setupIdleScroll();
  track.addEventListener("click", handleCardClick);

  // City view
  backBtn.addEventListener("click", hideCityView);

  // Modal
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
  });

  // Resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      calcCardWidth();
      scrollPos = CITY_COUNT * (cardWidth + GAP);
    }, 150);
  });

  // Start continuous animation
  continuousScroll();
}

document.addEventListener("DOMContentLoaded", init);
