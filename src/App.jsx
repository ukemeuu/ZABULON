import React, { useState, useEffect } from 'react';

// Professional SVG Icons
const Icons = {
  Work: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  Education: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
  ),
  Business: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
  ),
  Family: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
  Home: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  ),
  Flag: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
  ),
  Building: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="14" x2="20" y2="14"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
  ),
  Check: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  Plane: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-1.1-.3-2.2.4-2.4 1.5l-.4 1.8L10 13l-3.5 3.5L4 16l-1.5 1.5 2.5 1 1 2.5L9 19.5l3.5-3.5 3 7.5 1.8-.4c1-.2 1.8-1.4 1.5-2.4z"></path></svg>
  ),
  Scale: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16s3-2 3-5V4l-7-3-7 3v7c0 3 3 5 3 5"></path><path d="M12 22V16"></path><path d="M7 22h10"></path></svg>
  ),
  FileText: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  ),
  Gavel: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 12.5L10 17l-4.5-4.5L10 8l4.5 4.5z"></path><path d="M10 8l5-5 5 5-5 5-5-5z"></path><path d="M2.5 21.5L10 14l3 3-7.5 7.5-3-3z"></path></svg>
  ),
  Globe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
  ),
  Handshake: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 18V12"></path><path d="M12 8V6"></path></svg>
  ),
  Diamond: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"></path><path d="M11 3L8 9l4 12 4-12-3-6"></path><path d="M2 9h20"></path></svg>
  ),
  Briefcase: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  ),
  MapPin: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  Phone: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  Mail: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
  MessageCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  ),
  Clipboard: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
  )
};

