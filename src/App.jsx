import { useEffect, useRef, useState } from 'react'
import ScrollZoom from './components/Scrollzoom.jsx'
import ZoomOutHero from './components/ZoomOutHero.jsx'
import ServiceSummary from './components/ServiceSummary.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const bottomRef = useRef(null)
  const [showButton, setShowButton] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  // Ganti string ini dengan path atau import file video kamu
  const backgroundVideo = 'https://relevant-beige-twyciw8sgz.edgeone.app/cover.mp4'


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowButton(true)
      },
      { threshold: 0.3 }
    )
    if (bottomRef.current) observer.observe(bottomRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ScrollZoom />
      <ZoomOutHero />
      <ServiceSummary />

      <div ref={bottomRef} className="app-bottom-section">
        {/* Background Video Element */}
        {backgroundVideo && (
          <video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="app-video-bg"
          />
        )}
        <p className={`app-fade-el ${showButton ? 'show' : ''}`} style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px',
          letterSpacing: '4px',
          fontFamily: 'Arial, sans-serif',
          textTransform: 'uppercase',
        }}>
          Access the dashboard Rekayasa Industri
        </p>

        <button
          onClick={() => window.location.href = 'https://lois-tanagrine-morgan.ngrok-free.dev/admin/login'}
          className={`app-btn app-fade-el ${showButton ? 'show' : ''}`}
        >
          Sign In to Continue
        </button>

        {/* Link Kebijakan Privasi */}
        <button
          onClick={() => setShowPrivacy(true)}
          className={`app-privacy-link app-fade-el ${showButton ? 'show' : ''}`}
        >
          Kebijakan Privasi & Keamanan Data
        </button>
      </div>

      {/* Modal Kebijakan Privasi */}
      {showPrivacy && (
        <div className="app-modal-overlay">
          <div className="app-modal-content">
            <button
              onClick={() => setShowPrivacy(false)}
              className="app-modal-close"
            >
              ✕
            </button>

            <h2 style={{ fontSize: '20px', marginBottom: '5px', color: '#f97316', textAlign: 'center' }}>KEBIJAKAN PRIVASI & KEAMANAN DATA</h2>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #333', textAlign: 'center' }}>
              RDMP JO Balikpapan — PT. Rekayasa Industri
            </p>

            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Pengelolaan Data</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', marginBottom: '20px' }}>
              Seluruh data dan informasi yang tersimpan dalam sistem ini dikelola sepenuhnya oleh PT. Rekayasa Industri dalam lingkup proyek RDMP JO Balikpapan. Data yang dimaksud mencakup seluruh aset informasi, dokumen operasional, dan basis data yang terdapat dalam platform ini.
            </p>

            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Kerahasiaan & Larangan Penggunaan</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', marginBottom: '20px' }}>
              Setiap pengguna yang memiliki akses terhadap sistem ini wajib menjaga kerahasiaan seluruh informasi yang tersedia. Dilarang keras untuk mengambil, menyalin, mendistribusikan, atau menyebarluaskan data dalam bentuk apapun kepada pihak yang tidak berkepentingan tanpa persetujuan resmi dari Tim PT. Rekayasa Industri.
            </p>

            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Sanksi & Tanggung Jawab</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', marginBottom: '20px' }}>
              Pelanggaran terhadap kebijakan ini dapat mengakibatkan tindakan hukum sesuai dengan peraturan perundang-undangan yang berlaku di Republik Indonesia, termasuk namun tidak terbatas pada Undang-Undang Informasi dan Transaksi Elektronik (UU ITE).
            </p>

            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Akses Pengguna</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc', marginBottom: '40px' }}>
              Akses terhadap sistem ini hanya diberikan kepada personel yang telah mendapatkan otorisasi resmi. Setiap aktivitas pengguna dalam sistem ini dapat dipantau dan dicatat untuk keperluan keamanan dan audit internal.
            </p>

            <p style={{ fontSize: '12px', color: '#666', borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center' }}>
              © 2026 PT. Rekayasa Industri — RDMP JO Balikpapan. Seluruh hak dilindungi.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}