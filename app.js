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
    longDesc: "Where China's fashion supply chain begins. Shahe ships 3,000+ tons of clothing daily and launches 2,000+ new styles every morning. Shisanhang runs fast fashion from sketch to rack in under 72 hours. 1,857 cosmetics manufacturers produce nearly a third of China's output. Zhongda — Asia's largest fabric market — feeds the entire Pearl River Delta garment industry.",
    markets: ["十三行 Shisanhang — Mid-range fashion, 6,000+ vendors", "白马服装市场 Baima Garment Market — Premium, brand-focused fashion", "沙河服装批发市场 Shahe Clothing Market — Budget-to-mid fashion, high volume"],
    marketImages: ["images/markets/3JBq0IG4UQmBzgVxW0yumtXRJWw.png", "images/markets/ApmESNM70IE8bYo9gvpbKPmcAvw.png", "images/markets/utg4Q43AFCxaNW7I8WCBlp0OrzM.png"],
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
    longDesc: "Huaqiangbei: 1.45 km², 40+ markets, 20,000 merchants, 480B+ RMB in annual transactions. From concept to working prototype in under two weeks — nowhere else on earth matches this speed. DJI's hometown — 70%+ of global consumer drone production. Shuibei handles 60% of China's gold jewelry trade, gold 200+ RMB/gram below branded retail.",
    markets: ["赛格电子市场 SEG Electronics Market — Electronics components, 10 floors, 3,000+ booths", "华强电子世界 Huaqiang Electronics World — 7 floors, 3,000+ stores", "远望数码城 Yuanwang Digital Mall — Phones, digital products, accessories"],
    marketImages: ["images/markets/RFGyalZS9fe1rZZS4Le54IVcmw.webp", "images/markets/CRf9MGiFqXmBmFEhnbglsqy3Nuk.webp", "images/markets/WXR1t7UCpvpllLkmEKIKGDGM2H8.webp"],
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
    longDesc: "Electronic information industry crossed the ¥1 trillion mark — 1 in 5 smartphones worldwide built here. South China's precision mould capital. 1 in 3 Barbie dolls manufactured here, 500 million+ pairs of shoes exported annually. Dalang produces 900 million sweaters a year. Houjie: 5km Furniture Avenue with 600+ companies.",
    markets: ["富民服装批发市场 Fumin Clothing Market — 300,000 sqm, women's fashion", "黄河时装城 Yellow River Fashion City — Korean-style, menswear", "大莹女装批发城 Dayin Women's Wear City — Mid-range women's fashion, e-commerce hub"],
    marketImages: ["images/markets/VQPAF40inTDYpA6yfSvg986D8WE.webp", "images/markets/jPPpoGGedMZfKfOLG5DZMoGXevU.webp", "images/markets/zoURNvcLKjSrCVOS0bHvwQ4B8t4.webp"],
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
    longDesc: "Produces 50–75% of all furniture made in China. 7,000+ factories, 20 million sqm of showrooms. 54% of China's tile production, 25% of global output — 5,000 years of ceramic heritage. Midea and Galanz HQ — Shunde produces 50%+ of the world's air conditioners.",
    markets: ["罗浮宫国际家具博览中心 Louvre Furniture Expo — 380,000 sqm, 2M visitors/year", "红星美凯龙乐从 Red Star Macalline Lecong — Furniture wholesale", "顺联家具城北区 Sunlink Furniture City North — Lecong/Longjiang corridor"],
    marketImages: ["images/markets/p3FiQrTRxFg2hQo5d9Lw12FikG4.webp", "images/markets/4zGuwGJbZqzjOVcafET526FDQaU.webp", "images/markets/7RVWS73ylRzSSayYkAKhyFes.webp"],
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
    longDesc: "75,000 booths, 2.1 million products across 26 categories. 6.4 million sqm of trading space, 220,000 daily visitors. Datang produces 27 billion pairs of socks annually — 70% of China's market. 60–80% of the world's Christmas decorations. 836.5 billion yuan in exports to 210+ countries.",
    markets: ["国际商贸城一区 Int'l Trade City D1 — Toys, jewelry, crafts, 10,000+ booths", "国际商贸城二区 Int'l Trade City D2 — Bags, hardware, electronics, 8,000+ booths", "国际商贸城三区 Int'l Trade City D3 — Stationery, cosmetics, office supplies"],
    marketImages: ["images/markets/y44FvhOiloMiOniBOc7upEIIBUg.webp", "images/markets/xquJBcWwwptDtvnb0LWA6IOvnKo.webp", "images/markets/wOiAAselZTkXJmZfVHoFlGNTNvc.webp"],
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
    longDesc: "Cixi makes ~60% of the world's small home appliances — 2,000 factories, 10,000 component suppliers. 25% of China's die-casting mold output from Beilun district alone. Yuyao and Cixi produce for global housewares brands — 15–30% cheaper than competing regions. Capital of Chinese Stationery — one-fifth of national output.",
    markets: ["慈溪小家电产业集群 Cixi Small Appliance Cluster — ~60% global output", "余姚中国塑料城 Yuyao Plastic Industrial Zone — \"China Plastic City\"", "慈溪厨具制造 Cixi Kitchenware Zone — Kitchenware and cookware manufacturing"],
    marketImages: ["images/markets/6liB6XhWFmPYl0Twht2i4c3cPM.webp", "images/markets/6ivnbC3WtzG4kLlibG2Ifnz5PcA.webp", "images/markets/zcp1ZB94DlBXz4CbpdgdS7BxY.webp"],
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
    longDesc: "World's busiest port, China's first FTZ, and HQ of every major freight forwarder and inspection agency. South Bund Fabric Market: 285 tailor shops, world-famous bespoke tailoring at ⅓ European pricing. Zhangjiang Hi-Tech Park: China's semiconductor capital — 307 IC enterprises, 480 billion yuan revenue.",
    markets: ["七浦路服装批发市场 Qipu Road Clothing Market — 680m street, 10+ mall buildings", "南外滩面料市场 South Bund Fabric Market — 285 tailor shops, bespoke", "凯旋城服装市场 Kaixuancheng Clothing Market — 20,000+ sqm fashion wholesale"],
    marketImages: ["images/markets/k9igOM1Knh1yLEorzbcjA2Cgwrk.webp", "images/markets/FLkivyINxzBhEdDSU9fIjlqbAM.webp", "images/markets/XDylLDY1n19glburnlUnBSBhfo.webp"],
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
    longDesc: "Guzhen produces 70% of China's lighting — 30,000+ companies, from LED chips to crystal chandeliers. Vertically integrated supply chain from raw materials to finished products. Xiaolan: China's Hardware Manufacture Base and Lock Export Base — one-third of China's lock exports, 150+ smart lock manufacturers.",
    markets: ["星光联盟 Star Alliance Global Lighting — 360,000 sqm, international pavilion", "华艺广场 Huayi International Lighting Plaza — 200,000 sqm, R&D tech park", "世纪灯饰广场 Century Lighting Square — Mid-to-high-end lighting"],
    marketImages: ["images/markets/m1EKdxXU3ZU7mmDBMyFl2jfAug.webp", "images/markets/g8hwtRsA0BkBYKo8h8UcKrmYPnI.webp", "images/markets/jFVHwZtVKmLjoSNkTO3XkSGZdc.webp"],
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
    longDesc: "City of Silk with 4,700 years of heritage. Produces approximately half of China's chemical fiber fabric. Shengze houses thousands of production enterprises with massive annual fabric output. Huqiu: 70–80% of China's wedding dresses. Electronic information industry at RMB 1,431.3 billion in output.",
    markets: ["东方丝绸市场 Eastern Silk Market — 7,000+ booths, 100B RMB annual", "常熟招商城 Changshu Garment City — 9,000+ shops, 35 sub-markets", "虎丘婚纱城 Huqiu Bridal City — 70–80% of China's wedding dresses"],
    marketImages: ["images/markets/YWTjmPW59kw2dHlrk0szualsm00.webp", "images/markets/jKFiXErx9OBfnvV6y6mLbJXpBI.webp", "images/markets/G21w24MVl1zaoR3DqwBslxBSVt4.webp"],
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
    longDesc: "80% of the world's sunglasses are made here — the largest global manufacturer, built from Taiwanese investment in the late 1980s. 6 out of 10 home treadmills globally are 'Made in Xiamen.' World's #1 stone import/export port. 40% of China's LED lighting exports. Historic tea export gateway since 1689.",
    markets: ["精商眼镜批发市场 Jingshang Eyewear Market — Sunglasses, optical frames", "厦门国际石材中心 Xiamen Int'l Stone Center — 56,000 sqm showroom", "夏商五村灯饰城 Xiashang Wucun Lighting City — LED, commercial lighting"],
    marketImages: ["images/markets/fhrFJUa8xGG2hySMG4yDllBqbsk.webp", "images/markets/ZIckuI0VmqhwnAwhPSGLl24kblw.webp", "images/markets/yNyxQn6XoGgL75ASJEtoHkcIs8.webp"],
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
    longDesc: "China's Rubber Valley — 700+ enterprises, 35+ tire plants, sister city with Akron, Ohio. The only city home to both the #1 global appliance brand (Haier) and the #2 global TV brand (Hisense). 70% of the world's false eyelashes come from Pingdu — 5,000+ companies, a 50-year legacy.",
    markets: ["即墨服装批发市场 Jimo Clothing Market — 9,000+ shops, knitwear hub", "青岛国际珠宝城 Qingdao Int'l Jewellery City — Pearls, gemstones", "青岛义乌小商品市场 Qingdao Yiwu Smallware Market — Daily necessities"],
    marketImages: ["images/markets/jDnfL2DeWzQ4j0VuPEcpuLkvTw.webp", "images/markets/RLjIoRBI9on7VDdX1AYHMXpJ0MU.webp", "images/markets/A36aEDJAMSxAB2p1JVxhImZK9s0.webp"],
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
    longDesc: "Alibaba HQ, 1688 platform, 65,000+ cross-border sellers — China's undisputed e-commerce capital. 1688 connects over 100 million active buyers. Sijiqing: China's 'Garment First Street' with 15,000 vendors across 20+ buildings. 2,000 years of silk heritage. Processes 70% of cross-border payment settlements nationally.",
    markets: ["四季青服装市场 Sijiqing Clothing Market — 15,000 vendors, 20+ buildings", "中国丝绸城 Chinese Silk City — 600+ enterprises, largest silk market", "环北丝绸服装城 Huanbei Silk & Clothing City — 100,000 sqm, 11 floors"],
    marketImages: ["images/markets/hIsnYtYsABadVOOD3gXJiBW51k.webp", "images/markets/GqUSJ8rTsBpQADzFoMj6cc27zwE.webp", "images/markets/wUY7rwAYMKXzagppKhOGo9cgXrk.webp"],
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
    longDesc: "1 in 5 global sneakers made here — 7,000+ enterprises, over 1 billion pairs a year from Chendai Town alone. Home to Anta (¥62.36B revenue), Peak, 361°, and Xtep. Shishi Garment City: Asia's largest — 4,782 shops, ¥30 billion annual transactions. Nan'an produces 65% of China's stone slabs and 70% of its plumbing valves.",
    markets: ["晋江国际鞋纺城 Jinjiang Shoe & Textile City — 1,014 merchants, ¥49.5B turnover", "石狮服装城 Shishi Garment City — 600,000 sqm, 4,782 shops", "青创城国际网批中心 Qingchuang City Online Wholesale — 1,000+ stalls, e-commerce"],
    marketImages: ["images/markets/39TcllDvZzaIUrWNhV8IVYicDys.webp", "images/markets/0rz90LXJS1bSHxyXJqzyvv71M.webp", "images/markets/HKH3cbHJ5Dj6XFdk19PXNAdMZM.webp"],
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
    longDesc: "One-third of the world's laptops manufactured here — Foxconn, Luxshare, Compal, and MSI under one roof. Hundreds of CNC and precision manufacturers achieving accuracy to ±1μm. Giant and Shimano both chose Kunshan as their China manufacturing base. 2,360+ foreign companies from 51 countries.",
    markets: ["昆山经济技术开发区 KETD Zone — 2,360+ foreign companies, electronics assembly", "昆山综合保税区 Kunshan Bonded Zone — Export manufacturing, duty-free", "昆山高新技术产业开发区 Hi-tech Zone — R&D, new materials, advanced manufacturing"],
    marketImages: ["images/markets/tj5gUDn6yEYtGZ9RGzpd9Vmrkg.webp", "images/markets/LKzjqzPKxhAcvtxVGIxkVxQm8Hs.webp", "images/markets/4BYge7jk9ffj3qZBK07OllpxTL4.webp"],
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
    longDesc: "75% of China's lenses, 50% of the world's — 400 million spectacle lenses a year. 1,600+ enterprises including 600+ manufacturers. 100 million+ frames per year in metal, acetate, titanium, and TR90. Complete supply chain from raw materials to finished frames, with dramatic cost advantages versus European competitors.",
    markets: ["丹阳国际眼镜城 Danyang Int'l Optical Center — 600+ shops, 6B+ yuan annual", "丹阳眼镜产业园 Danyang Eyewear Industrial Park — 600+ OEM/ODM factories", "司徒镇眼镜制造基地 Situ Town Manufacturing Zone — Lens grinding, coating"],
    marketImages: ["images/markets/KBKIiATnnv2YkMaJVleURjMSI.webp", "images/markets/jUgoabTW6UmC6KmIrSIoees5yY.webp", "images/markets/bzqh5QdRpoeCM3JXmEpJ4jSl6EQ.webp"],
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
    longDesc: "Foxconn's largest campus — 500,000 iPhones per day, roughly half the world's supply. China's #1 rail freight hub — CR Express to Hamburg in 15 days vs 36 by sea. China's breadbasket — #1 wheat province, frozen dumplings, instant noodles, and snack food capital.",
    markets: ["郑州国际鞋城 Zhengzhou Int'l Shoes City — 2,500 merchants, 4B+ yuan annual", "火车站商圈 Railway Station Business District — Clothing wholesale hub", "银河万货城 Yinhe Wanhuo City — Toys, small commodities, household goods"],
    marketImages: ["images/markets/NiVckMyDclowHlRfj3k06Um1LCU.webp", "images/markets/xySgMqodJBViAmT3MRptBftFDX4.webp", "images/markets/Wqh4U1nGGavUfQm1r9Yjt7sYcL0.webp"],
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
    longDesc: "Tianfu Software Park: 600+ companies, 34 Fortune 500 tenants, 60,000 IT workers. Labour costs 30–40% below Beijing/Shanghai. Tests half of global CPU production, manufactures 60% of iPads. FDA-certified peptide manufacturing. Sichuan peppercorns, doubanjiang, tea — the flavours behind one of China's Eight Great Cuisines.",
    markets: ["荷花池批发市场 Hehuachi Wholesale Market — Largest in Southwest China", "五块石茶叶市场 Wukuaishi Tea & Spice Market — Tea, spices, dried goods", "九龙广场 Kowloon Plaza — 11 floors, clothing, electronics, leather"],
    marketImages: ["images/markets/H8ycktxokaOK1sv7GNIhoRxOSRI.webp", "images/markets/5Rj0PcHzwqB3VdKrfksgWA2A7E4.webp", "images/markets/XJSK73wkzYsk6rBNM6t2tLD0ozk.webp"],
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
    longDesc: "Produces roughly 30% of the world's laptops — over 55 million units annually, #1 globally for seven consecutive years. Changan Automobile — one of China's 'Big Four' automakers — headquartered here. Four major motorcycle brands: Zongshen, Lifan, Loncin, Jialing. Hotpot condiments exported to 20+ countries.",
    markets: ["朝天门批发市场 Chaotianmen Wholesale Market — 370,000 sqm, 15,000+ stalls", "盘溪批发市场 Panxi Wholesale Market — Spices, dried chilies, hotpot ingredients", "新重庆国际小商品批发中心 New Chongqing Small Commodity Center — Household goods"],
    marketImages: ["images/markets/eziv9uHibhYQcxJuTYSDsZqDaM.webp", "images/markets/5OfuC5vU6YO3YbN6yNBA7OFZg.webp", "images/markets/AwpChuIbcevkncf2QAzx9TbqUQU.webp"],
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
    longDesc: "145 million children's vehicles per year — 50% of China's domestic market, 40% of global output. 120,000+ workers across the county. Complete supply chain — every component produced locally. From budget umbrella strollers to smart strollers with GPS and app control.",
    markets: ["河古庙镇工业区 Hegumiao Town Industrial Zone — Children's vehicle factories", "西庙村工厂集群 Ximiao Village Factory Cluster — Dense factory cluster", "平乡县工业区 Pingxiang County Industrial Area — Export-oriented factories"],
    marketImages: ["images/markets/l3qjQRaUh87y2M4x481BKO7JGH4.webp", "images/markets/znuhmyAZT5uy8o9CKcOiFhlzoQ.webp", "images/markets/WBqEqanLzB6d613APXAk88SS30w.webp"],
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
    longDesc: "Where sourcing deals are structured, not where products are made. Common law, English-language business environment, enforceable contracts. Free port — no customs tariffs, HKD pegged to USD, corporate tax at 16.5% with no VAT. Every major QC and inspection firm — SGS, Bureau Veritas, TUV, Intertek — operates from here.",
    markets: ["香港会议展览中心 HKCEC — HKTDC trade fairs, sourcing events", "玉器市场 Jade Market — Jade, pearls, gemstones", "利時商場 Rise Shopping Arcade — Designer jewelry, accessories"],
    marketImages: ["images/markets/BXs7lVUxuYy4u2HFhaOspxZHdk.webp", "images/markets/IwNKtcHvKd3quWmoFQDXwIRyqE.webp", "images/markets/0I78XJ2f1WwHSpS4hrCN1lknQ.webp"],
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
let isDragging = false;
let dragStartX = 0;
let dragScrollStart = 0;
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