const services = [
  {
    category: "Visa Services",
    items: [
      {
        title: "Work Permits",
        desc: "Assistance for professionals, investors, and expatriates seeking employment in Kenya.",
        icon: <Icons.Briefcase />
      },
      {
        title: "Student Visas",
        desc: "Guidance for international students enrolling in Kenyan institutions.",
        icon: <Icons.Education />
      },
      {
        title: "Business & Investor Visas",
        desc: "Support for entrepreneurs and investors establishing ventures in Kenya.",
        icon: <Icons.Business />
      },
      {
        title: "Family & Dependent Visas",
        desc: "Helping families reunite and settle lawfully.",
        icon: <Icons.Family />
      }
    ]
  },
  {
    category: "Residency & Citizenship",
    items: [
      {
        title: "Residency Permits",
        desc: "Applications for short-term and long-term residence.",
        icon: <Icons.Home />
      },
      {
        title: "Permanent Residency",
        desc: "Expert support for qualifying applicants seeking stability in Kenya.",
        icon: <Icons.Shield />
      },
      {
        title: "Citizenship Guidance",
        desc: "Step-by-step assistance for those pursuing Kenyan citizenship.",
        icon: <Icons.Flag />
      }
    ]
  },
  {
    category: "Corporate Immigration Solutions",
    items: [
      {
        title: "Employer Sponsorship",
        desc: "Helping companies secure permits for foreign employees.",
        icon: <Icons.Building />
      },
      {
        title: "Compliance Advisory",
        desc: "Ensuring organizations meet Kenyan immigration regulations.",
        icon: <Icons.Check />
      },
      {
        title: "Relocation Support",
        desc: "Streamlined processes for international staff transfers.",
        icon: <Icons.Plane />
      }
    ]
  },
  {
    category: "Legal & Compliance Support",
    items: [
      {
        title: "Policy Updates",
        desc: "Stay informed on evolving immigration laws and regulations.",
        icon: <Icons.Scale />
      },
      {
        title: "Document Preparation",
        desc: "Professional drafting and submission of applications.",
        icon: <Icons.FileText />
      },
      {
        title: "Appeals & Reviews",
        desc: "Guidance for clients facing immigration challenges.",
        icon: <Icons.Gavel />
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

    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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

      <div className="hero hero-animate" id="hero">
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

      <section className="highlights reveal">
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

      <section className="why-choose-us reveal" style={{ background: 'white', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem', color: '#004d40', marginBottom: '15px' }}>Why Choose Us</h2>
            <div style={{ width: '60px', height: '4px', background: '#c6934b', margin: '0 auto' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ color: '#c6934b', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}><Icons.Scale /></div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Legal Expertise</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Led by a team of legal and governance professionals with years of experience in compliance and regulatory frameworks.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ color: '#c6934b', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}><Icons.Clipboard /></div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Comprehensive Services</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>From visa applications to residency permits, citizenship guidance, and corporate immigration solutions.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ color: '#c6934b', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}><Icons.Globe /></div>
              <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Multilingual Support</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Assistance available in English, French, Swahili, and Lingala to serve diverse clients.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ color: '#c6934b', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}><Icons.Shield /></div>
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
                <div key={i} className="glass-card package-card reveal" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ color: '#c6934b', marginBottom: '20px' }}>{item.icon}</div>
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
                  John Nzinga leads an elite team of legal and governance experts with extensive experience in compliance and administrative law, bringing unmatched expertise to immigration consulting in Kenya. With a background in advising governments, NGOs, and private organizations, our team understands both the technical and human dimensions of migration.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
               <div style={{ width: '100%', height: '500px', backgroundColor: '#ddd', borderRadius: '30px', backgroundImage: 'url(/nairobi_office.png)', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '20px 20px 60px rgba(0,0,0,0.1)' }}></div>
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
              { title: "Integrity", desc: "We uphold the highest ethical standards in every case.", icon: <Icons.Shield /> },
              { title: "Professionalism", desc: "Every application is handled with precision and care.", icon: <Icons.Briefcase /> },
              { title: "Accessibility", desc: "We serve clients in English, French, Swahili, and Lingala, ensuring clear communication across cultures.", icon: <Icons.Globe /> },
              { title: "Commitment", desc: "We walk with you through every step of your immigration journey.", icon: <Icons.Handshake /> }
            ].map((val, i) => (
              <div key={i} className="glass-card" style={{ padding: '35px', borderRadius: '25px', textAlign: 'center', transition: '0.3s', cursor: 'default' }}>
                <div style={{ color: '#c6934b', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{val.icon}</div>
                <h4 style={{ color: '#004d40', marginBottom: '15px', fontWeight: 700 }}>{val.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '80px', padding: '50px', background: '#004d40', borderRadius: '30px', color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="reveal">
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

      <section className="community reveal" style={{ padding: '100px 0', background: '#fcfcfc' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-title">
             <h2 style={{ fontSize: '2.5rem', color: '#004d40', marginBottom: '15px' }}>Serving Our Global Community</h2>
             <div style={{ width: '60px', height: '4px', background: '#c6934b', margin: '0 auto' }}></div>
             <p style={{ marginTop: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>We take pride in the diverse individuals and organizations we support. From international students to multinational teams, we are honored to be part of your story in Kenya.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '60px' }}>
             <div className="reveal-left" style={{ textAlign: 'center' }}>
                <div style={{ height: '350px', borderRadius: '25px', backgroundImage: 'url(/international_student.png)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}></div>
                <h4 style={{ color: '#004d40', marginBottom: '10px' }}>International Students</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Guided by our experts through every step of their academic journey in Kenya.</p>
             </div>
             <div className="reveal" style={{ textAlign: 'center' }}>
                <div style={{ height: '350px', borderRadius: '25px', backgroundImage: 'url(/team_meeting.png)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}></div>
                <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Global Teams</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Unmatched corporate relocation support for organizations worldwide.</p>
             </div>
             <div className="reveal-right" style={{ textAlign: 'center' }}>
                <div style={{ height: '350px', borderRadius: '25px', backgroundImage: 'url(/family_relocation.png)', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}></div>
                <h4 style={{ color: '#004d40', marginBottom: '10px' }}>Relocating Families</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Making Kenya feel like home for families searching for a new beginning.</p>
             </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '100px 0', background: 'white' }} className="reveal">
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
                  <div style={{ color: '#c6934b' }}><Icons.MapPin /></div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>Office Address</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Nairobi Business Center, 5th Floor, Nairobi, Kenya</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ color: '#c6934b' }}><Icons.Phone /></div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>Phone</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>0722 929 193</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ color: '#c6934b' }}><Icons.Mail /></div>
                  <div>
                    <h4 style={{ color: '#004d40', fontSize: '1rem', marginBottom: '5px' }}>Email</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>contact@zabulon.co.ke</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                  <div style={{ color: '#c6934b' }}><Icons.MessageCircle /></div>
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
              <img src="/logo.png" alt="Zabulon Logo" style={{ height: '45px' }} />
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
