import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, Search } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function Header({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 lg:top-[33px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#100317]/95 backdrop-blur-md shadow-lg shadow-black/50 py-2 border-b border-white/10"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/assets/logo-brand.png"
              alt="Trusting Brains"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/logo-brand.png";
              }}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-7">
            {siteData.navigation.slice(0, 4).map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-tb-purple to-tb-orange rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3.5">
            {/* Desktop CTA Button */}
            <Link
              to="/contact-us"
              className="hidden sm:inline-flex items-center gap-3 bg-gradient-to-r from-tb-purple to-tb-purpleDark text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Contact Us</span>
              <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={onOpenMobileMenu}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
