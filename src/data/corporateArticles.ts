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
    title: 'About Haifa Group',
    subtitle: 'About Us',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'About Us' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Haifa Group is a multi-national corporation and a global leading supplier of specialty plant nutrition. With decades of profound experience, Haifa is renowned for its pioneering spirit and the innovative solutions it offers.',
    sections: [
      {
        title: 'Pioneering Plant Nutrition',
        content:
          'Since the 1960s, Haifa Group has been at the forefront of the global agricultural revolution, pioneering efficient plant nutrition solutions for advanced agricultural practices. By those times, the introduction of fertigation and the use of potassium nitrate as a fertilizer fertigation marked the beginning of a new era in plant nutrition.\n\nDriven by a spirit of pioneering and innovation, Haifa Group delivers groundbreaking solutions that enhance crop nutrition and fertilizer efficiency, all while prioritizing environmental sustainability.\n\nHaifa Group operates through 19 subsidiaries worldwide, with production sites in Israel, France, and Canada, as well as proprietary blending facilities in Brazil and South Africa. Backed by extensive infrastructure and well-established distribution and logistics networks, Haifa makes its advanced plant nutrition solutions available to growers in more than 100 countries.\n\nHaifa’s key mission is to create highly effective plant nutrition solutions for growers worldwide by leveraging a keen familiarity with their lives and needs, while being proactive in a rapidly changing world. Our comprehensive solutions seamlessly integrate high-quality products, expert knowledge, and cutting-edge technologies, all underpinned by a plant-centric approach.',
      },
      {
        title: 'Our History',
        bullets: [
          "It all started from a scientist's idea to produce potassium nitrate from Israel's few natural resources.",
          'With the establishment of the new factory, malfunctions were discovered and the place was shut down. The settlement of the problems lasts two years.',
          'Haifa begins to export its products and within 4 years has become a profitable company.',
          "The company's scientists are developing advanced and revolutionary fertilizer products that are becoming international brands.",
          'The company is listed on the Israel Stock Exchange, rebranded and begins to establish subsidiaries around the world.',
          'Controlled release fertilization technology developed by the company makes the product advice even more innovative and strengthens the innovative advantage of Haifa.',
          'A new factory is located in the south of the country.',
          'Haifa publishes an investment plan that aims to double the group\'s production capacity to help the Israeli economy grow, create new jobs in the south and contribute to increasing agricultural productivity.',
          "Haifa expands its investment in sustainable development and is accepted into the UN's Sustainability Organization, thus adopting the Global Compact - a responsible policy program and social responsibility.",
          'Haifa continues its contribution to the Israeli economy in employment, exports and economic development.',
          'Haifa develops applications and innovative technologies for sharing accessible and fast knowledge with the world\'s farmers.',
        ],
      },
    ],
  },
  {
    path: '/leadership-team',
    title: 'Leadership Team',
    subtitle: 'Our management team',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Leadership Team' }],
    heroImage: '/images/hero-bg-2.jpg',
    leaderGroups: [
      {
        title: 'Leadership team',
        leaders: [{ name: 'Mr. Motti Levin', role: 'CEO' }],
      },
      {
        title: 'Board of Directors',
        leaders: [
          { name: 'Mr. Joshua Trump', role: 'Board Member' },
          { name: 'Mr. Ariel Halperin', role: 'Board Chairman' },
          { name: 'Mr. Ran Ben-Or', role: 'Board Member' },
          { name: 'Mrs. Deborah Ifrah', role: 'Board Member' },
          { name: 'Mr. Eyal Shamear', role: 'Board Member' },
          { name: 'Mr. Mark S. Hirsch', role: 'Board Member' },
          { name: 'Mr. Jules Trump', role: 'Board Member' },
        ],
      },
      {
        title: 'Executive Team',
        leaders: [
          { name: 'Mrs. Natali Sifado', role: 'VP of Human Resources' },
          { name: 'Mrs. Sharon Eyal', role: 'VP Operations' },
          { name: 'Mr. Natan Feldman', role: 'VP Marketing, Business development & Innovation' },
          { name: 'Mr. Nir Yitzhaki', role: 'CFO' },
          { name: 'Mr. Dori Liberman', role: 'VP of Supply Chain' },
          { name: 'Mr. Gil Elimelech', role: 'VP Research & Development' },
          { name: 'Mr. Maarten Roelofs', role: 'VP Europe sales' },
          { name: 'Mr. Mark Aviv', role: 'VP Safety & Security' },
          { name: 'Mrs. Dorit Koltin', role: 'VP Regulation, Environment & Sustainability' },
          { name: 'Mr. Lior Beit Halachmi', role: 'CIO' },
          { name: 'Mr. Kiril Vinerski', role: 'CEO of Haifa Negev Technologies' },
        ],
      },
      {
        title: 'Worldwide Subsidiaries',
        leaders: [
          { name: 'Giuliana Feldman', role: 'MD HAIFA SOUTH AMERICA' },
          { name: 'Fausto Venegas', role: 'MD Haifa Ecuador' },
          { name: 'Nathabhat Aum Soontornpalin', role: 'MD Haifa Thailand' },
          { name: 'Sudhakar Maddila', role: 'MD Haifa India' },
          { name: 'Erez Zehavi', role: 'MD Haifa Israel' },
          { name: 'Claudia Patricia Coronado Go', role: 'MD Haifa Colombia' },
          { name: 'Isi Kela Kowalsman', role: 'Commercial Manager' },
          { name: 'Juan Jose Valdes Torres', role: 'MD Haifa Mexico' },
          { name: 'Erik Siemens', role: 'MD Haifa Iberia' },
          { name: 'Nicolas Tinetti', role: 'MD Haifa France' },
          { name: 'Shirley Peng', role: 'MD Haifa China' },
          { name: 'Chris Potts', role: 'MD Haifa Australia' },
          { name: 'Ohad Aviram', role: 'Africa & Middle East Cluster Manager' },
          { name: 'David Lewis Vawter Lee Jr.', role: 'MD Haifa North America' },
          { name: 'Dawie Fourie', role: 'MD Haifa South Africa' },
          { name: 'Yoav Ronen', role: 'Asia & Pacific Cluster Manager' },
          { name: 'Thanasis Rosoglou', role: 'MD Haifa South East Europe' },
          { name: 'Yasar Aydin', role: 'MD Haifa Turkey' },
          { name: 'David Leykin', role: 'MD Haifa Italy' },
          { name: 'Inge Daneels', role: 'MD Haifa North West Europe' },
        ],
      },
    ],
  },
  {
    path: '/condition-sales',
    title: 'Condition of Sales',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Condition of Sales' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      "Below are Haifa Group's Condition of Sales documents sorted by the different Haifa subsidiaries worldwide.",
    sections: [
      {
        title: 'General Conditions',
        links: [
          {
            label: 'Haifa Group General Conditions of Sales document',
            url: 'https://www.haifa-group.com/sites/default/files/2025-07/standard_eng_0625.pdf',
          },
        ],
      },
      {
        title: 'Regional Conditions',
        links: [
          {
            label: 'Haifa North West Europe',
            url: 'https://www.haifa-group.com/sites/default/files/2025-07/nwe_eng_0725.pdf',
          },
          {
            label: 'Haifa North America',
            url: 'https://www.haifa-group.com/sites/default/files/Standard%20Eng%20updated.pdf',
          },
          {
            label: 'Haifa South Africa',
            url: 'https://www.haifa-group.com/sites/default/files/files/conditions_of_sales-HSA-English.pdf',
          },
          {
            label: 'Haifa East Asia',
            url: 'https://www.haifa-group.com/sites/default/files/files/conditions_of_sales-East-Asia-English.pdf',
          },
          {
            label: 'Haifa Australia',
            url: 'https://www.haifa-group.com/sites/default/files/files/conditions_of_sales-Australia-English.pdf',
          },
          {
            label: 'Haifa Colombia',
            url: 'https://www.haifa-group.com/sites/default/files/Conditions%20of%20Sales-%20Colombia%20Spanish.pdf',
          },
          {
            label: 'Haifa Tarim',
            url: 'https://www.haifa-group.com/sites/default/files/Condition%20of%20sales_0.pdf',
          },
        ],
      },
    ],
  },
  {
    path: '/haifas-rd-center',
    title: "Haifa's R&D Center",
    subtitle: 'Honoring a Legacy, Advancing the Future',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: "R&D Innovative Center" }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      "Located at the historical Aaronsohn Farm, the first Israeli Agricultural Trial Station, founded in 1910. The center includes a well-equipped R&D greenhouse, orchards and open fields, and hosts short- and long-term in vivo studies to assess Haifa's plant nutrition innovations and explore precision agriculture technologies.",
    sections: [
      {
        title: 'Honoring a Legacy, Advancing the Future',
        content:
          "Haifa's R&D and Innovation Center is located at the historic Aaronsohn Farm in Atlit, the site of Israel's first agricultural trial station, founded in 1910 by agronomist Aaron Aaronsohn—renowned for his discovery of wild Emmer wheat. Dedicated to the development of Jewish agriculture in the Holy Land, the farm was active until 1917 and served as a base for agricultural research and the NILI espionage network during World War I.\n\nIn 2014, Haifa Group initiated the revival of this iconic site, linking its pioneering legacy to our core values of innovation and sustainability. In addition to restoring the original buildings, we established state-of-the-art research facilities, including greenhouses, orchards, open fields, and experimental wheat plots that follow Aaronsohn's vision.\n\nToday, the farm hosts various trials that examine Haifa's innovations in plant nutrition and support the development of new products and strategies for crop nutrition.",
      },
      {
        title: 'Research Infrastructure',
        content:
          'The research greenhouse supports in-vivo studies on nutrient use efficiency (NUE) and precision agriculture. Trials are conducted on 15+ cropping systems, primarily in soilless culture.',
        bullets: [
          'Controlled Growth Room: Enables precise control of light intensity and spectrum, CO₂ level and nutrition to optimize growth. Research here aims to fine-tune nutrition strategies to support accelerated growth and biomass accumulation under ideal growing conditions.',
        ],
      },
      {
        title: 'Outdoors Research Plots',
        content:
          'Our open-field research plots include a citrus orchard, an avocado plantation, and wheat research plots that continue Aaron Aaronsohn\'s legacy.',
        bullets: [
          'Citrus Orchard — Planted in 2015 at a density of 3 x 5 m, fertilized with Multicote™ Agri and supplemented with Haifa Bonus™ and HaifaStim™ foliar products.',
          'Avocado Plantation — Planted in 2018 at a density of 3.5 x 4 m, with nutrient management using Multicote™ Agri for healthy establishment, uniform growth and early fruiting.',
          'Wheat Research Plot — In honor of Aaron Aaronsohn\'s legacy, wheat trials are conducted in collaboration with the Institute of Evolution Wild Cereal Gene Bank (ICGB) at the University of Haifa, contributing to breeding programs that improve nutritional quality, disease resistance and drought tolerance.',
        ],
      },
    ],
  },
  {
    path: '/haifas-values',
    title: "Haifa's Values",
    subtitle: 'Code of Conduct',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Code of Conduct' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      "The Code of Conduct of the employees of Haifa Group is based on the governing laws and regulations of both Israel and the international community. The Group is committed to comply with all laws, beliefs, and rules relevant to its activity, to conform to universal moral values and adhere to proper administration principles. This document is not intended to replace the Group's Code of Ethics or any of the different regulations but to supplement them.",
    sections: [
      {
        title: 'Code of Conduct guiding Haifa Group',
        bullets: [
          'High ethical conduct: integrity, reliability, honesty, adherence to appropriate and respectful personal behavior.',
          'Seeing the Group, its employees, customers, suppliers and business partners, as well as other companies of the international Haifa Group, as full partners in the fulfillment of the goals and obligations of the Group.',
          'Honesty in all of the Group’s relationships with customers, suppliers, business partners, competitors, government and civil entities, authorities, and its employees.',
          'High quality of products and services.',
          'Full compliance, at all times and places, with the organizational culture rules that the Group has defined and embraced, and with the requirements of laws and agreements - among others, with regard to reduction of environmental impacts and maintenance of a safe and healthy working environment.',
          'Perceiving customers and suppliers as the Group’s greatest assets and commitment to maintain their satisfaction.',
          'Regarding our employees as the key to the Group’s success and committing to their advancement and nurture, and to strengthening their sense of belonging and identification with the Group and its goals, while treating all employees equally, regardless of religion, race, gender, age or opinion.',
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
        title: 'Pioneering the Future',
        content:
          'In a world challenged by a growing population and climate changes, Haifa Group embraces innovation as a powerful force for progress. We pioneer advanced solutions that harness cutting-edge technologies, with a focus on nutrient management systems that enable precision agriculture.\n\nInnovation at Haifa is driven by curiosity, professionalism, and a relentless pursuit of improvement. We listen openly—to the market, to our customers, and to our teams—translating insights into actionable breakthroughs. Our commitment is to lead, to anticipate, and to bring forth new ideas and processes that empower growers and shape the future of sustainable agriculture.',
      },
      {
        title: 'Sustainability through Precision',
        content:
          'At Haifa, we believe in creating meaningful, lasting impact—on agriculture, the environment, and society. Our commitment to sustainability is rooted in responsibility, accountability, and a deep understanding of the evolving needs of the market and the planet.\n\nWe strive to safeguard natural habitats, support community well-being, and enhance quality of life through innovation and care. By ensuring global food security, we aim to make the world a better place for current and future generations.\n\nHaifa’s specialty plant nutrition solutions—based on premium products, expert agronomic knowledge, and advanced technologies—are the cornerstone of our impact-driven approach. This is sustainability through precision.',
      },
      {
        title: "It's all about being human",
        content:
          'At Haifa, we act out of a genuine desire to build a more caring and attentive world. The value of COMPASSion begins with our internal culture—shaping how we communicate, collaborate, and support one another—and extends outward to our customers, suppliers, and growth partners.\n\nOur business ethos is rooted in creating humane, fair, and respectful relationships that foster cooperation and trust. Whether inside the organization or out in the field, we strive to generate positive value and seek Win-Win outcomes in every interaction. This value truly comes to life in our relationship with our ultimate growth partners: the growers. With deep familiarity with their work and the challenges they face, we share our knowledge and expertise to support their success—because when they thrive, we all grow together.',
      },
    ],
  },
  {
    path: '/news-events',
    title: 'News & Events',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'News & Events' }],
    heroImage: '/images/hero-bg-2.jpg',
    newsCards: [
      { title: 'Maala ESG Index 2026: Haifa Group Continues to Rise', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/news/esg-index-2026-platinumplus-rank' },
      { title: 'Haifa Group at the IFA Annual Conference 2026: Strengthening Connections Across the Global Fertilizer Industry', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/news/haifa-at-ifa-conferene-26' },
      { title: 'Haifa Group CEO Motti Levin Featured in The CEO Magazine', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/news/motti-featured-ceo-magazine' },
      { title: 'Haifa Group Joins the European Biostimulants Industry Council', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/news/haifa-joins-ebic' },
      { title: 'The President’s Award Granted to the Dimona Educational Farm Project', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/news/president-award-dimona-educational-farm' },
      { title: 'Haifa North-West Europe Celebrates Prestigious Win at the 2025 Shootsta Impact Awards', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/news/haifa-north-west-europe-celebrates-prestigious-win-2025-shootsta-impact-awards' },
      { title: 'Expanding Horizons: Haifa Expert Strengthens Market Presence in Vietnam', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/news/visit-in-vietnam-nov25' },
      { title: 'Your 24/7 Agronomist is Here: Introducing the Haifa Group AI Chat', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/news/chatbot-is-here' },
      { title: 'Growing Opportunity, Empowering Communities: Haifa Colombia in Action', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/news/volunteering-colombia-nov25' },
      { title: 'Sharing Knowledge, Growing Expertise: Haifa’s Greenhouse Expertise Reaches Latin America', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/news/marco-latin-america-oct25' },
      { title: 'Haifa Iberia Team Takes Action for the Environment', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/news/iberia-tree-planting-oct25' },
      { title: 'Haifa at the Israel Agriculture Science Conference: A Fascinating Encounter of Research, Innovation and Industry', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/news/israel-agriculture-science-conference' },
      { title: 'Haifa Mexico at CONFIVA 2026', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/event/haifa-mexico-confiva-2026' },
      { title: 'Haifa South America at HortiTec 2026', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/event/haifa-south-america-hortitec-2026' },
      { title: 'Haifa Colombia at Nación Berries 2026', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/event/haifa-colombia-nacion-berries-2026' },
      { title: 'Haifa Colombia Seminar Strengthens Regional Partnerships', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/event/colombia-regional-seminar-0526' },
      { title: 'Haifa at GreenTech Americas 2026', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/event/haifa-greentech-americas-2026' },
      { title: 'TrayTalk Strawberry brings growers together to discuss the future of tray plant production', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/event/traytalk-strawberry-brings-growers-together-discuss-future-tray-plant-production' },
      { title: 'IPM ESSEN 2026 – Conclusions from Haifa North West Europe', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/event/at-ipm-essen-2026' },
      { title: 'Revival & Growth: Haifa at the Arava Open Day Exhibition', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/event/arava-exhibition-2026' },
      { title: 'Haifa Leadership Forum 2026: From Global Vision to Growth in the Field', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/event/haifa-leadership-forum-2026' },
      { title: 'HaifaStim Roadshow 2025: Where Expertise Meets Fun', image: '/images/blog-1.jpg', link: 'https://www.haifa-group.com/event/iberia-haifastim-roadshow-2025' },
      { title: 'Nutri Haitech Conference 2025: Advancing Solutions for the Open Field', image: '/images/blog-2.jpg', link: 'https://www.haifa-group.com/event/nutri-haitech-conference-nov25' },
      { title: 'Haifa Group Advances Strategic Partnerships and Community Relations in Crete – Driven by Innovation, Impact & COMPASSion', image: '/images/blog-3.jpg', link: 'https://www.haifa-group.com/event/crete-conference-nov25' },
    ],
  },
  {
    path: '/haifa-grows',
    title: 'Haifa Grows',
    subtitle: 'Pioneering the Future',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Haifa Grows' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Following a growing demand for Haifa’s specialty plant nutrition solutions and the expansion of its product range, the Group released a Five-Year Plan “Haifa 2024”. The plan aims at doubling the group\'s production capacity and enabling production of new advanced products.',
    sections: [
      {
        title: 'The plan that will contribute the world’s agriculture',
        content:
          "The Haifa Group's plan to double its production capacity significantly contributes to increasing agricultural productivity. The Five Year Plan contributes to the global agriculture industry and the economy on many levels, all while maintaining a sustainable approach and meeting top quality standards.",
      },
      {
        title: 'What does the Five Year Plan include?',
        bullets: [
          'The Haifa Group will invest approximately US$ 350 million in infrastructure and facilities for the production of special fertilizers, including investment in an ammonia production facility - a key raw material in the Haifa Group\'s production process.',
          'The new ammonia facility will be part of a greater industrial complex that Haifa will establish in Mishor Rotem, Israel, and it will include a power plant that will serve the Haifa Group plant.',
          'Doubling production capacity will significantly increase Haifa\'s contribution to Israel\'s economy and exports, double its contribution to gross domestic product, increase its export output, and double local raw material purchases.',
          "Beside being a perfect plant nutrition product, Haifa's high quality potassium nitrate is used to operate thermal solar stations, thereby actively supporting a significant reduction in the use of fossil fuels.",
          'Haifa Group produces specialty fertilizers, which reduce greenhouse gas emissions by 30% compared to ordinary fertilizers. Increasing production capacity will increase the global use of these fertilizers, to the welfare of the farmers and the environment.',
          'As the UN forecasts a 70% increase in global food consumption by 2050, Haifa Group acts to increase agricultural productivity through innovative solutions and advanced fertilization methods.',
          'Haifa Group directly and indirectly employs about 5,000 employees. Expanding the group\'s activities will create more jobs and may double the number of employees.',
        ],
      },
    ],
    footerText:
      '"The Haifa Group\'s Five Year Plan: Contribute to the global agriculture industry and the economy on many levels, all while maintaining a sustainable approach and meeting top quality standards."',
  },
  {
    path: '/haifa-worldwide',
    title: 'Haifa Worldwide',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'Haifa Worldwide' }],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Haifa Group operates through subsidiaries around the world, with production sites, blending facilities and commercial offices serving growers in more than 100 countries.',
    branchRegions: [
      {
        region: 'Australia',
        items: [{ label: 'Haifa Australia' }],
      },
      {
        region: 'America',
        items: [
          { label: 'Haifa Colombia' },
          { label: 'Haifa Ecuador' },
          { label: 'Haifa Mexico' },
          { label: 'Haifa North America' },
          { label: 'Haifa South America' },
        ],
      },
      {
        region: 'Europe',
        items: [
          { label: 'Haifa France' },
          { label: 'Haifa Iberia' },
          { label: 'Haifa Italia' },
          { label: 'Haifa North West Europe' },
          { label: 'Haifa South East Europe' },
          { label: 'Haifa Turkey' },
        ],
      },
      {
        region: 'China',
        items: [{ label: 'Haifa China' }],
      },
      {
        region: 'Asia',
        items: [{ label: 'Haifa East Asia' }, { label: 'Haifa India' }],
      },
      {
        region: 'Africa & Middle East',
        items: [{ label: 'Haifa Israel' }, { label: 'Haifa South Africa' }],
      },
    ],
  },
];

export function getCorporateArticleByPath(path: string): CorporateArticle | undefined {
  return corporateArticles.find((a) => a.path === path);
}
