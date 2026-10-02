import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import CropGuide from './pages/CropGuide'
import GrowingPractice from './pages/GrowingPractice'
import SmartFarming from './pages/SmartFarming'
import InsightsDetail from './pages/InsightsDetail'
import PrecisionImpact from './pages/PrecisionImpact'
import Corporate from './pages/Corporate'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import ImpactStrategy from './pages/ImpactStrategy'
import ImpactDetail from './pages/ImpactDetail'
import CorporateDetail from './pages/CorporateDetail'
import ArticleDetail from './pages/ArticleDetail'
import Distributors from './pages/Distributors'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import CopyrightPolicy from './pages/CopyrightPolicy'
import ConcernFeedback from './pages/ConcernFeedback'
import SdsRequest from './pages/SdsRequest'
import Solar from './pages/Solar'
import TechnicalKno3 from './pages/TechnicalKno3'
import QualityAssurance from './pages/QualityAssurance'
import PracticeArticleDetail from './pages/PracticeArticleDetail'
import ScrollToTop from './components/ScrollToTop'
import FloatingChat from './components/FloatingChat'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products-catalog" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/growing-practice" element={<GrowingPractice />} />
        <Route path="/smart-farming" element={<SmartFarming />} />
        <Route path="/precision-impact" element={<PrecisionImpact />} />
        <Route path="/precision-impact/strategy" element={<ImpactStrategy />} />
        <Route path="/precision-impact/esg/governance/code-of-conduct" element={<ImpactDetail />} />
        <Route path="/precision-impact/esg/governance" element={<ImpactDetail />} />
        <Route path="/precision-impact/esg/social" element={<ImpactDetail />} />
        <Route path="/precision-impact/esg/environment" element={<ImpactDetail />} />
        <Route path="/safety-head-toe" element={<ImpactDetail />} />
        <Route path="/sustainable-development-goals-1" element={<ImpactDetail />} />
        <Route path="/impact-innovation-compassion" element={<ImpactDetail />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/about-us-0" element={<CorporateDetail />} />
        <Route path="/leadership-team" element={<CorporateDetail />} />
        <Route path="/condition-sales" element={<CorporateDetail />} />
        <Route path="/mike-alpha-rd-center" element={<CorporateDetail />} />
        <Route path="/mike-alpha-values" element={<CorporateDetail />} />
        <Route path="/code-of-conduct" element={<CorporateDetail />} />
        <Route path="/core-values-1" element={<CorporateDetail />} />
        <Route path="/news-events" element={<CorporateDetail />} />
        <Route path="/mike-alpha-grows" element={<CorporateDetail />} />
        <Route path="/mike-alpha-worldwide" element={<CorporateDetail />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/podcasts" element={<InsightsDetail />} />
        <Route path="/success-stories" element={<InsightsDetail />} />
        <Route path="/faq" element={<InsightsDetail />} />
        <Route path="/mike-alpha-videos" element={<InsightsDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/distributors" element={<Distributors />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-use" element={<TermsOfUse />} />
        <Route path="/terms-of-service" element={<TermsOfUse />} />
        <Route path="/copyright-policy" element={<CopyrightPolicy />} />
        <Route path="/concern-feedback" element={<ConcernFeedback />} />
        <Route path="/concern-and-feedback" element={<ConcernFeedback />} />
        <Route path="/products/sds-request" element={<SdsRequest />} />
        <Route path="/sds-request" element={<SdsRequest />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/technical-kno3" element={<TechnicalKno3 />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />

        {/* Growing Practice Dedicated Pages */}
        <Route path="/articles/fertilization-methods" element={<PracticeArticleDetail />} />
        <Route path="/fertilization-methods" element={<PracticeArticleDetail />} />
        <Route path="/nutrigation™-fertigation" element={<PracticeArticleDetail />} />
        <Route path="/nutrigation-fertigation" element={<PracticeArticleDetail />} />
        <Route path="/articles/intro-center-pivot" element={<PracticeArticleDetail />} />
        <Route path="/center-pivot-fertilization" element={<PracticeArticleDetail />} />
        <Route path="/articles/foliar-fertilizer" element={<PracticeArticleDetail />} />
        <Route path="/foliar-fertilizer" element={<PracticeArticleDetail />} />
        <Route path="/soil-application" element={<PracticeArticleDetail />} />
        <Route path="/articles/soil-application" element={<PracticeArticleDetail />} />
        <Route path="/articles/fertilization-methods/crf-application" element={<PracticeArticleDetail />} />
        <Route path="/crf-application" element={<PracticeArticleDetail />} />
        <Route path="/articles/farming-methods" element={<PracticeArticleDetail />} />
        <Route path="/farming-methods" element={<PracticeArticleDetail />} />
        <Route path="/growing-practice/farming-methods/hydroponic-fertilizer-products" element={<PracticeArticleDetail />} />
        <Route path="/hydroponic-fertilizers" element={<PracticeArticleDetail />} />
        <Route path="/hydroponic" element={<PracticeArticleDetail />} />
        <Route path="/fruit-trees-fertilizers" element={<PracticeArticleDetail />} />
        <Route path="/articles/farming-methods/greenhouses" element={<PracticeArticleDetail />} />
        <Route path="/greenhouses" element={<PracticeArticleDetail />} />
        <Route path="/nurseries" element={<PracticeArticleDetail />} />
        <Route path="/articles/farming-methods/nurseries" element={<PracticeArticleDetail />} />
        <Route path="/center-pivot" element={<PracticeArticleDetail />} />
        <Route path="/articles/farming-methods/open-field" element={<PracticeArticleDetail />} />
        <Route path="/open-field" element={<PracticeArticleDetail />} />

        <Route path="/crop-guide/*" element={<CropGuide />} />
        <Route path="/:slug" element={<CropGuide />} />
      </Routes>
      <FloatingChat />
    </>
  )
}
