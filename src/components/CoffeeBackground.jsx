import { useEffect, useRef } from "react";
import "./coffee-bg.css";

export default function CoffeeBackground({ withSteam = true }) {
    const glowRef = useRef(null);

    useEffect(() => {
        const el = glowRef.current;
        if (!el) return;

        let raf = 0;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        const onMove = (e) => {
            x = e.clientX;
            y = e.clientY;

            // rAF to keep it smooth and cheap
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    el.style.left = `${x}px`;
                    el.style.top = `${y}px`;
                    raf = 0;
                });
            }
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="cbg" aria-hidden="true">
            <span className="cbg__blob cbg__b1" />
            <span className="cbg__blob cbg__b2" />
            <span className="cbg__blob cbg__b3" />

            <span className="cbg__grain" />
            <span className="cbg__glow" ref={glowRef} />

            {withSteam && (
                <svg className="cbg__steam" viewBox="0 0 600 300">
                    <path d="M120 280 C 80 210, 160 180, 120 120 C 90 60, 150 40, 120 10" />
                    <path d="M260 280 C 220 210, 300 180, 260 120 C 230 60, 290 40, 260 10" />
                    <path d="M400 280 C 360 210, 440 180, 400 120 C 370 60, 430 40, 400 10" />
                </svg>
            )}
        </div>
    );
}
