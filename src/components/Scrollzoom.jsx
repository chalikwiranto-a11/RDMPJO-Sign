import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
    { img: "/images/foto2.jpeg", tl: "RU V", bl: "", tr: "", br: "Kilang Balikpapan" },
    { img: "/images/foto3.jpeg", tl: "", bl: "Area 37", tr: "Kariangau", br: "" },
    { img: "/images/foto4.jpeg", tl: "Kariangau", bl: "", tr: "", br: "Area 75" },
];

function ease(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
function clamp(v, min = 0, max = 1) {
    return Math.min(max, Math.max(min, v));
}
function rangeFade(p, start, end) {
    return clamp((p - start) / (end - start));
}

export default function ScrollZoom() {
    const wrapperRef = useRef(null);
    const bgRef = useRef(null);
    const circleRef = useRef(null);
    const droneImgRef = useRef(null);
    const slideRefs = useRef([]);
    const fullImgRefs = useRef([]);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: wrapperRef.current,
                start: "top top",
                end: "+=400%",
                scrub: 1.2,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const p = self.progress;

                    // Background pegawai fade out
                    if (bgRef.current)
                        bgRef.current.style.opacity = clamp(1 - rangeFade(p, 0.15, 0.40));

                    // Teks We/Create/The Future fade out
                    if (textRef.current)
                        textRef.current.style.opacity = clamp(1 - rangeFade(p, 0.10, 0.25));

                    // Circle zoom
                    const zoomP = ease(clamp(rangeFade(p, 0.15, 0.45)));
                    const vmin = Math.min(window.innerWidth, window.innerHeight);
                    const startSize = vmin * 0.42;
                    const endSize = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 1.1;
                    const size = startSize + zoomP * (endSize - startSize);
                    const radius = (1 - zoomP) * 50;

                    if (circleRef.current) {
                        circleRef.current.style.width = size + "px";
                        circleRef.current.style.height = size + "px";
                        circleRef.current.style.borderRadius = radius + "%";
                    }

                    // Foto drone fade saat berganti
                    if (droneImgRef.current)
                        droneImgRef.current.style.opacity = clamp(1 - rangeFade(p, 0.42, 0.52));

                    // Slide opacities
                    const ops = [
                        clamp(rangeFade(p, 0.45, 0.55)) * clamp(1 - rangeFade(p, 0.62, 0.70)),
                        clamp(rangeFade(p, 0.65, 0.75)) * clamp(1 - rangeFade(p, 0.79, 0.86)),
                        clamp(rangeFade(p, 0.84, 0.93)),
                    ];

                    slideRefs.current.forEach((el, i) => { if (el) el.style.opacity = ops[i]; });
                    fullImgRefs.current.forEach((el, i) => { if (el) el.style.opacity = ops[i]; });
                },
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const txt = (pos) => {
        const base = {
            position: "absolute",
            color: "#fff",
            fontSize: "clamp(36px, 6.5vw, 96px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-1px",
            fontFamily: "Georgia, serif",
            textShadow: "0 2px 30px rgba(0,0,0,0.8)",
        };
        const positions = {
            tl: { top: "15%", left: "4%" },
            tr: { top: "15%", right: "4%", textAlign: "right" },
            bl: { bottom: "15%", left: "4%" },
            br: { bottom: "15%", right: "4%", textAlign: "right" },
        };
        return { ...base, ...positions[pos] };
    };

    return (
        <div ref={wrapperRef} style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background: "#000",
        }}>

            {/* Layer 1: Background foto pegawai */}
            <img
                ref={bgRef}
                src="/images/foto1.jpeg"
                alt="bg"
                style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    zIndex: 1,
                }}
            />

            {/* Layer 2: Overlay gelap supaya teks lebih terbaca */}
            <div style={{
                position: "absolute", inset: 0,
                background: "rgba(0,0,0,0.35)",
                zIndex: 2,
            }} />

            {/* Layer 3: Teks We / Create / The Future */}
            <div ref={textRef} style={{
                position: "absolute", inset: 0,
                zIndex: 3, pointerEvents: "none",
            }}>
                <p style={{
                    position: "absolute", top: "6%", left: "50%",
                    transform: "translateX(-50%)",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 11, letterSpacing: 4,
                    fontFamily: "Arial, sans-serif",
                    whiteSpace: "nowrap",
                }}></p>
                <span style={txt("tl")}></span>
                <span style={txt("bl")}></span>
                <span style={txt("br")}></span>
            </div>

            {/* Layer 4: Lingkaran + foto drone */}
            <div ref={circleRef} style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "42vmin", height: "42vmin",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2.5px solid rgba(255,255,255,0.3)",
                zIndex: 5,
                willChange: "width, height, border-radius",
            }}>
                <img
                    ref={droneImgRef}
                    src="/images/foto2.jpeg"
                    alt="drone"
                    style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                    }}
                />
                {SLIDES.map((slide, i) => (
                    <img
                        key={i}
                        ref={el => fullImgRefs.current[i] = el}
                        src={slide.img}
                        alt=""
                        style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "cover",
                            opacity: 0,
                        }}
                    />
                ))}
            </div>

            {/* Layer 5: Teks fullscreen slides — hanya muncul setelah zoom */}
            {SLIDES.map((slide, i) => (
                <div
                    key={i}
                    ref={el => slideRefs.current[i] = el}
                    style={{
                        position: "absolute", inset: 0,
                        opacity: 0, zIndex: 6,
                        pointerEvents: "none",
                    }}
                >
                    <p style={{
                        position: "absolute", top: "6%", left: "50%",
                        transform: "translateX(-50%)",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 11, letterSpacing: 4,
                        fontFamily: "Arial, sans-serif",
                        whiteSpace: "nowrap",
                    }}>{slide.label}</p>
                    {slide.tl && <span style={txt("tl")}>{slide.tl}</span>}
                    {slide.tr && <span style={txt("tr")}>{slide.tr}</span>}
                    {slide.bl && <span style={txt("bl")}>{slide.bl}</span>}
                    {slide.br && <span style={txt("br")}>{slide.br}</span>}
                </div>
            ))}
        </div>
    );
}