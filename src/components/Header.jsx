import React, { useState } from "react";
import HireMeModal from "./HireMeModal";
import BookingCalendar from "./BookingCalendar";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      {/* === HEADER === */}
      <header
        className="fixed top-0 left-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-gray-800 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
        style={{ height: "68px" }} // 👈 fixed height
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-full px-4 text-gray-100">
          {/* === LOGO === */}
          <a href="#home" className="flex items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/notbad27/nyl-ghl-builds@latest/logo.png"
              alt="Nyl Dagarag Logo"
              width={186}
              height={66}
              className="block w-[186px] h-[66px] object-contain select-none"
              style={{
                margin: 0,
                padding: 0,
                display: "block",
              }}
            />
          </a>

          {/* === NAVIGATION === */}
          <nav className="hidden md:flex gap-10 text-base font-semibold tracking-tight">
            <a
              href="#home"
              className="text-gray-200 hover:text-cyan-400 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-cyan-400 transition-all duration-300"
            >
              Work Projects
            </a>
          </nav>

          {/* === CTA BUTTONS === */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-neutral-900 font-semibold text-base shadow-md hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300"
            >
              Hire Me!
            </button>
            <button
              onClick={() => setShowBooking(true)}
              className="px-5 py-2.5 rounded-md border border-cyan-400 text-cyan-400 font-semibold text-base hover:bg-cyan-400 hover:text-neutral-900 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* === HIRE ME MODAL === */}
      <HireMeModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* === BOOKING CALENDAR POPUP === */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-[95%] max-w-3xl bg-neutral-950 border border-cyan-400/40 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.4)]">
            {/* Close Button */}
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 transition-all text-xl z-10"
            >
              ✖
            </button>

            {/* Embedded Booking Calendar */}
            <div className="p-6 md:p-8">
              <BookingCalendar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
