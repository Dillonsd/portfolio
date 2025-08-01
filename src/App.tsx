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
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E1E2E] to-[#0E0E10]"
      >
        <div className="text-center max-w-4xl px-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="text-white block">Dillon Sahadevan</span>
          </h1>
          <p className="text-xl lg:text-2xl text-[#4ADE80] font-semibold mb-6">
            Software Engineer
          </p>
          <p className="text-lg lg:text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
            I specialize in full-stack development, machine learning, and
            embedded systems. Passionate about building innovative solutions
            that make an impact.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#4ADE80] text-[#4ADE80] px-8 py-3 rounded-lg font-semibold hover:bg-[#4ADE80] hover:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#1E1E2E]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] mx-auto"></div>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Software Engineer & Entrepreneur
                </h3>
                <p className="text-lg text-[#9CA3AF] leading-relaxed">
                  I'm a Software Engineer specializing in{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    embedded systems
                  </span>
                  ,
                  <span className="text-[#4ADE80] font-semibold">
                    {" "}
                    machine learning
                  </span>
                  , and{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    full-stack development
                  </span>
                  . With expertise in building cross-platform mobile
                  applications and IoT solutions, I enjoy tinkering with new
                  technologies and building and working on interesting projects
                  that make an impact.
                </p>
                <p className="text-lg text-[#9CA3AF] leading-relaxed">
                  I co-founded PitStopX, a mobile platform connecting mechanics
                  with users. My experience spans from developing{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    sensor drivers
                  </span>{" "}
                  and{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    wireless protocols
                  </span>{" "}
                  at Garmin to{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    full-stack development
                  </span>{" "}
                  at the University of Calgary Solar Car Team to{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    embedded ML research
                  </span>{" "}
                  at the University of Calgary.
                </p>
                <p className="text-lg text-[#9CA3AF] leading-relaxed">
                  I hold a B.Sc. in Software Engineering with a Minor in
                  Computer Science from the University of Calgary, where I
                  researched{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    neural network compression
                  </span>{" "}
                  and{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    embedded ML security
                  </span>
                  , focusing on optimizing deep learning models for
                  resource-constrained devices.
                </p>
                <p className="text-lg text-[#9CA3AF] leading-relaxed">
                  In my free time, I enjoy playing{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    video games
                  </span>
                  , listening to and playing{" "}
                  <span className="text-[#4ADE80] font-semibold">music</span>,
                  and{" "}
                  <span className="text-[#4ADE80] font-semibold">
                    tinkering with 3D printing
                  </span>{" "}
                  projects.
                </p>
              </div>

              <div className="bg-[#2A2A3E] rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Key Achievements
                </h4>
                <ul className="space-y-3 text-[#9CA3AF]">
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Co-founded and built{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        PitStopX
                      </span>{" "}
                      with{" "}
                      <span className="text-[#4ADE80] font-semibold">Expo</span>
                      ,{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        React Native
                      </span>
                      ,{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Tailwind CSS
                      </span>
                      ,{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Supabase
                      </span>
                      , and{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Stripe
                      </span>{" "}
                      integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Developed{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        sensor drivers
                      </span>{" "}
                      for{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Ambiq
                      </span>{" "}
                      and{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Nordic
                      </span>{" "}
                      MCUs using{" "}
                      <span className="text-[#4ADE80] font-semibold">I2C</span>{" "}
                      and{" "}
                      <span className="text-[#4ADE80] font-semibold">SPI</span>{" "}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Built{" "}
                      <span className="text-[#4ADE80] font-semibold">ANT+</span>{" "}
                      wireless features for{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Garmin
                      </span>{" "}
                      products
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Developed{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        automated testing
                      </span>{" "}
                      tools using{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Python
                      </span>
                      ,{" "}
                      <span className="text-[#4ADE80] font-semibold">.NET</span>
                      , and{" "}
                      <span className="text-[#4ADE80] font-semibold">WPF</span>{" "}
                      for Garmin and 3rd party partner product validation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Built telemetry website/backend for University of Calgary
                      Solar Car Team using{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        Angular
                      </span>
                      ,{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        React
                      </span>
                      ,{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        MongoDB
                      </span>
                      , and{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        RabbitMQ
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Led team at University of Calgary Solar Car Team
                      developing{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        STM32
                      </span>{" "}
                      embedded systems for wireless telemetry and battery
                      management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ADE80] mr-3">•</span>
                    <span>
                      Researched{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        embedded neural network compression
                      </span>{" "}
                      and it's effect on{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        poisoning-based neural network attacks
                      </span>
                      , and built{" "}
                      <span className="text-[#4ADE80] font-semibold">
                        PyTorch
                      </span>{" "}
                      frameworks for model and technique evaluation
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Technical Expertise
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="text-[#4ADE80] font-semibold mb-2">
                    Languages
                  </h5>
                  <p className="text-[#9CA3AF]">
                    TypeScript, JavaScript, C, C++, Python, C#, Java
                  </p>
                </div>
                <div>
                  <h5 className="text-[#4ADE80] font-semibold mb-2">
                    Frameworks
                  </h5>
                  <p className="text-[#9CA3AF]">
                    React Native, React, Angular, Node.js, Expo
                  </p>
                </div>
                <div>
                  <h5 className="text-[#4ADE80] font-semibold mb-2">
                    Embedded
                  </h5>
                  <p className="text-[#9CA3AF]">
                    STM32, Nordic nRF, Ambiq, ESP32, Arduino, Zephyr
                  </p>
                </div>
                <div>
                  <h5 className="text-[#4ADE80] font-semibold mb-2">
                    ML & Tools
                  </h5>
                  <p className="text-[#9CA3AF]">
                    PyTorch, TensorFlow, Docker, Linux, .NET, Jenkins
                  </p>
                </div>
                <div>
                  <h5 className="text-[#4ADE80] font-semibold mb-2">
                    Databases & Cloud
                  </h5>
                  <p className="text-[#9CA3AF]">
                    MongoDB, Supabase, RabbitMQ, AWS, GCP
                  </p>
                </div>
                <div>
                  <h5 className="text-[#4ADE80] font-semibold mb-2">
                    Protocols & Testing
                  </h5>
                  <p className="text-[#9CA3AF]">
                    I2C/SPI, ANT+, Automated Testing, CI/CD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#1E1E2E]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Co-Founder & Lead Software Engineer
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    PitStopX, Calgary, Canada
                  </p>
                </div>
                <span className="text-[#9CA3AF] text-sm">
                  07/2024 - Present
                </span>
              </div>
              <ul className="text-[#9CA3AF] space-y-2 mb-4">
                <li>
                  • Co-founded PitStopX, a mobile platform in beta connecting
                  mechanics with users, integrating Stripe for payments
                </li>
                <li>
                  • Built a cross-platform app with React Native, Expo, and
                  Supabase. Currently in beta testing.
                </li>
                <li>
                  • Built our company website with Vite, React, and Tailwind
                  CSS, and deployed with Cloudflare Pages.{" "}
                  <a
                    href="https://pitstopx.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
                  >
                    View Website →
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Full-Stack
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  React Native
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Supabase
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Stripe
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Vite
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Cloudflare Pages
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Software Engineer II
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    Garmin, Cochrane, Canada
                  </p>
                </div>
                <span className="text-[#9CA3AF] text-sm">
                  06/2023 - 07/2024
                </span>
              </div>
              <ul className="text-[#9CA3AF] space-y-2 mb-4">
                <li>
                  • Developed wireless protocols for user metrics (e.g., heart
                  rate, cadence) across Garmin wearables and bike computers
                </li>
                <li>
                  • Led automated certification tool development, cutting
                  testing time by 30%
                </li>
                <li>
                  • Designed ANT+ features, supporting 100+ Garmin and
                  third-party products
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Embedded Systems
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Wireless Protocols
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Automated Testing
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Machine Learning Researcher
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    University of Calgary, Calgary, Canada
                  </p>
                </div>
                <span className="text-[#9CA3AF] text-sm">
                  08/2022 - 05/2023
                </span>
              </div>
              <ul className="text-[#9CA3AF] space-y-2 mb-4">
                <li>
                  • Researched embedded neural network compression, and impacts
                  on STOA poisoning-based attacks
                </li>
                <li>
                  • Built a PyTorch framework, improving model and method
                  evaluation
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Machine Learning
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  PyTorch
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Embedded ML
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Software Manager
                  </h3>
                  <p className="text-[#4ADE80] font-medium">
                    University of Calgary Solar Car Team, Calgary, Canada
                  </p>
                </div>
                <span className="text-[#9CA3AF] text-sm">
                  10/2020 - 04/2023
                </span>
              </div>
              <ul className="text-[#9CA3AF] space-y-2 mb-4">
                <li>
                  • Led 10-member team to develop STM32-based embedded systems,
                  achieving 100% race uptime
                </li>
                <li>
                  • Built React-based telemetry website for real-time data
                  through RabbitMQ.{" "}
                  <a
                    href="https://telemetry.calgarysolarcar.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
                  >
                    View Project →
                  </a>
                </li>
                <li>
                  • Built team's website with Angular and Firebase. Website had
                  to support real-time edits through a portal by non-technical
                  users from the business team.{" "}
                  <a
                    href="https://calgarysolarcar.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
                  >
                    View Project →
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Leadership
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Embedded Systems
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Full-Stack
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  RabbitMQ
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Angular
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full text-sm">
                  Firebase
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#0E0E10]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#2A2A3E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                Wrist-Based Sign Language Detection
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Built a smartwatch using embedded ML and IMU sensors to
                translate ASL via ANT, featured in LiveWire Calgary.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Embedded ML
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  IMU Sensors
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  ANT
                </span>
              </div>
              <a
                href="https://github.com/Dillonsd/WBSLDC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
              >
                View Project →
              </a>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                Deep Neural Network Compression
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Developed a framework to assess neural network compression
                methods.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  PyTorch
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Research
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Neural Network Compression
                </span>
              </div>
              <a
                href="https://github.com/Dillonsd/Deep-Neural-Network-Compression"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
              >
                View Project →
              </a>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                PitStopX
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Built a mobile app for mechanics to connect with users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  React Native
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Expo
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Supabase
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                Solar Car Telemetry
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Built a telemetry website for the University of Calgary Solar
                Car Team.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  React
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  RabbitMQ
                </span>
              </div>
              <a
                href="https://telemetry.calgarysolarcar.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
              >
                View Website →
              </a>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                University of Calgary Solar Car Team Website
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Built a website for the University of Calgary Solar Car Team.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Angular
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Firebase
                </span>
              </div>
              <a
                href="https://calgarysolarcar.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
              >
                View Website →
              </a>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-white mb-2">
                PitStopX Website
              </h3>
              <p className="text-[#9CA3AF] mb-4">
                Built a website for PitStopX.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Vite
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  React
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-2 py-1 rounded-full text-xs">
                  Tailwind CSS
                </span>
              </div>
              <a
                href="https://pitstopx.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
              >
                View Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#1E1E2E]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  JavaScript
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  C
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  C++
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Python
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  C#
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Java
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  React Native
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Angular
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Node.js
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Expo
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Embedded
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  STM32
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Nordic nRF
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Ambiq
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  ESP32
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Arduino
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Zephyr
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                ML & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  PyTorch
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  TensorFlow
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Docker
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Linux
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  .NET
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Jenkins
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Databases & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  MongoDB
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Supabase
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  RabbitMQ
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  AWS
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  GCP
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Stripe
                </span>
              </div>
            </div>

            <div className="bg-[#2A2A3E] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Protocols & Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  I2C/SPI
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  ANT+
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  Automated Testing
                </span>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] px-3 py-1 rounded-full">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0E0E10]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-[#9CA3AF] mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a
                href="mailto:me@dillonsahadevan.com"
                className="bg-gradient-to-r from-[#4ADE80] to-[#A78BFA] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Email
              </a>
              <a
                href="https://github.com/Dillonsd"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#4ADE80] text-[#4ADE80] px-8 py-3 rounded-lg font-semibold hover:bg-[#4ADE80] hover:text-white transition-colors"
              >
                View GitHub
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#2A2A3E] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  Contact Info
                </h3>
                <div className="space-y-3 text-[#9CA3AF]">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Dubai, UAE</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      href="mailto:me@dillonsahadevan.com"
                      className="text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
                    >
                      me@dillonsahadevan.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+971508572572</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2A2A3E] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Dillonsd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dillon-sahadevan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#4ADE80] hover:text-[#A78BFA] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
