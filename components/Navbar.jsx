import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className={`text-2xl font-semibold transition-colors duration-500 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            VoiceTrackr
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('features')}
              className={`transition-colors duration-500 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900' 
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              Why Us?
            </button>
            <button 
              onClick={() => scrollToSection('whitelabel')}
              className={`transition-colors duration-500 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900' 
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              White Label
            </button>
          </div>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className={`transition-colors duration-500 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Welcome, {user.displayName || 'User'}
              </span>
              <button
                onClick={() => auth.signOut()}
                className={`transition-colors duration-500 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                } hover:text-gray-900`}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <Link 
                href="/login"
                className={`transition-colors duration-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                Login
              </Link>
              <Link 
                href="/signup"
                className="bg-[#6E3AFF] text-white px-6 py-2.5 rounded-full hover:bg-[#7E4AFF] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}