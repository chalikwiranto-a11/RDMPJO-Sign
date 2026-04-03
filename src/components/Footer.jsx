import React from 'react';

const Footer = () => {
  return (
    <div className="ln-footer-superbox">
      <footer className="ln-footer-wrapper">
        <div className="ln-footer-container">
          {/* Wavy Cut-out Element */}
          <div className="ln-wavy-cutout"></div>

          {/* Typography Centerpiece */}
          <div className="ln-title-container">
            <h2 className="ln-title">
              <span className="ln-title-white">Refenery Development Master Plan </span>
            </h2>
            <h2 className="ln-title">
              <span className="ln-title-lime">Project Balikpapan</span>
            </h2>
          </div>

          {/* Driver Image Overlap */}
          <div className="ln-driver-img-wrapper">
            <img
              className="ln-driver-img"
              alt="Kilang Pertamina Balikpapan"
              src="https://i0.wp.com/focuskaltim.id/konten/uploads/2025/05/6ed4de89-b47b-4734-82a5-661887e6b07a.jpg?fit=2560%2C1918&ssl=1"
            />
          </div>

          {/* Links Grid */}
          <div className="ln-links-grid">
            {/* Pages Left */}
            <div className="ln-links-col">
              <span className="ln-links-header">PAGES</span>
              <nav className="ln-links-nav">
                <a className="ln-link" href="#">HOME</a>
                <a className="ln-link" href="#">SIGN IN</a>
              </nav>
            </div>

            {/* Spacer for Image */}
            <div className="ln-spacer"></div>

            {/* Follow On Right */}
            <div className="ln-links-col ln-links-col-right">
              <span className="ln-links-header">2019-Present</span>
            </div>
          </div>
        </div>

        {/* Logo Row (Marquee) */}
        <div className="ln-logo-marquee-container">
          <div className="ln-logo-marquee-track">
            {/* Set 1 */}
            <span className="ln-logo-item">RDMP JO</span>
            <span className="ln-logo-item" style={{ fontFamily: 'Times New Roman' }}>Rekayasa Industri</span>
            <span className="ln-logo-item">PP</span>
            <span className="ln-logo-item" style={{ letterSpacing: '2px', fontWeight: 700 }}>Hyundai Engineering Ltd., Co</span>
            <span className="ln-logo-item">Rekayasa Industri</span>
            <span className="ln-logo-item" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>PP</span>
            <span className="ln-logo-item" style={{ border: '1px solid #282c20', padding: '0.2rem 1rem', borderRadius: '50px' }}>Kilang Pertamina Balikpapan</span>
            <span className="ln-logo-item">SK Engineering</span>

            {/* Set 2 (Duplikasi untuk efek seamless loop) */}
            <span className="ln-logo-item">RDMP JO</span>
            <span className="ln-logo-item" style={{ fontFamily: 'Times New Roman' }}>Rekayasa Industri</span>
            <span className="ln-logo-item">PP</span>
            <span className="ln-logo-item" style={{ letterSpacing: '2px', fontWeight: 700 }}>Hyundai Engineering Ltd., Co</span>
            <span className="ln-logo-item">Rekayasa Industri</span>
            <span className="ln-logo-item" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>PP</span>
            <span className="ln-logo-item" style={{ border: '1px solid #282c20', padding: '0.2rem 1rem', borderRadius: '50px' }}>Kilang Pertamina Balikpapan</span>
            <span className="ln-logo-item">SK Engineering</span>

            {/* Set 3 (Ekstra memastikan lebar layar besar tertutupi) */}
            <span className="ln-logo-item">RDMP JO</span>
            <span className="ln-logo-item" style={{ fontFamily: 'Times New Roman' }}>Rekayasa Industri</span>
            <span className="ln-logo-item">PP</span>
            <span className="ln-logo-item" style={{ letterSpacing: '2px', fontWeight: 700 }}>Hyundai Engineering Ltd., Co</span>
            <span className="ln-logo-item">Rekayasa Industri</span>
            <span className="ln-logo-item" style={{ fontStyle: 'italic', fontWeight: 'bold' }}>PP</span>
            <span className="ln-logo-item" style={{ border: '1px solid #282c20', padding: '0.2rem 1rem', borderRadius: '50px' }}>Kilang Pertamina Balikpapan</span>
            <span className="ln-logo-item">SK Engineering</span>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="ln-copyright-row">
          <div className="mb-4 md:mb-0">
            © 2026 Rekayasa Industri (RDMPJO Balikpapan). All rights reserved.
          </div>
          <div className="ln-copyright-links">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
