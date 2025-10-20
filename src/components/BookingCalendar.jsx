import React, { useEffect, useRef } from "react";

export default function BookingCalendar() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // ✅ Load the official GHL script for responsiveness
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // ✅ Adjust iframe height to always fit viewport
    const updateHeight = () => {
      if (iframeRef.current) {
        const vh = window.innerHeight;
        iframeRef.current.style.height = `${vh * 0.8}px`; // was 0.88 → slightly reduced for better fit
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section
      id="book"
      className="flex flex-col justify-center items-center bg-neutral-950 text-gray-100 px-4 py-6 sm:py-8 min-h-screen overflow-hidden"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
        Book an Appointment
      </h2>

      {/* === CUSTOM LOGO ABOVE CALENDAR === */}
      <div className="flex justify-center mb-4">
        <img
          src="https://cdn.jsdelivr.net/gh/notbad27/nyl-ghl-builds@latest/logo.png"
          alt="Nylisnotadev Logo"
          className="object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          style={{
            width: "229px",
            height: "61px",
          }}
        />
      </div>

      {/* Calendar container */}
      <div className="w-full max-w-4xl bg-neutral-900 border border-cyan-400/30 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.3)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.4)]">
        <iframe
          ref={iframeRef}
          src="https://api.leadconnectorhq.com/widget/booking/sfZOn9ad5wxx1R4ccUkA" // 👈 your GHL calendar link
          title="Booking Calendar"
          className="w-full rounded-2xl"
          style={{
            border: "none",
            background: "transparent",
            overflow: "hidden",
            height: "80vh", // matches useEffect height calc
          }}
          scrolling="no"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
}
