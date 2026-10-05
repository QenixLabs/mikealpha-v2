export type CorporateBreadcrumb = {
  label: string;
  to?: string;
};

export type CorporateLink = {
  label: string;
  url: string;
};

export type CorporateSection = {
  title?: string;
  content?: string;
  bullets?: string[];
  links?: CorporateLink[];
  image?: string;
  imageAlt?: string;
};

export type CorporateLeader = {
  name: string;
  role: string;
  initials?: string;
  image?: string;
  link?: string;
};

export type CorporateLeaderGroup = {
  title: string;
  leaders: CorporateLeader[];
};

export type CorporateNewsCard = {
  title: string;
  date?: string;
  excerpt?: string;
  image?: string;
  link?: string;
};

export type CorporateBranchRegion = {
  region: string;
  items: { label: string; url?: string }[];
};

export type CorporateArticle = {
  path: string;
  title: string;
  subtitle?: string;
  breadcrumb: CorporateBreadcrumb[];
  heroImage?: string;
  intro?: string;
  sections?: CorporateSection[];
  leaderGroups?: CorporateLeaderGroup[];
  newsCards?: CorporateNewsCard[];
  branchRegions?: CorporateBranchRegion[];
  footerText?: string;
};

export const corporateArticles: CorporateArticle[] = [
  {
    path: '/about-us-0',
    title: 'About Mike Alpha Agro',
    subtitle: 'About Us',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'About Us' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Mike Alpha Agro is a premier provider of specialty plant nutrition, water-soluble fertilizers, and precision fertigation solutions across the Indian subcontinent. Combining global agronomic science with deep expertise in Indian soils, climates, and cropping systems, we empower farmers across the nation to achieve higher yields, superior produce quality, and long-term soil vitality.',
    sections: [
      {
        title: 'Pioneering Plant Nutrition in India',
        content:
          'Mike Alpha Agro has been at the forefront of India\'s precision agriculture revolution. By introducing pure potassium nitrate, 100% water-soluble NPKs, and advanced foliar nutrition, Mike Alpha transformed nutrient delivery across micro-irrigation and drip fertigation systems throughout key agricultural belts.\n\nDriven by a spirit of innovation and farmer prosperity, Mike Alpha Agro delivers groundbreaking solutions that maximize Nutrient Use Efficiency (NUE) while minimizing runoff and ecological impact. Our product portfolio is fully registered and compliant with the Fertilizer (Inorganic, Organic or Mixed) (Control) Order 1985 (FCO) of the Ministry of Agriculture and Farmers Welfare, Government of India.\n\nFrom our specialized supply chain hubs, blending facilities, and authorized distributor network spanning Gujarat, Madhya Pradesh, and Chhattisgarh, Mike Alpha serves progressive growers, corporate orchards, polyhouses, and smallholder farmers.\n\nOur mission is to create highly effective, customized plant nutrition programs tailored to India\'s diverse agro-climatic zones—supporting sustainable agriculture, food security, and farmer prosperity.',
      },
      {
        title: 'Our Journey & Milestones in India',
        bullets: [
          'Introduction of high-purity water-soluble potassium nitrate to Indian horticulture and high-value cash crop sectors.',
          'Pioneering drip fertigation protocols across sugarcane, cotton, pomegranate, banana, and potato growing regions.',
          'Establishment of central supply hubs and specialized blending facilities adhering to strict FCO 1985 quality benchmarks.',
          'Introduction of Multi-K™ and Poly-Feed™ formulations tailored to alkaline, calcareous, and degraded soil profiles common in Indian farming tracts.',
          'Expansion of the authorized distributor and dealer network to over 500+ specialized agri-retail centers across key agricultural states.',
          'Introduction of advanced Controlled Release Fertilizers (CRF) and HaifaStim™ / MikeStim bio-stimulants for climate-resilient farming.',
          'Active collaboration with State Agricultural Universities (SAUs) and ICAR research centers to validate crop nutrition schedules.',
          'Digital empowerment of Indian farmers through regional language crop guides, fertigation calculators, and mobile advisory services.',
          'Commitment to Atmanirbhar Krishi and sustainable soil health, helping Indian growers reduce fertilizer wastage by up to 30%.',
        ],
      },
    ],
  },
  {
    path: '/leadership-team',
    title: 'Leadership Team',
    subtitle: 'Board of Directors',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Leadership Team' }],
    heroImage: '/images/hero-bg-2.jpg',
    leaderGroups: [
      {
        title: 'Board of Directors',
        leaders: [
          { name: 'Milan Sanghani', role: 'Director', initials: 'MS' },
          { name: 'Krunal Shah', role: 'Director', initials: 'KS' },
          { name: 'Piyush Upadhyay', role: 'Director', initials: 'PU' },
          { name: 'Sahil Malik', role: 'Director', initials: 'SM' },
        ],
      },
    ],
  },
  {
    path: '/condition-sales',
    title: 'Conditions of Sale — India',
    subtitle: 'Mike Alpha Agro General Conditions of Sale',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Conditions of Sale' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'These General Conditions of Sale govern all commercial transactions, supplies, and sales of specialty fertilizer products, biostimulants, and agricultural inputs by Mike Alpha Agro Pvt. Ltd. to distributors, dealers, institutional buyers, and agricultural enterprises within the Republic of India.',
    sections: [
      {
        title: '1. Applicable Law & Regulatory Compliance (FCO 1985)',
        content:
          'All sales and deliveries are subject to the Fertilizer (Inorganic, Organic or Mixed) (Control) Order, 1985 (FCO), as amended from time to time by the Ministry of Agriculture and Farmers Welfare, Government of India, the Essential Commodities Act, 1955, and the Indian Sale of Goods Act, 1930. All products supplied by Mike Alpha Agro comply with the physical and chemical specifications prescribed under Schedule I of the FCO 1985.',
      },
      {
        title: '2. Orders, Confirmation & Contract Formation',
        content:
          'All purchase orders placed by the Buyer are subject to written confirmation by Mike Alpha Agro. A binding contract shall come into existence only upon dispatch of an official Sales Confirmation or Proforma Invoice. Any terms proposed by the Buyer that conflict with or add to these Conditions of Sale are expressly rejected unless agreed in writing and signed by an authorized signatory of Mike Alpha Agro.',
      },
      {
        title: '3. Pricing, Invoicing & Goods and Services Tax (GST)',
        content:
          'All prices are quoted in Indian Rupees (INR) and are exclusive of applicable Goods and Services Tax (GST), cess, octroi, and local tolls unless expressly stated otherwise in writing. Applicable GST will be charged at statutory rates prevailing on the date of invoice. If any new levy, tax, or statutory duty is imposed or amended by the Government of India or State Governments prior to delivery, such variance shall be to the account of the Buyer.',
      },
      {
        title: '4. Delivery, Transit Risk & Freight Terms',
        content:
          'Unless otherwise agreed in writing, deliveries are on Ex-Warehouse or FOR (Free on Road) destination basis as specified in the Sales Confirmation. Risk of loss, damage, or deterioration during transit passes to the Buyer upon handover of the consignment to the carrier or upon delivery at the designated destination point, whichever applies under the agreed commercial terms. Transit insurance coverage shall be arranged according to the agreed terms.',
      },
      {
        title: '5. Inspection, Quality Verification & Sampling Procedure',
        content:
          'The Buyer must inspect shipments upon arrival. Any claim regarding short delivery, damaged outer packaging, or patent defects must be noted on the lorry receipt (LR) / consignment note and communicated in writing to Mike Alpha Agro within three (3) working days of receipt.\n\nIn the event of any question regarding chemical analysis or quality, sampling must be performed strictly in accordance with the statutory sampling methodology prescribed under Schedule II of the Fertilizer Control Order (FCO) 1985 in the presence of an authorized representative of Mike Alpha Agro, and tested by a notified Government Fertilizer Testing Laboratory in India.',
      },
      {
        title: '6. Storage & Handling Guidelines for Indian Climate Conditions',
        content:
          'Because water-soluble fertilizers and specialty nitrates are hygroscopic in nature, the Buyer and its network must store products in cool, dry, well-ventilated godowns protected from direct sunlight, rain, moisture, and high humidity common during monsoon months. Bags must be stacked on wooden or plastic pallets elevated from damp floors. Mike Alpha Agro accepts no liability for caking, degradation, or weight variation caused by improper storage after handover.',
      },
      {
        title: '7. Payment Terms & Commercial Credit',
        content:
          'Payment terms shall be as specified on the invoice. Payments must be remitted via RTGS / NEFT / approved banking channels in Indian Rupees (INR) to the designated bank account of Mike Alpha Agro. In case of delayed payment beyond the agreed credit period, interest shall accrue at the rate of 18% per annum or the rate applicable under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, calculated on a daily compounding basis until full realization.',
      },
      {
        title: '8. Limitation of Liability & Agronomic Advisory Disclaimer',
        content:
          'Crop response and agricultural yields depend on a complex array of factors outside the seller’s control—including soil fertility, water salinity, irrigation scheduling, weather events, seed quality, and pesticide compatibility. While Mike Alpha Agro guarantees that products conform to FCO 1985 chemical specifications at the time of delivery, no warranty or guarantee of crop yield, monetary profit, or particular outcome is made. To the maximum extent permitted by Indian law, Mike Alpha Agro’s aggregate liability shall never exceed the net invoice value of the specific batch of goods giving rise to the claim.',
      },
      {
        title: '9. Force Majeure',
        content:
          'Neither party shall be liable for non-performance or delay caused by events beyond reasonable control, including acts of God, extreme monsoons, cyclones, flooding, earthquakes, statutory export/import embargoes, port congestions, transport blockades, government notifications under the Essential Commodities Act, labor strikes, or civil disturbances in India.',
      },
      {
        title: '10. Governing Law, Dispute Resolution & Jurisdiction',
        content:
          'These Conditions of Sale and all contracts arising hereunder shall be governed by and construed in accordance with the substantive laws of India. Any dispute, claim, or controversy arising out of or in connection with these Conditions shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996 (as amended). The place of arbitration shall be New Delhi or Ahmedabad, and proceedings shall be conducted in English.\n\nSubject to arbitration, the competent Civil Courts located in New Delhi or Ahmedabad, India, shall have exclusive jurisdiction over all matters relating hereto.',
      },
    ],
  },
  {
    path: '/mike-alpha-rd-center',
    title: "Mike Alpha's Agronomic Research & Innovation Center",
    subtitle: 'Advancing Precision Plant Nutrition for Indian Agriculture',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: "R&D Innovative Center" }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      "Mike alpha technology established in 2021 in spain. Mike Alpha Agro operates dedicated Agronomic Research Trial Stations and Centers of Excellence located in Gujarat and Central India. The centers feature state-of-the-art fertigation research greenhouses, experimental orchards, and open-field trial plots dedicated to optimizing Nutrient Use Efficiency (NUE), mitigating soil salinity, and developing climate-resilient crop nutrition protocols for Indian farmers.",
    sections: [
      {
        title: 'Global Roots & Technological Foundation',
        content:
          "Mike alpha technology established in 2021 in spain, bringing forth cutting-edge European agronomic research, formulation science, and sustainable crop nutrition technologies. Building upon this international foundation, Mike Alpha continues to develop innovative nutrient delivery systems that optimize plant vigor, increase agricultural productivity, and protect soil ecosystems.",
        bullets: [
          'Founded in Spain (2021): Pioneering advanced specialty plant nutrition and bio-efficiency solutions.',
          'European R&D Benchmarks: Precision formulation chemistry, high-purity inputs, and rigorous quality standards.',
          'Cross-Continental Agronomic Innovation: Adapting global research breakthroughs to regional soil chemistries and diverse climate zones.',
        ],
      },
      {
        title: 'Pioneering Agronomic Science for Indian Conditions',
        content:
          "Agriculture across India encompasses widely divergent soil chemistry—from the black cotton soils of the Deccan plateau and saline soils of coastal Gujarat to the alluvial plains of the Indo-Gangetic belt. Mike Alpha's R&D teams evaluate specialty fertilizer formulations under authentic Indian field conditions, bridging laboratory science with practical farm economics.\n\nOur research focus spans precision fertigation, foliar absorption kinetics, biostimulant stress mitigation against heat and drought waves, and heavy metal-free crop nutrition. By collaborating with leading State Agricultural Universities (SAUs) and ICAR institutes, our findings directly translate into actionable, high-yielding crop schedules for Indian growers.",
      },
      {
        title: 'Research Infrastructure & Capabilities',
        content:
          'Our agronomic trial centers feature precision automated micro-irrigation systems, specialized climate-controlled polyhouses, and an analytical soil and water testing laboratory equipped to support progressive growers.',
        bullets: [
          'Fertigation Automation & Trial Greenhouses: Enables micro-dosing evaluation of water-soluble NPKs and micronutrient chelates across horticultural and floricultural crops.',
          'Open Field Cropping Systems: Long-term crop response trials on Cotton, Sugarcane, Basmati Rice, Wheat, Pomegranate, Banana, Grapes, and Spices.',
          'Saline & Calcareous Soil Remediation: Specialized studies evaluating the synergistic action of potassium nitrate and bio-stimulants in mitigating sodium toxicity in Indian soils.',
          'Controlled Release Nutrition (CRF): Developing single-application and basal fertilizer management strategies tailored to Indian Kharif and Rabi seasonal dynamics.',
        ],
      },
    ],
  },
  {
    path: '/mike-alpha-values',
    title: "Mike Alpha's Values & Code of Conduct",
    subtitle: 'Corporate Ethics & Indian Regulatory Compliance',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Code of Conduct' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      "The Code of Conduct of Mike Alpha Agro is established upon the highest standards of corporate governance, statutory compliance under Indian law, and unwavering commitment to farmer welfare, environmental stewardship, and ethical business practices across all operations in the Republic of India.",
    sections: [
      {
        title: 'Core Principles Guiding Mike Alpha Agro',
        bullets: [
          'Statutory & Legal Compliance: Absolute adherence to all applicable laws of India, including the Companies Act 2013, Fertilizer Control Order (FCO) 1985, Essential Commodities Act 1955, Prevention of Corruption Act 1988, Environment (Protection) Act 1986, and Goods and Services Tax (GST) regulations.',
          'Zero Tolerance for Corruption & Bribery: Absolute commitment to fair competition and transparency. Strict prohibition against any form of commercial bribery, kickbacks, or improper inducements with commercial partners or public authorities.',
          'Respectful & Harassment-Free Workplace: Strict compliance with the Prevention of Sexual Harassment of Women at Workplace (POSH) Act, 2013, ensuring an inclusive, safe, and dignified environment for all employees regardless of caste, creed, religion, gender, or regional origin.',
          'Labor Rights & Fair Employment: Full observance of the Factories Act 1948, Minimum Wages Act 1948, and the Child Labour (Prohibition and Regulation) Act 1986. Strict prohibition of child labor or involuntary labor across our facilities and supply chain.',
          'Product Integrity & Truth in Advertising: Supplying only authenticated, laboratory-tested fertilizers complying with FCO 1985 standards. Honest, science-based agronomic advisory without misleading claims to Indian farmers.',
          'Environmental Responsibility & Worker Safety: Compliance with the Water Act 1974, Air Act 1981, and Hazardous Waste Management Rules, upholding occupational health standards and environmental conservation across all warehousing and logistics hubs.',
          'Vigil Mechanism & Whistleblower Protection: Providing accessible, confidential reporting channels for employees, partners, and growers to voice grievances or report misconduct without fear of retaliation.',
        ],
      },
    ],
  },
  {
    path: '/core-values-1',
    title: 'Values That Create Growth',
    subtitle: 'Core Values',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Core Values' }],
    heroImage: '/images/hero-bg-2.jpg',
    sections: [
      {
        title: 'Pioneering the Future of Indian Agriculture',
        content:
          'In a nation where agriculture is the backbone of livelihoods, Mike Alpha Agro embraces innovation as a powerful catalyst for national growth. We pioneer advanced plant nutrition solutions that leverage cutting-edge fertigation and foliar technologies, enabling Indian growers to maximize yield per drop of water and nutrient applied.\n\nOur agronomic innovations are rooted in listening closely to Indian farmers—understanding the challenges of monsoon variability, soil degradation, and market economics—and delivering tailored nutrient solutions that secure farm profitability.',
      },
      {
        title: 'Sustainability Through Precision',
        content:
          'At Mike Alpha, we believe sustainable farming is essential for India\'s future. By replacing high-loss conventional commodity fertilizers with targeted specialty nitrates, water-soluble NPKs, and bio-stimulants, we help protect India\'s groundwater from nitrate leaching, regenerate degraded soils, and lower agricultural carbon emissions.\n\nOur plant-centric nutrition methodology ensures that every nutrient applied serves the growing crop directly, conserving natural resources and nurturing soil health for generations to come.',
      },
      {
        title: "Farmer-First: It's All About Being Human",
        content:
          'At Mike Alpha Agro, our relationships with farmers, agronomists, distributors, and dealers are built on mutual respect, integrity, and shared prosperity. When our partner farmers harvest bumper crops and thrive economically, the entire agricultural community prospers together.\n\nThrough on-farm technical training, regional Kisan Gosthis, digital agronomic apps, and dedicated field agronomists, we walk alongside India\'s farming community every day.',
      },
    ],
  },
  {
    path: '/news-events',
    title: 'News & Events — India & Global',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'News & Events' }],
    heroImage: '/images/hero-bg-2.jpg',
    newsCards: [
      { title: 'Mike Alpha Agro Showcases Precision Fertigation at National Horticulture Expo 2026', image: '/images/blog-1.jpg', link: '/news-events' },
      { title: 'Empowering Banana & Pomegranate Growers: Advanced Fertigation Workshops in Maharashtra & Gujarat', image: '/images/blog-2.jpg', link: '/news-events' },
      { title: 'Mike Alpha Introduces Advanced Water-Soluble NPK Formulations Compliant with Updated FCO Guidelines', image: '/images/blog-3.jpg', link: '/news-events' },
      { title: 'Kisan Diwas 2026: Honoring Progressive Farmers Transforming Nutrient Use Efficiency in Punjab & Haryana', image: '/images/blog-1.jpg', link: '/news-events' },
      { title: 'Mike Alpha Agronomic Advisory AI Chat Launches in Hindi and English for 24/7 Farmer Assistance', image: '/images/blog-2.jpg', link: '/news-events' },
      { title: 'Sustainable Soil Health Initiative: Mike Alpha Collaborates with Agricultural Universities on NUE Trials', image: '/images/blog-3.jpg', link: '/news-events' },
    ],
  },
  {
    path: '/mike-alpha-grows',
    title: 'Mike Alpha Grows — India Strategic Vision',
    subtitle: 'Pioneering Sustainable Growth',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Mike Alpha Grows' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'In alignment with India\'s mission for sustainable agriculture and enhanced farm productivity, Mike Alpha Agro has unveiled its Five-Year Strategic Expansion Plan. The initiative expands regional formulation capacities, broadens distribution reach, and advances digital agronomy for millions of Indian farmers.',
    sections: [
      {
        title: 'Key Pillars of the Indian Growth Plan',
        bullets: [
          'Investment in advanced local blending and packaging facilities in Gujarat and Maharashtra, engineered to the highest environmental and safety standards.',
          'Expansion of the authorized distributor and agro-retail network to reach over 1,000 rural clusters across 15 agricultural states.',
          'Scaling up soil health advisory services and mobile testing units to assist smallholder farmers in balanced fertilization and cost optimization.',
          'Advancing high-purity potassium nitrate solutions for thermal solar energy storage projects across Rajasthan and Gujarat solar parks.',
          'Direct training of 100,000+ progressive growers annually in precision drip fertigation and eco-friendly biostimulant usage.',
          'Strengthening domestic employment, regional logistics infrastructure, and sustainable value chain partnerships across India.',
        ],
      },
    ],
    footerText:
      '"Mike Alpha Agro: Advancing national food security, soil health, and farmer prosperity through science-driven specialty plant nutrition."',
  },
  {
    path: '/mike-alpha-worldwide',
    title: 'Operations',
    subtitle: 'Pan-India Operations & Global Export Capability',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Operations' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Mike Alpha is proudly operational Pan-India, delivering advanced crop nutrition solutions, field agronomic trials, and dedicated dealer support across all agricultural regions of the country. With strong operational hubs in Gujarat, Madhya Pradesh, and Chhattisgarh, our nationwide reach supports growers across every major farming belt.\n\nIn addition to our nationwide presence, we export all over the world. Mike Alpha actively exports specialty water-soluble fertilizers, bio-nutrients, and micronutrient formulations to international markets outside India, serving global partners with high-purity inputs and tailored agricultural solutions.',
    sections: [
      {
        title: 'We Export All Over The World — Global Agricultural Solutions',
        content:
          'Mike Alpha has established robust international export capabilities, supplying premium agricultural inputs to growers, distributors, and agribusinesses outside India. Leveraging our European technological formulation standards, stringent laboratory quality checks, and strategic access to international shipping ports, we deliver containerized shipments of specialty fertilizers across global markets.\n\nOur export portfolio covers 100% water-soluble NPKs, high-purity potassium and calcium nitrates, concentrated biostimulants, and EDTA-chelated micronutrients customized for diverse international soil chemistries and climatic requirements.',
        bullets: [
          'Worldwide Export Footprint: Actively exporting specialty plant nutrition products across international markets.',
          'Custom Formulations & Packaging: Tailored NPK grades, multilingual export labeling, and customized packaging solutions.',
          'International Quality Assurance: Certified batch analysis, ISO-standard quality controls, and full regulatory documentation.',
          'Global Logistics Network: Efficient dispatch via leading Indian ports (Mundra, Nhava Sheva) ensuring prompt worldwide transit.',
        ],
      },
      {
        title: 'Operational Pan-India — Nationwide Distribution & Advisory',
        content:
          'Within India, Mike Alpha maintains extensive Pan-India operations. Our localized teams work directly with regional distributors, retail cooperatives, and farming communities to ensure immediate product availability, seasonal inventory planning, and expert agronomic advice.',
        bullets: [
          'Pan-India Supply Chain: Reliable nationwide fulfillment delivering specialty nutrition to farmers across every state.',
          'Regional Distribution Centers: Dedicated distribution infrastructure across Gujarat, Madhya Pradesh, and Chhattisgarh.',
          'On-Field Agronomic Support: Multilingual field agronomists conducting on-farm trials, soil testing, and fertigation advisory.',
        ],
      },
    ],
    branchRegions: [
      {
        region: 'Gujarat (State Operations & Regional Network)',
        items: [
          { label: 'Kutch Region: Bhuj & Anjar Distribution Hubs' },
          { label: 'Saurashtra Region: Morbi, Junagadh, Halvad, Dhrangadhra & Surendranagar' },
          { label: 'Central Gujarat: Viramgam, Sanand, Kheda, Nadiad & Anand' },
          { label: 'South Gujarat: Vadodara, Bharuch, Ankleshwar, Surat & Bardoli' },
          { label: 'North Gujarat: Sabarkantha & Banaskantha Agronomy Centers' },
        ],
      },
      {
        region: 'Madhya Pradesh (Central Agricultural Zone)',
        items: [
          { label: 'Western MP: Indore & Ujjain Horticultural Corridors' },
          { label: 'Central MP: Bhopal & Jabalpur Fertigation Centers' },
          { label: 'Northern MP: Gwalior & Chambal Advisory Network' },
          { label: 'Specialized Crop Nutrition for Soybean, Garlic, Potato & Wheat' },
        ],
      },
      {
        region: 'Chhattisgarh (Paddy & Vegetable Belt)',
        items: [
          { label: 'Central Hub: Raipur Regional Distribution & Advisory Center' },
          { label: 'Northern Zone: Bilaspur Crop Nutrition Depot' },
          { label: 'Southern Zone: Durg, Bhilai & Rajnandgaon Grower Support' },
          { label: 'Specialized High-Efficiency Programs for Rice, Pulses & Horticulture' },
        ],
      },
      {
        region: 'Pan-India & International Export Division',
        items: [
          { label: 'Pan-India Logistics: Direct dispatches across northern, southern, eastern & western agricultural corridors' },
          { label: 'Global Export Hub: International container shipping from Mundra & Nhava Sheva ports' },
          { label: 'Overseas Trade Inquiries: Export documentation, customized private labeling & global distributor partnerships' },
        ],
      },
    ],
    footerText:
      '"We export all over the world. Mike Alpha is fully operational Pan-India while supplying advanced, laboratory-tested specialty crop nutrition products to partners and growers across international markets."',
  },
];

export function getCorporateArticleByPath(path: string): CorporateArticle | undefined {
  return corporateArticles.find((a) => a.path === path);
}
