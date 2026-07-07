# Mike Alpha Agro — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3 | UI framework |
| react-dom | ^18.3 | DOM renderer |
| typescript | ^5.6 | Type safety |
| vite | ^6.0 | Build tool |
| tailwindcss | ^3.4 | Styling |
| @tailwindcss/typography | ^0.5 | Prose styling |
| shadcn/ui | latest | Component primitives |
| lucide-react | ^0.460 | Icons |
| framer-motion | ^11.15 | Animations, scroll reveals, carousel |
| swiper | ^11.1 | Touch carousels |
| react-countup | ^6.5 | Animated number counters |
| clsx | ^2.1 | Conditional classes |
| tailwind-merge | ^2.6 | Tailwind class deduplication |

---

## Component Inventory

### shadcn/ui Components

| Component | Usage |
|-----------|-------|
| Button | CTAs, navigation buttons, form submit |
| Input | Newsletter email input, search field |
| Checkbox | Newsletter consent checkbox |
| Sheet | Mobile navigation slide-in panel |
| Tabs | "Choose Your Interest" tab switching |
| Card | Product cards, blog cards, event cards |

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| Navbar | — | Top utility bar + sticky main nav with dropdowns |
| HeroSection | — | Full-bleed hero with slide transitions |
| InterestSection | — | Tabbed crop/growing method/products selector |
| PromotedContent | — | 3-column content cards |
| ProductsCarousel | — | Product cards in Swiper carousel |
| ImpactSection | — | Full-bleed stats with count-up |
| BlogSection | — | 3-column blog grid |
| SuccessStories | — | Story carousel with Swiper |
| NewsEvents | — | 3-column event cards |
| Newsletter | — | Email signup form |
| Footer | — | Multi-column footer with social links |
| FloatingChat | — | Fixed bottom-right chat widget |
| SectionReveal | children, delay?, direction? | Intersection-observer entrance wrapper |
| ProductCard | name, description, image, link | Individual product card |
| BlogCard | title, author, authorImage, image, link | Blog post card |
| EventCard | date, month, category, title, image, link | News/event card |
| StatCounter | icon, value, suffix, label | Animated stat display |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Section entrance (fade-up) | framer-motion | `motion.div` with `whileInView`, `initial={{opacity:0,y:30}}`, `animate={{opacity:1,y:0}}`, viewport once | Low |
| Section entrance stagger | framer-motion | Parent `staggerChildren: 0.1` in transition, children animate | Low |
| Hero text entrance | framer-motion | Heading `translateX(-30)`, subheading delayed 200ms | Low |
| Hero slide transitions | framer-motion | AnimatePresence with fade/slide variants on background image | Medium |
| Navbar sticky shadow | CSS + JS | Scroll listener toggles class for shadow, CSS transition | Low |
| Dropdown open/close | framer-motion | `animate={{opacity:1,y:0}}` from `initial={{opacity:0,y:-8}}`, 200ms | Low |
| Mobile menu slide | shadcn Sheet | Sheet component with `side="right"`, 320px width | Low |
| Search expand | CSS transition | `width: 0 → 200px`, `transition: width 0.3s ease` | Low |
| Tab switch | framer-motion | AnimatePresence mode="wait", content fade in/out | Low |
| Product carousel | Swiper | Swiper with `slidesPerView: 4/2/1`, pagination, navigation arrows | Medium |
| Success stories carousel | Swiper | Swiper with custom pagination, arrows | Medium |
| Card hover lift | CSS transition | `transition: transform 0.3s, box-shadow 0.3s`, `hover:translateY(-4px)` | Low |
| Button hover | CSS transition | `transition: all 0.2s`, scale + background change | Low |
| Blog image hover zoom | CSS transition | `overflow: hidden` on container, `img:hover:scale(1.05)` | Low |
| Stat count-up | react-countup | CountUp component with `end={value}`, triggered by intersection | Low |
| IMPACT badge entrance | framer-motion | `translateX(-50)` → `0`, 400ms delay after section visible | Low |
| Arrow button hover | CSS transition | Border color + icon color transition to primary | Low |
| Carousel arrow fill | CSS transition | `hover:bg-primary hover:text-white` | Low |
| Sticky navbar show/hide | framer-motion | `useScroll` + `useMotionValueEvent` to animate `translateY` | Medium |
| Floating chat toggle | framer-motion | Panel `animate={{height:500,opacity:1}}` from collapsed | Low |

---

## State & Logic Plan

### Navbar Scroll Behavior
- Track scroll position with `useScroll` from framer-motion
- When scrollY > 36px (past utility bar): add sticky positioning + shadow
- When scrolling down vs up: can optionally hide/show navbar (not in original, keep simple sticky)

### Hero Carousel
- State: `currentSlide` index, `isPlaying` boolean
- Auto-advance: `setInterval` every 5000ms, cleared on manual nav or pause
- Transitions: AnimatePresence wrap with fade variants

### Interest Tabs
- State: `activeTab: 'crop' | 'growing' | 'products'`
- Tab content switches via AnimatePresence
- Crop icons: horizontal scroll container with overflow-x auto

### Product Carousel
- Swiper instance controlled via ref
- Responsive breakpoints: 4 slides (1024+), 2 slides (768+), 1 slide (<768)
- Custom navigation buttons and pagination dots

### Newsletter Form
- State: `email`, `agreed` (boolean)
- On submit: validate email regex, show success toast (no backend)

### Floating Chat
- State: `isOpen` boolean
- Toggle on icon click

---

## Other Key Decisions

### Carousel Strategy
- Use **Swiper** for all carousels (products, success stories) — it provides touch support, responsive breakpoints, and accessibility out of the box
- Swiper pagination styled to match design: 8px dots, active dot 20px wide with primary color
- Custom navigation arrows styled as 40px circles

### Image Strategy
- All images in `/public/images/` directory
- Use `loading="lazy"` for below-fold images
- Hero background uses `priority` loading

### Animation Trigger Strategy
- All sections use `whileInView` from framer-motion
- Viewport option: `{ once: true, margin: "-100px" }` to trigger slightly before fully visible
- Stagger children within each section for cascading effect

### Responsive Strategy
- Mobile-first Tailwind classes
- Breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Navigation: hamburger menu below `lg` breakpoint

### Data Flow
- Static content imported from data files
- Product data from `content-data.md` translated to TypeScript arrays
- No external API calls — all data is static
