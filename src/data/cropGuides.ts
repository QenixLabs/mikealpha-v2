export type CropHighlight = {
  title: string;
  text: string;
};

export type GrowthStage = {
  name: string;
  products: string[];
};

export type FoliarProgram = {
  stage: string;
  product: string;
  concentration?: string;
  sprayVolume?: string;
  maxRate?: string;
};

export type CropResource = {
  text: string;
  href: string;
  icon: 'recommendation' | 'pdf' | 'article' | 'tag';
};

export type CropGuideData = {
  cropName: string;
  category: string;
  slug: string;
  title: string;
  h1: string;
  bannerImage: string;
  mobileBannerImage?: string;
  h2: string;
  h3: string;
  body: string[];
  intro?: string[];
  highlights?: CropHighlight[];
  growthStages?: GrowthStage[];
  foliarPrograms?: FoliarProgram[];
  notes?: string[];
  resources?: CropResource[];
  recommendationsLink?: { text: string; href: string };
  relatedTagsLink?: { text: string; href: string };
  sourceLink?: { text: string; href: string };
};

export const cropGuides: CropGuideData[] = [
  {
    "cropName": "Artichoke",
    "category": "Vegetables",
    "slug": "artichoke-fertilizer",
    "title": "Artichoke | Haifa Group",
    "h1": "Artichoke Fertilizer & Crop Guide",
    "bannerImage": "/crops/banners/artichoke-fertilizer.jpg",
    "h2": "Artichoke crop guide \u2013 get the most of your artichoke fertilizer",
    "h3": "The globe artichoke (Cynara cardunculus var. scolymus)[1] is a variety of a species of thistle cultivated as a food.",
    "body": [
      "The edible portion of the plant consists of the flower buds before the flowers come into bloom. The budding artichoke flower-head is a cluster of many budding small flowers (an inflorescence), together with many bracts, on an edible base. Once the buds bloom, the structure changes to a coarse, barely edible form. Another variety of the same species is the cardoon, a perennial plant native to the Mediterranean region. Both wild forms and cultivated varieties (cultivars) exist.\u00a0\nSource: Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-25.jpg?itok=v_Igv7JC",
    "recommendationsLink": {
      "text": "Artichoke plants: a fertilization program | Read More",
      "href": "https://www.haifa-group.com/artichoke-plants-fertilization-program"
    },
    "relatedTagsLink": {
      "text": "All related tags for Artichoke",
      "href": "https://www.haifa-group.com/plants-family/artichoke"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Artichoke"
    }
  },
  {
    "cropName": "Lettuce",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/lettuce-fertilizers-crop-guide",
    "title": "Lettuce Fertilizers & Crop Guide | Haifa Group",
    "h1": "Lettuce Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-lettuce-fertilizers-crop-guide.jpg",
    "h2": "Lettuce Guide: get the most out of your lettuce fertilizer",
    "h3": "Lettuce Crop Highlights",
    "body": [
      "Lettuce (Lactuca sativa), the popular leafy vegetable, originates from the Mediterranean region. It has been cultivated for over 4,500 years, with historical records showing its use even in ancient Egypt. Major cultivation areas include California and Arizona in the United States, Europe (notably Spain and Italy), and parts of Asia such as China.",
      "Successful lettuce yields require careful planning of the crop\u2019s nutrition and attentive monitoring throughout the growth season, with special attention given to the health of the leaves, the edible part of the crop.",
      "Haifa's pioneering Nutri Haitech\u2122 approach delivers complete nutritional solutions for precision agriculture. Designed to enhance the sustainability and efficiency of your operations, Nutri Haitech\u2122 minimizes waste and pollution while boosting your lettuce yields.",
      "TemperatureLettuce prefers temperate climates, thriving at temperatures between 15-18\u00b0C (60-65\u00b0F). It is sensitive to high heat, which can cause bolting and bitterness.",
      "Calcium: prevent tip burnThis common disorder, manifested by necrosis of the margins of inner leaves, is caused by calcium deficiency, rapid growth, and inconsistent water supply. It can be prevented by an adequate supply of water and calcium and maintaining proper humidity.",
      "Nitrate: beware of leaf toxicityIn low light conditions, nitrates tend to accumulate in leaves, reaching levels that must not be consumed by humans. To prevent this, nitrogen fertilization should balance nitrate and ammonium while also ensuring proper lighting.",
      "Potassium: keep chlorosis away\u00a0Under conditions of potassium deficiency or when high levels of sodium in the soil or irrigation water interfere with potassium uptake, leaf edges tend to turn yellow (\u201cmarginal chlorosis\u201d) and then brown (necrosis). To avoid this, monitor sodium levels in the irrigation water and soil solution throughout the season and make corrections whenever needed.",
      "Magnesium & Iron for lush leaves\u00a0While magnesium deficiency causes interveinal yellowing in older leaves, iron deficiency causes the same disorder in young leaves. To keep the entire head in good shape, maintain well-balanced soil fertility and, importantly, proper pH levels to ensure the availability of metallic ions.",
      "Get lettuce crop fertilization recommendations"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-16_10.jpg?itok=stpd7Mji",
    "recommendationsLink": {
      "text": "Lettuce Fertilizer Recommendations | Read More",
      "href": "https://www.haifa-group.com/crop-guide/vegetables/lettuce-fertilizers-crop-guide/recommendations"
    }
  },
  {
    "cropName": "Broccoli",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/broccoli-fertilizers-crop-guide",
    "title": "Broccoli Fertilizers & Crop Guide | Haifa Group",
    "h1": "Broccoli Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-broccoli-fertilizers-crop-guide.jpg",
    "h2": "Get the most of your broccoli fertilizer",
    "h3": "Broccoli is an edible green plant in the cabbage family whose large flowering head is eaten as a vegetable.",
    "body": [],
    "intro": [
      "Broccoli is classified in the Italica cultivar group of the species Brassica oleracea. Broccoli has large flower heads, usually green in color, arranged in a tree-like structure branching out from a thick, edible stalk. The mass of flower heads is surrounded by leaves. Broccoli resembles cauliflower, which is a different cultivar group of the same species.",
      "Successful broccoli production depends on a well-planned fertilization program that supplies nitrogen, phosphorus, potassium, calcium, and micronutrients at the right times. Haifa's premium fertilizers and Nutrigation™ programs help growers maximize head size, quality, and yield."
    ],
    "highlights": [
      { "title": "Cool-season crop", "text": "Broccoli grows best at 15–20°C. High temperatures cause buttoning, loose heads, and poor quality." },
      { "title": "Calcium for head quality", "text": "Adequate calcium prevents tip burn and brown bead disorders during curd development." },
      { "title": "Nitrogen timing", "text": "Split nitrogen applications through the season, with higher rates during vegetative growth and head development." },
      { "title": "Boron importance", "text": "Boron deficiency causes hollow stems and cracked heads. Monitor micronutrients regularly." },
      { "title": "Well-drained soils", "text": "Broccoli prefers fertile, well-drained soils with pH 6.0–7.0 for optimal nutrient availability." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Haifa MAP™", "Multicote™ Agri"] },
      { "name": "Establishment", "products": ["Haifa MAP™", "Poly-Feed™ GG", "Haifa Micro™ Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K™", "Poly-Feed™ GG", "Haifa Mag™", "Haifa Micro™ Combi"] },
      { "name": "Head development", "products": ["Multi-K™", "Haifa Cal™", "Haifa Mag™", "Haifa Bonus™"] }
    ],
    "notes": [
      "Avoid water stress during head development to prevent disorders and improve head firmness.",
      "Regular leaf analysis helps fine-tune nutrition and correct deficiencies before they affect yield."
    ],
    "resources": [
      { "text": "Fertilization of broccoli: Supplying all the needed nutrients for better yield | Read More", "href": "https://www.haifa-group.com/fertilization-broccoli-supplying-all-needed-nutrients-better-yield-0", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation™ for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-23.jpg?itok=2y8FA0yV",
    "recommendationsLink": {
      "text": "Fertilization of broccoli: Supplying all the needed nutrients for better yield | Read More",
      "href": "https://www.haifa-group.com/fertilization-broccoli-supplying-all-needed-nutrients-better-yield-0"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Broccoli"
    }
  },
  {
    "cropName": "Melon",
    "category": "Vegetables",
    "slug": "crop-guide/field-crops/melon-fertilizer",
    "title": "Melon Fertilizers & Crop Guide | Haifa Group",
    "h1": "Melon Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-melon-fertilizer.jpg",
    "h2": "Melon crop guide - get the most of your melon fertilizer",
    "h3": "Sweet, high-quality melons start with precise nutrition and irrigation management.",
    "body": [],
    "intro": [
      "Melons are warm-season crops that demand careful attention to water, nutrients, and environmental conditions. From germination through fruit ripening, each growth stage has specific nutritional needs that directly affect sugar content, fruit size, and shelf life.",
      "Haifa's complete fertilizer portfolio supports melon growers with proven Nutrigation™ programs, controlled-release fertilizers, and foliar solutions designed to maximize yield and fruit quality."
    ],
    "highlights": [
      { "title": "Warm temperatures", "text": "Melons thrive at 25–30°C during the day and 18–20°C at night. Cold soils delay germination and early growth." },
      { "title": "Potassium for sugar", "text": "High potassium availability during fruit development is essential for sugar accumulation and flavor." },
      { "title": "Calcium for rind quality", "text": "Adequate calcium strengthens cell walls, improving rind firmness and storage life." },
      { "title": "Controlled irrigation", "text": "Drip irrigation with Nutrigation™ delivers water and nutrients precisely while preventing fruit cracking." },
      { "title": "Salinity sensitivity", "text": "Melons are sensitive to salinity. Monitor EC and use chloride-free potassium sources when possible." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Multicote™ Agri", "Haifa MAP™", "Poly-Feed™ GG"] },
      { "name": "Establishment", "products": ["Haifa MAP™", "Poly-Feed™ GG", "Haifa Micro™ Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K™", "Poly-Feed™ GG", "Haifa Mag™", "Haifa Micro™ Combi"] },
      { "name": "Flowering & fruit set", "products": ["Multi-K™", "Haifa Cal™", "Haifa Mag™", "Haifa Micro™ Combi"] },
      { "name": "Fruit development", "products": ["Multi-K™", "Haifa Bonus™", "Haifa Cal™", "Haifa Mag™"] },
      { "name": "Ripening", "products": ["Haifa Bonus™", "Haifa Cal™"] }
    ],
    "notes": [
      "Reduce irrigation in the final week before harvest to increase sugar concentration.",
      "Foliar applications of calcium and boron can improve fruit set and skin quality."
    ],
    "resources": [
      { "text": "Growing melons with Haifa fertilizers | Read More", "href": "https://www.haifa-group.com/growing-melons-haifa-fertilizers", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation™ for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-17.jpg?itok=z-t9RNjB",
    "recommendationsLink": {
      "text": "Growing melons with Haifa fertilizers | Read More",
      "href": "https://www.haifa-group.com/growing-melons-haifa-fertilizers"
    }
  },
  {
    "cropName": "Cabbage",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/cabbage",
    "title": "Cabbage Fertilizer - Haifa Group",
    "h1": "Cabbage Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-cabbage.jpg",
    "h2": "Cabbage crop guide \u2013 get the most of your cabbage fertilizer",
    "h3": "Cabbage or headed cabbage (comprising several cultivars of Brassica oleracea) is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads.",
    "body": [],
    "intro": [
      "Cabbage is descended from the wild cabbage, B. oleracea var. oleracea, and belongs to the \"cole crops\", meaning it is closely related to broccoli and cauliflower (var. botrytis); Brussels sprouts (var. gemmifera); and savoy cabbage (var. sabauda). Brassica rapa is commonly named Chinese, celery or napa cabbage and has many of the same uses.",
      "A well-balanced fertilization program is essential for producing compact, high-quality cabbage heads. Haifa's fertilizers provide the nitrogen, phosphorus, potassium, calcium, and micronutrients needed throughout the crop cycle."
    ],
    "highlights": [
      { "title": "Cool-season crop", "text": "Cabbage grows best at 15\u201320\u00b0C. High temperatures cause loose heads and poor head formation." },
      { "title": "Nitrogen for leaf growth", "text": "Adequate nitrogen is critical for leaf development and head filling. Split applications for best efficiency." },
      { "title": "Potassium and calcium", "text": "Potassium supports head firmness and calcium helps prevent internal tip burn." },
      { "title": "Boron and molybdenum", "text": "These micronutrients are essential for cole crops; deficiencies cause disorders and reduced yield." },
      { "title": "Soil pH", "text": "Maintain pH 6.0\u20136.8 for optimal nutrient uptake and to prevent clubroot disease." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Haifa MAP\u2122", "Multicote\u2122 Agri", "Haifa Micro\u2122 Combi"] },
      { "name": "Establishment", "products": ["Haifa MAP\u2122", "Poly-Feed\u2122 GG", "Haifa Micro\u2122 Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K\u2122", "Poly-Feed\u2122 GG", "Haifa Mag\u2122"] },
      { "name": "Head development", "products": ["Multi-K\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122", "Haifa Bonus\u2122"] }
    ],
    "notes": [
      "Ensure consistent soil moisture, especially during head development, to prevent splitting and tip burn.",
      "Regular leaf analysis helps detect micronutrient deficiencies before they reduce yield."
    ],
    "resources": [
      { "text": "Fertilization of cabbage and cauliflower in open field | Read More", "href": "https://www.haifa-group.com/fertilization-cabbage-and-cauliflower-open-field-1", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "All related tags for Cabbage | Read More", "href": "https://www.haifa-group.com/plants-family/cabbage", "icon": "tag" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-22.jpg?itok=-jGvNvjM",
    "recommendationsLink": {
      "text": "Fertilization of cabbage and cauliflower in open field | Read More",
      "href": "https://www.haifa-group.com/fertilization-cabbage-and-cauliflower-open-field-1"
    },
    "relatedTagsLink": {
      "text": "All related tags for Cabbage",
      "href": "https://www.haifa-group.com/plants-family/cabbage"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Cabbage"
    }
  },
  {
    "cropName": "Onion",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/onion-fertilizers-crop-guide",
    "title": "Onion Fertilizer - Haifa Group",
    "h1": "Onion Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-onion-fertilizers-crop-guide.jpg",
    "h2": "Onion crop guide \u2013 get the most of your onion fertilizer",
    "h3": "Haifa's Onion Fertilizer Products",
    "body": [],
    "intro": [
      "Experienced onion growers seeking quality yields know that careful planning and management of fertilization is a must. Haifa, leveraging decades of expertise, empowers onion growers with a comprehensive guide that explores onion nutrition, offering detailed recommendations based on premium onion fertilizer products. With this knowledge, you can maximize the effectiveness of your onion fertilizer program, driving higher yields and a superior cost-to-benefit ratio.",
      "Haifa's pioneering Nutri Haitech\u2122 approach delivers complete nutritional solutions for precision agriculture. Designed to enhance the sustainability and efficiency of your operations, Nutri Haitech\u2122 minimizes waste and pollution while boosting your onion yields."
    ],
    "highlights": [
      { "title": "Mild climate preference", "text": "Onions grow best in mild climates without extreme temperatures or excessive rainfall." },
      { "title": "Soil flexibility", "text": "They can be cultivated in various soil types, but medium-textured soils are preferred." },
      { "title": "Balanced NPK needs", "text": "Onions require balanced fertilization with nitrogen, phosphorus, and potassium." },
      { "title": "Shallow root system", "text": "They have a shallow root system, so maintaining nutrients and soil moisture in the topsoil is crucial." },
      { "title": "Avoid excess nitrogen", "text": "Excessive nitrogen can make onions more susceptible to damage and disease." },
      { "title": "Phosphorus for roots", "text": "Phosphorus is important for root development, and it's best to apply it in multiple stages." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Multicote\u2122 Agri 15-15-15", "Haifa MAP\u2122"] },
      { "name": "Establishment", "products": ["Haifa MAP\u2122", "Poly-Feed\u2122 GG", "Poly-Feed\u2122 Foliar"] },
      { "name": "Vegetative growth", "products": ["Multi-K\u2122", "Haifa Turbo-K\u2122 15-15-15", "Poly-Feed\u2122 GG", "Poly-Feed\u2122 Foliar"] },
      { "name": "Bulb initiation", "products": ["Multi-K\u2122", "Haifa Mag\u2122", "Haifa Cal\u2122"] },
      { "name": "Bulb development", "products": ["Multi-K\u2122", "Haifa Turbo-K\u2122 15-15-15", "Haifa Bonus\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] },
      { "name": "Maturation", "products": ["Haifa Bonus\u2122", "Poly-Feed\u2122 Foliar"] }
    ],
    "notes": [
      "Foliar application of nutrients can provide additional fertilization and correct deficiencies during critical growth stages.",
      "The formula should be determined according to the growth condition and stage."
    ],
    "resources": [
      { "text": "Complete fertilization program for onion | Read More", "href": "https://www.haifa-group.com/complete-fertilization-program-onion", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation™ for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_650x575-300dpi_05.jpg?itok=dAQD91x6"
  },
  {
    "cropName": "Carrot",
    "category": "Vegetables",
    "slug": "carrot-fertilizer",
    "title": "Carrot Fertilizer - Crop Guide - Haifa Group",
    "h1": "Carrot Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/carrot-fertilizer.jpg",
    "h2": "Carrot crop guide \u2013 get the most of your carrot fertilizer",
    "h3": "Grow smooth, uniform, high-quality carrots with a precise fertilization and irrigation program.",
    "body": [],
    "intro": [
      "Carrots are root vegetables that require loose, well-drained soils and a balanced supply of nutrients to produce straight, smooth roots. Poor nutrition or uneven watering causes forking, cracking, and reduced marketable yield.",
      "Haifa's fertilizer programs for carrots combine base dressing, side-dressing, and foliar applications to supply nitrogen, phosphorus, potassium, calcium, and micronutrients at the right times."
    ],
    "highlights": [
      { "title": "Soil preparation", "text": "Carrots need deep, stone-free, well-drained loamy soils. Compacted or stony soils cause deformed roots." },
      { "title": "Phosphorus for early roots", "text": "Phosphorus is critical for taproot establishment and early growth. Apply near the seed at planting." },
      { "title": "Potassium for quality", "text": "Adequate potassium improves root shape, sugar content, and storage life." },
      { "title": "Avoid excess nitrogen", "text": "Too much nitrogen causes excessive top growth, branched roots, and reduced quality." },
      { "title": "Calcium and boron", "text": "These nutrients support cell wall strength and help prevent cracking and physiological disorders." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Haifa MAP\u2122", "Multicote\u2122 Agri", "Poly-Feed\u2122 GG"] },
      { "name": "Germination", "products": ["Haifa MAP\u2122", "Poly-Feed\u2122 Foliar"] },
      { "name": "Root establishment", "products": ["Multi-K\u2122", "Haifa MAP\u2122", "Haifa Micro\u2122 Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K\u2122", "Poly-Feed\u2122 GG", "Haifa Mag\u2122"] },
      { "name": "Root development", "products": ["Multi-K\u2122", "Haifa Cal\u2122", "Haifa Bonus\u2122", "Haifa Mag\u2122"] },
      { "name": "Maturation", "products": ["Haifa Bonus\u2122", "Poly-Feed\u2122 Foliar"] }
    ],
    "notes": [
      "Maintain consistent soil moisture to prevent root cracking and bitterness.",
      "Avoid fresh manure and high-nitrogen fertilizers late in the season."
    ],
    "resources": [
      { "text": "How to grow carrots with Haifa fertilizers | Read More", "href": "https://www.haifa-group.com/how-grow-carrots-haifa-fertilizers", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "All related tags for Carrot | Read More", "href": "https://www.haifa-group.com/plants-family/carrot", "icon": "tag" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-15.jpg?itok=W0SCVg7P",
    "recommendationsLink": {
      "text": "How to grow carrots with Haifa fertilizers | Read More",
      "href": "https://www.haifa-group.com/how-grow-carrots-haifa-fertilizers"
    },
    "relatedTagsLink": {
      "text": "All related tags for Carrot",
      "href": "https://www.haifa-group.com/plants-family/carrot"
    }
  },
  {
    "cropName": "Pepper",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/pepper-fertilizers-crop-guide",
    "title": "Pepper Fertilizers & Crop Nutrition - Haifa Group",
    "h1": "Pepper Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-pepper-fertilizers-crop-guide.jpg",
    "h2": "Suit Pepper Fertilizer Products and Nutrition Plan to Growth Needs",
    "h3": "Optimize pepper nutrition through every growth stage with Haifa's precision fertilizers.",
    "body": [],
    "intro": [
      "Experienced pepper growers understand that achieving consistent high yields requires strategic planning. Pepper is a versatile crop grown worldwide in diverse environments, from open fields to soilless greenhouses. The crop's adaptability necessitates adjusting fertilization to match specific growth conditions.",
      "With decades of expertise, Haifa offers a comprehensive guide to pepper nutrition, featuring detailed recommendations for premium pepper fertilizer products and valuable cultivation insights. This knowledge empowers you to optimize your pepper fertilizer program, maximizing yields and ensuring a superior cost-to-benefit ratio."
    ],
    "highlights": [
      { "title": "Tailor nutrition to growth stages", "text": "Pepper plants have distinct nutritional needs at each stage. Match fertilizer formulas to vegetative growth, flowering, fruit set, and ripening." },
      { "title": "Choose the right nitrogen source", "text": "Favor nitrate-N over ammonium-N (optimal NO\u2083:NH\u2084 = 4:1) to ensure balanced uptake of potassium and calcium while avoiding vegetative overgrowth and poor fruit set." },
      { "title": "Ensure potassium availability", "text": "Potassium is vital for fruit development, carbohydrate accumulation, and stress resistance. Apply it abundantly from flowering onwards to boost yield and quality." },
      { "title": "Prevent calcium deficiencies & BER", "text": "Calcium is crucial for cell wall integrity. Inadequate calcium, especially during early fruit development, causes Blossom End Rot. Prevent BER with steady water supply, adequate calcium fertilization, and foliar calcium applications." },
      { "title": "Adapt irrigation to root structure", "text": "Use drip irrigation with Nutrigation\u2122 for precise nutrient and water delivery. Avoid both water stress and waterlogging to support healthy root systems and nutrient uptake." },
      { "title": "Manage salinity", "text": "Saline conditions interfere with uptake of key nutrients (K\u207a, NO\u2083\u207b, Ca\u00b2\u207a). Mitigate salinity effects with proper leaching, calcium applications, and variety selection." },
      { "title": "Soil suitability & disease prevention", "text": "Plant peppers in well-drained sandy loam soils with pH 6.5\u20137.5. Avoid planting after crops prone to soil-borne diseases (e.g., tomatoes, eggplants, potatoes)." },
      { "title": "Use leaf analysis for precision", "text": "Regularly monitor nutrient levels in leaves to identify deficiencies or excesses early and adjust fertilization accordingly for optimized crop performance." }
    ],
    "growthStages": [
      { "name": "Establishment & Vegetative", "products": ["Multi-K\u2122", "Haifa MAP\u2122", "Haifa Mag\u2122", "Haifa Cal GG\u2122", "Haifa Micro Combi\u2122", "Poly-Feed GG\u2122 (*)", "HaifaStim\u2122 Promo"] },
      { "name": "Flowering & fruit set", "products": ["Multi-K\u2122", "Haifa MAP\u2122", "Haifa Mag\u2122", "Haifa Cal GG\u2122", "Haifa Micro Combi\u2122", "Poly-Feed GG\u2122 (*)", "Poly-Feed\u2122 STIM Armor (*)"] },
      { "name": "Fruit development", "products": ["Multi-K\u2122", "Haifa Mag\u2122", "Haifa Cal GG\u2122", "Haifa Micro Combi\u2122", "Poly-Feed GG\u2122 (*)", "Poly-Feed\u2122 STIM Armor (*)", "HaifaStim\u2122 KIR", "HaifaStim\u2122 Calmaster"] },
      { "name": "Ripening & harvest", "products": ["Multi-K\u2122", "Haifa Mag\u2122", "Haifa Cal GG\u2122", "Haifa Micro Combi\u2122", "Poly-Feed GG\u2122 (*)", "HaifaStim\u2122 KIR", "HaifaStim\u2122 Calmaster"] }
    ],
    "notes": [
      "Supplement with foliar nutrition to quickly correct deficiencies or support development during critical stages.",
      "Incorporate biostimulants like HaifaStim\u2122 to enhance stress resistance (e.g., heat, salinity), fruit set, and quality.",
      "* The formula should be determined according to the growth condition and stage."
    ],
    "resources": [
      { "text": "Pepper Fertilizer & Crop Guide: Growing Pepper Crop | Read More", "href": "https://www.haifa-group.com/articles/crop-guide-growing-peppers", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation\u2122 for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_650x575-300dpi_06.jpg?itok=JqKGt2gk",
    "recommendationsLink": {
      "text": "Pepper Fertilizer & Crop Guide: Growing Pepper Crop | Read More",
      "href": "https://www.haifa-group.com/articles/crop-guide-growing-peppers"
    }
  },
  {
    "cropName": "Cauliflower",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/cauliflower-fertilizers-crop-guide",
    "title": "Cauliflower Fertilizers & Crop Guide | Haifa Group",
    "h1": "Cauliflower Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-cauliflower-fertilizers-crop-guide.jpg",
    "h2": "How to get the most out of your cauliflower crops",
    "h3": "Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the family Brassicaceae.",
    "body": [],
    "intro": [
      "Cauliflower is an annual plant that reproduces by seed. Typically, only the head is eaten \u2013 the edible white flesh sometimes called \"curd\" (similar appearance to cheese curd). The cauliflower head is composed of a white inflorescence meristem. Cauliflower heads resemble those in broccoli, which differs in having flower buds as the edible portion.",
      "Brassica oleracea also includes broccoli, brussels sprouts, cabbage, collard greens, and kale, collectively called \"cole\" crops, though they are of different cultivar groups. A steady nutrient supply is essential for uniform curd development and high marketable yield."
    ],
    "highlights": [
      { "title": "Cool temperatures", "text": "Cauliflower prefers 15\u201320\u00b0C for curd formation. Heat causes loose, ricey curds and poor quality." },
      { "title": "Nitrogen management", "text": "Adequate nitrogen supports leaf growth, but excess nitrogen delays maturity and reduces curd quality." },
      { "title": "Boron and molybdenum", "text": "These micronutrients are critical for cole crops; deficiencies cause brown curd and other disorders." },
      { "title": "Calcium for curd", "text": "Calcium supports cell wall integrity and helps prevent internal browning and tip burn." },
      { "title": "Blanching protection", "text": "Protect developing curds from sunlight by folding outer leaves over the head for tender white quality." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Haifa MAP\u2122", "Multicote\u2122 Agri", "Haifa Micro\u2122 Combi"] },
      { "name": "Establishment", "products": ["Haifa MAP\u2122", "Poly-Feed\u2122 GG", "Haifa Micro\u2122 Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K\u2122", "Poly-Feed\u2122 GG", "Haifa Mag\u2122"] },
      { "name": "Curd development", "products": ["Multi-K\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122", "Haifa Bonus\u2122"] }
    ],
    "notes": [
      "Maintain consistent soil moisture; water stress causes stunting, buttoning, and poor curd quality.",
      "Avoid planting after other brassicas to reduce disease pressure."
    ],
    "resources": [
      { "text": "Fertilization of cabbage and cauliflower in open field | Read More", "href": "https://www.haifa-group.com/fertilization-cabbage-and-cauliflower-open-field-1", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Wikipedia – Cauliflower | Read More", "href": "https://en.wikipedia.org/wiki/Cauliflower", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-20.jpg?itok=qXnjztoS",
    "recommendationsLink": {
      "text": "Fertilization of cabbage and cauliflower in open field | Read More",
      "href": "https://www.haifa-group.com/fertilization-cabbage-and-cauliflower-open-field-1"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Cauliflower"
    }
  },
  {
    "cropName": "Pumpkin",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/pumpkin-fertilizers-crop-guide",
    "title": "Pumpkin Fertilizers & Crop Guide | Haifa Group",
    "h1": "Pumpkin Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-pumpkin-fertilizers-crop-guide.jpg",
    "h2": "Pumpkin crop guide \u2013 get the most of your pumpkin fertilizer",
    "h3": "Grow vigorous vines and fully-formed fruit with a balanced pumpkin fertilization program.",
    "body": [],
    "intro": [
      "Ensuring the robust growth and high yield of a pumpkin crop begins with adequate fertilization, tailored precisely to the unique needs of the plant and the soil. When essential nutrients such as nitrogen, phosphorus, potassium, calcium and magnesium are supplied in the correct amounts, pumpkins develop strong vines, healthy foliage and fully-formed fruit \u2013 making fertilization a cornerstone of any successful pumpkin production program.",
      "With Haifa's expert solutions, growers can access targeted nutrient-management tools and proven fertilization strategies designed specifically for pumpkins, helping to optimize plant nutrition and maximize yields."
    ],
    "highlights": [
      { "title": "Warm-season crop", "text": "Pumpkins need warm soil and air temperatures. Plant when soil temperatures reach at least 18\u00b0C." },
      { "title": "Vine development", "text": "Nitrogen early in the season supports vigorous vine growth and canopy establishment." },
      { "title": "Potassium for fruit", "text": "High potassium during fruit development improves fruit size, color, and storage quality." },
      { "title": "Calcium and magnesium", "text": "These secondary nutrients support strong cell walls and healthy foliage throughout the season." },
      { "title": "Pollination matters", "text": "Good bee activity is essential for fruit set; avoid insecticides during flowering." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Multicote\u2122 Agri", "Haifa MAP\u2122", "Poly-Feed\u2122 GG"] },
      { "name": "Vine growth", "products": ["Multi-K\u2122", "Poly-Feed\u2122 GG", "Haifa Mag\u2122", "Haifa Micro\u2122 Combi"] },
      { "name": "Flowering & fruit set", "products": ["Multi-K\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] },
      { "name": "Fruit development", "products": ["Multi-K\u2122", "Haifa Bonus\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] },
      { "name": "Maturation", "products": ["Haifa Bonus\u2122", "Haifa Cal\u2122"] }
    ],
    "notes": [
      "Customize the ideal fertilization program for your pumpkin crop with Haifa NutriNet\u2122.",
      "Avoid overhead irrigation late in the day to reduce foliar disease pressure."
    ],
    "resources": [
      { "text": "Pumpkin Fertilizer and Crop Guide | Read More", "href": "https://www.haifa-group.com/growing-pumpkins-haifa-fertilizers-0", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation\u2122 for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-19.jpg?itok=W31kEvqY",
    "recommendationsLink": {
      "text": "Pumpkin Fertilizer and Crop Guide | Read More",
      "href": "https://www.haifa-group.com/growing-pumpkins-haifa-fertilizers-0"
    }
  },
  {
    "cropName": "Cucumber",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/cucumber",
    "title": "Cucumber Fertilizer | Haifa Group",
    "h1": "Cucumber Fertilizer - Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-cucumber.jpg",
    "h2": "Cucumber crop guide \u2013 All there is to know about cucumber plant nutrition & cucumber fertilizer",
    "h3": "Maximize cucumber yield and quality with precision nutrition at every growth stage.",
    "body": [],
    "intro": [
      "Cucumber is a warm-season crop grown in open fields, greenhouses, and hydroponic systems worldwide. It has a high nutrient demand and responds strongly to balanced fertilization, especially nitrogen, potassium, and calcium.",
      "Haifa's cucumber fertilizer programs are designed to support rapid vegetative growth, strong flowering, and continuous fruit production while improving fruit firmness and shelf life."
    ],
    "highlights": [
      { "title": "Warm-season crop", "text": "Cucumbers grow best at 24\u201330\u00b0C. Protect young plants from cold soils and frost." },
      { "title": "High potassium demand", "text": "Potassium is essential for fruit development, yield, and fruit quality. Increase K as harvest begins." },
      { "title": "Nitrate nitrogen", "text": "Favor nitrate-N to keep plants productive without excessive vegetative growth." },
      { "title": "Calcium for fruit quality", "text": "Adequate calcium prevents blossom-end rot and improves fruit firmness and shelf life." },
      { "title": "Frequent irrigation", "text": "Cucumbers are 95% water. Drip irrigation with Nutrigation\u2122 ensures steady growth and fruit set." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Haifa MAP\u2122", "Multicote\u2122 Agri", "Poly-Feed\u2122 GG"] },
      { "name": "Establishment", "products": ["Haifa MAP\u2122", "Poly-Feed\u2122 GG", "Haifa Micro\u2122 Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K\u2122", "Poly-Feed\u2122 GG", "Haifa Mag\u2122"] },
      { "name": "Flowering & fruit set", "products": ["Multi-K\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] },
      { "name": "Harvest period", "products": ["Multi-K\u2122", "Haifa Bonus\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] }
    ],
    "notes": [
      "Regular pruning and training improve light penetration and fruit quality in greenhouse cucumbers.",
      "Monitor EC closely in hydroponic systems to prevent salt stress and fruit disorders."
    ],
    "resources": [
      { "text": "Cucumber Fertilizer Schedule – Crop Guide | Read More", "href": "https://www.haifa-group.com/cucumber-fertilizer/crop-guide-cucumber-fertilization-recommendations", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation™ for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-14.jpg?itok=-nFobbOg"
  },
  {
    "cropName": "Squash/Courgette",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/squash-courgette-fertilizer",
    "title": "Squash/Courgette Fertilizers & Crop Guide | Haifa Group",
    "h1": "Squash/Courgette Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-squash-courgette-fertilizer.jpg",
    "h2": "Squash/Courgette crop guide \u2013 get the most of your squash/courgette fertilizer",
    "h3": "Support continuous flowering and fruit production with a balanced nutrition program.",
    "body": [],
    "intro": [
      "Squash and courgette (zucchini) are fast-growing, warm-season crops that produce over a long harvest period. They require a steady supply of nutrients, particularly nitrogen early in the season and potassium during fruiting.",
      "Haifa's fertilizer solutions help growers maintain healthy plants, maximize fruit set, and improve yield quality in both open field and greenhouse production."
    ],
    "highlights": [
      { "title": "Warm temperatures", "text": "Squash grows best at 20\u201330\u00b0C. Soil temperatures should be above 15\u00b0C at planting." },
      { "title": "Nitrogen early", "text": "Adequate nitrogen supports rapid vine growth and leaf development in the first weeks." },
      { "title": "Potassium during fruiting", "text": "High potassium from flowering onward improves fruit set, size, and quality." },
      { "title": "Calcium for firm fruit", "text": "Calcium supports cell wall strength and helps prevent blossom-end rot." },
      { "title": "Harvest frequently", "text": "Regular picking encourages continued flowering and higher total yields." }
    ],
    "growthStages": [
      { "name": "Pre-planting", "products": ["Haifa MAP\u2122", "Multicote\u2122 Agri", "Poly-Feed\u2122 GG"] },
      { "name": "Establishment", "products": ["Haifa MAP\u2122", "Poly-Feed\u2122 GG", "Haifa Micro\u2122 Combi"] },
      { "name": "Vegetative growth", "products": ["Multi-K\u2122", "Poly-Feed\u2122 GG", "Haifa Mag\u2122"] },
      { "name": "Flowering & fruit set", "products": ["Multi-K\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] },
      { "name": "Harvest period", "products": ["Multi-K\u2122", "Haifa Bonus\u2122", "Haifa Cal\u2122", "Haifa Mag\u2122"] }
    ],
    "notes": [
      "Avoid wetting foliage when irrigating to reduce powdery mildew pressure.",
      "Courgettes in greenhouses benefit from controlled-release base dressing plus Nutrigation\u2122."
    ],
    "resources": [
      { "text": "Fertilization of courgette in greenhouses | Read More", "href": "https://www.haifa-group.com/fertilization-courgette-greenhouses-0", "icon": "recommendation" },
      { "text": "IPNI, Standardized Fertilization Recommendations for Vegetable Crops | Read More", "href": "https://www.ipni.net/publication/4r-stage.nsf/0/5F3C1C9F8A0E6C3D85257F3A005C3C3B/$file/4R-VegetableCrops.pdf", "icon": "pdf" },
      { "text": "Haifa, Nutrigation\u2122 for vegetable crops | Read More", "href": "https://www.haifa-group.com/nutrigation", "icon": "article" }
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-21.jpg?itok=LYfFZ5Xv",
    "recommendationsLink": {
      "text": "Fertilization of courgette in greenhouses | Read More",
      "href": "https://www.haifa-group.com/fertilization-courgette-greenhouses-0"
    }
  },
  {
    "cropName": "Eggplant",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/eggplant-fertilizers-crop-guide",
    "title": "Eggplant Fertilizers & Crop Guide | Haifa Group",
    "h1": "Eggplant Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-eggplant-fertilizers-crop-guide.jpg",
    "h2": "Get the most of your eggplant\u00a0fertilizer",
    "h3": "Eggplant\u00a0(US),\u00a0aubergine\u00a0(UK), or\u00a0brinjal\u00a0(South Asia and South Africa) is a plant\u00a0species\u00a0in the\u00a0nightshade family\u00a0Solanaceae,\u00a0Solanum melongena, grown for its often purple edible fruit.",
    "body": [
      "Botanically classified as a berry, the fruit contains numerous small, soft, edible seeds that taste bitter because they contain or are covered in nicotinoid alkaloids, like the related tobacco.",
      "Source:\u00a0Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-18.jpg?itok=yvUAFvE4",
    "recommendationsLink": {
      "text": "Fertilization and fertigation recommendation for growing eggplants | Read More",
      "href": "https://www.haifa-group.com/fertilization-and-fertigation-recommendation-growing-eggplants"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Eggplant"
    }
  },
  {
    "cropName": "Tomato",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/tomato",
    "title": "Tomato Fertilizer - Haifa Group",
    "h1": "Tomato Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-tomato.jpg",
    "h2": "Suit tomato Fertilizer Products and Nutrition Plan to Growth Needs",
    "h3": "",
    "body": [
      "Experienced tomato growers know that consistent high yields require strategic planning. Haifa, leveraging decades of expertise, empowers tomato growers with a comprehensive guide that explores tomato nutrition, offering detailed recommendations based on premium tomato fertilizer products, alongside valuable tomato cultivation insights. With this knowledge, you can maximize the effectiveness of your tomato fertilizer program, driving higher yields and a superior cost-to-benefit ratio.Haifa's pioneering Nutri Haitech\u2122 approach delivers complete nutritional solutions for precision agriculture. Designed to enhance the sustainability and efficiency of your operations, Nutri Haitech\u2122 minimizes waste and pollution while, of course, boosting your tomato fruit yields.",
      "Here are few things you should know about\u00a0tomato fertilizer choice and tomato plant nutrition:",
      "Learn more about tomato crop nutrition",
      "Establishment\u00a0& Vegetative",
      "flowering\u00a0& fruit set",
      "Fruit\u00a0development",
      "Ripening\u00a0& harvest",
      "Multicote\u2122 Agri 6M*",
      "Multi-K\u2122 GG",
      "Haifa MAP\u2122",
      "Haifa Cal\u2122 GG",
      "Poly-Feed\u2122 GG*",
      "Haifa Micro\u2122 Combi",
      "Haifa Micro\u2122\u00a0Bor-feed",
      "Poly-Feed\u2122 FoliarVegetative Booster",
      "Haifa Bonus\u2122",
      "Haifa Mag\u2122",
      "HaifaStim\u2122 Booster",
      "HaifaStim\u2122 Calmaster",
      "* The formula should be determined according to the growth condition and stage"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_650x575-300dpi_04.jpg?itok=_SQeyHmK",
    "recommendationsLink": {
      "text": "Tomato Fertilizers & Crop Guide: About the Crop | Read More",
      "href": "https://www.haifa-group.com/tomato-fertilizer/crop-guide-tomato"
    },
    "relatedTagsLink": {
      "text": "All related tags for Tomato",
      "href": "https://www.haifa-group.com/plants-family/tomato"
    }
  },
  {
    "cropName": "Garlic",
    "category": "Vegetables",
    "slug": "ideal-plant-nutrition-different-varieties-garlic",
    "title": "The ideal plant nutrition for different varieties of garlic | Haifa Group",
    "h1": "The ideal plant nutrition for different varieties of garlic",
    "bannerImage": "/crops/banners/ideal-plant-nutrition-different-varieties-garlic.jpg",
    "h2": "Follow Haifa's detailed fertilization recommendation, in order to acheive optimal plant nutrition and excellent yield",
    "h3": "",
    "body": [
      "Soil type: Sandy.Plant population: 300,000-350,000 units of planting material/Ha.",
      "250",
      "100-200",
      "180-360",
      "60",
      "30",
      "63",
      "100-200",
      "150-300",
      "300-600",
      "530-1050",
      "300",
      "Nitrogen should be split into 2-4 applications according to soil type.Don\u2019t supply high amount of nitrogen at the end of the growing season.",
      "Multi-K = Potassium Nitrate (13% N and 46% K2O)SSP = Single Super Phosphate (19% P2O5)SOP = Potassium Sulphate (50% K2O)AN = Ammonium Nitrate (34% N)AS = Ammonium Sulphate (21% N)",
      "Fertilization recommendations : Puebla State",
      "At planting: 100 liter/Ha of liquid 8-24-0.",
      "90 days later: 300 Kg/Ha Ammonium nitrate (34% N)\u00a0+\u00a0200 Kg/Ha 0-46-0.",
      "Days 140-270 after planting: Foliar spraying\u00a0- 4 Kg/Ha Multi-K, weekly.",
      "Fertilization schedule by side-dressing",
      "Prill\u2019Or = prills made of Multi-K + ammonium nitrate.",
      "Suggested by: Oded Rottenberg.",
      "Country: Mexico.",
      "Growing medium: Soil.Soil type: Light.Plant population: 200,000-220,000 /Ha.Expected yield: 20 T/Ha.",
      "---------- (Kg/Ha) ----------",
      "267",
      "160",
      "350",
      "Multi-npK: 12-2-44.",
      "Learn more about Haifa's garlic fertilizer products & solutions."
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-26.jpg?itok=5O9VbHFm"
  },
  {
    "cropName": "Watermelon",
    "category": "Vegetables",
    "slug": "crop-guide/vegetables/watermelon-fertilizers-crop-guide",
    "title": "Watermelon Fertilizer Schedule - Haifa Group",
    "h1": "Watermelon Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-vegetables-watermelon-fertilizers-crop-guide.jpg",
    "h2": "Get the most from your watermelon crop",
    "h3": "Watermelon (Citrullus lanatus) is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. It is cultivated for its fruit.",
    "body": [
      "There is evidence from seeds in Pharao tombs of watermelon cultivation in Ancient Egypt. Watermelon is grown in tropical and subtropical areas worldwide for its large edible fruit, also known as a watermelon, which is a special kind of berry with a hard rind and no internal division, botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties have been cultivated. The fruit can be eaten raw or pickled and the rind is edible after cooking.\nSource: Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/34362_nutri_haitech_headers_more_fruit_650x575_chosen_300dpi-24.jpg?itok=XCSwpGKl",
    "recommendationsLink": {
      "text": "Nutritional Recommendations for Watermelon in Open Field | Read More",
      "href": "https://www.haifa-group.com/nutritional-recommendations-watermelon-cultivation"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Watermelon"
    }
  },
  {
    "cropName": "Almond",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/almond-tree-fertilizer",
    "title": "Almond tree fertilizer",
    "h1": "Almond Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-almond-tree-fertilizer.jpg",
    "h2": "Almond crop guide \u2013 get the most of your almond fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2026-01/headers_nutri_haitech_almond2.jpg?itok=awud4sUb",
    "recommendationsLink": {
      "text": "Nutrients rates ideal for growing almonds in Spain | Read More",
      "href": "https://www.haifa-group.com/nutrients-rates-ideal-growing-almonds-spain"
    }
  },
  {
    "cropName": "Longan",
    "category": "Fruit Trees",
    "slug": "longan-fertilizer",
    "title": "Longan Fertilizers & Crop Guide | Haifa Group",
    "h1": "Longan Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/longan-fertilizer.png",
    "h2": "Longan guide \u2013 get the most of your longan fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Longan%2520Mobile%2520banner.png?itok=_xVhBJ01",
    "recommendationsLink": {
      "text": "How to grow healthy and beautiful longan fruits | Read More",
      "href": "https://www.haifa-group.com/how-grow-healthy-and-beautiful-longan-fruits"
    }
  },
  {
    "cropName": "Apricot",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/apricot",
    "title": "Apricot | Haifa Group",
    "h1": "Apricot Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-apricot.jpg",
    "h2": "Apricot guide \u2013 get the most of your apricot fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2026-01/headers_nutri_haitech_apricot_mobile.jpg?itok=v2VY9vkr",
    "recommendationsLink": {
      "text": "Fertilization of apricots | Read More",
      "href": "https://www.haifa-group.com/fertilization-apricots"
    },
    "relatedTagsLink": {
      "text": "All related tags for Apricot",
      "href": "https://www.haifa-group.com/plants-family/apricot"
    }
  },
  {
    "cropName": "Mango",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/mango-fertilizers-crop-guide",
    "title": "Mango Fertilizer Recommendation Guide - Haifa Group",
    "h1": "Mango Guide: get the most out of your mango fertilizers",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-mango-fertilizers-crop-guide.jpg",
    "h2": "Unlocking Peak Performance\u00a0of\u00a0Your Mango Crop with Haifa's Nutri Haitech\u2122 Fertilizer Products & Solutions",
    "h3": "Understanding Mango Tree Nutritional Needs",
    "body": [
      "The mango crop has high commercial and nutritional value. To produce consistently high yields of quality fruit, mango orchards must be managed with careful attention to plant nutrition. A balanced and well-timed fertilization plan is key to supporting healthy vegetative growth, flower induction, fruit development, and long-term tree vitality.",
      "Mango trees have a relatively long growing cycle and pass through distinct physiological stages \u2014 each with unique nutritional demands. A tailored fertilization approach ensures that the right nutrients are available at the right time:",
      "Nitrogen (N)\u00a0is essential for early vegetative growth and plays a key role in supporting flowering after induction. However, excessive nitrogen\u2014particularly later in the season\u2014can delay flowering, reduce fruit quality, and increase the risk of Internal Fruit Breakdown (IFB) as well as susceptibility to diseases.",
      "Phosphorus (P) supports root development and early flowering.",
      "Potassium (K)\u00a0plays a vital role in fruit development, sugar transport, and enhancing the tree\u2019s tolerance to stress. In mango cultivation, potassium fertilization is especially important during flowering and early fruit development stages. Post-harvest applications are also beneficial, helping to restore the tree\u2019s nutrient reserves for the next cycle. Recommended potassium sources for mango include potassium nitrate and potassium sulfate.",
      "Calcium (Ca)\u00a0is essential for strengthening cell walls and preventing physiological disorders, such as Internal Fruit Breakdown (IFB), which is directly linked to calcium deficiency. Calcium fertilization is particularly important during vegetative flushes and the early stages of fruit development, when demand is high and uptake is critical.",
      "Magnesium (Mg) and micronutrients like Zinc (Zn), Boron (B), and Manganese (Mn) are crucial for photosynthesis, hormone balance, and flower/fruit formation.",
      "Mango trees are moderately sensitive to salinity, especially during early growth and flowering stages. High salt concentrations in the root zone can reduce water uptake, disrupt nutrient absorption, and ultimately lower yields. To manage salinity:",
      "One of the most impactful strategies in mango production is the timely induction of flowering using foliar fertilizers. Properly timed sprays can enhance floral initiation, synchronize flowering, and improve fruit set. Key practices include:",
      "When these foliar applications are timed with seasonal cues\u2014like a drop in temperature or water stress\u2014they can significantly increase the number of productive panicles and enhance overall orchard performance.",
      "Spring flush",
      "Flowering to fruit-set",
      "Fruit growth",
      "After harvest",
      "Poly-Feed\u2122 Drip",
      "Poly-Feed\u2122 Foliar",
      "Poly-Feed\u2122 Stim ENDURO",
      "Haifa Cal\u2122",
      "Haifa Mag\u2122",
      "Haifa Bonus\u2122",
      "Haifa SOP\u2122",
      "Nutrigation\u2122",
      "Foliar application",
      "Precision fertilization is not just about feeding the mango tree\u2014it's about aligning nutrition with the plant\u2019s growth stages and environmental conditions. Managing salinity, optimizing nutrient availability, and inducing flowering through targeted foliar sprays can make the difference between an average harvest and a standout one.",
      "Haifa's pioneering Nutri Haitech\u2122 approach delivers complete nutritional solutions for precision agriculture. Designed to enhance the sustainability and efficiency of your operations, Nutri Haitech\u2122 minimizes waste and pollution while, of course, boosting your Mango yields."
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/headers_nutri_haitech_mango2.jpg?itok=ISATj3Ya",
    "recommendationsLink": {
      "text": "Mango Fertilizer - Recommended Fertilization Program for Bearing Mango Trees | Read More",
      "href": "https://www.haifa-group.com/croprecommendations/fertilization-program-bearing-mango"
    }
  },
  {
    "cropName": "Apple",
    "category": "Fruit Trees",
    "slug": "apple-tree-fertilizer",
    "title": "Apple Fertilizer & Crop Guide | Haifa Group",
    "h1": "Apple Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/apple-tree-fertilizer.jpg",
    "h2": "APPLE Guide: Get the most out of your apple fertilizers",
    "h3": "Highlights for your Apple tree nutrition",
    "body": [
      "For apple growers, consistently achieving high yields while preserving tree productivity over the years demands a precise and balanced nutrition strategy. Proper nutrient management enhances both fruit quality and quantity, while also promoting the long-term health and resilience of the orchard. With Haifa\u2019s Nutri Haitech\u2122 approach\u2014combining advanced fertilizers, digital tools, and agronomic expertise\u2014you can tailor nutrition to your orchard\u2019s specific needs, ensuring sustainable performance season after season.",
      "Haifa\u2019s Nutri Haitech\u2122 offers comprehensive nutritional solutions for precision agriculture, designed to make your operations more sustainable and efficient, reduce waste and pollution, and of course, increase yields. The Nutri HaiTech advanced solutions combine plant nutrients that are targeted at the plant\u2019s needs, paired with cutting edge, easy-to-use, ergonomic apps that empower you to create optimal fertilization plans for any terrain or weather conditions. Don't miss out on this opportunity to revolutionize your field practices and join the global movement towards a more sustainable agriculture.",
      "Managing nitrogen supply based on the growth stage is key to healthy yields. Adequate nitrogen is crucial for dormancy breaking and vegetative growth, but excessive nitrogen can disrupt fruit development and hinder color formation.",
      "Phosphorus is essential for root development and flowering, both energy-intensive processes. When phosphorus levels are insufficient, trees may release organic acids into the rhizosphere to boost phosphorus availability, consuming extra energy.",
      "Since potassium and calcium compete for uptake by plants, their ratio in the fertilization program must be carefully balanced to meet the specific needs at each growth phase throughout the season. Proper management of this balance is crucial for producing high-quality yields, including better size, color, and storage properties.",
      "Stage",
      "Dormancy Breaking",
      "Bud Swelling",
      "White/Pink Bud till Bloom",
      "Fruit Setting",
      "Fruit Development",
      "Color Breaking till Harvest",
      "Post Harvest",
      "MO-90",
      "Multicote\u2122 Agri 8M1",
      "Multicote\u2122 Agri 3M1",
      "Haifa Soluble Duo\u2122 Agri 30-0-9+15CaO",
      "Poly-Feed\u2122 stim Spark 12-42-12+ME+2HA",
      "Poly-Feed\u2122 GG 21-21-21+ME",
      "Poly Feed\u2122 GG\u00a010-10-43+ME",
      "Multi-K\u2122 GG",
      "Poly-Feed Drip 16-8-34+2+HME",
      "Haifa Mag\u2122",
      "Haifa MKP\u2122",
      "Haifa Micro\u2122 Fe EDDHA",
      "HaifaStim\u2122 Vigor",
      "HaifaStim\u2122 Combat",
      "HaifaStim\u2122 VIM",
      "HaifaStim\u2122 Promo",
      "HaifaStim\u2122 Wall-Up S",
      "HaifaStim\u2122 Force",
      "HaifaStim\u2122 Vital",
      "HaifaStim\u2122 eNergy",
      "Soil application",
      "Nutrigation\u2122",
      "Foliar application",
      "1 Use the MultiMatch\u2122 tool to suit Multicote\u2122 Agri formula to the specific conditions in your orchard",
      "Download printable leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2026-01/headers_nutri_haitech_apple2.jpg?itok=6gQEukK2",
    "recommendationsLink": {
      "text": "Get better yield from apple trees | Read More",
      "href": "https://www.haifa-group.com/get-better-yield-apple-trees"
    },
    "relatedTagsLink": {
      "text": "All related tags for Apple Crop",
      "href": "https://www.haifa-group.com/plants-family/apple-crop"
    }
  },
  {
    "cropName": "Avocado",
    "category": "Fruit Trees",
    "slug": "avocado-tree-fertilizer",
    "title": "Avocado Fertilizers & Crop Guide | Haifa Group",
    "h1": "Avocado Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/avocado-tree-fertilizer.jpg",
    "h2": "Avocado Guide: get the most out of your avocado fertilizers",
    "h3": "Unlocking Peak Performance in Your Avocado Farming with Haifa's Nutri Haitech\u2122 Fertilizer Products & Solutions",
    "body": [
      "Experienced avocado growers know consistent high yields require strategic planning. Haifa, leveraging decades of expertise, empowers growers with a comprehensive guide that delves into avocado nutrition, offering detailed nutritional recommendations based on premium avocado fertilizer products, alongside valuable avocado cultivation insights. With this knowledge, you can maximize the effectiveness of your avocado fertilizer program, driving higher yields and a superior cost-to-benefit ratio.Haifa's pioneering Nutri Haitech\u2122 approach delivers complete nutritional solutions for precision agriculture. Designed to enhance the sustainability and efficiency of your operations, Nutri Haitech\u2122 minimizes waste and pollution while, of course, boosting your avocado yields.",
      "Avocado cultivation presents unique challenges due to the crop's delicate nature and specific growth requirements.\u00a0Avocado trees have a shallow root system. To ensure nutrient use efficiency, fertilizer application should be confined to the effective root zone, which usually lies in the top 30 cm.",
      "Stage",
      "Recovery / vegetative",
      "Pre flowering",
      "Flowering and fruit set",
      "Fruit development",
      "Harvest & post-harvest",
      "No. of days",
      "90",
      "60",
      "60",
      "60",
      "60",
      "Multicote\u2122 Agri\u00a019-6-10+ME (12M)1",
      "Multicote\u2122 Agri\u00a015-3-20+ME (8M)2",
      "Multi-K\u2122 GG",
      "Haifa SOP\u2122",
      "Haifa MAP\u2122",
      "Haifa Cal\u2122 GG",
      "Haifa Mag\u2122",
      "Haifa Micro\u2122 Fe13 (Fe EDTA)",
      "Haifa Micro\u2122 Zn 15",
      "Haifa Micro\u2122 Bor-feed",
      "HaifaStim\u2122 Force",
      "HaifaStim\u2122 Promo",
      "Soil application",
      "Nutrigation\u2122",
      "Foliar application",
      "1 Non-bearing trees \u00a0 \u00a0 \u00a02 Bearing trees",
      "Download the leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/headers_avocado_nutri_haitech_0.jpg?itok=7DUyFvKz",
    "recommendationsLink": {
      "text": "Supplying the avocado tree with the precise amount of fertilizers | Read More",
      "href": "https://www.haifa-group.com/supplying-avocado-tree-precise-amount-fertilizers"
    }
  },
  {
    "cropName": "Oil palm",
    "category": "Fruit Trees",
    "slug": "oil-palm-fertilizer",
    "title": "Oil palm | Haifa Group",
    "h1": "Oil palm",
    "bannerImage": "/crops/banners/oil-palm-fertilizer.jpg",
    "h2": "Oil Palm guide \u2013 get the most of your oil palm fertilizer",
    "h3": "",
    "body": [
      "Elaeis (from Greek, meaning 'oil') is a genus of palms containing two species, called oil palms. They are used in commercial agriculture in the production of palm oil. The African oil palm Elaeis guineensis (the species name guineensis referring to its country of origin) is the principal source of palm oil. It is native to west and southwest Africa, occurring between Angola and Gambia. The American oil palm Elaeis oleifera (from Latin oleifer, meaning 'oil-producing') is native to tropical Central and South America,\u00a0and is used locally for oil production.",
      "Mature palms are single-stemmed, and can grow well over 20 m (66 ft) tall. The leaves are pinnate, and reach between 3\u20135 m (10\u201316 ft) long. The flowers are produced in dense clusters; each individual flower is small, with three sepals and three petals.",
      "The palm fruit is reddish, about the size of a large plum, and grows in large bunches. Each fruit is made up of an oily, fleshy outer layer (the pericarp), with a single seed (the palm kernel), also rich in oil.",
      "Source:\u00a0Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/mobile-m_1.jpg?itok=7PNS6qmA",
    "recommendationsLink": {
      "text": "How to avoid common nutrient deficiencies in oil palm | Read More",
      "href": "https://www.haifa-group.com/how-avoid-common-nutrient-deficiencies-oil-palm"
    },
    "relatedTagsLink": {
      "text": "All related tags for Oil palm",
      "href": "https://www.haifa-group.com/plants-family/oil-palm"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Elaeis"
    }
  },
  {
    "cropName": "Banana",
    "category": "Fruit Trees",
    "slug": "banana-fertilizer",
    "title": "Banana Fertilizer and Crop Guide - Haifa Group",
    "h1": "Banana Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/banana-fertilizer.jpg",
    "h2": "Banana Guide: Get the most out of your banana fertilizers",
    "h3": "Highlights for your Banana crop nutrition",
    "body": [
      "Unlocking Peak Performance in Your Banana Farming with Haifa's Nutri Haitech\u2122 Fertilizer Products & Solutions",
      "Experienced banana growers know consistent high yields require strategic planning. Haifa, leveraging decades of expertise, empowers banana growers with a comprehensive guide that delves into banana nutrition, offering detailed nutritional recommendations based on premium banana fertilizer products, alongside valuable banana cultivation insights. With this knowledge, you can maximize the effectiveness of your banana fertilizer program, driving higher yields and a superior cost-to-benefit ratio.Haifa's pioneering Nutri Haitech\u2122 approach delivers complete nutritional solutions for precision agriculture. Designed to enhance the sustainability and efficiency of your operations, Nutri Haitech\u2122 minimizes waste and pollution while, of course, boosting your banana yields.",
      "Being often grown in tropical rainy areas and having a shallow root system, leaching of nutrients is of major concern in banana plantations, and fertilization must be carefully planned to ensure nutrient use efficiency.\u00a0 The main issue related to the nutrition of banana crops is potassium supply, both in absolute quantities and proportion to other nutrients.",
      "See detailed banana fertilizer recommendations"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/headers_banananutri_haitech2_0.jpg?itok=R66tjojk",
    "recommendationsLink": {
      "text": "Multi-K fertilizer for growing banana trees | Read More",
      "href": "https://www.haifa-group.com/multi-k-fertilizer-growing-banana-trees"
    }
  },
  {
    "cropName": "Olives",
    "category": "Fruit Trees",
    "slug": "olives-fertilizer",
    "title": "Olives Fertilizers & Crop Guide | Haifa Group",
    "h1": "Olives Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/olives-fertilizer.jpg",
    "h2": "Olives crop guide: complete nutritional information and recommendations for growing olive trees and using olive tree fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/mobile-m_1.jpg?itok=7PNS6qmA",
    "recommendationsLink": {
      "text": "A complete fertilization program for olive trees | Read More",
      "href": "https://www.haifa-group.com/complete-fertilization-program-olive-trees"
    }
  },
  {
    "cropName": "Cherry",
    "category": "Fruit Trees",
    "slug": "cherry-tree-fertilizer",
    "title": "Cherry Fertilizers & Crop Guide | Haifa Group",
    "h1": "Cherry Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/cherry-tree-fertilizer.png",
    "h2": "Cherry Tree\u00a0guide \u2013 get the most of your cherry tree fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/cherry%2520tree%2520crop%2520guide%2520mobile%2520%25281%2529_0.png?itok=Sv-nnrZt",
    "recommendationsLink": {
      "text": "Fertilization of cherry trees: when and how? | Read More",
      "href": "https://www.haifa-group.com/fertilization-cherry-trees-when-and-how-0"
    }
  },
  {
    "cropName": "Papaya",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/papaya-fertilizers-crop-guide",
    "title": "Papaya Fertilizers & Crop Guide | Haifa Group",
    "h1": "Papaya Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-papaya-fertilizers-crop-guide.png",
    "h2": "Papaya\u00a0Tree\u00a0guide \u2013 get the most of your papaya tree fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Papaya%2520web%2520mobile.png?itok=gsFZrZMW",
    "recommendationsLink": {
      "text": "Get better yield from papaya trees | Read More",
      "href": "https://www.haifa-group.com/get-better-yield-papaya-trees"
    }
  },
  {
    "cropName": "Citrus",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/citrus-fertilizers-crop-guide",
    "title": "Citrus Fertilizers & Crop Guide | Haifa Group",
    "h1": "Citrus Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-citrus-fertilizers-crop-guide.jpg",
    "h2": "Citrus Guide: Get the most out of your citrus\u00a0fertilizers",
    "h3": "Salinity",
    "body": [
      "For citrus growers, achieving consistently high yields while maintaining tree productivity over years requires a precise and balanced nutrition plan. Proper nutrient management not only boosts fruit quality and quantity but also ensures the long-term health and resilience of your citrus orchard. Discover how optimal fertilization can support your success season after season.",
      "Haifa\u2019s Nutri Haitech\u2122 offers comprehensive nutritional solutions for precision agriculture, designed to make your operations more sustainable and efficient, reduce waste and pollution, and of course, increase yields.\u00a0Haifa, leveraging decades of expertise, empowers citrus growers with a comprehensive guide that explores crop nutrition. With this knowledge, you can maximize the effectiveness of your citrus fertilizer program, driving higher yields and a superior cost-to-benefit ratio.",
      "Citrus trees have shallow root systems, with an effective root zone that usually lies in the top 30-40 cm, depending on the soil type. To ensure the nutrient use efficiency, fertilizer application should be confined to this zone.",
      "Citrus growth and fruit production are impaired by soil salinity. In general, yield reduction occurs at electrical conductivities (EC) above 1.4 ds/m. When soil or water is saline, Application of potassium nitrate and calcium will suppress chloride and sodium uptake and reduce salinity stress.",
      "Micronutrients serve as critical co-factors for hormone synthesis, influencing their quantity and effectiveness. Boron and molybdenum stimulate auxin synthesis and transport, thus increasing gibberellin concentration and boosting fruit growth.Explore Haifa\u2019s range of micronutrients",
      "Foliar application of nutrients allows for tactical nutrient supply required at the different growth stages. Foliar application of urea triggers plant auxin syntheses, thus strongly affecting bud emergence and flower initiation.\u00a0Learn about Haifa\u2019s foliar solutions",
      "The preferred form of nitrogen for root uptake is nitrate (NO3-), as it is easily absorbed by the plant.",
      "Single annual application of controlled release fertilizers in the first years after planting encourage tree establishment, regulates growth and speeds fruit bearing.Enhance nutrient use efficiency with Multicote\u2122 Agri",
      "Multicote\u2122 Agri\u00a0Junior (12M)",
      "Multicote\u2122 Agri\u00a0 (12M)",
      "Multi-K\u2122 GG",
      "Haifa SOP\u2122",
      "Haifa MKP\u2122",
      "Haifa Micro\u2122 Combi",
      "Haifa Micro\u2122 Mn 13",
      "Poly-Feed\u2122 Foliar 20-20-20+ME",
      "Soil application",
      "Nutrigation\u2122",
      "Foliar application",
      "Note: the recommendations brough here should be considered as general guidelines. The actual program should consider the plant status and growth conditions. Consult Haifa agronomist to suit the optimal nutritional program for your crop.",
      "Download printable leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/citrus_nutri_haitech2.jpg?itok=DqhWq_e6"
  },
  {
    "cropName": "Peach & Nectarine",
    "category": "Fruit Trees",
    "slug": "peach-tree-fertilizer",
    "title": "Peach Tree Fertilizer - Haifa Group",
    "h1": "Peach Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/peach-tree-fertilizer.jpg",
    "h2": "Peach Tree guide \u2013 get the most of your peach tree\u00a0fertilizer",
    "h3": "",
    "body": [
      "The peach (Prunus persica) is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated.It bears an edible juicy fruit called a peach or a nectarine.",
      "Prunus persica grows up to 7 m (23 ft) tall and wide. However, when pruned properly, trees are usually 3\u20134 m (10\u201313 ft) tall and wide. The leaves are lanceolate, 7\u201316 cm (2.8\u20136.3 in) long, 2\u20133 cm (0.79\u20131.18 in) broad, pinnately veined. The flowers are produced in early spring before the leaves; they are solitary or paired, 2.5\u20133 cm diameter, pink, with five petals. The fruit has yellow or whitish flesh, a delicate aroma, and a skin that is either velvety (peaches) or smooth (nectarines) in different cultivars.",
      "Cultivated peaches are divided into clingstones and freestones, depending on whether the flesh sticks to the stone or not; both can have either white or yellow flesh. Peaches with white flesh typically are very sweet with little acidity, while yellow-fleshed peaches typically have an acidic tang coupled with sweetness, though this also varies greatly. Both colors often have some red on their skin. Low-acid white-fleshed peaches are the most popular kinds in China, Japan, and neighbouring Asian countries, while Europeans and North Americans have historically favoured the acidic, yellow-fleshed cultivars.",
      "Visit our page for more informaztion about peach tree fertilizer",
      "Source:\u00a0Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2026-01/headers_nutri_haitech_peach2_0.jpg?itok=FhDllQl8",
    "recommendationsLink": {
      "text": "Fertilization of peach trees: a comprehensive recommendation | Read More",
      "href": "https://www.haifa-group.com/fertilization-peach-trees-comprehensive-recommendation"
    },
    "relatedTagsLink": {
      "text": "All related tags for Peach",
      "href": "https://www.haifa-group.com/plants-family/peach"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Peach"
    }
  },
  {
    "cropName": "Cocoa",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/cocoa-fertilizers-crop-guide",
    "title": "Cocoa Fertilizer - Haifa Group",
    "h1": "Cocoa Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-cocoa-fertilizers-crop-guide.jpg",
    "h2": "Cocoa guide \u2013 get the most of your cocoa fertilizer",
    "h3": "",
    "body": [
      "Cacao (Theobroma cacao) belongs to the genus Theobroma classified under the subfamily Sterculioideae of the mallow family Malvaceae. Cacao is one of 22 species of Theobroma.",
      "The generic name is derived from the Greek for \"food of the gods\"; from \u03b8\u03b5\u03cc\u03c2 (theos), meaning \"god\", and \u03b2\u03c1\u1ff6\u03bc\u03b1 (broma), meaning \"food\". The specific name cacao is derived from the native name of the plant in indigenous Mesoamerican languages. The cacao was known as kakaw in Tzeltal, K'iche' and Classic Maya; kagaw in Sayula Popoluca; and cacahuatl in Nahuatl.",
      "Cacao flowers.\nCupua\u00e7u, Theobroma grandiflorum, is a closely related species found in Brazil, Colombia, Peru and Bolivia. Like cacao, it is also the source for a kind of chocolate known as cupulate or cupua\u00e7u chocolate.[9] Cupua\u00e7u is considered as having high potential by the food and cosmetics industries.\nSource: Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-05/headers_coffee_nutri_haitech2_0.jpg?itok=nXgn-YQY",
    "recommendationsLink": {
      "text": "Cocoa Fertilizer - Recommended Fertilization Program for Cocoa Trees | Read More",
      "href": "https://www.haifa-group.com/croprecommendations/cocoa-fertilizer-recommendations"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Theobroma_cacao"
    }
  },
  {
    "cropName": "Pear",
    "category": "Fruit Trees",
    "slug": "pear-tree-fertilizer",
    "title": "Pear Fertilizers & Crop Guide | Haifa Group",
    "h1": "Pear Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/pear-tree-fertilizer.png",
    "h2": "Pear tree\u00a0guide \u2013 get the most of your pear tree fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Pear%2520%2520Mobile%2520banner.png?itok=Zv751MyU",
    "recommendationsLink": {
      "text": "Fertilization of pears: Haifa's complete recommendation | Read More",
      "href": "https://www.haifa-group.com/fertilization-pears-haifas-complete-recommendation"
    }
  },
  {
    "cropName": "Coffee",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/coffee-fertilizers-crop-guide",
    "title": "Coffee Fertilizers & Crop Guide | Haifa Group",
    "h1": "Coffee Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-coffee-fertilizers-crop-guide.jpg",
    "h2": "COFFEE Guide: Get the most out of your coffee fertilizers",
    "h3": "Highlights for your Coffee crop nutrition",
    "body": [
      "Haifa\u2019s Nutri Haitech\u2122 offers comprehensive nutritional solutions for precision agriculture, designed to make your operations more sustainable and efficient, reduce waste and pollution, and of course, increase yields.\u00a0The Nutri Haitech\u2122 advanced solutions combine plant nutrients that are targeted at the plant\u2019s needs, paired with cutting edge, easy-to-use, ergonomic apps that empower you to create optimal fertilization plans for any terrain or weather conditions.\u00a0Don't miss out on this opportunity to revolutionize your field practices and join the global movement towards a more sustainable agriculture.",
      "Most coffee plantations are in regions of year-round rains, which gives rise to nutrient leaching. Thus, the nutritional program must ensure that all growth necessities are available at any time. The bean production has a biennial (or alternating) nature, so at any stage the plant\u2019s physiological status affects the yield of both current year and successive one.",
      "Stage",
      "Pre-flowering",
      "Flowering",
      "Fruit set & maturation",
      "Harvest",
      "No. of days",
      "30",
      "30",
      "150",
      "60",
      "Multicote\u2122 Agri 4M\u00a019-4-21+0.8B+0.04Cu+0.1Mn+0.45Zn",
      "Haifa Bonus\u2122 13-2-44",
      "Poly-Feed Stim Enduro 19-19-19+1+ME",
      "Haifa Cal\u2122 GG",
      "Haifa BitterMag\u2122",
      "Haifa Micro\u2122 Mn 13 (EDTA chelate)",
      "Haifa Micro\u2122 Zn 15 (EDTA chelate)",
      "Haifa Micro\u2122 Cu 15\u00a0 (EDTA chelate)",
      "Note: the recommendations brought here should be considered as general guidelines. The actual program should consider the plant status and growth conditions. Consult Haifa agronomist to suit the optimal nutritional program for your coffee crop.\u00a0\u00a0 \u00a0\u00a0Download printable leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-07/headers_nutri_haitech_coffee_mobile.jpg?itok=bUW2T1EJ",
    "recommendationsLink": {
      "text": "Foliar nutrition for coffee trees: the benefits of spraying with Multi-K | Read More",
      "href": "https://www.haifa-group.com/foliar-nutrition-coffee-trees-benefits-spraying-multi-k"
    }
  },
  {
    "cropName": "Persimmon",
    "category": "Fruit Trees",
    "slug": "persimmon-tree-fertilizer",
    "title": "Persimmon | Haifa Group",
    "h1": "Persimmon",
    "bannerImage": "/crops/banners/persimmon-tree-fertilizer.png",
    "h2": "Persimmon Tree guide \u2013 get the most of your persimmon tree fertilizer",
    "h3": "",
    "body": [
      "The persimmon is the edible fruit of a number of species of trees in the genus Diospyros. The most widely cultivated of these is the Oriental or Japanese persimmon, Diospyros kaki. Diospyros is in the family Ebenaceae, and a number of non-persimmon species of the genus are grown for ebony timber.",
      "Source: Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Persimmon%2520Mobile%2520banner.png?itok=14Wkdsrf",
    "recommendationsLink": {
      "text": "Growing persimmons without nutrient deficiencies | Read More",
      "href": "https://www.haifa-group.com/growing-persimmons-without-nutrient-deficiencies"
    },
    "relatedTagsLink": {
      "text": "All related tags for Persimmon",
      "href": "https://www.haifa-group.com/plants-family/persimmon"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Persimmon"
    }
  },
  {
    "cropName": "Durian",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/durian-fertilizers-crop-guide",
    "title": "Durian Fertilizers & Crop Guide | Haifa Group",
    "h1": "Durian Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-durian-fertilizers-crop-guide.jpg",
    "h2": "Get the most of your Durian Fertilizer",
    "h3": "General growth conditions",
    "body": [
      "Durian, native to Southeast Asia, requires careful nutritional management to achieve consistent high yields and preserve long-term orchard productivity. Like most perennial crops, durian follows distinct vegetative, flowering, and reproductive phases. A well-designed fertilization program must align with these stages to balance growth and fruiting, prevent alternate bearing, and sustain tree health.",
      "With Haifa\u2019s Nutri Haitech\u2122\u00a0approach\u00a0\u2013\u00a0combining advanced fertilizers, digital tools, and agronomic expertise \u2013 you can tailor nutrition precisely to your orchard\u2019s needs. This strategy improves fruit quality and yield while enhancing efficiency, sustainability, and orchard resilience.",
      "Durian thrives in hot, humid tropical climates with average temperatures of 25\u201332\u00b0C (77\u201390\u00b0F). Prolonged daily temperatures below 22\u00b0C hinder growth and fruiting. Optimal humidity ranges between 75\u201385%, with a 1\u20132 month dry period needed to initiate flowering.",
      "Annual rainfall should reach about 1,500 mm, supplemented by irrigation to support both vegetative and reproductive growth. Trees do poorly at elevations above 900 m.",
      "Durian prefers light, well-drained soils on gentle slopes (5\u201310\u00b0). Avoid planting in flat lowlands with high water tables, as waterlogging severely damages roots. Drainage systems may be necessary to ensure proper soil conditions.",
      "Soil Requirements\u00a0Durian grows best in sandy to sandy-loam soils with good drainage and at least 75 cm of unrestricted root depth (despite its shallow root system of 45\u201350 cm). Ridging may be required where soil depth is limited.",
      "Conduct a comprehensive soil analysis with a trusted laboratory to optimize your fertilization program.",
      "Climate ConsiderationsDurian trees require 25\u201332\u00b0C temperatures, 75\u201385% humidity, and around 1,500 mm annual rainfall. In dry areas, irrigation is essential, particularly for young trees. Avoid planting in very windy or typhoon-prone areas, where wind damage reduces growth, fruit set, and yield.",
      "Irrigation GuidelinesDurian orchards need over 5,000 m\u00b3 of water per season. Supplementary irrigation is critical at all growth stages.",
      "Water quality parameters:",
      "pH",
      "6.0-7.5",
      "EC",
      "< 0.75 mS/cm",
      "TDS",
      "< 500 mg/L",
      "Na",
      "< 115 mg/L",
      "Cl",
      "< 100 mg/L",
      "Note:\u00a0The hereunder should be regarded as a general guide only. The exact fertilization program should be determined according to the specific crop needs, soil type, water analysis, cultivar, and most important - the grower\u2019s experience.",
      "Nutrigation\u2122",
      "Foliar sprays",
      "Post Harvest",
      "(building \u00a0reserves)",
      "15",
      "Multicote\u2122Agri (8) 19-10-13+2MgO+ME",
      "Poly-Feed\u2122 Drip 19-19-19+1MgO",
      "HaifaStim\u2122 HumiK",
      "Poly-Feed Foliar 21-21-21",
      "Haifa Micro\u2122 BorFeed",
      "Early vegetative",
      "45",
      "Poly-Feed\u2122 Drip 19-19-19+1MgO",
      "Haifa Mag\u2122",
      "HaifaStim\u2122 HumiK",
      "Poly-Feed Foliar 21-21-21",
      "Haifa Micro\u2122 Combi",
      "Haifa Micro\u2122 Zn 15",
      "Haifa Micro\u2122 BorFeed",
      "HaifaStim\u2122 eNergy",
      "Late vegetative",
      "45",
      "Multi-K\u2122",
      "Haifa MKP\u2122",
      "Haifa Micro\u2122 Zn 15",
      "Flowering & fruit set",
      "60",
      "Multicote\u2122Agri (12) 10-5-35 +2MgO+ME",
      "Haifa Cal\u2122",
      "Poly-Feed\u2122 Drip 12-5-40+2MgO",
      "Haifa Bonus\u2122",
      "HaifaStim\u2122 Vital",
      "HaifaStim\u2122 Promo",
      "Early fruit growth",
      "35",
      "Haifa Cal\u2122",
      "Poly-Feed\u2122 Drip 12-5-40+2MgO",
      "Poly-Feed\u2122 Foliar 15-15-30",
      "HaifaStim\u2122 Force",
      "Fruit sizing",
      "35",
      "Poly-Feed\u2122 Drip 12-5-40+2MgO",
      "Haifa BitterMag\u2122",
      "Poly-Feed\u2122 Foliar 15-15-30",
      "HaifaStim\u2122 Energy",
      "Maturity",
      "30",
      "Multi-K\u2122",
      "Haifa BitterMag\u2122",
      "Ripening & harvest",
      "20",
      "Haifa Bonus\u2122",
      "Download a printable leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-10/headers_durian_nutri_haitech_mobile.jpg?itok=11QYy57h",
    "recommendationsLink": {
      "text": "Durian trees: Fertigation & foliar feeding recommendation | Read More",
      "href": "https://www.haifa-group.com/durian-trees-fertigation-foliar-feeding-recommendation-0"
    }
  },
  {
    "cropName": "Guava",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/guava-fertilizers-crop-guide",
    "title": "Guava Fertilizers & Crop Guide | Haifa Group",
    "h1": "Guava Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-guava-fertilizers-crop-guide.png",
    "h2": "Guava Tree guide \u2013 get the most of your guava tree fertilizer",
    "h3": "",
    "body": [
      "Guavas (singular guava /\u02c8\u0261w\u0251\u02d0v\u0259/)[1] are common tropical fruits cultivated and enjoyed in many tropical and subtropical regions. Psidium guajava (common guava, lemon guava) is a small tree in the Myrtle family (Myrtaceae), native to Mexico, Central America, and northern South America. Although related species may also be called guavas, they belong to other species or genera, such as the \"pineapple guava\" Acca sellowiana. In 2011, India was the largest producer of guavas.\n\nThe most frequently eaten species, and the one often simply referred to as \"the guava\", is the apple guava (Psidium guajava).[citation needed] Guavas are typical Myrtoideae, with tough dark leaves that are opposite, simple, elliptic to ovate and 5\u201315 centimetres (2.0\u20135.9 in) long. The flowers are white, with five petals and numerous stamens. The fruits are many-seeded berries. The genera Accara and Acca (formerly Feijoa, pineapple guava) were formerly included in Psidium.\nSource: Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Guava%2520Mobile%2520banner_0.png?itok=CP4p0RZt",
    "recommendationsLink": {
      "text": "How to make the guava tree thrive | Read More",
      "href": "https://www.haifa-group.com/how-make-guava-tree-thrive"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Guava"
    }
  },
  {
    "cropName": "Quince",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/quince-fertilizers-crop-guide",
    "title": "Quince Fertilizers & Crop Guide | Haifa Group",
    "h1": "Quince Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-quince-fertilizers-crop-guide.png",
    "h2": "Quince\u00a0guide \u2013 get the most of your quince fertilizer",
    "h3": "",
    "body": [
      "The quince (/\u02c8kw\u026ans/; Cydonia oblonga) is the sole member of the genus Cydonia in the family Rosaceae (which also contains apples and pears, among other fruits). It is a deciduous tree that bears a pome fruit, similar in appearance to a pear, and bright golden-yellow when mature. Throughout history the cooked fruit has been used as food, but the tree is also grown for its attractive pale pink blossoms and other ornamental qualities.",
      "Quince is a hardy, drought-tolerant shrub which adapts to many soils of low to medium pH. It tolerates both shade and sun, but sunlight is required in order to produce larger flowers and ensure fruit ripening. It is an incredibly tough plant that does not require much maintenance, and tolerates years without pruning or major insect and disease problems.",
      "Quince is cultivated on all continents in warm-temperate and temperate climates. It requires a cooler period of the year, with temperatures under 7 \u00b0C (45 \u00b0F), to flower properly. Propagation is done by cuttings or layering; the former method produces better plants, but they take longer to mature than by the latter. Named cultivars are propagated by cuttings or layers grafted on quince rootstock. Propagation by seed is not used commercially. Quince forms thick bushes, which must be pruned and reduced into a single stem in order to grow fruit-bearing trees for commercial use. The tree is self-pollinated, but it produces better yields when cross-pollinated.",
      "Fruits are typically left on the tree to ripen fully. In warmer climates, it may become soft to the point of being edible, but additional ripening may be required in cooler climates. They are harvested in late autumn, before first frosts.",
      "Source:\u00a0Wikipedia"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Quince%2520Mobile%2520banner.png?itok=q5RLR1g3",
    "recommendationsLink": {
      "text": "Fertilization of quinces in Spain | Read More",
      "href": "https://www.haifa-group.com/fertilization-quinces-spain-0"
    },
    "sourceLink": {
      "text": "Wikipedia",
      "href": "https://en.wikipedia.org/wiki/Quince"
    }
  },
  {
    "cropName": "Hazelnut",
    "category": "Fruit Trees",
    "slug": "hazelnut-fertilizer",
    "title": "Hazelnut Fertilizers & Crop Guide | Haifa Group",
    "h1": "Hazelnut Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/hazelnut-fertilizer.jpg",
    "h2": "Recommended Fertilization Program for Hazelnut",
    "h3": "Soil application & Nutrigation",
    "body": [
      "Suiting plant density of 277 trees/ha",
      "Note: the recommendations brough here should be considered as general guidelines. The actual program should consider the plant status and growth conditions. Consult Haifa agronomist to suit the optimal nutritional program for your crop.",
      "Nutrients provided by this program:",
      "Spray volume: 1500 l/ha"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2026-03/headers_nutri_haitech_hazelnut2.jpg?itok=js8kRV5q",
    "recommendationsLink": {
      "text": "A fertilization program for growing hazelnuts in Spain | Read More",
      "href": "https://www.haifa-group.com/fertilization-program-growing-hazelnuts-spain"
    }
  },
  {
    "cropName": "Vineyard/Grape",
    "category": "Fruit Trees",
    "slug": "grape-vines-fertilizer",
    "title": "Grape Fertilizers & Crop Guide | Haifa Group",
    "h1": "Grapevine Fertilizer & Crop Guide",
    "bannerImage": "/crops/banners/grape-vines-fertilizer.jpg",
    "h2": "Vineyard Guide: Get the most out of your grape fertilizer",
    "h3": "Highlights for your GRAPE crop nutrition",
    "body": [
      "Experienced grape growers know that precise nutrition management is essential to optimize vine performance and achieve premium fruit quality.Haifa\u2019s specialized nutrition solutions are designed to unlock the full potential of vineyards, whether for wine or table grapes. Powered by premium products, deep agronomic expertise, and advanced technologies, Haifa\u2019s Nutri Haitech\u2122 approach delivers precision nutrition exactly when and where grapevines need it. The results: improved berry size and sugar content, enhanced color and cluster uniformity, extended shelf life, and higher profitability. With well-timed, balanced nutrition, growers can boost yields and fruit class \u2013 while maximizing nutrient use efficiency and reducing environmental impact.",
      "Vegetative growth",
      "Foliar applications of NPK+micro are recommended, to match demands at this stage while uptake by roots is still limited.Application of humic\u00a0substances improves soil\u00a0properties and root activity.",
      "Pre-flowering",
      "Adequate boron supply in this stage is necessary to avoid Millerandage,\u00a0 \u00a0which might lead to uneven berry size and ripening.",
      "Flowering and fruit set",
      "These are stages of peak nitrogen demand.To ensure efficient uptake it is recommended to supply high nitrate.",
      "Berry growth",
      "Addition of micronutrients at this stage is essential for optimalaccumulation of sugars and anthocyanins in the growing berries.",
      "Veraison",
      "Foliar applications of potassium are recommended, to match high demands at this stage.",
      "Berry maturation",
      "Calcium is required to protect the fruit and to improve its quality.Even when not manifested on leaves, calcium deficiency might result in\u00a0berry cracking, berry dropping\u00a0and grain rot.In wine grapes, leaf analysis provides indication of the required post-harvest fertilizer application rates.",
      "Shoot maturation and leaves fall",
      "Post-harvest fertilization creates nutrient reservoirs for the next season.Application of humic acids\u00a0improves soil properties and root activity",
      "Grape vines are moderately-sensitive to salinity, with potential of 10% yield loss at EC of 2.5 dS/m. Low salinity irrigation is critical in both saline and non-saline soils. Make sure to apply fertilizers with low salt index and minimal chloride & sodium content.",
      "Note: the recommendations brough here should be considered as general guidelines. The actual program should consider the plant status and growth conditions. Consult Haifa agronomist to suit the optimal nutritional program for your grape crop.",
      "Stage",
      "Vegetative growth",
      "Pre Flowering",
      "Flowering",
      "Fruit setting",
      "Start of Berry Growth",
      "Berry Growth",
      "End of Berry Growth",
      "Early Veraison",
      "Berry Maturation**",
      "Shoots maturation to leaves fall",
      "BBCH 11-19",
      "BBCH 53-57",
      "BBCH 60-69",
      "BBCH 69-71",
      "BBCH 81",
      "BBCH 83-89",
      "BBCH 89-93",
      "Haifa Micro Zn+Mn EDTA & HaifaStim Combat - explore the application protocol",
      "Download a printable brochure"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-08/headers_nutri_haitech_grapes2.jpg?itok=yreq3OK9",
    "recommendationsLink": {
      "text": "Fertilization Recommendations | Read More",
      "href": "https://www.haifa-group.com/grape-vines-fertilizer/recommendations"
    }
  },
  {
    "cropName": "Hop",
    "category": "Fruit Trees",
    "slug": "crop-guide/fruit-trees/hop-fertilizers-crop-guide",
    "title": "Hop Fertilizers & Crop Guide | Haifa Group",
    "h1": "Hop Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-fruit-trees-hop-fertilizers-crop-guide.jpg",
    "h2": "Hop guide \u2013 get the most of your hop fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/hops%2520mobile_0.jpg?itok=E_urPmKY",
    "recommendationsLink": {
      "text": "Recommended fertilizers, rates and timing for the fertilization of hops | Read More",
      "href": "https://www.haifa-group.com/recommended-fertilizers-rates-and-timing-fertilization-hops"
    }
  },
  {
    "cropName": "Blueberry",
    "category": "Soft Fruit",
    "slug": "crop-guide/soft-fruit/blueberry-fertilizers-crop-guide",
    "title": "Blueberry Fertilizer | Haifa Group",
    "h1": "Blueberry Fertilizers & Crop",
    "bannerImage": "/crops/banners/crop-guide-soft-fruit-blueberry-fertilizers-crop-guide.jpg",
    "h2": "Blueberry Guide - get the most of your blueberry fertilizer",
    "h3": "Salinity",
    "body": [
      "Blueberries, as a delicate crop, require careful attention to specific sensitivities when planning a nutritional program for the growing season. Haifa\u2019s Nutri Haitech\u2122 provides comprehensive, precision-based nutritional solutions that make your operations more sustainable, efficient, and productive, while reducing waste and environmental impact.",
      "Nutri Haitech\u2122 combines targeted plant nutrients with user-friendly, advanced digital tools, empowering you to create optimal fertilization plans tailored to any terrain and weather conditions.",
      "The blueberry plant is susceptible to salinity, so care must be taken to keep the soil and the irrigation water should not exceed 1.25 mS/cm.",
      "Nutrient uptake is optimal at pH range of 4.5-5.5",
      "The optimal level of bicarbonates in the irrigation water is 0.3-0.5 meq/l (18-30 ppm). Higher levels will interfere with calcium uptake and reduce fruit quality.",
      "To ensure optimal development and photosynthesis, adequate supply of magnesium is required throughout the growth season.",
      "High sodium levels disturb the uptake of potassium and calcium, reducing crop's quality; Note that substrates often contain high Na levels; Low-sodium fertilizers should be preferred.",
      "Fruit setting and development",
      "Foliar application of potassium (K+) at these stages improves plant water management and fruit quality.",
      "Note: the recommendations brough here should be considered as general guidelines. The actual program should consider the plant status and growth conditions. Consult Haifa agronomist to suit the optimal nutritional program for your blueberry crop.",
      "Stage",
      "Bud\u00a0Emergence &\u00a0Pruning",
      "Vegetative",
      "Flowering",
      "Fruit\u00a0setting &\u00a0Filling",
      "Harvest",
      "No. of days",
      "60",
      "45",
      "60",
      "45",
      "60",
      "Multicote\u2122 Agri (8)\u00a013-15-16+1+ME",
      "Gypsum",
      "Poly-Feed\u2122 GG12-5-40+2+ME",
      "Haifa Cal\u2122 GG",
      "Haifa BitterMag\u2122",
      "Haifa Micro\u2122 Combi",
      "HaifaStim\u2122 Force",
      "Haifa Stim\u2122 Calmaster",
      "HaifaStim\u2122 Wall-Up",
      "Download printable leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/headers_nutri_haitech_blueberry_0.jpg?itok=CfCCS1x5",
    "recommendationsLink": {
      "text": "Grow Better Blueberries with Haifa products | Read More",
      "href": "https://www.haifa-group.com/grow-better-blueberries-haifa-products"
    }
  },
  {
    "cropName": "Strawberry",
    "category": "Soft Fruit",
    "slug": "crop-guide/soft-fruit/strawberry-fertilizers-crop-guide",
    "title": "Strawberry fertilizer - Haifa Group",
    "h1": "Strawberry Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-soft-fruit-strawberry-fertilizers-crop-guide.jpg",
    "h2": "Strawberry Nutrition - Important highlights",
    "h3": "",
    "body": [
      "While strawberries are a perennial plant, commercial plots are typically grown as an annual crop. Their growth and yield are significantly influenced by cultivation strategies, including planting date, plant density, irrigation, and fertilization. Due to their shallow root system, strawberries require a continuous and careful supply of water and nutrients throughout their growth cycle.",
      "SiliconIntegrated into cell walls, silicon is highly beneficial for improving shelf life and enhancing resilience to abiotic stresses.",
      "Vegetative growthRegulate nitrogen application to balance between vegetative growth and reproductive processes. Silicon enrichment enhances fruit resilience and health.",
      "Flowering and fruit setting (1st to last flush)Phosphorus is required to support energy-consuming processes. High rates of potassium and addition of calcium and silicon improve various fruit quality parameters.",
      "Note: the recommendations brough here should be considered as general guidelines. The actual program should consider the plant status and growth conditions. Consult Haifa agronomist to suit the optimal nutritional program for your blueberry crop.",
      "Stage",
      "Establishment",
      "Vegetative growth",
      "Flowering and Fruit set (1st to last flush)",
      "Harvest",
      "No. of days",
      "14",
      "30",
      "30-240",
      "Multicote\u2122 Agri 6M 22-8-13+2.9MgO SUPER",
      "Poly-Feed\u2122 Stim SPARK 18-18-18",
      "HaifaStim\u2122 HumiK",
      "Haifa Cal\u2122 GG",
      "Poly-Feed\u2122 GG 20-9-20+ME",
      "Poly-Feed GG\u2122 17-10-27+ME",
      "Multi-K\u2122 ME",
      "HaifaStim\u2122Wall-Up S",
      "HaifaStim\u2122 Force1",
      "HaifaStim\u2122 Booster2",
      "HaifaStim\u2122 Calmaster",
      "HaifaStim\u2122 Promo",
      "1 Recommended during cold periods; 2 recommended during hot periods",
      "Download the leaflet"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-12/headers_nutri_haitech_strawberry2.jpg?itok=BW79W2kF",
    "recommendationsLink": {
      "text": "A fertilization recommendation for strawberries in various parts of the world | Read More",
      "href": "https://www.haifa-group.com/fertilization-recommendation-strawberries-various-parts-world"
    }
  },
  {
    "cropName": "Raspberry",
    "category": "Soft Fruit",
    "slug": "raspberry-fertilizer",
    "title": "Raspberry Fertilizers & Crop Guide | Haifa Group",
    "h1": "Raspberry Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/raspberry-fertilizer.png",
    "h2": "Raspberry\u00a0guide \u2013 get the most of your raspberry fertilizer",
    "h3": "",
    "body": [
      "There are several considerations for proper nutrition when it comes to raspberries:\u00a0\nSetting application rates, consider expected yield required balance of nutrients.",
      "When it comes to raspberry fertilizer, you should provide a complete fertilization\u00a0with macro and micronutrients while considering cation ratios Ca/K, Ca/Mg, (Mg + K)/Ca.\u00a0\nBalance NH4/NO3 ratio - The majority of nitrogen should be supplied as nitrate and\u00a0apply sources of soluble and Chlorine-free Potassium.\nComplete fertilization with macro and micronutrients that should be in raspberry fertilizer.",
      "Using diagnostic tools such as: soil analysis, foliar, suction probes, chlorophyll meters, etc. Also, Split applications according to the plant\u2019s uptake dynamics."
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Raspberry%2520Mobile%2520banner.png?itok=FiCeUrfX",
    "recommendationsLink": {
      "text": "Guide to growing raspberries | Read More",
      "href": "https://www.haifa-group.com/guide-growing-raspberries"
    },
    "relatedTagsLink": {
      "text": "All related tags for Raspberry Fertilizers & Crop Guide",
      "href": "https://www.haifa-group.com/plants-family/raspberry"
    }
  },
  {
    "cropName": "Asparagus",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/asparagus-fertilizer",
    "title": "Asparagus Fertilizers & Crop Guide | Haifa Group",
    "h1": "Asparagus Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-asparagus-fertilizer.png",
    "h2": "Asparagus guide \u2013 get the most of your asparagus fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Untitled%2520design%2520%25283%2529.png?itok=hmFGf6SX",
    "recommendationsLink": {
      "text": "Growing asparagus: how to supply the asparagus with all its required nutrients | Read More",
      "href": "https://www.haifa-group.com/growing-asparagus-how-supply-asparagus-all-its-required-nutrients"
    }
  },
  {
    "cropName": "Pineapple",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/pineapple-fertilizers-crop-guide",
    "title": "Pineapple Fertilizers & Crop Guide",
    "h1": "Pineapple Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-pineapple-fertilizers-crop-guide.png",
    "h2": "Pineapple crop guide \u2013 get the most of your pineapple fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Pineapple%2520Mobile%2520banner.png?itok=_tZfdH6q",
    "recommendationsLink": {
      "text": "Fertilizer recommendation | Read More",
      "href": "https://www.haifa-group.com/fertilizer-recommendation"
    }
  },
  {
    "cropName": "Barley",
    "category": "Field Crops",
    "slug": "barley-fertilizer",
    "title": "Barley Fertilizer and Crop Guide - Haifa Group",
    "h1": "Barley Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/barley-fertilizer.png",
    "h2": "Barley crop guide \u2013 get the most of your barley fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Barley%2520Mobile%2520banner.png?itok=yW3SO1YX",
    "recommendationsLink": {
      "text": "Micronutrient Requirements of Crops | Read More",
      "href": "https://www.haifa-group.com/micronutrient-requirements-crops"
    }
  },
  {
    "cropName": "Potato",
    "category": "Field Crops",
    "slug": "potato-fertilizer",
    "title": "Potato Fertilizer - Haifa Group",
    "h1": "Potato Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/potato-fertilizer.jpg",
    "h2": "A Complete Resource for Successful Potato Cultivation and Nutrition Management",
    "h3": "Explore the guide:",
    "body": [
      "Potatoes are among the world\u2019s most important food crops, valued for their high yield potential, nutritional content, and versatility. Grown in a wide range of climates and soil types, potato cultivation demands precise crop nutrition \u2013 to maximize productivity and quality.",
      "With decades of expertise, Haifa offers a comprehensive guide to potato nutrition, featuring detailed recommendations for highly efficient potato fertilization protocols and valuable cultivation insights. This knowledge empowers you to optimize your potato fertilizer program, maximizing yields and quality.",
      "Potatoes have relatively shallow roots and limited nutrient uptake efficiency, making well-planned fertilization essential.",
      "Nitrogen (N)\u00a0promotes vigorous vegetative growth and tuber yield, but must be carefully managed to avoid excessive foliage at the expense of tuber development.",
      "Phosphorus (P)\u00a0is critical for early root development and tuber initiation. Adequate supply during the establishment phase supports uniform crop emergence.",
      "Potassium (K)\u00a0is essential for tuber formation, size, and quality. Potassium enhances water regulation, disease resistance, and improves shelf life.",
      "Calcium (Ca)\u00a0strengthens cell walls, improves tuber firmness, and reduces physiological disorders like internal rust spot.",
      "Magnesium (Mg)\u00a0supports photosynthesis and promotes healthy foliage, which is vital for sustained carbohydrate production.",
      "Micronutrients (e.g., Boron, Zinc, Manganese):\u00a0Though required in small quantities, these elements play crucial roles in metabolic processes and must be included in a complete potato fertilizer plan.",
      "Haifa\u2019s solutions are designed to match the crop's nutritional demands at every growth stage, supporting optimal development from sprouting to harvest. Whether through fertigation or foliar feeding, our advanced products ensure efficient nutrient delivery and improved return on investment.",
      "Empower your potato cultivation with Haifa\u2019s advanced plant nutrition solutions \u2013 for better yields, better quality, and better profits."
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-07/headers_potato_nutri_haitech2.jpg?itok=rGCBbGrD",
    "recommendationsLink": {
      "text": "Increasing potato yield with Multi K Mg prill | Read More",
      "href": "https://www.haifa-group.com/increasing-potato-yield-multi-k-mg-prill"
    }
  },
  {
    "cropName": "Beans",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/beans-fertilizers-crop-guide",
    "title": "Beans nutrient deficiencies - Haifa Group",
    "h1": "Beans Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-beans-fertilizers-crop-guide.png",
    "h2": "Beans crop guide \u2013 get the most of your beans fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Beans%2520Mobile%2520banner.png?itok=IJIDZ2hw",
    "recommendationsLink": {
      "text": "The complete recommendation for the fertilization of beans | Read More",
      "href": "https://www.haifa-group.com/complete-recommendation-fertilization-beans"
    }
  },
  {
    "cropName": "Rice",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/rice-fertilizers-crop-guide",
    "title": "Rice Fertilizer & Crop Guide - Haifa Group",
    "h1": "Rice Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-rice-fertilizers-crop-guide.jpg",
    "h2": "Boosting Rice Yields with Nutri Haitech\u2122 Fertilizer Products & Solutions",
    "h3": "Understanding Rice Nutritional Needs",
    "body": [
      "Rice, a staple food for over half the global population, requires precise nutrient management to ensure optimal yields and grain quality. Haifa Group offers a complete range of nutritional solutions tailored to the needs of rice crops, helping farmers increase productivity and sustainability.",
      "Haifa\u2019s rice fertilizer programs emphasize strategic, crop-specific fertilization\u2014particularly nitrogen, potassium, zinc, and silicon\u2014combined with foliar applications at critical growth stages. These practices are brought together under Haifa\u2019s pioneering Nutri Haitech\u2122 approach, which delivers complete nutritional solutions for precision agriculture. Designed to enhance both sustainability and efficiency, Nutri Haitech\u2122 minimizes waste and environmental impact\u2014while significantly improving rice yields.",
      "Nitrogen",
      "Nitrogen (N) s fundamental to rice development, influencing plant height, leaf size, panicle formation, and grain filling. Rice exhibits an S-shaped (sigmoidal) nitrogen uptake curve: uptake is slow during early growth, then becomes steady and rapid from tillering to the milky stage\u2014critical phases for yield determination\u2014before gradually declining as the crop approaches maturity.",
      "In flooded paddies, nitrogen is highly susceptible to losses through ammonia volatilization, denitrification, leaching, and runoff. With conventional granular fertilizers, nitrogen recovery rarely exceeds 30\u201340%. Haifa\u2019s controlled-release fertilizers, such as CoteN\u2122, align nitrogen release with crop demand, significantly enhancing nitrogen use efficiency and reducing environmental losses.",
      "To optimize nitrogen management throughout the season, it is recommended to use the Croptune\u2122 mobile app, which provides real-time nitrogen status assessments and actionable fertilization recommendations.",
      "See how Croptune\u2122 helped rice growers in India improve their yields.",
      "Potassium",
      "Potassium (K) plays a vital role in rice physiology, supporting enzymatic activity, photosynthesis, water regulation, and sugar transport. Adequate potassium nutrition strengthens the plant\u2019s resilience to drought, salinity, and disease, while significantly improving grain filling, size, and weight\u2014all crucial for achieving high yields and marketable quality.",
      "Like nitrogen, potassium uptake in rice follows an S-shaped pattern, with most absorption occurring between tillering and panicle initiation (30\u201360 days after sowing). Under common commercial practices, considerable amounts of potassium are removed from the field through harvest, making K fertilization essential. Field trials have demonstrated that proper potassium application can boost yields by up to 20%.",
      "To meet the plant\u2019s dynamic potassium demands, foliar applications of Haifa Bonus\u2122 are highly recommended, especially during key reproductive stages.",
      "Zinc",
      "Zinc (Zn) is the most widely required micronutrient, playing key roles in photosynthesis, protein synthesis, growth regulation, and reproduction. Rice is particularly susceptible to Zn deficiency, as it grows in waterlogged soils which are conducive to zinc deficiency. Flooding the soil reduces Zn availability to the crop and increases the concentrations of soluble P and bicarbonate ions, which can exacerbate problems of Zn deficiency.",
      "Zinc deficiency is also common in lowland rice, especially in high-pH, silt, and sandy loam soils, leading to stunted growth, leaf bronzing, and reduced tillering.",
      "Haifa\u2019s zinc-enriched products ensure this vital element is available in the right form, at the right time.",
      "Learn more about essential elements for rice nutrition",
      "Though not considered essential, silicon greatly enhances rice plant performance. It fortifies cell walls, improves structural integrity, and increases tolerance to pests, diseases, and abiotic stresses. Haifa\u2019s Poly-Feed\u2122 Stim Armor\u00a0and Haifa Stim Wall-up\u00a0provides a highly efficient source of silicon alongside mineral nutrition, promoting stronger, healthier plants.",
      "Learn how Poly-Feed\u2122 Stim Armor increased rice yield and improved quality.",
      "Flooded rice fields present unique challenges in nutrient management. Nutrient leaching, volatilization, and reduced soil oxygenation can limit nutrient uptake and reduce efficiency. Haifa offers advanced solutions tailored to these conditions:",
      "A carefully managed fertilization approach\u2014integrating nitrogen management, potassium support, zinc supplementation, silicon enrichment, and strategic foliar feeding\u2014is essential to achieve high rice yields and quality. Backed by agronomic expertise and innovative products, Haifa Group\u2019s Nutri Haitech\u2122 solutions provide the tools growers need for efficient, sustainable rice production."
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-04/headers_rice_nutri_haitech2.jpg?itok=CcY-FtBw",
    "recommendationsLink": {
      "text": "Foliar fertilization of rice | Read More",
      "href": "https://www.haifa-group.com/foliar-fertilization-rice"
    }
  },
  {
    "cropName": "Chickpea",
    "category": "Field Crops",
    "slug": "chickpea-fertilizer",
    "title": "Chickpea Fertilizer Requirements and Crop Guide - Haifa Group",
    "h1": "Chickpea Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/chickpea-fertilizer.png",
    "h2": "Chickpea crop guide \u2013 get the most of your chickpea fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Chickpea%2520Mobile%2520banner.png?itok=lQyjhjYw",
    "recommendationsLink": {
      "text": "Seeding Tips for Chickpeas | Read More",
      "href": "https://www.haifa-group.com/seeding-tips-chickpeas"
    }
  },
  {
    "cropName": "Soybean",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/soybean-fertilizers-crop-guide",
    "title": "Soybean Fertilizer - Haifa Group",
    "h1": "Soybean Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-soybean-fertilizers-crop-guide.png",
    "h2": "Soybean \u2013 get the most of your soybean fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Soybean%2520Mobile%2520banner.png?itok=7UTBGRcB",
    "recommendationsLink": {
      "text": "Soybean fertilizer: get healthier and higher soybean yield | Read More",
      "href": "https://www.haifa-group.com/soybean-fertilizer-get-healthier-and-higher-soybean-yield"
    }
  },
  {
    "cropName": "Corn/Maize",
    "category": "Field Crops",
    "slug": "cornmaze-fertilizer",
    "title": "Corn / Maize Fertilizers & Crop Guide | Haifa Group",
    "h1": "Corn / Maize Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/cornmaze-fertilizer.png",
    "h2": "Corn/Maize crop guide \u2013 get the most of your corn/maize fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/CornMaize%2520Mobile%2520banner%2520%25281%2529.png?itok=5Mbv3qkD",
    "recommendationsLink": {
      "text": "Foliar feeding of corn / maize \u2013 the way to achieve better crops | Read More",
      "href": "https://www.haifa-group.com/foliar-feeding-corn-maize-%E2%80%93-way-achieve-better-crops-1"
    }
  },
  {
    "cropName": "Sugar Beet",
    "category": "Field Crops",
    "slug": "sugar-beet-fertilizer",
    "title": "Sugar Beet Fertilizer and Crop Guide - Haifa Group",
    "h1": "Sugar beet Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/sugar-beet-fertilizer.png",
    "h2": "Sugar Beet crop guide \u2013 get the most of your sugar beet fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Sugar%2520beet%2520Mobile%2520banner.png?itok=Tr8OiVye",
    "recommendationsLink": {
      "text": "Fertilization of sugar beet | Read More",
      "href": "https://www.haifa-group.com/fertilization-sugar-beet"
    }
  },
  {
    "cropName": "Cotton",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/cotton-fertilizers-crop-guide",
    "title": "Cotton Fertilizers & Crop Guide | Haifa Group",
    "h1": "Cotton Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-cotton-fertilizers-crop-guide.png",
    "h2": "Cotton guide \u2013 get the most of your cotton fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Cotton%2520Mobile%2520banner.png?itok=pVrkCACb",
    "recommendationsLink": {
      "text": "Fertilization of cotton: how to get better yield, water use efficiency and fibre fineness | Read More",
      "href": "https://www.haifa-group.com/fertilization-cotton-how-get-better-yield-water-use-efficiency-and-fibre-fineness"
    }
  },
  {
    "cropName": "Sugar Cane",
    "category": "Field Crops",
    "slug": "abono-fertilizante-para-cana-de-azucar",
    "title": "Sugar Cane Fertilizer - Haifa Group",
    "h1": "Sugar Cane Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/abono-fertilizante-para-cana-de-azucar.png",
    "h2": "Sugar Cane crop guide \u2013 get the most of your sugar cane fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Sugar%2520cane%2520Mobile%2520banner.png?itok=0bN6lE16",
    "recommendationsLink": {
      "text": "Multi-K in Sugar Cane - Side dressing | Read More",
      "href": "https://www.haifa-group.com/multi-k-sugar-cane-side-dressing"
    }
  },
  {
    "cropName": "Clover",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/clover-fertilizers-crop-guide",
    "title": "Clover Fertilizers & Crop Guide | Haifa Group",
    "h1": "Clover Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-clover-fertilizers-crop-guide.png",
    "h2": "Clover guide \u2013 get the most of your clover\u00a0fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Clover%2520Mobile%2520banner.png?itok=w32uLA_c",
    "recommendationsLink": {
      "text": "White Clover | Read More",
      "href": "https://www.haifa-group.com/white-clover"
    }
  },
  {
    "cropName": "Sunflower",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/sunflower-fertilizers-crop-guide",
    "title": "Sunflower Fertilizers & Crop Guide | Haifa Group",
    "h1": "Sunflower Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-sunflower-fertilizers-crop-guide.png",
    "h2": "Sunflower\u00a0guide \u2013 get the most of your sunflower fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Sunflower%2520Mobile%2520banner.png?itok=Riugi5qR",
    "recommendationsLink": {
      "text": "Fertilization recommendation for growing sunflower | Read More",
      "href": "https://www.haifa-group.com/fertilization-recommendation-growing-sunflower"
    }
  },
  {
    "cropName": "Oil Seed",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/oil-seed",
    "title": "Oilseed Fertilizer and Crop Guide - Haifa Group",
    "h1": "Oil seed Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-oil-seed.png",
    "h2": "Oil Seed crop guide \u2013 get the most of your oil seed fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Oil%2520seed%2520Mobile%2520banner.png?itok=TJ8DgJ7_",
    "recommendationsLink": {
      "text": "Supplying the winter oil seed rape with the right amount of nutrients | Read More",
      "href": "https://www.haifa-group.com/supplying-winter-oil-seed-rape-right-amount-nutrients"
    }
  },
  {
    "cropName": "Tobacco",
    "category": "Field Crops",
    "slug": "tobacco-fertilizer",
    "title": "Tobacco Fertilizers & Crop Guide | Haifa Group",
    "h1": "Tobacco Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/tobacco-fertilizer.png",
    "h2": "Tobacco guide \u2013 get the most of your tobacco fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Tobacco%2520Mobile%2520banner.png?itok=LNCn3ETB",
    "recommendationsLink": {
      "text": "How to provide the tobacco plant with required nutrients | Read More",
      "href": "https://www.haifa-group.com/how-provide-tobacco-plant-required-nutrients"
    }
  },
  {
    "cropName": "Peas",
    "category": "Field Crops",
    "slug": "peas-fertilizer",
    "title": "Peas Fertilizer & Nutrient Deficiencies - Haifa Group",
    "h1": "Peas Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/peas-fertilizer.png",
    "h2": "Peas guide \u2013 get the most of your peas fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/Peas%2520%2520Mobile%2520banner.png?itok=k95-yYPa",
    "recommendationsLink": {
      "text": "How to grow peas with Haifa fertilizers | Read More",
      "href": "https://www.haifa-group.com/how-grow-peas-haifa-fertilizers"
    }
  },
  {
    "cropName": "Wheat",
    "category": "Field Crops",
    "slug": "crop-guide/field-crops/wheat-fertilizers-crop-guide",
    "title": "Wheat nutrient deficiencies - Haifa Group",
    "h1": "Wheat Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-field-crops-wheat-fertilizers-crop-guide.jpg",
    "h2": "Wheat crop guide \u2013 get the most of your wheat fertilizer",
    "h3": "",
    "body": [
      "While wheat cultivation typically relies on conventional fertilization methods, several advanced strategies can greatly enhance growth and yields.",
      "Foliar FertilizationHaifa\u2019s foliar solutions deliver precisely balanced nutrients at critical growth stages, significantly boosting wheat performance.Get a detailed foliar nutrition program",
      "Nitrogen EfficiencyWith Haifa\u2019s controlled-release fertilizers, nitrogen use efficiency is enhanced, ensuring an optimal and continuous supply throughout the season.See how it works",
      "Silicon ReinforcementApplying plant-available silicon during tillering and stem elongation strengthens plant structure, reduces lodging, and supports resilience.Learn more",
      "Use the innovative Croptune app to detect the nitrogen status of your wheat crops - \u00a0anytime, anywhere.",
      "Together, Haifa\u2019s advanced fertilization practices provide growers with a more efficient, targeted, and sustainable approach to maximizing wheat productivity."
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2025-08/headers_wheat_nutri_haitech2.jpg?itok=Fb3-50HB",
    "recommendationsLink": {
      "text": "Poly-Feed\u2122 Nutrition Program for Wheat | Read More",
      "href": "https://www.haifa-group.com/poly-feed%E2%84%A2-nutrition-program-wheat"
    }
  },
  {
    "cropName": "Basil",
    "category": "Herbs",
    "slug": "crop-guide/herbs/basil-fertilizer",
    "title": "Basil Fertilizers & Crop Guide | Haifa Group",
    "h1": "Basil Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-herbs-basil-fertilizer.jpg",
    "h2": "Basil guide \u2013 get the most of your basil fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/basil%2520mobile.jpg?itok=W1m50-4p",
    "recommendationsLink": {
      "text": "From transplanting to growth stage: A fertilization program for basil | Read More",
      "href": "https://www.haifa-group.com/transplanting-growth-stage-fertilization-program-basil-0"
    }
  },
  {
    "cropName": "Mint",
    "category": "Herbs",
    "slug": "crop-guide/herbs/mint-fertilizer",
    "title": "Mint Fertilizers & Crop Guide | Haifa Group",
    "h1": "Mint Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-herbs-mint-fertilizer.jpg",
    "h2": "Mint guide \u2013 get the most of your mint fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/nana%2520mobile%2520banner_0.jpg?itok=yTn0uAmM",
    "recommendationsLink": {
      "text": "What is the best fertilization program for flourishing mint? | Read More",
      "href": "https://www.haifa-group.com/what-best-fertilization-program-flourishing-mint-0"
    }
  },
  {
    "cropName": "Chives",
    "category": "Herbs",
    "slug": "crop-guide/herbs/chives-fertilizer",
    "title": "Chives Fertilizers & Crop Guide | Haifa Group",
    "h1": "Chives Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-herbs-chives-fertilizer.jpg",
    "h2": "Chives guide \u2013 get the most of your chives\u00a0fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/chives%2520mobile_0.jpg?itok=u1EsNZ-F",
    "recommendationsLink": {
      "text": "Fertilization of tarragon & chives | Read More",
      "href": "https://www.haifa-group.com/fertilization-tarragon-chives-0"
    }
  },
  {
    "cropName": "Tarragon",
    "category": "Herbs",
    "slug": "crop-guide/herbs/tarragon-fertilizer",
    "title": "Tarragon Fertilizers & Crop Guide | Haifa Group",
    "h1": "Tarragon Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-herbs-tarragon-fertilizer.jpg",
    "h2": "Tarragon guide \u2013 get the most of your tarragon fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/tarragon%2520mobile.jpg?itok=fl8cTeZ3",
    "recommendationsLink": {
      "text": "Fertilization of tarragon & chives | Read More",
      "href": "https://www.haifa-group.com/fertilization-tarragon-chives-0"
    }
  },
  {
    "cropName": "Anthurium",
    "category": "Ornamentals",
    "slug": "crop-guide/ornamentals/anthurium-fertilizers-crop-guide",
    "title": "Fertilizer for Anthurium Plant- Crop Guide - Haifa Group",
    "h1": "Anthurium Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-ornamentals-anthurium-fertilizers-crop-guide.png",
    "h2": "Anthurium crop guide \u2013 get the most of your anthurium fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/1_15.png?itok=fiOj8tJd",
    "recommendationsLink": {
      "text": "Fertilization of anthurium (andereanum) on sandy soil or soilless | Read More",
      "href": "https://www.haifa-group.com/fertilization-anthurium-andereanum-sandy-soil-or-soilless"
    }
  },
  {
    "cropName": "Gypsophila",
    "category": "Ornamentals",
    "slug": "crop-guide/ornamentals/gypsophila",
    "title": "Growing Gypsophila Baby's Breath Crop Guide - Haifa Group",
    "h1": "Gypsophila Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-ornamentals-gypsophila.png",
    "h2": "Gypsophila crop guide \u2013 get the most of your gypsophila fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/3.png?itok=YHZxOM4A",
    "recommendationsLink": {
      "text": "Fertilization of gypsophila in greenhouses | Read More",
      "href": "https://www.haifa-group.com/fertilization-gypsophila-greenhouses"
    }
  },
  {
    "cropName": "Dahlia",
    "category": "Ornamentals",
    "slug": "crop-guide/ornamentals/dahlia-fertilizer",
    "title": "Dahlia Fertilizer and Growing Dahlia Crop Guide - Haifa Group",
    "h1": "Dahlia Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-ornamentals-dahlia-fertilizer.png",
    "h2": "Dahlia crop guide \u2013 get the most of your dahlia fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/33_1.png?itok=YGex8Cq9",
    "recommendationsLink": {
      "text": "Fertilization of dahlias: How to use Haifa's fertilizers | Read More",
      "href": "https://www.haifa-group.com/fertilization-dahlias-how-use-haifas-fertilizers"
    }
  },
  {
    "cropName": "Lilium",
    "category": "Ornamentals",
    "slug": "lilium-fertilizer",
    "title": "Lilium Fertilizer - Crop Guide for growing liliums - Haifa Group",
    "h1": "Lilium Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/lilium-fertilizer.png",
    "h2": "Lilium crop guide \u2013 get the most of your lilium fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/2_19.png?itok=VJvZiAOx",
    "recommendationsLink": {
      "text": "Lilium: A fertilization program in Holland | Read More",
      "href": "https://www.haifa-group.com/lilium-fertilization-program-holland"
    }
  },
  {
    "cropName": "Delphinium",
    "category": "Ornamentals",
    "slug": "delphinium-fertilizer",
    "title": "Delphinium Fertilizer Requirements and Crop Guide - Haifa Group",
    "h1": "Delphinium Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/delphinium-fertilizer.png",
    "h2": "Delphinium crop guide \u2013 get the most of your delphinium fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/22_2.png?itok=iyjAH9Mf",
    "recommendationsLink": {
      "text": "Nutrient recommendations for commercial cut flower production | Read More",
      "href": "https://www.haifa-group.com/nutrient-recommendations-commercial-cut-flower-production"
    }
  },
  {
    "cropName": "Limonium",
    "category": "Ornamentals",
    "slug": "crop-guide/ornamentals/limonium-fertilizers-crop-guide",
    "title": "Limonium plant and Crop Guide - Haifa Group",
    "h1": "Limonium Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-ornamentals-limonium-fertilizers-crop-guide.png",
    "h2": "Limonium crop guide \u2013 get the most of your limonium fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/44.png?itok=fMzCGF_s",
    "recommendationsLink": {
      "text": "Growing beautiful limoniums in greenhouses | Read More",
      "href": "https://www.haifa-group.com/growing-beautiful-limoniums-greenhouses"
    }
  },
  {
    "cropName": "Gerbera",
    "category": "Ornamentals",
    "slug": "gerbera-fertilizer",
    "title": "Gerbera Plant Fertilizer and Crop Guide - Haifa Group",
    "h1": "Gerbera Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/gerbera-fertilizer.png",
    "h2": "Gerbera crop guide \u2013 get the most of your gerbera fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/2_13.png?itok=gs2J66XA",
    "recommendationsLink": {
      "text": "How to maximize the yield of gerberas grown in greenhouse | Read More",
      "href": "https://www.haifa-group.com/how-maximize-yield-gerberas-grown-greenhouse-0"
    }
  },
  {
    "cropName": "Tulips",
    "category": "Ornamentals",
    "slug": "tulips-fertilizer",
    "title": "Tulip Fertilizer Growing Tulips Crod Guide - Haifa Group",
    "h1": "Tulips Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/tulips-fertilizer.png",
    "h2": "Tulips crop guide \u2013 get the most of your tulips fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/1_21.png?itok=KSQWzYA9",
    "recommendationsLink": {
      "text": "What is the best way to grow tulips? | Read More",
      "href": "https://www.haifa-group.com/what-best-way-grow-tulips"
    }
  },
  {
    "cropName": "Gladioli",
    "category": "Ornamentals",
    "slug": "gladioli",
    "title": "Gladiolus Fertilizer - Crop Guide - Haifa Group",
    "h1": "Gladioli Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/gladioli.png",
    "h2": "Gladioli crop guide \u2013 get the most of your gladioli fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/11_3.png?itok=zJURnpUN",
    "recommendationsLink": {
      "text": "How to grow gladiolus with more flowers | Read More",
      "href": "https://www.haifa-group.com/how-grow-gladiolus-more-flowers"
    }
  },
  {
    "cropName": "Forestry",
    "category": "Forestry",
    "slug": "crop-guide/forestry-fertilizers-crop-guide",
    "title": "Forestry Fertilizers & Crop Guide | Haifa Group",
    "h1": "Forestry Fertilizers & Crop Guide",
    "bannerImage": "/crops/banners/crop-guide-forestry-fertilizers-crop-guide.png",
    "h2": "Forestry crop guide \u2013 get the most of your forestry fertilizer",
    "h3": "",
    "body": [],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2024-03/2_0.png?itok=zWnD6kX1",
    "recommendationsLink": {
      "text": "Multicote\u2122 Agri Ideal Nutrition for Forest Trees | Read More",
      "href": "https://www.haifa-group.com/multicote%E2%84%A2-agri-ideal-nutrition-forest-trees"
    }
  },
  {
    "cropName": "Turf",
    "category": "Turf",
    "slug": "crop-guide/turf-fertilizer",
    "title": "Turf Fertilizer & Crop Guide - Haifa Group",
    "h1": "Turf",
    "bannerImage": "/crops/banners/crop-guide-turf-fertilizer.jpg",
    "h2": "Turf Nutrition by Haifa",
    "h3": "The challenge: year-round turf\u00a0performance",
    "body": [
      "Haifa's turf fertilizers and nutrition programs help maintain healthy, resilient turfgrass for sports fields, golf courses, landscapes, and recreational areas. Combining advanced fertilizer technologies with crop-specific nutritional expertise, Haifa delivers solutions that enhance turf quality, improve stress tolerance, optimize growth, and support sustainable turf management.",
      "Maintaining healthy, attractive turf throughout the year requires balancing growth, appearance, and resilience under changing weather conditions and continuous use. Whether for sports fields, golf courses, parks, or ornamental lawns, turfgrass must withstand traffic, environmental stress, and intensive maintenance while preserving its quality and uniformity.",
      "Haifa's turf nutrition concept is based on a deep understanding of turfgrass growth dynamics. Nutritional requirements vary among turf species, change with environmental conditions, and evolve throughout the growing season.Our turf fertilization programs are designed to support the physiological needs of the turf plant at every growth stage. They combine agronomic expertise with practical considerations such as maintenance practices, performance objectives, and budget requirements. The result is balanced nutrition that promotes healthy growth, improves turf quality, and enhances resource efficiency.",
      "Learn from the turf expert: watch a professional lecture"
    ],
    "mobileBannerImage": "https://www.haifa-group.com/sites/default/files/styles/small_banner_1920/public/2026-06/tuf_header_mobile_3.jpg?itok=WyC3dG5G",
    "recommendationsLink": {
      "text": "Multicote Turf\u2122 / Multigreen\u2122 - Turf fertilizer | Read More",
      "href": "https://www.haifa-group.com/multicote-turf%E2%84%A2-multigreen%E2%84%A2-turf-fertilizer"
    },
    "relatedTagsLink": {
      "text": "All related tags for Turf",
      "href": "https://www.haifa-group.com/plants-family/turf"
    }
  }
];

export function getCropGuideBySlug(slug: string): CropGuideData | undefined {
  return cropGuides.find((c) => c.slug === slug);
}

export function getCropGuideByName(name: string): CropGuideData | undefined {
  return cropGuides.find((c) => c.cropName.toLowerCase() === name.toLowerCase());
}

export const cropGuideSlugs = cropGuides.map((c) => c.slug);
