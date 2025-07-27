import NavItem from "./components/NavItem";
import { useState, useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E2E] text-[#D1D5DB] font-['Inter']">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-black/90 to-black/0"
            : "bg-gradient-to-b from-black/70 to-black/0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex justify-center items-center h-16">
          <ul className="hidden md:flex space-x-2">
            <NavItem
              href="#home"
              title="Home"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              }
            />
            <NavItem
              href="#about"
              title="About"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <NavItem
              href="#experience"
              title="Experience"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              }
            />
            <NavItem
              href="#projects"
              title="Projects"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              }
            />
            <NavItem
              href="#skills"
              title="Skills"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
            <NavItem
              href="#contact"
              title="Contact"
              icon={
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              }
            />
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-8 pt-20 pb-16 bg-gradient-to-br from-[#1E1E2E] to-[#0E0E10] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-white block">Dillon Sahadevan</span>
            </h1>
            <p className="text-xl text-[#4ADE80] font-semibold mb-4">
              Software Engineer
            </p>
            <p className="text-lg text-[#9CA3AF] mb-8 max-w-lg mx-auto lg:mx-0">
              I love learning new technologies and building new projects.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}

      {/* About Section */}

      {/* Projects Section */}

      {/* Skills Section */}

      {/* Contact Section */}

      {/* Footer */}
      <footer className="bg-[#0E0E10] border-t border-[#374151] py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9CA3AF]">
              &copy; 2025 Dillon Sahadevan. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dillonsd"
                className="text-[#D1D5DB] font-medium hover:text-[#4ADE80] transition-colors"
              >
                GitHub
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dillon-sahadevan/"
                className="text-[#D1D5DB] font-medium hover:text-[#4ADE80] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
