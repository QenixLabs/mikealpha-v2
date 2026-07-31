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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
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
      <Route path="/haifas-rd-center" element={<CorporateDetail />} />
      <Route path="/haifas-values" element={<CorporateDetail />} />
      <Route path="/core-values-1" element={<CorporateDetail />} />
      <Route path="/news-events" element={<CorporateDetail />} />
      <Route path="/haifa-grows" element={<CorporateDetail />} />
      <Route path="/haifa-worldwide" element={<CorporateDetail />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/article/:slug" element={<ArticleDetail />} />
      <Route path="/podcasts" element={<InsightsDetail />} />
      <Route path="/success-stories" element={<InsightsDetail />} />
      <Route path="/faq" element={<InsightsDetail />} />
      <Route path="/haifa-videos" element={<InsightsDetail />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/crop-guide/*" element={<CropGuide />} />
      <Route path="/:slug" element={<CropGuide />} />
    </Routes>
  )
}
