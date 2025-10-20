import React, { useState, Suspense } from "react";
import { Menu, X } from "lucide-react";
import HireMeModal from "./HireMeModal";
import BookingCalendar from "./BookingCalendar";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* === HEADER === */}
      <header
        className="fixed top-0 left-0 w-full z-40 bg-neutral-950/80 backdrop-blur-md border-b border-gray-800 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
        style={{ height: "68px" }}
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
              style={{ margin: 0, padding: 0, display: "block" }}
            />
          </a>

          {/* === NAVIGATION (Desktop) === */}
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

          {/* === CTA BUTTONS (Desktop) === */}
          <div className="hidden md:flex gap-3">
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

          {/* === MOBILE MENU BUTTON === */}
          <button
            className="md:hidden text-cyan-400 focus:outline-none"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* === MOBILE MENU (COMPACT DROPDOWN) === */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            openMenu ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-neutral-950/95 border-t border-cyan-400/20 backdrop-blur-sm">
            <nav className="flex flex-col items-center py-4 space-y-4 text-base font-semibold tracking-tight text-gray-100">
              <a
                href="#home"
                onClick={() => setOpenMenu(false)}
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#projects"
                onClick={() => setOpenMenu(false)}
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Work Projects
              </a>
              <button
                onClick={() => {
                  setShowModal(true);
                  setOpenMenu(false);
                }}
                className="px-5 py-2.5 w-[80%] rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-neutral-900 font-semibold shadow-md hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300"
              >
                Hire Me!
              </button>
              <button
                onClick={() => {
                  setShowBooking(true);
                  setOpenMenu(false);
                }}
                className="px-5 py-2.5 w-[80%] rounded-md border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-neutral-900 transition-all duration-300"
              >
                Book Appointment
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* === HIRE ME MODAL === */}
      <HireMeModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* === BOOKING CALENDAR POPUP (with Lazy Load) === */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 backdrop-blur-sm">
          <div
            className="relative w-[95%] max-w-3xl bg-neutral-950 border border-cyan-400/40 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.4)] overflow-hidden"
            style={{
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400 transition-all text-xl z-10"
            >
              ✖
            </button>

            {/* Scrollable Calendar Area with Lazy Load */}
            <div
              className="p-4 md:p-6 overflow-y-auto"
              style={{
                maxHeight: "calc(90vh - 2rem)",
              }}
            >
              <Suspense
                fallback={
                  <div className="text-center text-cyan-400 p-6 animate-pulse">
                    Loading calendar...
                  </div>
                }
              >
                <BookingCalendar />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
