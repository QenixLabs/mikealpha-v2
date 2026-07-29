export type ImpactSection = {
  title?: string;
  content: string;
  image?: string;
  imageAlt?: string;
};

export type ImpactStat = {
  value: string;
  label: string;
  sublabel?: string;
  color?: string;
};

export type ImpactTab = {
  id: string;
  label: string;
  content: string;
};

export type ImpactArticle = {
  path: string;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; to?: string }[];
  heroImage?: string;
  intro?: string;
  sections?: ImpactSection[];
  stats?: ImpactStat[];
  tabs?: ImpactTab[];
  footerText?: string;
};

export const impactArticles: ImpactArticle[] = [
  {
    path: '/impact-innovation-compassion',
    title: 'IMPACT, INNOVATION, COMPASSion',
    subtitle: 'Leading through IMPACT, INNOVATION, COMPASSion',
    breadcrumb: [{ label: 'HOME', to: '/' }, { label: 'IMPACT, INNOVATION, COMPASSion' }],
    heroImage: '/images/impact-bg.jpg',
    intro:
      'Environmental, Social, and Governance (ESG) values are at the heart of everything we do. From reducing our carbon footprint to supporting sustainable agriculture and fostering a culture of inclusivity, our commitment is clear: To grow more food responsibly and commit to our plant health and a thriving humanity. We are proud to present our second ESG report for the years 2022-2023.',
    stats: [
      { value: '17', label: 'Subsidiaries', sublabel: 'Around the world', color: '#57C168' },
      { value: '3', label: 'Production Plants', sublabel: 'Main site in India', color: '#F0534E' },
      { value: '725', label: 'Employees', color: '#FC9E24' },
      { value: '60', label: 'Years', sublabel: 'Of plant nutrition experience', color: '#48C2C6' },
      { value: '100+', label: 'Countries', sublabel: "where the company's products are sold", color: '#09AA5D' },
      { value: '30%', label: 'Market Share', sublabel: 'In global greenhouse', color: '#00854D' },
      { value: '95%', label: "Mike Alpha's Products", sublabel: 'are exported', color: '#00854D' },
      { value: '5,500+', label: 'Farmers Worldwide', sublabel: 'received agronomic training from our experts', color: '#F7C900' },
      { value: '$70M', label: 'Invested', sublabel: 'in environmental projects', color: '#57C168' },
    ],
    sections: [
      {
        title: 'Growing a Sustainable Future',
        content:
          'As stewards of the land and leaders in innovation, we at Mike Alpha are committed to shaping a better world through sustainable practices and impactful solutions. Together with our partners and communities, we are driving meaningful change for a resilient, thriving future.',
        image: '/images/hero-bg-2.jpg',
        imageAlt: 'Motti Levin',
      },
      {
        title: '2030 Goals',
        content:
          'Our bold 2030 goals focus on driving measurable impact across environmental and social dimensions: 20% reduction in GHG emissions intensity (Scopes 1+2), 50% of energy sourced from renewables, convert 7M hectares to sustainable agriculture cutting CO₂e by 10M tons, 60% of packaging made with at least 30% recycled material, employee satisfaction exceeds 85% with 5% of hires from diverse groups, and 70% of employees participate in corporate volunteering.',
      },
      {
        title: 'See How We Make an IMPACT',
        content:
          'Our work is organized around three pillars: IMPACT – driving sustainability through innovation and measurable change; INNOVATION – creating groundbreaking solutions for a greener tomorrow; and COMPASSion – empowering our people and communities with purpose and care.',
      },
    ],
  },
  {
    path: '/precision-impact/esg/environment',
    title: 'Sustainability in Action: Our Environmental Commitment Across the Value Chain',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'IMPACT', to: '/precision-impact' },
      { label: 'Environment' },
    ],
    heroImage: '/images/impact-bg.jpg',
    intro:
      "At Mike Alpha, we are dedicated to leading the way in sustainable agriculture, ensuring a healthy planet for today and future generations. Our business practices and products support plant health and enhance humanity's ability to provide food security while minimizing our environmental footprint. We believe climate action starts with responsibility. Our Climate Policy sets a clear path for innovation, impact, and resilience—turning sustainability from vision into daily practice.",
    sections: [
      {
        title: 'Reduction of Production-related Greenhouse Gas Emissions (Scope 1+2)',
        content:
          'Mike Alpha strives to create a sustainable cycle of resource use across our operations, from innovative production processes that minimize waste to utilizing byproducts for secondary purposes. Our efforts include significant investments in technologies to ensure that our operations are not only efficient but also meet environmental stewardship. Current developments include the BLUMONIA Plant using renewable energy from photovoltaic fields for ammonia production, CO₂ capture from production processes, and reusing 50,000 tons of sludge from wastewater treatment in the restoration of evaporation ponds.',
      },
      {
        title: 'Reduction of Greenhouse Gas Emissions Along the Supply Chain (Scope 3)',
        content:
          'Our commitment to reducing emissions extends beyond our production processes. We adopt efficient technological solutions that enhance sustainability across our entire supply chain and further reduce greenhouse gas emissions. Ongoing projects include a new railway terminal inside the production site replacing truck transport with rail, saving approximately 8 kg of CO₂ equivalent emissions per ton and reducing our product shipping carbon footprint by 50%, as well as exploring sea transport options and optimizing warehouse locations.',
      },
      {
        title: 'Waste Reduction',
        content:
          'We proactively decrease waste through an integrative approach that employs innovative strategies and technologies of reduction, recycling, and reuse. We aim to create a sustainable cycle where resources are utilized efficiently, and environmental impact is minimized. Our goals include reaching at least 60% recycled packaging materials by 2030 and minimizing waste throughout production processes.',
      },
      {
        title: 'Shifting to Renewable Energy',
        content:
          'Increased use of renewable energy is part of our sustainability strategy. By prioritizing renewable energy sources, we aim to reduce our reliance on fossil-derived energy. Our goal is to increase renewable energy usage to 50% by 2030, including constructing a 35 hectare solar energy field to supply clean, renewable energy to our main production site.',
      },
      {
        title: 'Promoting Sustainable Agriculture',
        content:
          'As the global population grows and the demand for food increases, agricultural production must be conducted in environmentally responsible ways. Mike Alpha aims to provide solutions for an additional 7 million hectares of agricultural land, transitioning them from commodity fertilizers to specialty fertilizers and reducing over 10 million tons of greenhouse gas emissions by 2030. Digital platforms like NutriNet™ and MultiMatch™ help growers match nutrition to their crops’ exact growth needs, improving Nutrient Use Efficiency and minimizing waste.',
      },
      {
        title: 'Conducting Circular Production Methodologies',
        content:
          'Mike Alpha strives to implement sustainable practices, ensuring that our operations contribute to a healthier planet. We are committed to reducing greenhouse gas emissions from production processes, specifically CO₂ and N₂O. Our goal is to reduce production-related emissions by 20% per ton of product by 2030, with milestones including optimizing production processes, switching from Freon gas to ammonia as an in-process coolant, and increasing renewable energy use.',
      },
    ],
  },
  {
    path: '/precision-impact/esg/social',
    title: 'Social IMPACT: Compassion is Our Organizational Compass',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'IMPACT', to: '/precision-impact' },
      { label: 'Social' },
    ],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'At Mike Alpha, compassion is the foundation of our organizational culture, shaping our actions and interactions at every level. We believe that fostering human relations and practicing fair conduct are key to building a better world. Our social impact strategy addresses three interlocking circles: Mike Alpha Employees, Potential & New Employees, and Our Communities.',
    sections: [
      {
        title: 'Committed to Our Employees',
        content:
          'Our employees are our most precious asset and strength. We strive to create a supportive and inclusive work environment where everyone can thrive. To ensure our employees thrive, we conduct annual surveys to assess satisfaction and engagement, gathering feedback on welfare, leisure, retention, training, and promotion paths. Our goal is to maintain a satisfaction score above 85%.',
      },
      {
        title: 'Prioritizing Inclusiveness',
        content:
          'Our recruitment and employment practices are grounded in the principles of Diversity, Equity, and Inclusion (DEI). Mike Alpha emphasizes diversity by prioritizing high-quality candidates from underrepresented groups, including women, people over 45, people with disabilities, and minority populations. In 2022, we received a 4-star award for implementing DEI policies.',
      },
      {
        title: 'Social Synergy',
        content:
          'We are committed to making a positive impact through respectful and responsible engagement with the communities around us. Our approach focuses on proactive engagement and fostering synergy with these communities. Mike Alpha is dedicated to maximizing our positive impact on surrounding communities—where we live, work, and wherever our value chain reaches. In 2023, our employees dedicated over 2,000 hours to volunteer activities.',
      },
      {
        title: 'Social Responsibility 2030 Goals',
        content:
          'Our bold 2030 goals focus on three key social circles: Haifa Employees – achieving 85-90% employee satisfaction across our subsidiaries; Prospective Employees – ensuring 5% of new hires come from underrepresented communities; and Communities – engaging at least 70% of employees in volunteer activities.',
      },
    ],
  },
  {
    path: '/precision-impact/esg/governance',
    title: 'Global Leadership Through Ethical Governance and Standards',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'IMPACT', to: '/precision-impact' },
      { label: 'Governance' },
    ],
    heroImage: '/images/impact-bg.jpg',
    intro:
      'As a global corporation, Mike Alpha operates within the framework of international laws and standards, going beyond compliance to uphold ethical values. Though privately held, Mike Alpha adheres to governance standards typically associated with public companies. By maintaining these principles, we mitigate risks and drive positive impact across our organization, demonstrating our commitment to excellence and responsible corporate citizenship.',
    sections: [
      {
        title: 'Code of Conduct',
        content:
          'Mike Alpha has established a comprehensive code of conduct that outlines ethical guidelines and behavioral expectations for all stakeholders within the organization. This includes principles of business integrity, honesty, and transparency. Regular training and awareness programs ensure that employees understand and adhere to these principles, fostering a culture of trust and accountability.',
      },
      {
        title: 'Antitrust Compliance',
        content:
          'Implementing robust antitrust policies and procedures is crucial for ensuring fair competition, maintaining the integrity of our market practices, and fostering a healthy business environment. We conduct regular training sessions for employees to help them recognize and prevent anticompetitive behavior, and have stringent monitoring mechanisms in place to detect and address any violations promptly.',
      },
      {
        title: 'Fair Employment Practices',
        content:
          'Mike Alpha ensures fair employment practices that align with global governance standards, including non-discrimination, equal opportunity, and diversity. We actively promote inclusivity and diversity within our workforce, fostering an environment where all employees feel valued and respected.',
      },
      {
        title: 'Anti-Bribery and Anti-Corruption Policy',
        content:
          'Mike Alpha strictly prohibits all forms of bribery and corruption, ensuring ethical conduct and compliance with international standards in every business activity. This policy applies to everyone acting on behalf of the company and sets clear rules for prevention, reporting, and accountability.',
      },
      {
        title: 'Product Safety and Quality',
        content:
          'Maintaining high standards of product safety and quality assurance is paramount to our governance procedures. This involves routine testing and certification and full compliance with industry standards and regulations. Mike Alpha continuously invests resources to improve product safety, quality and high standards.',
      },
      {
        title: 'Data Privacy and Cybersecurity',
        content:
          'Protecting customer data and ensuring cybersecurity are essential components of Mike Alpha’s governance framework. This includes implementing robust data privacy policies, secure IT infrastructure, and regular cybersecurity audits.',
      },
      {
        title: 'Supplier Code of Conduct',
        content:
          'Mike Alpha views all stakeholders—suppliers, employees, and customers—as integral partners in our pursuit of shared business and sustainability goals. We expect our suppliers and partners to collaborate with us in upholding ethical standards and global norms that align with our values.',
      },
      {
        title: 'Continuous Improvement and Adaptation',
        content:
          'Mike Alpha is dedicated to continuously improving and adapting its governance procedures to meet evolving global standards, regulatory requirements, and stakeholder expectations. We conduct regular reviews, assessments, and updates to our governance policies and practices.',
      },
      {
        title: 'Human Rights',
        content:
          'Mike Alpha is committed to respecting and promoting human rights across all areas of its operations, in line with international standards and the principles of ethics, integrity, and corporate responsibility.',
      },
    ],
  },
  {
    path: '/precision-impact/esg/governance/code-of-conduct',
    title: "Mike Alpha's Supplier Code of Conduct",
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'IMPACT', to: '/precision-impact' },
      { label: 'Governance', to: '/precision-impact/esg/governance' },
      { label: 'Supplier Code of Conduct' },
    ],
    heroImage: '/images/impact-bg.jpg',
    intro:
      'As a leading global company, Mike Alpha develops innovative plant nutrition solutions for the agriculture sector while prioritizing our planet’s health. At the forefront of our attention are the ESG principles, to which we are committed in our business. We conduct our business in honesty and good judgment while complying with different laws, rules and standards of conduct that apply to us in the countries and regions where we do our business.',
    sections: [
      {
        title: 'Environment',
        content:
          'Mike Alpha is dedicated to leading the agricultural sector towards sustainable and innovative practices, ensuring a healthier future for generations to come. Our innovative products provide precise plant nutrition while minimizing water and fertilizer usage, greenhouse gas emissions, and pollution caused by traditional fertilizers. In our partnerships, we actively seek out companies that share our values of environmental responsibility and demonstrate a broad commitment to promoting sustainable environmental policies and practices.',
      },
      {
        title: 'Social',
        content:
          'The Group prioritizes a respectful, harassment-free work environment for employees, maintaining global standards exceeding compliance to ensure fair employment practices and uphold workers\' rights worldwide. We value our employees, customers, suppliers, and business partners as our greatest assets. The group firmly rejects all forms of slavery and ensures that all employees worldwide benefit from quality working conditions and welfare standards exceeding market standards.',
      },
      {
        title: 'Governance',
        content:
          'Mike Alpha maintains high standards of transparency and governance like those seen in public companies, despite being privately held. We strictly follow local laws, regulations, and global standards, ensuring ethical values and effective management in all our operations worldwide, going beyond compliance. The group prohibits its employees from accepting benefits from any party directly or indirectly related to the group\'s business and strongly opposes corruption in all its forms.',
      },
    ],
    footerText:
      '*Mike Alpha retains the right to evaluate supplier compliance and conduct ongoing monitoring. Should suppliers fail to adhere to international principles, engage in misconduct, or demonstrate an inability to implement corrective measures, Mike Alpha reserves the right to terminate the business relationship.',
  },
  {
    path: '/safety-head-toe',
    title: 'Safety from Head to Toe',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'Precision impact', to: '/precision-impact' },
      { label: 'Quality and Safety' },
      { label: 'Safety from Head to Toe' },
    ],
    heroImage: '/images/hero-bg-2.jpg',
    intro:
      'Mike Alpha prioritizes the safety of its employees, contractors and customers, and takes comprehensive actions to maintain their safety and health. The commitment to human well-being and maintaining safety is rooted in our corporate culture. As part of this concept, Mike Alpha invests a lot of resources in creating a safe working environment.',
    tabs: [
      {
        id: 'compliance',
        label: 'Compliance with strict standards',
        content:
          'Mike Alpha initiates many actions to maintain safety, including compliance with the voluntary OHSAS 18001 standard for safety and health at work. Obtaining the standard requires the setting up and maintaining of a safety management system, performing stringent tests by the Standards Institute, and taking ongoing actions to identify, assess and prevent risks. The group has recently been working on the transition to ISO 45001 - the new international standard for an occupational safety and health management system.',
      },
      {
        id: 'procedures',
        label: 'Enforcement of safety procedures',
        content:
          'Creating a safe work environment using safety patrols and the appointing safety trustees. Safety patrols at the group\'s sites aim at locating hazards and preventing them while conducting risk surveys. Safety trustees are entrusted with imparting safety knowledge and enforcing routine safety procedures.',
      },
      {
        id: 'rnd',
        label: 'Investment in research and development',
        content:
          'Mike Alpha has developed unique techniques for safety production processes, which remove possible risks in advance and thus contribute significantly to maintaining employee safety.',
      },
      {
        id: 'education',
        label: 'Safety education',
        content:
          'Raising awareness of maintaining safety through conferences and fun days, where safety procedures are updated, safety challenges are raised and tools are acquired that contribute to strengthening the level of safety, including practical experiences.',
      },
      {
        id: 'proactive',
        label: 'Proactive safety',
        content:
          "The Group's employees are at the forefront, doing business in a safe and hazards-free environment. In order to encourage proactive thinking, learning processes, round tables and discussions are regularly carried out, in the framework of which new initiatives are put in place to prevent dangers and constantly improve the level of safety in the various projects.",
      },
    ],
    footerText:
      "Along with the massive investment in creating a safe work environment, Mike Alpha is prepared for any scenario in order to enable optimal dealing with possible risks. In this framework, a lot of resources are invested in equipment, facilities and joint training with teams of fire and rescue forces, the Israel Police, etc. Safety policy is a key element in Mike Alpha's activities. We will continue to act in light of it and take every possible action to create a safe work environment, for the well-being of our employees and customers.",
  },
  {
    path: '/sustainable-development-goals-1',
    title: 'Sustainable Development Goals',
    subtitle: 'Sustainability',
    breadcrumb: [
      { label: 'HOME', to: '/' },
      { label: 'Precision impact', to: '/precision-impact' },
      { label: 'Sustainable Development Goals' },
    ],
    heroImage: '/images/impact-bg.jpg',
    intro:
      'Taking care of the environment and much more. Mike Alpha prioritizes the sustainability issue and leads extensive activities to create a sustainable environment, economy and society. As a multinational corporation renowned for its pioneering spirit and innovative solutions for agriculture strengthening, sustainability and environmental concern are an integral part of Mike Alpha\'s DNA.',
    sections: [
      {
        content:
          'Mike Alpha employs approximately 5,000 workers directly and indirectly and provides livelihoods for residents worldwide through its research & development center and multiple manufacturing facilities. For its deep connection to the environment, Mike Alpha accepted the challenge of being part of the global effort and to act in accordance with the goals of the UN Sustainable Development Program, with the aim to encourage other businesses around the world to embrace responsible social policy.',
      },
    ],
    tabs: [
      {
        id: 'agriculture',
        label: 'Encouraging sustainable agriculture',
        content:
          'Developing new plant nutrition products and techniques that contribute to the ecological balance maintenance such as developing complex fertilizers that provide a perfect plant nutrition as well as reduces the emissions of greenhouse gases by 30%.',
      },
      {
        id: 'energy',
        label: 'Energy saving',
        content:
          'Developing smart solutions that save energy and heavy machinery at the time of placement. These solutions allow single application throughout the growing period, through controlled and continuous release of nutrients in the root area.',
      },
      {
        id: 'health',
        label: 'Good health & Well-being',
        content:
          'Mike Alpha considers itself committed to providing its employees with a safe and healthy work environment as much as possible. The safety policy of Mike Alpha is an integral part of the Group\'s strategy, and is periodically reviewed and explained to all of its employees.',
      },
      {
        id: 'community',
        label: 'Sustainable community',
        content:
          'Cultivating urban agriculture through highly efficient fertilizers that help produce maximum produce in minimum area. In addition, these fertilizers are particularly effective for cultivating small area crops. Also, Mike Alpha is taking part in an effort to increase agricultural crops through innovative solutions and advanced fertilization methods.',
      },
      {
        id: 'green',
        label: 'Beyond green energy',
        content:
          "Potassium and nitrate sodium production are used to store energy at solar thermal stations and contribute to a significant reduction in fossil fuel use. In addition, the Group's plants use natural gas as an energy source, known as efficient, economical and which reduces air pollution and greenhouse gas emissions.",
      },
    ],
    footerText:
      'Mike Alpha has set itself the challenge of being part of the global effort and to act in accordance with the goals of the UN Sustainable Development Program. By using innovative, pioneering and groundbreaking measures that integrate the three economic, social and environmental dimensions, Mike Alpha is working to achieve the 17 principles of the Sustainable Development Program, which include, inter alia, human rights and equality between the genders, empowering women and girls, eradicating poverty in all its forms and preserving the environment.',
  },
];

export function getImpactArticleByPath(path: string): ImpactArticle | undefined {
  return impactArticles.find((a) => a.path === path);
}
