"use client";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const aboutRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);
  
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      text: "We source our entire range of whole spices from ANR Sourcex. Their direct-from-farm approach means we get unparalleled freshness and volatile oil content, which is critical for our spice blends.",
      author: "Priya Sharma",
      role: "Founder, Spice Heritage",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      text: "The quality of fresh Alphonso mangoes we received this season was outstanding. Strict adherence to phytosanitary standards and timely air-freight logistics make ANR Sourcex our preferred export partner.",
      author: "David Chen",
      role: "Import Manager, Pacific Fresh",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      text: "ANR Sourcex handles large-volume agricultural commodities with utmost professionalism. Their transparent documentation, competitive pricing, and strict quality control have significantly streamlined our supply chain.",
      author: "Elena Rodriguez",
      role: "Supply Chain Head, AgriTrade International",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    }
  ];

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

  const featureImages = [
    "/images/mango.jpg",
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


  const products = [
    { name: "Ponni Rice", category: "RICE", image: "/images/ponni-rice.jpg" },
    { name: "Premium Rice", category: "RICE", image: "/images/basmati-rice.jpg" },
    { name: "Fresh Fruits", category: "FRUITS", image: "/images/apple.jpg" },
    { name: "Fresh Tomato", category: "VEGETABLES", image: "/images/tomato.jpg" },
    { name: "Fresh Vegetables", category: "VEGETABLES", image: "/images/vegetables.jpg" },
    { name: "Premium Cashew", category: "NUTS", image: "/images/cashew.jpg" },
    { name: "Golden Raisins", category: "DRY FRUITS", image: "/images/Golden Raisins jpg.jpeg" },
    { name: "Red Chilli", category: "SPICES", image: "/images/red-chilli.jpg" },
    { name: "Turmeric", category: "SPICES", image: "/images/turmeric.jpg" },
    { name: "Coriander", category: "SPICES", image: "/images/coriander.jpg" },
    { name: "Cumin", category: "SPICES", image: "/images/cumin.jpg" },
    { name: "Premium Spices", category: "SPICES", image: "/images/spices.jpg" },
    { name: "Rice Variety", category: "RICE", image: "/images/rice.jpg" },
  ];

  const displayedProducts = products.filter(product => {
    if (filter === "All") return true;
    if (filter === "Rice") return product.category === "RICE";
    if (filter === "Spices & Fruits") return ["SPICES", "FRUITS", "DRY FRUITS", "VEGETABLES", "NUTS"].includes(product.category);
    return true;
  });

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar-wrapper">
        <header className="floating-navbar">
          <a href="#" className="nav-logo">
            <img src="/images/anr_logo.jpg" alt="ANR Sourcex Logo" />
            <span>ANR SOURCEX.</span>
          </a>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`nav-links-container ${isMobileMenuOpen ? 'open' : ''}`}>
            <nav className="pill-nav-links">
              <a href="#products-section" onClick={() => setIsMobileMenuOpen(false)}>Categories</a>
              <a href="#about-section" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
              <a href="#quality-section" onClick={() => setIsMobileMenuOpen(false)}>Quality</a>
            </nav>

            <a href="mailto:anrsourcex@gmail.com" className="nav-contact-btn">Contact Us</a>
          </div>
        </header>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
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
            <img src="/images/hero-food.png.png" alt="ANR SOURCEX Products" className="hero-can" />
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

      {/* PRODUCTS SECTION */}
      <section id="products-section" className="products">
        <div className="products-container">
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
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info-dribbble">
                  <span className="product-category-text">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>Premium Sourced</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT REVEAL SECTION */}
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



      {/* DRINK REAL FRUIT (Adapted to SOURCE REAL QUALITY) */}
      <section id="quality-section" className="feature-split">
        <div className="feature-image interactive-image-wrapper">
          <div className="interactive-image-inner">
            {featureImages.map((src, index) => (
              <img 
                key={src}
                src={src} 
                alt={`Premium Fresh Produce ${index + 1}`} 
                className={`slideshow-image ${index === featureImageIndex ? 'active' : ''}`}
              />
            ))}
            <div className="interactive-overlay"></div>
          </div>
        </div>
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
      <section className="indulge-banner">
        <div className="indulge-content">
          <div className="indulge-left">
            <h2>Indulge in <i>the fresh</i><br /><i>taste</i> of nature</h2>
            <p>Our produce is selected to energize your business and satisfy your customers.</p>
            <a href="#" className="shop-now-btn">Enquire Now &rarr;</a>
          </div>
          <div className="indulge-center">
            {indulgeImages.map((src, index) => (
              <img 
                key={src}
                src={src} 
                alt={`Premium Quality ${index + 1}`} 
                className={`slideshow-image ${index === indulgeImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="indulge-right">
            <h2>100%</h2>
            <p>Farm-fresh<br />produce in every batch</p>
          </div>
        </div>
      </section>

      {/* SOCIAL SECTION */}
      <section className="social-section">
        <div className="social-header">
          <h2><i>Sourcing</i> on social</h2>
          <div className="social-header-right">
            <p>See our latest harvests and celebrate<br />with Social Source!</p>
            <a href="https://www.instagram.com/anr_sourcex?stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="ig-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <strong>Sourcex.</strong>
            </a>
          </div>
        </div>
        <div className="social-gallery marquee">
          <div className="marquee-content">
            <div className="social-item"><img src="/images/tomato.jpg" alt="Social 1" /></div>
            <div className="social-item"><img src="/images/cashew.jpg" alt="Social 2" /></div>
            <div className="social-item"><img src="/images/red-chilli.jpg" alt="Social 3" /></div>
            <div className="social-item"><img src="/images/vegetables.jpg" alt="Social 4" /></div>
            <div className="social-item"><img src="/images/spices.jpg" alt="Social 5" /></div>
            <div className="social-item"><img src="/images/mango.jpg" alt="Social 6" /></div>
            {/* Duplicate for infinite marquee effect */}
            <div className="social-item"><img src="/images/tomato.jpg" alt="Social 1" /></div>
            <div className="social-item"><img src="/images/cashew.jpg" alt="Social 2" /></div>
            <div className="social-item"><img src="/images/red-chilli.jpg" alt="Social 3" /></div>
            <div className="social-item"><img src="/images/vegetables.jpg" alt="Social 4" /></div>
            <div className="social-item"><img src="/images/spices.jpg" alt="Social 5" /></div>
            <div className="social-item"><img src="/images/mango.jpg" alt="Social 6" /></div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews-section" className="modern-reviews">
        <div className="modern-reviews-container">
          <div className="reviews-header-top">
            <span className="reviews-tag">99 TESTIMONIALS</span>
          </div>
          <div className="reviews-header-main">
            <h2>Trusted by customers</h2>
            <p>Proven outcomes shared by industry leaders and innovators.</p>
          </div>
          
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="modern-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-col brand-col">
              <a href="#" className="footer-logo">
                <img src="/images/anr_logo.jpg" alt="ANR SOURCEX Logo" />
                <span>ANR SOURCEX.</span>
              </a>
              <p className="brand-desc">Fuel your business with premium quality and fresh produce. Blast of natural aroma and rich taste.</p>
              <div className="footer-socials">
                <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                <a href="https://www.instagram.com/anr_sourcex?stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about-section">About Us</a></li>
                <li><a href="#quality-section">Services</a></li>
                <li><a href="#products-section">Community</a></li>
                <li><a href="#reviews-section">Testimonial</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Tweet @ Us</a></li>
                <li><a href="#">Webians</a></li>
                <li><a href="#">Feedback</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Links</h4>
              <ul>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Become Partner</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">All in One</a></li>
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
            <p>© Copyright by ANR Sourcex. All rights reserved.</p>
            <div className="bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Legal</a>
              <a href="#">Site Map</a>
            </div>
          </div>
        </div>
      </footer>

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
