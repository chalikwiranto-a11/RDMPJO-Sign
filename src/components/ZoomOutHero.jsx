import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ZoomOutHero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%', // scroll duration diperpanjang sedikit agar ada waktu pause
          scrub: true,
          pin: true,
          refreshPriority: -1 // FIX: Pastikan posisi dikalkulasi SETELAH halaman atas
        }
      });

      // 1. Fase Jeda (Pause): Gambar tetap full screen saat awal di-scroll
      tl.to({}, { duration: 0.5 });

      // 2. Animasi gambar zoom out dan meredup
      tl.to(imageRef.current, {
        width: isMobile ? '80vw' : '40vw',
        height: isMobile ? '60vh' : '65vh',
        borderRadius: '24px',
        filter: 'brightness(0.3)', // jadi gelap
        ease: 'none',
        duration: 1
      }, ">");

      // 3. Animasi THE BACKGROUND TEXT: opacity and slight scale
      tl.fromTo(textRef.current, {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        ease: 'none',
        duration: 1
      }, "<"); // jalan bebarengan dengan zoom out

    }, containerRef);

    // FIX: Memaksa GSAP mengkalkulasi ulang posisi pin dari ScrollZoom
    // sebelum ZoomOutHero jalan agar tidak tumpang tindih di awal layar.
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="zoh-container">
      {/* Background Layer */}
      <div className="zoh-bg"></div>

      {/* Text Marquee Layer */}
      <div ref={textRef} className="zoh-marquee-wrapper">
        {/* Baris Atas: TEAM REKIND (Putih) */}
        <div className="zoh-text-track">
          <h1 className="zoh-huge-text zoh-text-white">TEAM REKIND • TEAM REKIND • TEAM REKIND • </h1>
          <h1 className="zoh-huge-text zoh-text-white">TEAM REKIND • TEAM REKIND • TEAM REKIND • </h1>
          <h1 className="zoh-huge-text zoh-text-white">TEAM REKIND • TEAM REKIND • TEAM REKIND • </h1>
          <h1 className="zoh-huge-text zoh-text-white">TEAM REKIND • TEAM REKIND • TEAM REKIND • </h1>
        </div>

        {/* Baris Bawah: KARIANGAU 37 (Gold) */}
        <div className="zoh-text-track" style={{ animationDirection: 'reverse' }}>
          <h1 className="zoh-huge-text zoh-text-gold">KARIANGAU 37 • KARIANGAU 37 • KARIANGAU 37 • </h1>
          <h1 className="zoh-huge-text zoh-text-gold">KARIANGAU 37 • KARIANGAU 37 • KARIANGAU 37 • </h1>
          <h1 className="zoh-huge-text zoh-text-gold">KARIANGAU 37 • KARIANGAU 37 • KARIANGAU 37 • </h1>
          <h1 className="zoh-huge-text zoh-text-gold">KARIANGAU 37 • KARIANGAU 37 • KARIANGAU 37 • </h1>
        </div>
      </div>

      {/* Image Layer */}
      <div className="zoh-image-wrapper">
        <img
          ref={imageRef}
          className="zoh-image"
          src="https://diplomatic-violet-klv94drxdc.edgeone.app/52432a2a-83e5-4295-9a82-29ab9c802cd2-2.jpeg"
          alt="Kilang Pertamina"
        />
      </div>
    </div>
  );
};

export default ZoomOutHero;
