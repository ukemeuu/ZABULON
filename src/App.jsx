import React, { useState, useEffect } from 'react';

const packages = [
  {
    id: 1,
    title: "Student & Pupil Pass",
    desc: "Seamless legal pathways for international students. We handle the paperwork, you focus on your studies.",
    img: "/student.png",
    price: "From $150",
    features: ["Paperwork Assistance", "E-citizen filing", "Renewal Management"]
  },
  {
    id: 2,
    title: "Work Permits (Class D/G)",
    desc: "Facilitating expertise and business growth. Specialized assistance for specialized workers and investors.",
    img: "/work.png",
    price: "From $450",
    features: ["Advisory Services", "Liaison with Immigration", "Approval Follow-ups"]
  },
  {
    id: 3,
    title: "Visa Extensions & Passes",
    desc: "Extend your stay without the stress. Reliable processing for all types of Kenyan visitor passes.",
    img: "/visa.png",
    price: "From $75",
    features: ["Quick Turnaround", "Express Stamp Processing", "24/7 Consultation"]
  }
];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-wrapper">
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.png" alt="Zabulon Logo" style={{ height: '45px' }} />
          <span style={{ letterSpacing: '-1px' }}>ZABULON</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#packages" onClick={closeMenu}>Packages</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          {/* Close button for mobile menu */}
          {isMenuOpen && <li style={{ position: 'absolute', top: '30px', right: '30px', listStyle: 'none' }}>
            <button onClick={closeMenu} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>×</button>
          </li>}
        </ul>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button className="btn-primary" style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>Get Started</button>
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '5px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: '10px'
            }}
          >
            <div style={{ width: '25px', height: '3px', background: '#004d40' }}></div>
            <div style={{ width: '25px', height: '3px', background: '#004d40' }}></div>
            <div style={{ width: '25px', height: '3px', background: '#004d40' }}></div>
          </button>
        </div>
      </nav>

      <div className="hero" id="hero">
        <div className="hero-content">
          <h1 style={{ fontWeight: 800 }}>Seamless Immigration into Kenya.</h1>
          <p>Expert guidance for Student Passes, Work Permits, and Visas. Trust Zabulon to handle your legal journey with precision and care.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="#packages" className="btn-primary">View Packages</a>
            <button style={{ 
              background: 'transparent', 
              color: 'white', 
              border: '2px solid white', 
              padding: '0.8rem 2.5rem', 
              borderRadius: '50px',
              fontFamily: 'inherit',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontSize: '0.8rem'
            }}>Free Consultation</button>
          </div>
        </div>
      </div>

      <section className="highlights">
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div className="highlight-item" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#c6934b', marginBottom: '10px' }}>99%</h3>
                <p style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', color: '#666' }}>Success Rate</p>
            </div>
            <div className="highlight-item" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#c6934b', marginBottom: '10px' }}>1500+</h3>
                <p style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', color: '#666' }}>Clients Served</p>
            </div>
            <div className="highlight-item" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#c6934b', marginBottom: '10px' }}>10+</h3>
                <p style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', color: '#666' }}>Years Experience</p>
            </div>
         </div>
      </section>

      <section id="packages" className="services">
        <div className="section-title">
          <h2>Our Specialized Packages</h2>
          <div></div>
          <p style={{ marginTop: '20px', color: '#666' }}>Precision handling of all Kenyan immigration classes.</p>
        </div>
        <div className="packages-grid">
          {packages.map(pkg => (
            <div key={pkg.id} className="glass-card package-card">
              <div 
                className="package-img" 
                style={{ backgroundImage: `url(${pkg.img})` }}
              ></div>
              <h3>{pkg.title}</h3>
              <p>{pkg.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '25px' }}>
                {pkg.features.map((feat, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: '#444', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: '#004d40' }}>✔</span> {feat}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, color: '#004d40' }}>{pkg.price}</span>
                <button style={{ 
                  background: 'none', 
                  border: '1px solid #004d40', 
                  color: '#004d40', 
                  padding: '5px 15px', 
                  borderRadius: '20px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700,
                  cursor: 'pointer'
                }}>Inquire</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ background: '#f5f5f5' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#004d40', marginBottom: '20px', textTransform: 'uppercase' }}>Expertise You Can Trust</h2>
            <p style={{ marginBottom: '20px', color: '#444' }}>
              Zabulon Immigration Services is a premier boutique firm based in Nairobi, Kenya. We specialize in providing comprehensive, efficient, and transparent immigration solutions for international expatriates, business owners, and students.
            </p>
            <p style={{ color: '#444' }}>
              Our dedicated team of professionals navigates the complex regulatory environment of the Department of Immigration Services, ensuring that your stay in the Republic of Kenya is fully compliant and hassle-free.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
             <div style={{ width: '100%', height: '400px', backgroundColor: '#ddd', borderRadius: '30px', backgroundImage: 'url(/hero.png)', backgroundSize: 'cover' }}></div>
             <div className="glass-effect" style={{ position: 'absolute', bottom: '-20px', right: '-20px', padding: '30px', borderRadius: '20px', maxWidth: '250px' }}>
                <p style={{ fontWeight: 800, color: '#004d40', fontSize: '1.2rem' }}>Certified Professionals</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Authorized agency with years of experience in Kenyan immigration law.</p>
             </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '100px' }}>
           <div>
              <h2 style={{ fontSize: '2rem', color: '#004d40', marginBottom: '30px' }}>Let's Start Your Journey.</h2>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#c6934b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</h4>
                <p style={{ fontWeight: 600 }}>Nairobi Business Center, 5th Floor</p>
              </div>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#c6934b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us</h4>
                <p style={{ fontWeight: 600 }}>0722 929 193</p>
              </div>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ color: '#c6934b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                <p style={{ fontWeight: 600 }}>contact@zabulon.co.ke</p>
              </div>
           </div>
           <form className="glass-card" style={{ display: 'grid', gap: '20px' }}>
              <input 
                type="text" 
                placeholder="Full Name" 
                style={{ padding: '15px', border: '1px solid #eee', borderRadius: '10px', background: '#fcfcfc', fontFamily: 'inherit' }}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                style={{ padding: '15px', border: '1px solid #eee', borderRadius: '10px', background: '#fcfcfc', fontFamily: 'inherit' }}
              />
              <select style={{ padding: '15px', border: '1px solid #eee', borderRadius: '10px', background: '#fcfcfc', fontFamily: 'inherit' }}>
                <option>Select Package</option>
                <option>Student Pass</option>
                <option>Work Permit</option>
                <option>Visa Extension</option>
                <option>Others</option>
              </select>
              <textarea 
                placeholder="Tell us about your requirements" 
                rows="5" 
                style={{ padding: '15px', border: '1px solid #eee', borderRadius: '10px', background: '#fcfcfc', fontFamily: 'inherit' }}
              ></textarea>
              <button className="btn-primary" type="button">Send Inquiry</button>
           </form>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ fontSize: '1.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo.png" alt="Zabulon Logo" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
              ZABULON
            </h4>
            <p>Providing the most efficient immigration services in Kenya for over a decade. Excellence in every stamp.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <li><a href="#hero">Home</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <li>Work Permits</li>
            <li>Student Pass</li>
            <li>Residence Permits</li>
            <li>Visa Extensions</li>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Help Center</li>
          </div>
        </div>
        <div className="copyright">
          &copy; 2026 Zabulon Immigration Services. All rights reserved. Registered Agency in KENYA.
        </div>
      </footer>
    </div>
  );
};

export default App;
