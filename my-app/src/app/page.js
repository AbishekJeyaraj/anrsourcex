import { NavbarClient, ProductFilter, AboutRevealSection, FeatureSlideshow, IndulgeSlideshow, ReviewsSlider, InstagramReels } from './components';

// Products data — defined at server level so Google can see it
const products = [
  { name: "Ponni Rice", category: "RICE", image: "/images/ponni-rice.jpg" },
  { name: "Premium Rice", category: "RICE", image: "/images/basmati-rice.jpg" },
  { name: "Fresh Fruits", category: "FRUITS", image: "/images/apple.jpg" },
  { name: "Fresh Tomato", category: "VEGETABLES", image: "/images/tomato.jpg" },
  { name: "Fresh Vegetables", category: "VEGETABLES", image: "/images/vegetables.jpg" },
  { name: "Premium Cashew", category: "NUTS", image: "/images/cashew.jpg" },
  { name: "Golden Raisins", category: "DRY FRUITS", image: "/images/Golden Raisins jpg.jpeg" },
  { name: "Black Pepper", category: "SPICES", image: "/images/black-pepper.jpg" },
  { name: "Turmeric", category: "SPICES", image: "/images/turmeric.jpg" },
  { name: "Coriander", category: "SPICES", image: "/images/coriander.jpg" },
  { name: "Cumin", category: "SPICES", image: "/images/cumin.jpg" },
  { name: "Premium Spices", category: "SPICES", image: "/images/spices.jpg" },
  { name: "Rice Variety", category: "RICE", image: "/images/rice.jpg" },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR — Interactive, so it's a client component */}
      <NavbarClient />

      {/* HERO SECTION — Server rendered for SEO */}
      <section className="hero" aria-label="ANR Sourcex Hero">
        <div className="hero-container">
          
          <div className="hero-content">
            <div className="hero-eyebrow">PREMIUM SOURCING PARTNER</div>
            <h1>Find. Source.<br /><i>Deliver.</i></h1>
            <p>Quality rice, fresh fruits, vegetables, nuts and spices, carefully sourced, quality-checked and delivered with the reliability your business deserves.</p>
            <div className="hero-buttons desktop-hero-buttons">
              <a href="#products-section" className="btn-primary">Get a Bulk Quote &rarr;</a>
              <a href="#products-section" className="btn-secondary">Explore Products</a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img src="/images/hero-food.png.png" alt="ANR Sourcex — Premium Rice, Spices, Fruits and Vegetables Sourcing Partner" className="hero-can" width="600" height="600" />
          </div>

          <div className="hero-stats">
            <div className="powered-badge">
              <div className="badge-text">
                <strong>TRUSTED SOURCING</strong>
              </div>
            </div>
            <div className="percentage-stat">
              <h2>98%</h2>
              <p>On-time bulk delivery, from farm<br />to your destination</p>
            </div>
            
            <div className="hero-buttons mobile-hero-buttons">
              <a href="#products-section" className="btn-primary">Get a Bulk Quote &rarr;</a>
              <a href="#products-section" className="btn-secondary">Explore Products</a>
            </div>
            
            <div className="bottom-right-trust">
              <div className="trust-grid">
                <div className="trust-item-right">
                  <strong>150+</strong>
                  <span>Verified suppliers</span>
                </div>
                <div className="trust-item-right">
                  <strong>500+ MT</strong>
                  <span>Sourced monthly</span>
                </div>
                <div className="trust-item-right">
                  <strong>24hr</strong>
                  <span>Quote turnaround</span>
                </div>
                <div className="trust-item-right">
                  <strong>12+</strong>
                  <span>States delivered</span>
                </div>
              </div>
              <p className="hero-small-text-right">Wholesale & export | Retail & bulk | 24/7 support</p>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS SECTION — Filter is interactive, but product list is server-rendered */}
      <section id="products-section" className="products" aria-label="ANR Sourcex Products">
        <div className="products-container">
          <ProductFilter products={products} />
        </div>
      </section>

      {/* ABOUT SECTION — Has intersection observer animation */}
      <AboutRevealSection />

      {/* SOURCE REAL QUALITY — Feature section with slideshow */}
      <section id="quality-section" className="feature-split" aria-label="ANR Sourcex Quality">
        <FeatureSlideshow />
        <div className="feature-text">
          <h2>Source <i>real quality</i><br />every time</h2>
          <p>Enjoy the pure taste of premium produce, naturally sourced, fresh, and absolutely reliable.</p>
          <ul className="feature-list">
            <li>
              <span className="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <div className="feature-list-content">
                <strong>100% natural and ethically sourced produce</strong>
                <p>We partner directly with certified growers worldwide to ensure every product meets our rigorous standards for sustainability and environmental care.</p>
              </div>
            </li>
            <li>
              <span className="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <div className="feature-list-content">
                <strong>No compromises on quality, directly from farms</strong>
                <p>By cutting out unnecessary middlemen, we preserve the freshness of our goods and provide you with authentic, premium ingredients straight from the source.</p>
              </div>
            </li>
            <li>
              <span className="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <div className="feature-list-content">
                <strong>Rigorous testing and certification</strong>
                <p>Every batch undergoes strict quality control and lab testing to ensure maximum purity, potency, and safety for your customers.</p>
              </div>
            </li>
            <li>
              <span className="check-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <div className="feature-list-content">
                <strong>Reliable and fast delivery network</strong>
                <p>Our optimized logistics guarantee that your produce arrives fresh and on time, giving your business the dependable supply chain it needs.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* INDULGE BANNER */}
      <section className="indulge-banner" aria-label="ANR Sourcex Fresh Produce">
        <div className="indulge-content">
          <div className="indulge-left">
            <h2>Indulge in <i>the fresh</i><br /><i>taste</i> of nature</h2>
            <p>Our produce is selected to energize your business and satisfy your customers.</p>
            <a href="mailto:anrsourcex@gmail.com" className="shop-now-btn">Enquire Now &rarr;</a>
          </div>
          <IndulgeSlideshow />
          <div className="indulge-right">
            <h2>100%</h2>
            <p>Farm-fresh<br />produce in every batch</p>
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="social-section" aria-label="ANR Sourcex Social Media">
        <div className="social-header">
          <h2><i>Sourcing</i> on social</h2>
          <div className="social-header-right">
            <p>See our latest harvests and celebrate<br />with Social Source!</p>
            <a href="https://www.instagram.com/anr_sourcex" target="_blank" rel="noopener noreferrer" className="ig-link" title="ANR Sourcex Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <strong>ANR Sourcex</strong>
            </a>
          </div>
        </div>
        <div className="social-gallery marquee">
          <div className="marquee-content">
            <div className="social-item"><img src="/images/tomato.jpg" alt="ANR Sourcex Fresh Tomatoes" loading="lazy" /></div>
            <div className="social-item"><img src="/images/cashew.jpg" alt="ANR Sourcex Premium Cashews" loading="lazy" /></div>
            <div className="social-item"><img src="/images/black-pepper.jpg" alt="ANR Sourcex Black Pepper" loading="lazy" /></div>
            <div className="social-item"><img src="/images/vegetables.jpg" alt="ANR Sourcex Fresh Vegetables" loading="lazy" /></div>
            <div className="social-item"><img src="/images/spices.jpg" alt="ANR Sourcex Premium Spices" loading="lazy" /></div>
            <div className="social-item"><img src="/images/apple.jpg" alt="ANR Sourcex Fresh Fruits" loading="lazy" /></div>
            {/* Duplicate for infinite marquee effect */}
            <div className="social-item"><img src="/images/tomato.jpg" alt="ANR Sourcex Fresh Tomatoes" loading="lazy" /></div>
            <div className="social-item"><img src="/images/cashew.jpg" alt="ANR Sourcex Premium Cashews" loading="lazy" /></div>
            <div className="social-item"><img src="/images/black-pepper.jpg" alt="ANR Sourcex Black Pepper" loading="lazy" /></div>
            <div className="social-item"><img src="/images/vegetables.jpg" alt="ANR Sourcex Fresh Vegetables" loading="lazy" /></div>
            <div className="social-item"><img src="/images/spices.jpg" alt="ANR Sourcex Premium Spices" loading="lazy" /></div>
            <div className="social-item"><img src="/images/apple.jpg" alt="ANR Sourcex Fresh Fruits" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews-section" className="modern-reviews" aria-label="ANR Sourcex Customer Reviews">
        <div className="modern-reviews-container">
          <div className="reviews-header-top">
            <span className="reviews-tag">99 TESTIMONIALS</span>
          </div>
          <div className="reviews-header-main">
            <h2>Trusted by customers</h2>
            <p>Proven outcomes shared by industry leaders and innovators.</p>
          </div>
          
          <ReviewsSlider />
        </div>
      </section>
      {/* INSTAGRAM REELS — Embedded reels from @anr_sourcex */}
      <InstagramReels />

      {/* FOOTER — All server rendered, great for SEO */}
      <footer className="modern-footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-col brand-col">
              <a href="/" className="footer-logo" title="ANR Sourcex">
                <img src="/images/anr_logo.jpg" alt="ANR Sourcex Logo" width="40" height="40" loading="lazy" />
                <span>ANR SOURCEX.</span>
              </a>
              <p className="brand-desc">ANR Sourcex — India's trusted premium sourcing partner. Fuel your business with quality rice, fresh fruits, vegetables, nuts and spices. Wholesale, bulk and export-ready.</p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/anr_sourcex" target="_blank" rel="noopener noreferrer" title="ANR Sourcex Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://wa.me/918825453262" target="_blank" rel="noopener noreferrer" title="ANR Sourcex WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
                <a href="mailto:anrsourcex@gmail.com" title="Email ANR Sourcex"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about-section">About ANR Sourcex</a></li>
                <li><a href="#quality-section">Our Services</a></li>
                <li><a href="#products-section">Our Products</a></li>
                <li><a href="#reviews-section">Testimonials</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#products-section">Premium Rice</a></li>
                <li><a href="#products-section">Fresh Fruits</a></li>
                <li><a href="#products-section">Vegetables</a></li>
                <li><a href="#products-section">Spices & Nuts</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="mailto:anrsourcex@gmail.com">Contact Us</a></li>
                <li><a href="https://wa.me/918825453262" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="https://www.instagram.com/anr_sourcex" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#products-section">Get a Quote</a></li>
              </ul>
            </div>

            <div className="footer-col contact-col">
              <h4>Order Now</h4>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                Bulk or retail, get premium quality products delivered to you. Order directly through WhatsApp.
              </p>
              <a href="https://wa.me/918825453262" target="_blank" rel="noopener noreferrer" className="whatsapp-order-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ANR Sourcex. All rights reserved. | Premium Sourcing Partner — anrsourcex.vercel.app</p>
            <div className="bottom-links">
              <a href="#about-section">About</a>
              <a href="#products-section">Products</a>
              <a href="#quality-section">Quality</a>
              <a href="mailto:anrsourcex@gmail.com">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* SEO: Hidden but crawlable content for search engines — reinforces brand identity */}
      <div className="sr-only" aria-hidden="true">
        <h2>ANR Sourcex — anrsourcex</h2>
        <p>ANR Sourcex (anrsourcex) is a premium sourcing partner based in India. We specialize in wholesale and bulk sourcing of quality rice (ponni rice, basmati rice), fresh fruits (alphonso mango, apple), vegetables (tomato, mixed vegetables), spices (turmeric, black pepper, coriander, cumin), nuts (premium cashew), and dry fruits (golden raisins). Visit ANR Sourcex at anrsourcex.vercel.app for wholesale quotes and bulk orders. Contact ANR Sourcex via WhatsApp at +91-8825453262 or email at anrsourcex@gmail.com.</p>
      </div>
    </main>
  );
}
