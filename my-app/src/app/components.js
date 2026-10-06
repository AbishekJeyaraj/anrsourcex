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

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

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
                href={`https://wa.me/918825453262?text=${encodeURIComponent(`Hi, I am interested in ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-enquire-btn"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                }}
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

              <a 
                href={`https://wa.me/918825453262?text=${encodeURIComponent(`Hi, I am interested in ${selectedProduct.name}`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-whatsapp-btn"
              >
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [statusFeedback, setStatusFeedback] = useState("");

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactModalOpen]);

  const handleWhatsApp = (e) => {
    if (e) e.preventDefault();
    setStatusFeedback("Connecting to WhatsApp...");
    const url = "https://wa.me/918825453262?text=Hello%20ANR%20Sourcex%2C%20I%20am%20interested%20in%20bulk%20produce%20sourcing.";
    const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setTimeout(() => {
      setIsContactModalOpen(false);
      setStatusFeedback("");
    }, 1200);
  };

  const handleCall = (e) => {
    setStatusFeedback("Dialing +91 8825453262...");
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText("+918825453262").catch(() => {});
      }
    } catch (err) {}
    window.location.href = "tel:+918825453262";
    setTimeout(() => {
      setIsContactModalOpen(false);
      setStatusFeedback("");
    }, 1200);
  };

  const handleEmail = (e) => {
    setStatusFeedback("Opening Email client...");
    window.location.href = "mailto:anrsourcex@gmail.com";
    setTimeout(() => {
      setIsContactModalOpen(false);
      setStatusFeedback("");
    }, 1200);
  };

  return (
    <>
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

            <button 
              type="button" 
              className="nav-contact-btn"
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </button>
          </div>
        </header>
      </div>

      {/* CONTACT REDIRECTION MODAL (CALL OR WHATSAPP) - Rendered as root portal sibling */}
      {isContactModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="contact-modal-close" 
              onClick={() => setIsContactModalOpen(false)}
              aria-label="Close contact options"
            >
              ✕
            </button>
            <div className="contact-modal-header">
              <div className="contact-modal-eyebrow-badge">
                <span className="live-status-dot">
                  <span className="live-status-ping"></span>
                  <span className="live-status-core"></span>
                </span>
                <span>GET IN TOUCH • 24/7 ACTIVE</span>
              </div>
              <h3>Contact ANR Sourcex</h3>
              <p>Connect directly with our procurement team for wholesale quotes and availability:</p>
            </div>

            {statusFeedback && (
              <div className="contact-status-feedback">
                <span>✓ {statusFeedback}</span>
              </div>
            )}

            <div className="contact-modal-options">
              {/* WhatsApp Option */}
              <a 
                href="https://wa.me/918825453262?text=Hello%20ANR%20Sourcex%2C%20I%20am%20interested%20in%20bulk%20produce%20sourcing."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-opt-card whatsapp"
                onClick={handleWhatsApp}
              >
                <div className="contact-opt-icon whatsapp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="contact-opt-text">
                  <strong>Chat on WhatsApp</strong>
                  <span>Instant response & quotes • +91 8825453262</span>
                </div>
                <div className="contact-opt-arrow">&rarr;</div>
              </a>

              {/* Call Option */}
              <a 
                href="tel:+918825453262"
                className="contact-opt-card phone"
                onClick={handleCall}
              >
                <div className="contact-opt-icon phone">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-opt-text">
                  <strong>Call Directly</strong>
                  <span>Speak with sourcing manager • +91 8825453262</span>
                </div>
                <div className="contact-opt-arrow">&rarr;</div>
              </a>

              {/* Email Option */}
              <a 
                href="mailto:anrsourcex@gmail.com"
                className="contact-opt-card email"
                onClick={handleEmail}
              >
                <div className="contact-opt-icon email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-opt-text">
                  <strong>Email Inquiry</strong>
                  <span>anrsourcex@gmail.com</span>
                </div>
                <div className="contact-opt-arrow">&rarr;</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
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

/* =========================================================
   ANR SOURCEX CHATBOT COMPONENT
========================================================= */
export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [showTooltip, setShowTooltip] = useState(true);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: 1,
      sender: "bot",
      text: "👋 **Hello! Welcome to ANR Sourcex.**\n\nI am your 24/7 sourcing assistant. Whether you need wholesale quotes for rice, fresh gooseberry, spices, or nuts, I'm here to help.",
      time: "Just now",
      actions: [
        { label: "🌾 Rice Varieties", query: "Tell me about Rice varieties" },
        { label: "🍋 Fresh Gooseberry", query: "Details on Fresh Gooseberry" },
        { label: "🌶️ Premium Spices", query: "What spices do you supply?" },
        { label: "📦 Get Bulk Quote", query: "How do I get a bulk quote?" },
        { label: "🚚 Shipping & Delivery", query: "Where do you deliver?" },
        { label: "💬 Chat on WhatsApp", url: "https://wa.me/918825453262?text=Hello%20ANR%20Sourcex%2C%20I%20have%20an%20inquiry%20regarding%20bulk%20produce%20sourcing." }
      ]
    }
  ];

  const [messages, setMessages] = useState(initialMessages);

  // Auto-scroll when new message appears
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Open chat and clear badge
  const toggleChat = () => {
    if (!isOpen) {
      setUnreadCount(0);
      setShowTooltip(false);
    }
    setIsOpen(!isOpen);
  };

  const getKnowledgeResponse = (userText) => {
    const q = userText.toLowerCase().trim();

    if (q.includes("rice") || q.includes("ponni") || q.includes("basmati")) {
      return {
        text: "🌾 **ANR Sourcex Rice Portfolio:**\n\n• **Ponni Rice:** Single boiled, double boiled, and raw varieties, aged for ideal fluffiness.\n• **Basmati Rice:** Aged 1121 and traditional aromatic long-grain Basmati.\n• **Sona Masoori & Broken Rice:** Available for catering and bulk trade.\n• **Packaging:** 25kg, 50kg, and 100kg HDPE bags, plus export-ready containers.",
        actions: [
          { label: "📦 Instant WhatsApp Rice Quote", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, please share current pricing for Ponni and Basmati Rice bulk supply.")}` },
          { label: "🍋 Ask about Gooseberry", query: "Tell me about Fresh Gooseberry" }
        ]
      };
    }

    if (q.includes("gooseberry") || q.includes("amla") || q.includes("nellikai")) {
      return {
        text: "🍋 **Fresh Indian Gooseberry (Amla):**\n\n• **Grade-A Quality:** Plump, handpicked fresh amla rich in natural Vitamin C and antioxidants.\n• **Direct Farm Sourcing:** Harvested daily from certified orchards with zero chemical ripening.\n• **Bulk Packaging:** Ventilated 10kg/25kg corrugated boxes and wooden crates for maximum freshness during transit.\n• Available for wholesale food processing, Ayurveda, and retail distribution.",
        actions: [
          { label: "💬 Order Gooseberry on WhatsApp", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, I am interested in placing an order for Fresh Gooseberry (Amla).")}` },
          { label: "📦 Request Minimum Order Quantity", query: "What is your MOQ?" }
        ]
      };
    }

    if (q.includes("fruit") || q.includes("mango") || q.includes("apple")) {
      return {
        text: "🍎 **Fresh Fruit Sourcing:**\n\n• **Alphonso & Seasonal Mangoes:** Naturally ripened, export-certified sweetness.\n• **Fresh Apples:** Crisp, cold-stored Grade-A produce.\n• **Fresh Gooseberry:** Farm-fresh daily batches.\n\nWe provide refrigerated cold-chain transit to guarantee freshness.",
        actions: [
          { label: "💬 Enquire on WhatsApp", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, please share fruit rates and availability.")}` }
        ]
      };
    }

    if (q.includes("vegetable") || q.includes("tomato") || q.includes("onion") || q.includes("potato")) {
      return {
        text: "🥦 **Fresh Vegetables:**\n\n• Daily harvested fresh tomatoes, onions, potatoes, and seasonal farm vegetables.\n• Strict grading for size, color, and shelf-life.\n• Minimum order quantity starting from 100kg up to full container loads.",
        actions: [
          { label: "📦 Request Vegetable Price List", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, I would like to receive the vegetable price list.")}` }
        ]
      };
    }

    if (q.includes("spice") || q.includes("pepper") || q.includes("turmeric") || q.includes("cumin") || q.includes("coriander") || q.includes("masala")) {
      return {
        text: "🌶️ **Premium Spices Collection:**\n\n• **Salem Turmeric:** High curcumin percentage, vibrant golden color, and potent aroma.\n• **Malabar Black Pepper:** High bulk density (GL 550+), intense heat, and high essential oil content.\n• **Cumin & Coriander:** Machine-cleaned 99% purity seeds.\n• Export-ready and wholesale bulk packaging available.",
        actions: [
          { label: "🌶️ Bulk Spices WhatsApp Quote", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, please send price quotes for Turmeric, Black Pepper, and Spices.")}` }
        ]
      };
    }

    if (q.includes("cashew") || q.includes("nut") || q.includes("raisin") || q.includes("dry fruit") || q.includes("badam") || q.includes("almond")) {
      return {
        text: "🥜 **Nuts & Dry Fruits:**\n\n• **Cashews:** Premium W180 (King size), W240, and W320 whole white kernels, vacuum packed.\n• **Golden Raisins:** Sun-dried, naturally sweet and uniform size.\n• **Almonds:** Quality California and Mamra grades for retail and food manufacturing.",
        actions: [
          { label: "🥜 Get Nuts & Dry Fruits Quote", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, please share Cashew and Dry Fruits quotation.")}` }
        ]
      };
    }

    if (q.includes("quote") || q.includes("price") || q.includes("rate") || q.includes("cost") || q.includes("buy") || q.includes("order")) {
      return {
        text: "💼 **Bulk Quotations:**\n\nBecause agricultural prices fluctuate based on daily mandis and harvest volume, we provide personalized quotes within 24 hours.\n\n**Please let us know:**\n1. Product & Grade required\n2. Estimated Quantity (MT / kg)\n3. Delivery Destination City\n\nClick below to connect instantly with our procurement manager!",
        actions: [
          { label: "⚡ Get Quote on WhatsApp", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hello ANR Sourcex, I would like to request an instant price quotation for bulk order.")}` },
          { label: "📞 Call +91 8825453262", url: "tel:+918825453262" }
        ]
      };
    }

    if (q.includes("delivery") || q.includes("shipping") || q.includes("transport") || q.includes("logistics") || q.includes("export") || q.includes("where") || q.includes("city") || q.includes("state")) {
      return {
        text: "🚚 **Logistics & Delivery Reach:**\n\n• **Domestic:** Fast, reliable road & rail network serving **12+ states** across India.\n• **Export Ready:** Full documentation, phytosanitary certificates, and port clearance (Nhava Sheva, Chennai, Tuticorin ports).\n• **Timeline:** 24–48hr turnaround for domestic dispatch.",
        actions: [
          { label: "💬 Check Delivery to Your City", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, I want to check shipping availability and timeline for my location.")}` }
        ]
      };
    }

    if (q.includes("moq") || q.includes("minimum")) {
      return {
        text: "📦 **Minimum Order Quantity (MOQ):**\n\n• **Rice:** Minimum 1 Ton (1,000 kg) up to multiple container loads.\n• **Gooseberry & Fruits:** 100 kg to 5 MT.\n• **Spices & Nuts:** 50 kg to 1 MT.\n• **Sample Orders:** Smaller trial samples can be arranged for verified businesses.",
        actions: [
          { label: "💬 Request Trial Samples", url: `https://wa.me/918825453262?text=${encodeURIComponent("Hi ANR Sourcex, can I request a sample order before placing bulk MOQ?")}` }
        ]
      };
    }

    if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("address") || q.includes("whatsapp") || q.includes("number")) {
      return {
        text: "📞 **Contact ANR Sourcex:**\n\n• **WhatsApp / Mobile:** +91 8825453262\n• **Email:** anrsourcex@gmail.com\n• **Instagram:** @anr_sourcex\n• **Website:** anrsourcex.vercel.app\n• **Operating Hours:** 24/7 Procurement Inquiries",
        actions: [
          { label: "💬 WhatsApp Us Directly", url: "https://wa.me/918825453262" },
          { label: "✉️ Send Email", url: "mailto:anrsourcex@gmail.com" }
        ]
      };
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("vanakkam") || q.includes("namaste")) {
      return {
        text: "Hello! 😊 Welcome to ANR Sourcex. How can we assist your business today? You can ask about our rice varieties, fresh gooseberry, spices, or get an immediate bulk quote.",
        actions: [
          { label: "🌾 Rice Varieties", query: "Tell me about Rice varieties" },
          { label: "🍋 Fresh Gooseberry", query: "Details on Fresh Gooseberry" },
          { label: "📦 Get Bulk Quote", query: "How do I get a bulk quote?" }
        ]
      };
    }

    // Default Fallback
    return {
      text: "Thank you for reaching out! Since we deal in bulk agricultural commodities, our procurement team can answer custom requests with exact pricing and inventory numbers.",
      actions: [
        { label: "💬 Chat Directly on WhatsApp", url: `https://wa.me/918825453262?text=${encodeURIComponent(`Hi ANR Sourcex, I have an inquiry from your website assistant: "${userText}"`)}` },
        { label: "📞 Call +91 8825453262", url: "tel:+918825453262" }
      ]
    };
  };

  const handleSend = (textToSend) => {
    const messageText = (textToSend || input).trim();
    if (!messageText) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Realistic typing delay
    setTimeout(() => {
      const botResponse = getKnowledgeResponse(messageText);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: botResponse.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: botResponse.actions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <div className="chatbot-root" aria-label="ANR Sourcex Virtual Assistant">
      {/* Floating Prompt Tooltip */}
      {showTooltip && !isOpen && (
        <div className="chatbot-tooltip">
          <div className="tooltip-text">
            <strong>Need produce or bulk rates?</strong>
            <span>Chat with our sourcing assistant 👋</span>
          </div>
          <button className="tooltip-close" onClick={() => setShowTooltip(false)} aria-label="Dismiss message">✕</button>
        </div>
      )}

      {/* Launcher Button */}
      <button 
        className={`chatbot-launcher ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chatbot" : "Open ANR Sourcex chatbot"}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
              <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
              <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
            </svg>
            {unreadCount > 0 && <span className="chatbot-badge">{unreadCount}</span>}
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" role="dialog" aria-modal="true" aria-label="ANR Sourcex Live Chat">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar-wrap">
                <img src="/images/anr_logo.jpg" alt="ANR Logo" className="chatbot-avatar" />
                <span className="chatbot-online-indicator"></span>
              </div>
              <div className="chatbot-title-box">
                <div className="chatbot-title">
                  ANR Sourcing AI
                  <span className="chatbot-verified" title="Verified Assistant">✓</span>
                </div>
                <div className="chatbot-subtitle">Online • Fast responses</div>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <a
                href="https://wa.me/918825453262?text=Hi%20ANR%20Sourcex%2C%20I%20would%20like%20to%20speak%20with%20a%20sales%20representative."
                target="_blank"
                rel="noopener noreferrer"
                className="chatbot-header-btn whatsapp"
                title="Switch to WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <button className="chatbot-header-btn" onClick={handleResetChat} title="Reset Chat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                </svg>
              </button>
              <button className="chatbot-header-btn close" onClick={toggleChat} title="Close Chat">
                ✕
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="chatbot-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-msg-row ${msg.sender}`}>
                {msg.sender === "bot" && (
                  <div className="chatbot-msg-avatar">
                    <img src="/images/anr_logo.jpg" alt="ANR" />
                  </div>
                )}
                <div className="chatbot-bubble-wrap">
                  <div className={`chatbot-bubble ${msg.sender}`}>
                    <div className="chatbot-bubble-text" style={{ whiteSpace: "pre-line" }}>
                      {msg.text.split("\n").map((line, i) => {
                        // Render bold markdown
                        if (line.includes("**")) {
                          const parts = line.split("**");
                          return (
                            <p key={i}>
                              {parts.map((p, idx) => (idx % 2 === 1 ? <strong key={idx}>{p}</strong> : p))}
                            </p>
                          );
                        }
                        return <p key={i}>{line}</p>;
                      })}
                    </div>
                    <span className="chatbot-msg-time">{msg.time}</span>
                  </div>

                  {/* Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="chatbot-actions-row">
                      {msg.actions.map((act, actIdx) => (
                        act.url ? (
                          <a
                            key={actIdx}
                            href={act.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chatbot-action-chip link"
                          >
                            {act.label} &rarr;
                          </a>
                        ) : (
                          <button
                            key={actIdx}
                            onClick={() => handleSend(act.query || act.label)}
                            className="chatbot-action-chip btn"
                          >
                            {act.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="chatbot-msg-row bot">
                <div className="chatbot-msg-avatar">
                  <img src="/images/anr_logo.jpg" alt="ANR" />
                </div>
                <div className="chatbot-typing-bubble">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Pills (Always visible at bottom when few messages) */}
          <div className="chatbot-quick-pills">
            <button onClick={() => handleSend("Tell me about Rice varieties")} className="quick-pill">🌾 Rice</button>
            <button onClick={() => handleSend("Details on Fresh Gooseberry")} className="quick-pill">🍋 Gooseberry</button>
            <button onClick={() => handleSend("What spices do you supply?")} className="quick-pill">🌶️ Spices</button>
            <button onClick={() => handleSend("How do I get a bulk quote?")} className="quick-pill">📦 Bulk Quote</button>
          </div>

          {/* Footer Input */}
          <div className="chatbot-footer">
            <textarea
              className="chatbot-input"
              placeholder="Ask about rice, gooseberry, spices, quotes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button 
              className="chatbot-send-btn" 
              onClick={() => handleSend()}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          <div className="chatbot-credits">
            <span>Powered by ANR Sourcex • 24/7 Sourcing</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What products does ANR Sourcex supply wholesale and in bulk?",
      a: "ANR Sourcex supplies farm-sourced Ponni Rice, Basmati Rice, fresh fruits (Amla / Gooseberry, Apples), fresh farm vegetables (Tomatoes, mixed vegetables), premium Cashews, Golden Raisins, and pure spices (Turmeric, Black Pepper, Coriander seeds, and Cumin seeds) with verified origin and batch certification.",
    },
    {
      q: "How can businesses get a custom bulk quote or order produce?",
      a: "You can request a competitive bulk quote directly via our WhatsApp (+91 8825453262) or email (anrsourcex@gmail.com). Share your required tonnage, destination, and specifications. Our sourcing team provides comprehensive quotes within 24 hours.",
    },
    {
      q: "Which states and cities in India does ANR Sourcex deliver to?",
      a: "We deliver across 12+ states in India directly from origin farms and regional procurement hubs, maintaining an industry-leading 98% on-time delivery record for restaurants, retail chains, food processors, and wholesalers.",
    },
    {
      q: "Can I order sample batches before committing to bulk volume?",
      a: "Yes! We encourage clients to inspect and test our quality firsthand. We provide sample packs and trial consignments across our rice varieties, spices, nuts, and fresh produce upon request.",
    },
    {
      q: "Are ANR Sourcex agricultural products export-grade?",
      a: "Yes. All our products undergo rigorous grading, sorting, moisture inspection, and quality verification to meet both domestic quality standards and international export requirements.",
    },
  ];

  return (
    <section id="faq-section" className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Everything you need to know about <i>sourcing with us</i></h2>
          <p>Clear, direct answers for wholesale buyers, businesses, and procurement managers.</p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

