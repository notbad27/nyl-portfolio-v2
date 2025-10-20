import React, { useEffect, useRef } from "react";

export default function BookingCalendar() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // ✅ Load the official GHL script for form responsiveness
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    // ✅ Adjust iframe height to always fit viewport (no scrollbars)
    const updateHeight = () => {
      if (iframeRef.current) {
        const vh = window.innerHeight;
        iframeRef.current.style.height = `${vh * 0.88}px`; // 88% for perfect fit with padding
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
      className="flex flex-col justify-center items-center bg-neutral-950 text-gray-100 px-4 py-8 sm:py-12 min-h-screen"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-fade-in">
        Book an Appointment
      </h2>

      {/* Calendar container */}
      <div
        className="w-full max-w-5xl bg-neutral-900 border border-cyan-400/30 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.3)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_70px_rgba(34,211,238,0.4)]"
      >
        <iframe
          ref={iframeRef}
          src="https://api.leadconnectorhq.com/widget/booking/sfZOn9ad5wxx1R4ccUkA"
          title="Booking Calendar"
          className="w-full rounded-2xl"
          style={{
            border: "none",
            background: "transparent",
            overflow: "hidden",
            height: "88vh", // fallback for SSR
          }}
          scrolling="no"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>

      {/* Extra spacing for mobile bottom safe area */}
      <div className="h-8 sm:h-12"></div>
    </section>
  );
}