// ── Continuous scroll animation — never stops ──
function continuousScroll() {
  if (!isDragging) {
    scrollPos += scrollSpeed;
    const setWidth = CITY_COUNT * (cardWidth + GAP);
    if (scrollPos >= setWidth) scrollPos -= setWidth;
    if (scrollPos < 0) scrollPos += setWidth;
    track.style.transform = `translateX(${-scrollPos}px)`;
  }
  animFrame = requestAnimationFrame(continuousScroll);
}

// ── Arrow buttons — jump one card ──
function jumpCard(direction) {
  const step = cardWidth + GAP;
  scrollPos += step * direction;
  const setWidth = CITY_COUNT * (cardWidth + GAP);
  if (scrollPos >= setWidth) scrollPos -= setWidth;
  if (scrollPos < 0) scrollPos += setWidth;
  track.style.transform = `translateX(${-scrollPos}px)`;
}

// ── Drag / swipe support ──
let dragMoved = false;

function onDragStart(x) {
  isDragging = true;
  dragMoved = false;
  dragStartX = x;
  dragScrollStart = scrollPos;
  wrapper.parentElement.classList.add("dragging");
}

function onDragMove(x) {
  if (!isDragging) return;
  const delta = dragStartX - x;
  if (Math.abs(delta) > 5) dragMoved = true;
  scrollPos = dragScrollStart + delta;
  const setWidth = CITY_COUNT * (cardWidth + GAP);
  if (scrollPos >= setWidth) scrollPos -= setWidth;
  if (scrollPos < 0) scrollPos += setWidth;
  track.style.transform = `translateX(${-scrollPos}px)`;
}

