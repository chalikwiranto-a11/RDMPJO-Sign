import { useEffect, useRef, useState } from 'react'
import ScrollZoom from './components/Scrollzoom.jsx'
import ServiceSummary from './components/ServiceSummary.jsx'

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
      <ServiceSummary />

      <div ref={bottomRef} style={{
        height: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Video Element */}
        {backgroundVideo && (
          <video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: 0.5, // Ubah nilai opacity di sini sesuai kebutuhan (0.0 - 1.0)
            }}
          />
        )}
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '14px',
          letterSpacing: '4px',
          fontFamily: 'Arial, sans-serif',
          textTransform: 'uppercase',
          opacity: showButton ? 1 : 0,
          transform: showButton ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease',
          position: 'relative',
          zIndex: 1,
        }}>
          Access the dashboard Rekayasa Industri
        </p>

        <button
          onClick={() => window.location.href = 'https://lois-tanagrine-morgan.ngrok-free.dev/admin/login'}
          style={{
            padding: '16px 56px',
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '4px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            opacity: showButton ? 1 : 0,
            transform: showButton ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s',
            position: 'relative',
            zIndex: 1,
          }}
          onMouseEnter={e => {
            e.target.style.background = '#f97316'
            e.target.style.borderColor = '#f97316'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.borderColor = 'rgba(255,255,255,0.4)'
          }}
        >
          Sign In to Continue
        </button>

        {/* Link Kebijakan Privasi */}
        <button
          onClick={() => setShowPrivacy(true)}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '12px',
            position: 'relative',
            zIndex: 1,
            opacity: showButton ? 1 : 0,
            transform: showButton ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s',
          }}
        >
          Kebijakan Privasi & Keamanan Data
        </button>
      </div>

      {/* Modal Kebijakan Privasi */}
      {showPrivacy && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            background: '#111',
            color: '#fff',
            padding: '40px',
            borderRadius: '8px',
            maxWidth: '650px',
            maxHeight: '85vh',
            overflowY: 'auto',
            border: '1px solid #333',
            position: 'relative',
            fontFamily: 'Arial, sans-serif'
          }}>
            <button
              onClick={() => setShowPrivacy(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                background: 'none',
                border: 'none',
                color: '#aaa',
                fontSize: '24px',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#aaa'}
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
    </>
  )
}