import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // NOTE: Fixed 'target' to 'trigger' (ScrollTrigger configuration)
      gsap.to("#title-service-1", {
        xPercent: 20,
        scrollTrigger: {
          trigger: "#title-service-1",
          scrub: true,
        },
      });
      gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
          trigger: "#title-service-2",
          scrub: true,
        },
      });
      gsap.to("#title-service-3", {
        xPercent: 100,
        scrollTrigger: {
          trigger: "#title-service-3",
          scrub: true,
        },
      });

      if (document.querySelector("#title-service-4")) {
        gsap.to("#title-service-4", {
          xPercent: -100,
          scrollTrigger: {
            trigger: "#title-service-4",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
      style={{
        marginTop: "5rem",
        marginBottom: "10rem",
        overflow: "hidden",
        fontWeight: 300,
        lineHeight: 1.375,
        textAlign: "center",
        padding: "5rem 0",
        color: "#fff", // using white since app bg is usually dark
        fontSize: "clamp(2rem, 4vw, 3.5rem)"
      }}
    >
      <div id="title-service-1">
        <p style={{ fontSize: "1.2em", marginBottom: "2rem" }}>Main Contractor</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          transform: "translateX(4rem)",
          margin: "1.5rem 0",
          whiteSpace: "nowrap"
        }}
      >
        <p style={{ fontWeight: 400 }}>Hyundai Engineering Co., Ltd</p>
        <div className="bg-gold" style={{ width: "clamp(3rem, 10vw, 8rem)", height: "4px", backgroundColor: "#D4AF37", flexShrink: 0 }} />
        <p>Rekayasa Industri</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          transform: "translateX(-12rem)",
          margin: "1.5rem 0",
          whiteSpace: "nowrap"
        }}
      >
        <p>PP</p>
        <div className="bg-gold" style={{ width: "clamp(3rem, 10vw, 8rem)", height: "4px", backgroundColor: "#D4AF37", flexShrink: 0 }} />
        <p style={{ fontStyle: "italic" }}>SK Engineering & Construction</p>
        <div className="bg-gold" style={{ width: "clamp(3rem, 10vw, 8rem)", height: "4px", backgroundColor: "#D4AF37", flexShrink: 0 }} />
        <p>All Subcontractor</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