function onDragEnd() {
  isDragging = false;
  wrapper.parentElement.classList.remove("dragging");
}

function setupDrag() {
  // Mouse drag
  wrapper.addEventListener("mousedown", (e) => {
    e.preventDefault();
    onDragStart(e.clientX);
  });
  document.addEventListener("mousemove", (e) => {
    if (isDragging) onDragMove(e.clientX);
  });
  document.addEventListener("mouseup", () => {
    if (isDragging) onDragEnd();
  });

  // Touch drag
  wrapper.addEventListener("touchstart", (e) => {
    onDragStart(e.touches[0].clientX);
  }, { passive: true });
  document.addEventListener("touchmove", (e) => {
    if (isDragging) onDragMove(e.touches[0].clientX);
  }, { passive: true });
  document.addEventListener("touchend", () => {
    if (isDragging) onDragEnd();
  });
}

// ── Card Click (ignore if drag occurred) ──
function handleCardClick(e) {
  if (dragMoved) return; // was a drag, not a tap

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
}

// ═══════════════════════════════════════════════════════
// CITY MODAL (non-Guangzhou)
// ═══════════════════════════════════════════════════════

function showCityModal(city) {

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
      .map((m, i) => {
        // Parse "Name — Detail" format
        const parts = m.split(" — ");
        const name = parts[0] || m;
        const detail = parts[1] || "";
        const imgUrl = (city.marketImages && city.marketImages[i]) || "";
        return `
        <div class="market-card">
          ${imgUrl ? `<div class="market-card-img" style="background-image: url(${imgUrl})"></div>` : ""}
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
  modalQr.src = `qr/${city.slug}.svg`;
  modalQrUrl.textContent = `sourcing.worldfirst.com`;

  modal.classList.add("active");
}

function hideCityModal() {
  modal.classList.remove("active");
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

  // Setup drag and interactions
  setupDrag();
  track.addEventListener("click", handleCardClick);

  // Arrow buttons
  document.getElementById("nav-left").addEventListener("click", () => jumpCard(-1));
  document.getElementById("nav-right").addEventListener("click", () => jumpCard(1));

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
    if (e.key === "ArrowLeft") jumpCard(-1);
    if (e.key === "ArrowRight") jumpCard(1);
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

  // Start continuous animation — never stops
  continuousScroll();
}

document.addEventListener("DOMContentLoaded", init);
