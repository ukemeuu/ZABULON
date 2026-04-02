import React, { useState, useEffect } from 'react';

const services = [
  {
    category: "Visa Services",
    items: [
      {
        title: "Work Permits",
        desc: "Assistance for professionals, investors, and expatriates seeking employment in Kenya.",
        icon: "💼"
      },
      {
        title: "Student Visas",
        desc: "Guidance for international students enrolling in Kenyan institutions.",
        icon: "🎓"
      },
      {
        title: "Business & Investor Visas",
        desc: "Support for entrepreneurs and investors establishing ventures in Kenya.",
        icon: "📈"
      },
      {
        title: "Family & Dependent Visas",
        desc: "Helping families reunite and settle lawfully.",
        icon: "👪"
      }
    ]
  },
  {
    category: "Residency & Citizenship",
    items: [
      {
        title: "Residency Permits",
        desc: "Applications for short-term and long-term residence.",
        icon: "🏠"
      },
      {
        title: "Permanent Residency",
        desc: "Expert support for qualifying applicants seeking stability in Kenya.",
        icon: "🛡️"
      },
      {
        title: "Citizenship Guidance",
        desc: "Step-by-step assistance for those pursuing Kenyan citizenship.",
        icon: "🇰🇪"
      }
    ]
  },
  {
    category: "Corporate Immigration Solutions",
    items: [
      {
        title: "Employer Sponsorship",
        desc: "Helping companies secure permits for foreign employees.",
        icon: "🏢"
      },
      {
        title: "Compliance Advisory",
        desc: "Ensuring organizations meet Kenyan immigration regulations.",
        icon: "✅"
      },
      {
        title: "Relocation Support",
        desc: "Streamlined processes for international staff transfers.",
        icon: "✈️"
      }
    ]
  },
  {
    category: "Legal & Compliance Support",
    items: [
      {
        title: "Policy Updates",
        desc: "Stay informed on evolving immigration laws and regulations.",
        icon: "⚖️"
      },
      {
        title: "Document Preparation",
        desc: "Professional drafting and submission of applications.",
        icon: "📝"
      },
      {
        title: "Appeals & Reviews",
        desc: "Guidance for clients facing immigration challenges.",
        icon: "🏛️"
      }
    ]
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
          <p>At Zabulon, we provide trusted immigration consulting and services in Kenya, helping individuals, families, and organizations achieve their relocation and residency goals with clarity and confidence.</p>
          <div style={{ marginTop: '20px', padding: '15px', borderLeft: '4px solid #c6934b', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '0 10px 10px 0', maxWidth: '600px', margin: '20px auto' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>"Our mission is to simplify the immigration process while upholding the highest standards of integrity, transparency, and efficiency."</p>
          </div>
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

      <section className="why-choose-us" style={{ background: 'white', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#004d40', marginBottom: '15px' }}>Why Choose Us</h2>
            <div style={{ width: '60px', height: '4px', background: '#c6934b', margin: '0 auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⚖️</div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Legal Expertise</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Led by an international legal and governance professional with years of experience in compliance and regulatory frameworks.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📋</div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Comprehensive Services</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>From visa applications to residency permits, citizenship guidance, and corporate immigration solutions.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🌍</div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Multilingual Support</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Assistance available in English, French, Swahili, and Lingala to serve diverse clients.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🤝</div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Client-Centered</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Personalized strategies that respect your goals, timelines, and legal requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="services">
        <div className="section-title">
          <h4 style={{ color: '#c6934b', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px' }}>Our Immigration Services in Kenya</h4>
          <h2>Comprehensive Solutions</h2>
          <div></div>
          <p style={{ marginTop: '20px', color: '#666', maxWidth: '800px', margin: '20px auto' }}>
            At Zabulon, we provide comprehensive immigration consulting tailored to individuals, families, and organizations. With deep expertise in legal frameworks and compliance, we guide you through every step of the process with clarity and professionalism.
          </p>
        </div>

        {services.map((cat, idx) => (
          <div key={idx} style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#004d40', marginBottom: '30px', paddingLeft: '20px', borderLeft: '5px solid #c6934b' }}>{cat.category}</h3>
            <div className="packages-grid">
              {cat.items.map((item, i) => (
                <div key={i} className="glass-card package-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#004d40' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#666', flexGrow: 1 }}>{item.desc}</p>
                  <button style={{ 
                    marginTop: '20px',
                    background: 'none', 
                    border: '1px solid #004d40', 
                    color: '#004d40', 
                    padding: '8px 20px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem', 
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}>Inquire Now</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="about" style={{ background: '#f5f5f5', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '80px' }}>
            <div>
              <h4 style={{ color: '#c6934b', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px' }}>Our Story</h4>
              <h2 style={{ fontSize: '2.5rem', color: '#004d40', marginBottom: '30px' }}>About Zabulon</h2>
              <p style={{ marginBottom: '20px', color: '#444', lineHeight: '1.8' }}>
                At Zabulon, we believe immigration is more than paperwork — it is about people, opportunities, and building futures. Our consultancy was founded on the principles of integrity, professionalism, and service, ensuring that every client receives guidance they can trust.
              </p>
              <div style={{ padding: '25px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderLeft: '5px solid #004d40' }}>
                <h4 style={{ color: '#004d40', marginBottom: '15px', fontWeight: 800 }}>Who We Are</h4>
                <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.7' }}>
                  Led by <strong>John Nzinga</strong>, an international legal and governance expert with extensive experience in compliance and administrative law, our team brings unmatched expertise to immigration consulting in Kenya. With a background in advising governments, NGOs, and private organizations, we understand both the technical and human dimensions of migration.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
               <div style={{ width: '100%', height: '500px', backgroundColor: '#ddd', borderRadius: '30px', backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '20px 20px 60px rgba(0,0,0,0.1)' }}></div>
               <div className="glass-effect" style={{ position: 'absolute', bottom: '-30px', right: '-30px', padding: '40px', borderRadius: '20px', maxWidth: '300px' }}>
                  <h4 style={{ fontWeight: 800, color: '#004d40', fontSize: '1.3rem', marginBottom: '15px' }}>Our Vision</h4>
                  <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: '1.6' }}>To be Kenya’s most trusted immigration consultancy, empowering individuals, families, and organizations to navigate migration with confidence and compliance.</p>
               </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#004d40', marginBottom: '15px' }}>Our Core Values</h2>
            <div style={{ width: '60px', height: '4px', background: '#c6934b', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {[
              { title: "Integrity", desc: "We uphold the highest ethical standards in every case.", icon: "💎" },
              { title: "Professionalism", desc: "Every application is handled with precision and care.", icon: "👔" },
              { title: "Accessibility", desc: "We serve clients in English, French, Swahili, and Lingala, ensuring clear communication across cultures.", icon: "🌐" },
              { title: "Commitment", desc: "We walk with you through every step of your immigration journey.", icon: "🤝" }
            ].map((val, i) => (
              <div key={i} className="glass-card" style={{ padding: '35px', borderRadius: '25px', textAlign: 'center', transition: '0.3s', cursor: 'default' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{val.icon}</div>
                <h4 style={{ color: '#004d40', marginBottom: '15px', fontWeight: 700 }}>{val.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '80px', padding: '50px', background: '#004d40', borderRadius: '30px', color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Promise to You</h2>
              <p style={{ opacity: 0.9, lineHeight: '1.8' }}>
                We combine legal expertise with a client-centered approach, ensuring that your goals are achieved efficiently and lawfully. Whether you are seeking a work permit, residency, or citizenship, we are here to guide you with clarity and dedication.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href="#contact" className="btn-primary" style={{ background: '#c6934b', color: 'white' }}>Start Your Journey</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '100px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <h4 style={{ color: '#c6934b', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px' }}>Get in Touch</h4>
              <h2 style={{ fontSize: '2.5rem', color: '#004d40', marginBottom: '30px' }}>Let's Start Your Journey.</h2>
              <p style={{ marginBottom: '40px', color: '#666', lineHeight: '1.7' }}>
                At Zabulon, we are committed to providing timely, professional, and confidential support for all your immigration needs. Whether you are an individual, family, or organization, we are here to guide you every step of the way.
              </p>
              
              <div style={{ display: 'grid', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.5rem' }}>📍</div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>Office Address</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Nairobi Business Center, 5th Floor, Nairobi, Kenya</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.5rem' }}>📞</div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>Phone</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>0722 929 193</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.5rem' }}>✉️</div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>Email</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>contact@zabulon.co.ke</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ fontSize: '1.5rem' }}>💬</div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>WhatsApp</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>0722 929 193</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '50px', padding: '30px', background: '#f9f9f9', borderRadius: '20px', border: '1px solid #eee' }}>
                <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '15px', fontWeight: 800 }}>Business Hours</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}><strong>Monday – Friday:</strong> 9:00 AM – 5:00 PM</p>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '5px' }}><strong>Saturday:</strong> 10:00 AM – 2:00 PM</p>
                <p style={{ fontSize: '0.85rem', color: '#666' }}><strong>Sundays & Holidays:</strong> Closed</p>
              </div>
            </div>

            <div style={{ background: '#f5f5f5', padding: '50px', borderRadius: '30px' }}>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#004d40', marginBottom: '10px' }}>Quick Contact Form</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Submit your inquiry and our team will respond promptly.</p>
              </div>
              <form style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', background: 'white', fontFamily: 'inherit' }} />
                  <input type="email" placeholder="Email Address" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', background: 'white', fontFamily: 'inherit' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="tel" placeholder="Phone Number" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', background: 'white', fontFamily: 'inherit' }} />
                  <select style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', background: 'white', fontFamily: 'inherit' }}>
                    <option>Interested Service</option>
                    <option>Visa Services</option>
                    <option>Residency & Citizenship</option>
                    <option>Corporate Immigration</option>
                    <option>Legal & Compliance</option>
                  </select>
                </div>
                <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', background: 'white', fontFamily: 'inherit' }}></textarea>
                <button className="btn-primary" type="button" style={{ width: '100%', padding: '18px' }}>Send Message</button>
              </form>
              <div style={{ marginTop: '30px', textAlign: 'center', padding: '20px', borderTop: '1px solid #ddd' }}>
                 <p style={{ fontSize: '0.85rem', color: '#444', fontStyle: 'italic' }}>
                   "Every inquiry is treated with respect, confidentiality, and professionalism. We value your trust."
                 </p>
              </div>
            </div>
          </div>
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
