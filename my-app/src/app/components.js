"use client";
import { useState, useEffect, useRef } from 'react';

// Client-side interactive components
export function ProductFilter({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");

  const displayedProducts = products.filter(product => {
    if (filter === "All") return true;
    if (filter === "Rice") return product.category === "RICE";
    if (filter === "Spices & Fruits") return ["SPICES", "FRUITS", "DRY FRUITS", "VEGETABLES", "NUTS"].includes(product.category);
    return true;
  });

  return (
    <>
      <div className="products-header">
        <h2><i>Discover</i> our range -</h2>
        <div className="filter-group">
          <button 
            className={`filter-btn ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
          >All</button>
          <button 
            className={`filter-btn ${filter === "Rice" ? "active" : ""}`}
            onClick={() => setFilter("Rice")}
          >Rice</button>
          <button 
            className={`filter-btn ${filter === "Spices & Fruits" ? "active" : ""}`}
            onClick={() => setFilter("Spices & Fruits")}
          >Spices & Fruits</button>
        </div>
      </div>

      <div className="products-grid-dribbble">
        {displayedProducts.map((product, idx) => (
          <div key={idx} className="product-card-dribbble" onClick={() => setSelectedProduct(product)} style={{ cursor: 'pointer' }}>
            <div className="product-image-dribbble">
              <img src={product.image} alt={`${product.name} — ANR Sourcex ${product.category.toLowerCase()} supplier`} />
            </div>
            <div className="product-info-dribbble">
              <span className="product-category-text">{product.category}</span>
              <h3>{product.name}</h3>
              <p>Premium Sourced</p>
              <a
                href={`https://wa.me/918825453262?text=Hi, I am interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-enquire-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Enquire Now &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content-dribbble" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)} aria-label="Close modal">✕</button>
            <div className="modal-left">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-right">
              <div className="modal-category">
                <span className="line"></span> {selectedProduct.category}
              </div>
              <h2 className="modal-title">{selectedProduct.name}</h2>
              <p className="modal-desc">
                Quality {selectedProduct.category.toLowerCase()} sourced from reliable suppliers with focus on consistent quality, taste and freshness. Suitable for different food requirements and bulk sourcing.
              </p>
              
              <div className="modal-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <strong>Quality</strong>
                    <span>Carefully Sourced</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <strong>Supply</strong>
                    <span>Reliable Availability</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <strong>Requirement</strong>
                    <span>Retail & Bulk</span>
                  </div>
                </div>
              </div>

              <a href={`https://wa.me/8825453262?text=I am interested in ${selectedProduct.name}`} target="_blank" rel="noopener noreferrer" className="modal-whatsapp-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function MobileMenuButton({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

export function NavbarClient({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <header className="floating-navbar">
        <a href="/" className="nav-logo" title="ANR Sourcex — Premium Sourcing Partner">
          <img src="/images/anr_logo.jpg" alt="ANR Sourcex Logo" />
          <span>ANR SOURCEX.</span>
        </a>

        <MobileMenuButton isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

        <div className={`nav-links-container ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="pill-nav-links" aria-label="Main navigation">
            <a href="#products-section" onClick={() => setIsMobileMenuOpen(false)}>Categories</a>
            <a href="#about-section" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a href="#quality-section" onClick={() => setIsMobileMenuOpen(false)}>Quality</a>
          </nav>

          <a href="mailto:anrsourcex@gmail.com" className="nav-contact-btn">Contact Us</a>
        </div>
      </header>
    </div>
  );
}

export function AboutRevealSection() {
  const aboutRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className={`about-section ${aboutInView ? 'in-view' : ''}`} ref={aboutRef}>
      <div className="about-container">
        <h4 className="about-subtitle">About ANR Sourcex</h4>
        
        <h2 className="about-title">
          <span className="line line-1">
            <span className="reveal-wrapper">
              <span className="reveal-block"></span>
              <span className="reveal-text">We Find.</span>
            </span>
          </span>
          <span className="line line-2">
            <span className="reveal-wrapper">
              <span className="reveal-block"></span>
              <span className="reveal-text">We Source.</span>
            </span>
          </span>
          <span className="line line-3">
            <span className="reveal-wrapper">
              <span className="reveal-block"></span>
              <span className="reveal-text gold">We Deliver.</span>
            </span>
          </span>
        </h2>

        <p className="about-desc">
          ANR SOURCEX connects quality products with reliable sourcing and dependable delivery. From everyday essentials to premium products, we focus on finding the right source for every requirement.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <span className="about-feature-num">01</span>
            <span className="about-feature-text">Quality Focus</span>
          </div>
          <div className="about-feature">
            <span className="about-feature-num">02</span>
            <span className="about-feature-text">Trusted Sources</span>
          </div>
          <div className="about-feature">
            <span className="about-feature-num">03</span>
            <span className="about-feature-text">Reliable Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSlideshow() {
  const featureImages = [
    "/images/apple.jpg",
    "/images/ponni-rice.jpg",
    "/images/cashew.jpg",
    "/images/turmeric.jpg"
  ];
  const [featureImageIndex, setFeatureImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureImageIndex((prevIndex) => (prevIndex + 1) % featureImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featureImages.length]);

  return (
    <div className="feature-image interactive-image-wrapper">
      <div className="interactive-image-inner">
        {featureImages.map((src, index) => (
          <img 
            key={src}
            src={src} 
            alt={`ANR Sourcex premium fresh produce ${index + 1}`} 
            className={`slideshow-image ${index === featureImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="interactive-overlay"></div>
      </div>
    </div>
  );
}

export function IndulgeSlideshow() {
  const indulgeImages = [
    "/images/ponni-rice.jpg",
    "/images/Golden Raisins jpg.jpeg",
    "/images/tomato.jpg",
    "/images/basmati-rice.jpg"
  ];
  const [indulgeImageIndex, setIndulgeImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndulgeImageIndex((prevIndex) => (prevIndex + 1) % indulgeImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [indulgeImages.length]);

  return (
    <div className="indulge-center">
      {indulgeImages.map((src, index) => (
        <img 
          key={src}
          src={src} 
          alt={`ANR Sourcex premium quality produce ${index + 1}`} 
          className={`slideshow-image ${index === indulgeImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export function ReviewsSlider() {
  const sliderRef = useRef(null);
  const scrollPrev = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };
  const scrollNext = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  const reviewsData = [
    {
      text: "Partnering with ANR Sourcex for our Basmati rice imports has been a game-changer. The grain length and aroma are consistently premium, and their export packaging ensures zero transit damage. Highly reliable.",
      author: "Michael Henderson",
      role: "Procurement Director, Global Foods LLC",
    },
    {
      text: "We source our entire range of whole spices from ANR Sourcex. Their direct-from-farm approach means we get unparalleled freshness and volatile oil content, which is critical for our spice blends.",
      author: "Priya Sharma",
      role: "Founder, Spice Heritage",
    },
    {
      text: "The quality of fresh Alphonso mangoes we received this season was outstanding. Strict adherence to phytosanitary standards and timely air-freight logistics make ANR Sourcex our preferred export partner.",
      author: "David Chen",
      role: "Import Manager, Pacific Fresh",
    },
    {
      text: "ANR Sourcex handles large-volume agricultural commodities with utmost professionalism. Their transparent documentation, competitive pricing, and strict quality control have significantly streamlined our supply chain.",
      author: "Elena Rodriguez",
      role: "Supply Chain Head, AgriTrade International",
    }
  ];

  return (
    <>
      <div className="reviews-slider" ref={sliderRef}>
        {reviewsData.map((review, idx) => (
          <div className="modern-review-card" key={idx}>
            <div className="modern-review-content">
              <p className="modern-review-text">{review.text}</p>
              <div className="modern-review-author">
                <h4>{review.author}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-nav">
        <button className="nav-btn prev" onClick={scrollPrev}>&lt;</button>
        <button className="nav-btn next" onClick={scrollNext}>&gt;</button>
      </div>
    </>
  );
}

export function InstagramReels() {
  const scrollRef = useRef(null);

  // All Instagram reels from @anr_sourcex
  const reels = [
    { id: 'reel1', url: 'https://www.instagram.com/reel/Dd86-6Ihjt2/' },
    { id: 'reel2', url: 'https://www.instagram.com/reel/Dd6UkO1y5r7/' },
    { id: 'reel3', url: 'https://www.instagram.com/reel/DdqumBgBr18/' },
    { id: 'reel4', url: 'https://www.instagram.com/reel/DdgAJY1BKpH/' },
    { id: 'reel5', url: 'https://www.instagram.com/reel/DdWUhvBBK7t/' },
    { id: 'reel6', url: 'https://www.instagram.com/reel/DdLwbqMCI8K/' },
    { id: 'reel7', url: 'https://www.instagram.com/p/DdCHSkyAYRr/' },
    { id: 'reel8', url: 'https://www.instagram.com/reel/Dc554Boh3o_/' },
    { id: 'reel9', url: 'https://www.instagram.com/reel/Dcp8NGuhih6/' },
    { id: 'reel10', url: 'https://www.instagram.com/reel/DcRMCwahlHE/' },
    { id: 'reel11', url: 'https://www.instagram.com/reel/DcGyWsVh1Wi/' },
  ];

  // Convert Instagram URL to embed URL (no captions, just the video)
  const getEmbedUrl = (url) => {
    const cleanUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    return cleanUrl + '/embed/?cr=0&hidecaption=true';
  };

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  return (
    <section className="ig-reels-section" aria-label="ANR Sourcex Instagram Reels">
      <div className="ig-reels-container">
        {/* Header */}
        <div className="ig-reels-header">
          <div className="ig-reels-header-left">
            <div className="ig-reels-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div>
              <h2>Watch our <i>Reels</i></h2>
              <p>Explore our sourcing journey on Instagram</p>
            </div>
          </div>
          <div className="ig-reels-header-right">
            <a href="https://www.instagram.com/anr_sourcex" target="_blank" rel="noopener noreferrer" className="ig-reels-follow-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow @anr_sourcex
            </a>
            <div className="ig-reels-nav-arrows">
              <button className="ig-nav-arrow" onClick={scrollLeft} aria-label="Scroll left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="ig-nav-arrow" onClick={scrollRight} aria-label="Scroll right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Reels Carousel */}
        <div className="ig-reels-carousel" ref={scrollRef}>
          {reels.map((reel, idx) => (
            <div className="ig-reel-phone-card" key={reel.id}>
              {/* Actual video iframe — scaled to crop out IG UI and show only video */}
              <div className="ig-reel-iframe-wrap">
                <iframe
                  src={getEmbedUrl(reel.url)}
                  className="ig-reel-iframe"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                  title={`ANR Sourcex Instagram Reel ${idx + 1}`}
                  loading={idx < 4 ? "eager" : "lazy"}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
