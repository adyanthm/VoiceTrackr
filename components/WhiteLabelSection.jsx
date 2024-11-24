import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingSection from './PricingSection'; // Import PricingSection

export default function WhiteLabelSection() {
  return (
    <section className="py-24 bg-[#0D0B21] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Agency Badge */}
        <div className="flex justify-center mb-8">
          <div className="px-4 py-2 bg-opacity-20 bg-purple-500 rounded-full text-white flex items-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path 
                fillRule="evenodd" 
                d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>Agency</span>
          </div>
        </div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Resell VoiceTrackr White Label
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Management Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1535] rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Simple Customer Management
            </h3>
            <p className="text-gray-300 mb-8">
              Invite and manage your clients effortlessly from one easy-to-use dashboard.
            </p>

            <div className="flex space-x-4 mb-8">
              <button className="flex items-center space-x-2 px-4 py-2 bg-[#2a2545] rounded-lg text-white hover:bg-[#352e5a] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                </svg>
                <span>Generate Invite Link</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-[#2a2545] rounded-lg text-white hover:bg-[#352e5a] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Email Invitation</span>
              </button>
            </div>

            {/* Client List */}
            <div className="space-y-4">
              {['Darlene Robertson', 'Arlene McCoy', 'Savannah Nguyen'].map((name, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#2a2545] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white">{name}</div>
                      <div className="text-gray-400 text-sm">{name.toLowerCase().replace(' ', '.')}@synthflow.com</div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card - Using PricingSection component */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PricingSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}