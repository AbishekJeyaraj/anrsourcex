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
            </div>
          </div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content-dribbble" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
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

              <a href={`https://wa.me/8825453262?text=I am interested in ${selectedProduct.name}`} target="_blank" className="modal-whatsapp-btn">
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
