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
      /href="https?:\/\/[^"]*Mike Alpha-group\.com(\/[^"]*)"/g,
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
        title: 'Mike Alpha Insights: Bridging Continents - A Conversation on Leadership and Agribusiness',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: 2 tanks fertilizer stock solution - the nutritional base for your crop - Episode 2',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Shifting to water recirculated irrigation systems carries potential benefits - what are the risks and necessities to make the change.',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Lab analysis is often recognized as unnecessary expanse - is it really needed?',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Grafted vines in greenhouses – a growing trend',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Ions Antagonism and Synergism – because shortages do not necessarily mean being short',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Managing Water Contents in your Substrate – How and Why',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: pH Control in soilless cultivation – a crucial factor for nutritional efficiency. Manage it the right way!',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Clogged drippers - more common than you think. Yes, there is an easy solution',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: When roots uptake is not enough - Foliar application',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Calcium nutrition - How small actions can lead to great differences',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Not just availability - Nutrient ratios and EC are critical for your crop success',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Water is the key to life and plant nutrition - What should you consider regarding your water source?',
        image: '/images/logo.png',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStream: Stock solution - the nutritional base for your crop. Simple tips & tricks',
        image: '/images/logo.png',
        link: '/insights',
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
        title: 'Improving Hass Avocado Performance with Mike AlphaStim™ Vital',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Mike Fuerza maxima Agri in Potato: More Yield, Better ROI',
        image:
          '/crop-guides',
        link: '/insights Fuerza maxima-agri-potato-colombia-roi',
      },
      {
        title: 'Optimizing Kiwi Cultivation with Mike Alpha 360 Strategy',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Growing Stronger Cucumbers Under Stress',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Mike AlphaStim™ Powers Banana Performance from the Ground Up',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Taking Citrus Nutrition to the Next Level: Proven Results from South Africa',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Better yield and better NUE in garlic crop',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Smarter Nitrogen Decisions in Potatoes with nitrotune™',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Higher Potato Yields – Adding 25.8% to Grower Profit',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'How to increase strawberry yield and profitability using biostimulants',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Mike Fuerza Maxima™ (CRF) Boosts Potato Yield by 38% Under High Rainfall Conditions in Brazil',
        image:
          '/crop-guides',
        link: '/insights',
      },
      {
        title: 'Mike Fuerza Maxima™ (CRF) Increased Processing Tomatoes Yield dramatically',
        image:
          '/crop-guides',
        link: '/insights',
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
              '<p>In order to plan a suitable fertilizer program, some basic information is required: crop nutritional requirements, soil type, water quality, environment conditions and the type of irrigation system. You can use <a href="/smart-farming">Mike Alpha Precision Nutrition Program</a> web software to plan irrigation schemes and fertilization programs, based on your specific data. For detailed information, please contact us.</p>',
          },
          {
            question: 'What are the best fertilizers for foliar application?',
            answer:
              '<p>Successful foliar nutrition requires fully soluble fertilizers with a suitable nutritional composition, and good adhesion to the leaf surface. Fertilizers which can be applied in combination with agrochemicals and allow relatively high spray concentrations are preferred. <a href="/crop-guides">Mike Alpha Bonus</a> products are ideal foliar fertilizers.</p>',
          },
          {
            question: 'Where can I find information about foliar application of fertilizers?',
            answer:
              '<p>Information about foliar nutrition, including useful videos, can be found <a href="/crop-guides">here</a>. With our lookup tool you can find plenty of additional information.</p>',
          },
          {
            question: 'Do you offer any tools to facilitate fertilizer dissolution?',
            answer:
              '<p>Yes. We offer an easy-to-use educator that speeds up dissolution and enhances mixing in the tank. See further <a href="/crop-guides">here</a>.</p>',
          },
          {
            question: 'Where can I buy your fertilizers in India?',
            answer:
              '<p>Mike Alpha operates exclusively in India across Gujarat, Madhya Pradesh, and Chhattisgarh. Please visit our <a href="/distributors">Distributors network page</a> to locate the nearest authorized dealer or contact our agronomy team.</p>',
          },
          {
            question: 'Where can I find the MSDS for the fertilizers?',
            answer:
              '<p>Please visit our dedicated <a href="/products/sds-request">SDS Request page</a> to access Safety Data Sheets for all registered Mike Alpha products.</p>',
          },
          {
            question: 'How can I achieve good Fertigation?',
            answer:
              '<p>Good Precision Fertigation needs monitoring. Continuously analyze EC, pH and nutrients in the irrigation water and in soil solution.</p>',
          },
          {
            question: 'How can I improve quality parameters in fruits?',
            answer:
              '<p>Foliar application of Mike Alpha Bonus improves quality parameters in fruits.</p>',
          },
          {
            question: 'What is the fastest way to correct crop deficiencies?',
            answer:
              '<p>For prompt correction of deficiencies, apply nutrients by foliar sprays. To identify deficiencies and find the best Mike Alpha solution, feel free to use our <a href="/crop-guides">crop deficiencies image library</a>.</p>',
          },
        ],
      },
      {
        category: 'Controlled release fertilizers',
        items: [
          {
            question: 'What is the best CRF formula for my crops?',
            answer:
              '<p>Controlled release fertilizer formulae are characterized by their nutritional composition and release profile. Choosing the right formula, you should consider the nutritional requirements of your crop and the longevity of its growth season. Expected soil temperatures should also be taken into account, as they affect the release rate. Learn more about Mike Alpha <a href="/crop-guides">controlled release fertilizers</a>, and feel free to contact us for additional information.</p>',
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
            question: 'Where can I buy your controlled release fertilizers?',
            answer:
              '<p>To receive complete information about authorized distributors across Gujarat, Madhya Pradesh, and Chhattisgarh, please check our <a href="/distributors">Distributors page</a>.</p>',
          },
          {
            question: 'What is the best way for fertilization in net houses during the winter?',
            answer:
              '<p><a href="/crop-guides">Controlled release fertilizers</a> offer an ideal fertilization in net houses during the winter.</p>',
          },
          {
            question: 'How can I spare technical irrigations?',
            answer:
              '<p>Apply Mike Fuerza Maxima before the rainy season to spare the need for technical irrigations.</p>',
          },
          {
            question: 'Is there a way to predict controlled release nutrition throughout the season?',
            answer:
              '<p>The <a href="/crop-guides">FloraMatch<sup>TM</sup> software</a> helps you predict availability of nutrients throughout the season, and to plan Mike Fuerza Maxima<sup>®</sup> controlled release fertilization accordingly.</p>',
          },
        ],
      },
      {
        category: 'Industrial',
        items: [
          {
            question: 'Do you have potassium nitrate for glass making?',
            answer:
              '<p>Yes. Mike Alpha produces potassium nitrate technical grade that suit the high standards of the glass industry. Read more about our industrial chemicals <a href="/crop-guides">here</a>.</p>',
          },
          {
            question: 'Where are your industrial chemicals available?',
            answer:
              '<p>Mike Alpha supplies industrial grade potassium nitrate across India. Please visit our <a href="/contact">Contact page</a> or consult our technical sales team for distributor information.</p>',
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
    path: '/mike-alpha-videos',
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
        title: 'Precision Fertigation – The Precise Way to Feed Plants',
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
        title: 'Mike Potassium Nitrate (13-0-45) - The Ultimate Source of Potassium',
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
          'Mike Fuerza Maxima™ (CRF) products are designed to feed plants continuously over months, at maximum nutrient uptake efficiency.',
        iframes: [],
      },
      {
        title: 'Mike Alpha Precision Nutrition Program - Plant Nutrition Expert System',
        description:
          "Discover Mike Alpha's powerful tool that helps growers to plan irrigation schemes and Precision Fertigation programs, considering the actual growth conditions.",
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
          '/crop-guides',
        link: '/crop-guides',
      },
      {
        title: 'Mike Alpha Blog',
        description:
          'Dive into the Mike Alpha Blog to learn from the deep expertise of Mike Alpha specialists and explore agronomy insights.',
        image:
          '/crop-guides',
        link: '/crop-guides',
      },
      {
        title: 'Mike Alpha Precision Nutrition Program - Plant Nutrition Expert System',
        image:
          '/crop-guides',
        link: '/smart-farming',
      },
    ],
  },
];

export function getInsightsArticleByPath(path: string): InsightsArticle | undefined {
  return insightsArticles.find((a) => a.path === path);
}
