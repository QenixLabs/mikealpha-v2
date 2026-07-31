export type InsightsCard = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
};

export type InsightsVideoGroup = {
  title: string;
  description?: string;
  iframes: string[];
};

export type InsightsFaqGroup = {
  category: string;
  items: { question: string; answer: string }[];
};

export type InsightsArticle = {
  path: string;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; to?: string }[];
  heroImage?: string;
  intro?: string;
  cards?: InsightsCard[];
  videoGroups?: InsightsVideoGroup[];
  faqGroups?: InsightsFaqGroup[];
};

const rewriteAnswer = (html: string): string => {
  const toArticle = (path: string) => {
    const slug = path.replace(/\/$/, '').split('/').pop();
    return slug ? `/article/${slug}` : path;
  };

  return html
    .replace(
      /href="https?:\/\/[^"]*haifa-group\.com(\/[^"]*)"/g,
      (_match, path) => `href="${toArticle(path)}"`
    )
    .replace(
      /href="(\/[^"]*)"/g,
      (_match, path) => `href="${toArticle(path)}"`
    );
};

export const insightsArticles: InsightsArticle[] = [
  {
    path: '/podcasts',
    title: 'Mike AlphaStream - Agriculture Podcasts',
    subtitle: 'Agriculture Podcasts',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'Insights', to: '/insights' },
      { label: 'Podcasts' },
    ],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Protected cropping systems are highly effective means of producing more with less, yet true effectiveness must be backed up by true professionality. Mike Alpha’s modern greenhouse experts are here to share their knowledge, tips, and key need-to-knows for achieving the best nutritional program for your crop.',
    cards: [
      {
        title: 'Haifa Insights: Bridging Continents - A Conversation on Leadership and Agribusiness',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/max_1024/public/2026-02/ywtywb_bnr.jpg?itok=uo5w3-Ki',
        link: 'https://www.haifa-group.com/podcast/haifa-insights-bridging-continents-conversation-leadership-and-agribusiness',
      },
      {
        title: 'HaifaStream: 2 tanks fertilizer stock solution - the nutritional base for your crop - Episode 2',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-2-tanks-fertilizer-stock-solution-nutritional-base-your-crop-episode-2',
      },
      {
        title: 'HaifaStream: Shifting to water recirculated irrigation systems carries potential benefits - what are the risks and necessities to make the change.',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-shifting-water-recirculated-irrigation-systems-carries-potential-benefits-what',
      },
      {
        title: 'HaifaStream: Lab analysis is often recognized as unnecessary expanse - is it really needed?',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/httpsomnyfmshowshaifastream-greenhouse-plant-nutrition-haifa-grhaifa-stream-lab-analysis',
      },
      {
        title: 'HaifaStream: Grafted vines in greenhouses – a growing trend',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-grafted-vines-greenhouses-growing-trend',
      },
      {
        title: 'HaifaStream: Ions Antagonism and Synergism – because shortages do not necessarily mean being short',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-ions-antagonism-and-synergism-because-shortages-do-not-necessarily-mean-being',
      },
      {
        title: 'HaifaStream: Managing Water Contents in your Substrate – How and Why',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-managing-water-contents-your-substrate-how-and-why-haifastream-greenhouse-plant',
      },
      {
        title: 'HaifaStream: pH Control in soilless cultivation – a crucial factor for nutritional efficiency. Manage it the right way!',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-ph-control-soilless-cultivation-crucial-factor-nutritional-efficiency-manage-it',
      },
      {
        title: 'HaifaStream: Clogged drippers - more common than you think. Yes, there is an easy solution',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-clogged-drippers-more-common-you-think-yes-theres-easy-solution',
      },
      {
        title: 'HaifaStream: When roots uptake is not enough - Foliar application',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-when-roots-uptake-not-enough-foliar-application',
      },
      {
        title: 'HaifaStream: Calcium nutrition - How small actions can lead to great differences',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-calcium-nutrition-how-small-actions-can-lead-great-differences',
      },
      {
        title: 'HaifaStream: Not just availability - Nutrient ratios and EC are critical for your crop success',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-not-just-availability-nutrient-ratios-and-ec-are-critical-your-crops-success',
      },
      {
        title: 'HaifaStream: Water is the key to life and plant nutrition - What should you consider regarding your water source?',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-water-key-life-and-plant-nutrition-what-should-you-consider-regarding-your-water',
      },
      {
        title: 'HaifaStream: Stock solution - the nutritional base for your crop. Simple tips & tricks',
        image: 'https://www.haifa-group.com/themes/haifa/images/haifa-main-logo.png',
        link: 'https://www.haifa-group.com/podcast/haifastream-stock-solution-nutritional-base-your-crop-simple-tips-tricks',
      },
    ],
  },
  {
    path: '/success-stories',
    title: 'Success Stories',
    subtitle: 'Grower Success Stories',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'Insights', to: '/insights' },
      { label: 'Success Stories' },
    ],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'See how growers around the world are improving yield, quality, and ROI with Mike Alpha products and programs.',
    cards: [
      {
        title: 'Improving Hass Avocado Performance with HaifaStim™ Vital',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-06/thumbnail_4.jpg?itok=5ZhC447s',
        link: 'https://www.haifa-group.com/success-stories/avocado-haifastim-vital-chile',
      },
      {
        title: 'Multicote™ Agri in Potato: More Yield, Better ROI',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-06/thumbnail_2.jpg?itok=4ZG8NlIE',
        link: 'https://www.haifa-group.com/success-stories/multicote-agri-potato-colombia-roi',
      },
      {
        title: 'Optimizing Kiwi Cultivation with Haifa 360 Strategy',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-05/thumbnail_3.jpg?itok=XdtPO7lW',
        link: 'https://www.haifa-group.com/success-stories/Haifa-360-kiwi-italy',
      },
      {
        title: 'Growing Stronger Cucumbers Under Stress',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-05/thumbnail.jpg?itok=DXR_vuYE',
        link: 'https://www.haifa-group.com/success-stories/wall-up-cucumber-mexico',
      },
      {
        title: 'HaifaStim™ Powers Banana Performance from the Ground Up',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-04/thumbnail_2.jpg?itok=RhCrUg71',
        link: 'https://www.haifa-group.com/success-stories/haifastim-banana-mexico',
      },
      {
        title: 'Taking Citrus Nutrition to the Next Level: Proven Results from South Africa',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-03/thumbnail_1.jpg?itok=TkoZRGrH',
        link: 'https://www.haifa-group.com/success-stories/haifa-360-citrus-rsa',
      },
      {
        title: 'Better yield and better NUE in garlic crop',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-03/picture3.jpg?itok=2YGT-9zZ',
        link: 'https://www.haifa-group.com/success-stories/better-yield-and-better-nue-garlic-crop',
      },
      {
        title: 'Smarter Nitrogen Decisions in Potatoes with Croptune™',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-03/thumbnail.jpg?itok=wcjJL9rP',
        link: 'https://www.haifa-group.com/success-stories/croptune-improves-nitrogen-use-in-potato',
      },
      {
        title: 'Higher Potato Yields – Adding 25.8% to Grower Profit',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-02/thumbnail.jpg?itok=tOm7Mlle',
        link: 'https://www.haifa-group.com/success-stories/potato-china-2025',
      },
      {
        title: 'How to increase strawberry yield and profitability using biostimulants',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2026-01/thumbnail.jpg?itok=UQStUT7m',
        link: 'https://www.haifa-group.com/success-stories/haifastim-protocol-strawberry-usa',
      },
      {
        title: 'Multicote™ Agri Boosts Potato Yield by 38% Under High Rainfall Conditions in Brazil',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2025-12/thumbnail_9.jpg?itok=yhuiFbgr',
        link: 'https://www.haifa-group.com/success-stories/multicote-agri-potato-brazil',
      },
      {
        title: 'Multicote™ Agri Increased Processing Tomatoes Yield dramatically',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2025-12/thumbnail_6.jpg?itok=QnVxgZI2',
        link: 'https://www.haifa-group.com/success-stories/crf-processing-tomato-italy',
      },
    ],
  },
  {
    path: '/faq',
    title: 'FAQ',
    subtitle: 'Frequently Asked Questions',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'Insights', to: '/insights' },
      { label: 'FAQ' },
    ],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Find answers to common questions about water soluble fertilizers, controlled release fertilizers, industrial products, and how to get the most from Mike Alpha solutions.',
    faqGroups: [
      {
        category: 'Water soluble fertilizers',
        items: [
          {
            question: 'What is the best fertilizer formula for my crop?',
            answer:
              '<p>In order to plan a suitable fertilizer program, some basic information is required: crop nutritional requirements, soil type, water quality, environment conditions and the type of irrigation system. You can use <a href="https://www.haifa-group.com/nutrinet%E2%84%A2-plant-nutrition-expert-system">Mike Alpha NutriNet</a> web software to plan irrigation schemes and fertilization programs, based on your specific data. For detailed information, please contact us.</p>',
          },
          {
            question: 'What are the best fertilizers for foliar application?',
            answer:
              '<p>Successful foliar nutrition requires fully soluble fertilizers with a suitable nutritional composition, and good adhesion to the leaf surface. Fertilizers which can be applied in combination with agrochemicals and allow relatively high spray concentrations are preferred. <a href="https://www.haifa-group.com/products-haifa-bonus">Mike Alpha Bonus</a> products are ideal foliar fertilizers.</p>',
          },
          {
            question: 'Where can I find information about foliar application of fertilizers?',
            answer:
              '<p>Information about foliar nutrition, including useful videos, can be found <a href="https://www.haifa-group.com/articles/foliar-fertilizer">here</a>. With our lookup tool you can find plenty of additional information.</p>',
          },
          {
            question: 'Do you offer any tools to facilitate fertilizer dissolution?',
            answer:
              '<p>Yes. We offer an easy-to-use educator that speeds up dissolution and enhances mixing in the tank. See further <a href="https://www.haifa-group.com/articles/fertilizer-dissolving-tools-preparing-fertilizer-solution-easily" target="_blank">here</a>.</p>',
          },
          {
            question: 'Where can I buy your fertilizers in my country?',
            answer:
              '<p>Please use the <a href="https://www.haifa-group.com/haifa-worldwide">branches map and list</a> to locate the relevant Mike Alpha office, and for contact details.</p>',
          },
          {
            question: 'Where can I find the MSDS for the fertilizers?',
            answer:
              '<p>Please use the <a href="https://www.haifa-group.com/haifa-worldwide">branches map and list</a> to locate the relevant Mike Alpha office, and for contact details.</p>',
          },
          {
            question: 'How can I achieve good Nutrigation?',
            answer:
              '<p>Good Nutrigation™ needs monitoring. Continuously analyze EC, pH and nutrients in the irrigation water and in soil solution.</p>',
          },
          {
            question: 'How can I improve quality parameters in fruits?',
            answer:
              '<p>Foliar application of Mike Alpha Bonus improves quality parameters in fruits.</p>',
          },
          {
            question: 'What is the fastest way to correct crop deficiencies?',
            answer:
              '<p>For prompt correction of deficiencies, apply nutrients by foliar sprays. To identify deficiencies and find the best Mike Alpha solution, feel free to use our <a href="https://www.haifa-group.com/knowledge_center/deficiencies/">crop deficiencies image library</a>.</p>',
          },
        ],
      },
      {
        category: 'Controlled release fertilizers',
        items: [
          {
            question: 'What is the best CRF formula for my crops?',
            answer:
              '<p>Controlled release fertilizer formulae are characterized by their nutritional composition and release profile. Choosing the right formula, you should consider the nutritional requirements of your crop and the longevity of its growth season. Expected soil temperatures should also be taken into account, as they affect the release rate. Learn more about Mike Alpha <a href="https://www.haifa-group.com/controlled-release-fertilizer">controlled release fertilizers</a>, and feel free to contact us for additional information.</p>',
          },
          {
            question: 'Is one application sufficient for the whole growth season?',
            answer:
              '<p>Mike Alpha controlled release fertilizers are available with release longevities of 2, 4, 6, 8 and 12 months. With the right choice of product, you may provide your crop with continuous nutrition throughout the growth season.</p>',
          },
          {
            question: 'How can I set a fertilization program for my turf?',
            answer:
              '<p>Year-round nutritional program should take care of the changing nutritional needs of the turf plant and support seasonal growth processes. This requires use of formulae with different N:K ratios in different times of the year. Selection of formulae and setting application times and rates should take into consideration the combination of turf species, climate conditions, usage of the lawn and the maintenance level.</p>',
          },
          {
            question: 'Where can I find the MSDS for my fertilizers?',
            answer: '<p>Please ask your Mike Alpha products distributor for the relevant MSDS.</p>',
          },
          {
            question: 'Where can I buy your controlled release fertilizers in my country?',
            answer:
              '<p>To receive complete information about our products distribution, please use the <a href="https://www.haifa-group.com/haifa-worldwide">branches map and list</a> to locate the relevant Mike Alpha office, and for contact details.</p>',
          },
          {
            question: 'What is the best way for fertilization in net houses during the winter?',
            answer:
              '<p><a href="https://www.haifa-group.com/controlled-release-fertilizer">Controlled release fertilizers</a> offer an ideal fertilization in net houses during the winter.</p>',
          },
          {
            question: 'How can I spare technical irrigations?',
            answer:
              '<p>Apply Multicote before the rainy season to spare the need for technical irrigations.</p>',
          },
          {
            question: 'Is there a way to predict controlled release nutrition throughout the season?',
            answer:
              '<p>The <a href="https://www.haifa-group.com/lobby/multimatchtm-customize-controlled-release-nutrition-your-crops">FloraMatch<sup>TM</sup> software</a> helps you predict availability of nutrients throughout the season, and to plan Multicote<sup>®</sup> controlled release fertilization accordingly.</p>',
          },
        ],
      },
      {
        category: 'Industrial',
        items: [
          {
            question: 'Do you have potassium nitrate for glass making?',
            answer:
              '<p>Yes. Mike Alpha produces potassium nitrate technical grade that suit the high standards of the glass industry. Read more about our industrial chemicals <a href="https://www.haifa-group.com/Industrial-Uses">here</a>.</p>',
          },
          {
            question: 'Are your industrial chemicals available worldwide?',
            answer:
              '<p>Use our <a href="https://www.haifa-group.com/haifa-worldwide">branches map and list</a>, and send an email to Mike Alpha office in your region, asking for contact details of a distributor of Mike Alpha products.</p>',
          },
          {
            question: 'Where can I find the MSDS for your industrial chemicals?',
            answer: '<p>Ask your Mike Alpha products distributor for the relevant MSDS.</p>',
          },
        ],
      },
    ].map((group) => ({
      ...group,
      items: group.items.map((item) => ({ ...item, answer: rewriteAnswer(item.answer) })),
    })),
  },
  {
    path: '/haifa-videos',
    title: 'Mike Alpha Agriculture Videos',
    subtitle: 'Agriculture Videos',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'Insights', to: '/insights' },
      { label: 'Videos' },
    ],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'A wealth of video clips awaits you – from field success stories and expert tips to product highlights and digital tools in action. Each video provides professional insight into plant nutrition and showcases Mike Alpha’s advanced solutions that drive sustainable growth worldwide. Explore the featured clips below and visit our YouTube channel to watch more inspiring content.',
    videoGroups: [
      {
        title: 'Discover a world of knowledge and innovation!',
        iframes: [
          'https://www.youtube.com/embed/8G-pdTHG7YM',
          'https://www.youtube.com/embed/UTup8U1Gzj8',
          'https://www.youtube.com/embed/u75jOvY2ZFw',
        ],
      },
      {
        title: 'Nutrigation™ (fertigation) – The Precise Way to Feed Plants',
        description:
          'The integration of plant nutrition with irrigation has transformed modern agriculture by enabling precise, efficient, and sustainable nutrient management.',
        iframes: [],
      },
      {
        title: 'Foliar Feeding - Highly Effective Plant Nutrition',
        description:
          'Foliar application of fertilizers provides fast, on-the-spot nutrition to ensure high, top-quality yields. Discover how it works.',
        iframes: [],
      },
      {
        title: 'Multi-K™ - The Ultimate Source of Potassium',
        description:
          'Mike Alpha’s potassium nitrate is a unique source of potassium by its nutritional value, fertilization efficiency, application considerations and environmental impact.',
        iframes: [
          'https://www.youtube.com/embed/PahinNMe7PA',
          'https://www.youtube.com/embed/60dLNAgyUIM',
          'https://www.youtube.com/embed/51XEMQvE4dA',
        ],
      },
      {
        title: 'Controlled Release Fertilizers - Single Application, Multiple Benefits',
        description:
          'Multicote™ products are designed to feed plants continuously over months, at maximum nutrient uptake efficiency.',
        iframes: [],
      },
      {
        title: 'NutriNet™ - Plant Nutrition Expert System',
        description:
          "Discover Mike Alpha's powerful tool that helps growers to plan irrigation schemes and Nutrigation™ (fertigation) programs, considering the actual growth conditions.",
        iframes: [],
      },
      {
        title: 'Identify and Handle Plant Nutrition Deficiencies',
        description:
          'Join Mike Alpha Academy for an online seminar about how to identify and handle plant nutrient deficiencies.',
        iframes: [],
      },
    ],
    cards: [
      {
        title: 'Plant Nutrients and Their Functions',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2025-11/plant_nutrient_fuvtions_thumbnail.jpg?itok=HYG-CHIi',
        link: 'https://www.haifa-group.com/articles/main-functions-plant-nutrients',
      },
      {
        title: 'Mike Alpha Blog',
        description:
          'Dive into the Mike Alpha Blog to learn from the deep expertise of Mike Alpha specialists and explore agronomy insights.',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2025-11/haifa_blog_thumbnail.jpg?itok=ivWtlSmy',
        link: 'https://www.haifa-group.com/haifa-blog',
      },
      {
        title: 'NutriNet™ - Plant Nutrition Expert System',
        image:
          'https://www.haifa-group.com/sites/default/files/styles/branch/public/2024-04/NutriNet-MediaC-01_2.jpg?itok=cbQfNiJW',
        link: 'https://www.haifa-group.com/nutrinet%E2%84%A2-plant-nutrition-expert-system-2',
      },
    ],
  },
];

export function getInsightsArticleByPath(path: string): InsightsArticle | undefined {
  return insightsArticles.find((a) => a.path === path);
}
