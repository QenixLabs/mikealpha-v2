import { getProductBySlug } from '@/data/products';
import { getCropGuideBySlug } from '@/data/cropGuides';

export const WHATSAPP_PHONE = '918799290971';

export interface WhatsAppContext {
  pathname?: string;
  productName?: string;
  category?: string;
  type?: 'contact' | 'distributor';
}

/**
 * Returns a contextual, pre-filled WhatsApp message based on the current page or product.
 */
export function getWhatsAppMessage(ctx: WhatsAppContext = {}): string {
  const { pathname = typeof window !== 'undefined' ? window.location.pathname : '/', productName, category, type = 'contact' } = ctx;

  // Distributor specific message
  if (type === 'distributor' || pathname.includes('/distributor')) {
    return 'Hello Mike Alpha Agro, I am interested in dealership and distribution opportunities with Mike Alpha Agro. Could you please share the onboarding process and distributor requirements?';
  }

  // Explicit product or product page
  if (productName) {
    return `Hello Mike Alpha Agro, I am interested in *${productName}*${category ? ` (${category})` : ''}. Could you please share pricing, application dosage, and distributor availability in my region?`;
  }

  if (pathname.startsWith('/products/')) {
    const slug = pathname.replace('/products/', '').split('/')[0];
    const product = getProductBySlug(slug);
    if (product) {
      return `Hello Mike Alpha Agro, I am interested in *${product.name}* (${product.category}). Could you please share pricing, application dosage, and distributor availability in my region?`;
    }
  }

  // Specific crop guide lookup (e.g. /crop-guide/tomato or /tomato)
  const cleanPath = pathname.replace(/^\/(crop-guide|crop-guides)\/?/, '').replace(/^\//, '').split('/')[0];
  if (cleanPath) {
    const crop = getCropGuideBySlug(cleanPath);
    if (crop) {
      return `Hello Mike Alpha Agro, I am viewing your Crop Nutrition Guide for *${crop.cropName}* (${crop.category}). Could you please recommend the ideal fertilizer schedule and dosage for my crop?`;
    }
  }

  // Products catalog
  if (pathname === '/products' || pathname === '/products-catalog') {
    return 'Hello Mike Alpha Agro, I am browsing your product catalog on your website and would like to enquire about your specialty fertilizers and biosolutions.';
  }

  // Smart Farming
  if (pathname.includes('/smart-farming')) {
    return 'Hello Mike Alpha Agro, I am exploring your Smart Farming & precision nutrition solutions and would like to learn how to optimize my crop protocols.';
  }

  // Crop Guide general
  if (pathname.includes('/crop-guide') || pathname.includes('/crop-guides')) {
    return 'Hello Mike Alpha Agro, I am reviewing your Crop Nutrition Guides and would like to consult with an agronomist for recommendations on my crop.';
  }

  // Growing Practice
  if (pathname.includes('/growing-practice') || pathname.includes('/nutrigation') || pathname.includes('/fertigation') || pathname.includes('/foliar') || pathname.includes('/center-pivot')) {
    return 'Hello Mike Alpha Agro, I am reading your Growing Practices and would like to consult on application techniques (foliar feeding, fertigation, CRF).';
  }

  // Technical KNO3
  if (pathname.includes('/technical-kno3')) {
    return 'Hello Mike Alpha Agro, I am looking for Technical Grade Potassium Nitrate (KNO3) specifications, supply volumes, and commercial terms.';
  }

  // Solar
  if (pathname.includes('/solar')) {
    return 'Hello Mike Alpha Agro, I am inquiring about industrial solar salts and thermal storage solutions from Mike Alpha.';
  }

  // Quality Assurance & SDS
  if (pathname.includes('/quality-assurance') || pathname.includes('/sds-request')) {
    return 'Hello Mike Alpha Agro, I would like to request technical documentation (Certificate of Analysis / SDS / quality testing) for your products.';
  }

  // Careers
  if (pathname.includes('/careers')) {
    return 'Hello Mike Alpha Agro, I am visiting your Careers page and would like to enquire about open roles and opportunities at Mike Alpha Agro.';
  }

  // Contact Us page
  if (pathname.includes('/contact')) {
    return 'Hello Mike Alpha Agro, I am on your Contact Us page and would like to connect with your team regarding your products and services.';
  }

  // Corporate & About
  if (pathname.includes('/about') || pathname.includes('/corporate') || pathname.includes('/precision-impact')) {
    return 'Hello Mike Alpha Agro, I would like to learn more about your company, global technology partnerships, and sustainable plant nutrition portfolio.';
  }

  // Default fallback
  return 'Hello Mike Alpha Agro, I am visiting your website and would like to enquire about your agricultural products and crop nutrition solutions.';
}

/**
 * Returns a complete wa.me link with encoded pre-filled message.
 */
export function getWhatsAppUrl(ctx: WhatsAppContext = {}): string {
  const message = getWhatsAppMessage(ctx);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
