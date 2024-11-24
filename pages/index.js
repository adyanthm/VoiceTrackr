import Link from "next/link";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import WhiteLabelSection from "@/components/WhiteLabelSection";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-[#0D0B21] relative overflow-hidden">
        {/* Enhanced background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B21] via-[#130F35] to-[#1A1145]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-blue-900/40" />
        <div className="absolute top-0 -left-4 w-full md:w-3/4 h-full bg-gradient-to-r from-purple-500/10 to-transparent transform rotate-12 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-full md:w-3/4 h-full bg-gradient-to-l from-blue-500/10 to-transparent transform -rotate-12 blur-3xl animate-pulse" />

        {/* Content */}
        <div className="relative">
          <Navbar />

          {/* Enhanced Hero Section */}
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                          pt-28 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-36"
          >
            <div className="text-center max-w-5xl mx-auto">
              {/* Enhanced typography with animation */}
              <div className="animate-fade-in">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white 
                             mb-6 sm:mb-8 md:mb-10 tracking-tight leading-none"
                >
                  Seamless
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r 
                                 from-purple-400 via-purple-300 to-blue-400 
                                 animate-gradient-x inline-block ml-4"
                  >
                    AI-Powered
                  </span>
                </h1>

                <h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                             text-transparent bg-clip-text bg-gradient-to-r 
                             from-purple-400 to-blue-400 mb-8 sm:mb-10 md:mb-12"
                >
                  Voice Communication
                </h2>
              </div>

              {/* Enhanced description */}
              <p
                className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto 
                          mb-10 sm:mb-12 md:mb-14 leading-relaxed px-4 
                          animate-fade-in-delayed"
              >
                Build a no-code AI phone call system with our AI voice agents:
                <br className="hidden sm:block" />
                stop missing calls and start converting more leads
              </p>

              {/* Enhanced CTA button */}
              <div className="flex justify-center px-4 animate-fade-in-delayed">
                <Link
                  href="/signup"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center
                           bg-gradient-to-r from-purple-600 to-blue-600 
                           text-white px-8 sm:px-10 py-4 sm:py-5 
                           rounded-lg text-lg sm:text-xl font-medium
                           transition-all duration-300 ease-in-out
                           hover:from-purple-500 hover:to-blue-500
                           hover:scale-105 hover:shadow-xl
                           hover:shadow-purple-500/20"
                >
                  <span>Get Started for Free</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Enhanced grid overlay */}
          <div
            className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 sm:opacity-20 
                       [mask-image:linear-gradient(to_bottom,white,transparent)]"
          />

          {/* Enhanced grain texture */}
          <div
            className="absolute inset-0 bg-[url('/noise.png')] opacity-5 sm:opacity-10 
                       mix-blend-overlay pointer-events-none"
          />
        </div>
      </div>

      <FeaturesSection />
      <WhiteLabelSection />
    </>
  );
}
