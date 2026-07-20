import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import logo from "../../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Faculties", href: "#faculties" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Achievements", href: "#results" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white relative">
      <Container size="wide">
        <nav className="flex h-20 items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center gap-5">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Apex Academy Logo"
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="leading-none">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                  Apex
                  <span className="text-blue-600">Academy</span>
                </h1>

                <p className="text-xs font-medium tracking-wide text-slate-500">
                  Learn • Grow • Succeed
                </p>
              </div>
            </a>

            {/* Desktop Courses Button */}
            <a
              href="#courses"
              className="hidden items-center rounded-full border border-blue-100 bg-blue-50 px-6 py-2 text-base font-bold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white md:inline-flex"
            >
              Courses
            </a>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-base font-semibold text-slate-700 transition-all duration-300 hover:text-blue-600 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-900 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="relative h-7 w-7">
              <Menu
                size={26}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                size={26}
                className={`absolute transition-all duration-300 ${
                  isOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>

        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-3 opacity-0 invisible pointer-events-none"
        }`}
      >
        <Container size="wide">
          <div className="flex flex-col gap-5 py-5">

            <a
              href="#courses"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-50 px-4 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              Courses
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Contact Us
            </a>

          </div>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;
