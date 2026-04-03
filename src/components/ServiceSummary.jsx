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
          refreshPriority: -2,
        },
      });
      gsap.to("#title-service-2", {
        xPercent: -30,
        scrollTrigger: {
          trigger: "#title-service-2",
          scrub: true,
          refreshPriority: -2,
        },
      });
      gsap.to("#title-service-3", {
        xPercent: 100,
        scrollTrigger: {
          trigger: "#title-service-3",
          scrub: true,
          refreshPriority: -2,
        },
      });

      if (document.querySelector("#title-service-4")) {
        gsap.to("#title-service-4", {
          xPercent: -100,
          scrollTrigger: {
            trigger: "#title-service-4",
            scrub: true,
            refreshPriority: -2,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="contact-text-responsive"
    >
      <div id="title-service-1">
        <p className="service-title-1">Main Contractor</p>
      </div>
      <div
        id="title-service-2"
        className="service-row service-row-2"
      >
        <p style={{ fontWeight: 400 }}>Hyundai Engineering Co., Ltd</p>
        <div className="bg-gold" />
        <p>Rekayasa Industri</p>
      </div>
      <div
        id="title-service-3"
        className="service-row service-row-3"
      >
        <p>PP</p>
        <div className="bg-gold" />
        <p style={{ fontStyle: "italic" }}>SK Engineering & Construction</p>
        <div className="bg-gold" />
        <p>All Subcontractor</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
