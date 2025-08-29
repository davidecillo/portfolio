"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Nascondi su dispositivi touch
    if (!window.matchMedia("(pointer: fine)").matches) {
      el.style.display = "none";
      return;
    }

    // Parametri
    const baseWidth = 16; // larghezza di riposo
    const height = 16; // altezza fissa
    const maxExtra = 20; // max extra da aggiungere alla base (ridotto per limitare la lunghezza)
    const speedFactor = 1.5; // ridotto per avere meno allungamento
    const followLerp = 0.18; // smoothing posizione
    const widthLerp = 0.15; // smoothing larghezza

    // Stato interno
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let lastX = mouseX;
    let lastY = mouseY;
    let currentWidth = baseWidth;

    let rafId = null;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      // posizione smooth
      mouseX = lerp(mouseX, targetX, followLerp);
      mouseY = lerp(mouseY, targetY, followLerp);

      // calcolo velocità
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // larghezza target con limite massimo
      const targetWidth = baseWidth + Math.min(speed * speedFactor, maxExtra);
      currentWidth = lerp(currentWidth, targetWidth, widthLerp);

      // aggiorna dimensioni
      el.style.width = `${currentWidth}px`;
      el.style.height = `${height}px`;
      el.style.borderRadius = `${Math.ceil(height / 2)}px`;

      // rotazione verso direzione del movimento
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      el.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(${angle}deg) translate(-50%, -50%)`;

      lastX = mouseX;
      lastY = mouseY;

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="custom-cursor" />;
}