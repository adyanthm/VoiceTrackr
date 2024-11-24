import { useState, useEffect } from 'react';

export default function PricingSection() {
  const [sliderValue, setSliderValue] = useState(0.20);
  const [selectedPercentage, setSelectedPercentage] = useState(10);
  
  // Calculate profit based on current price
  const calculateProfit = (price, percentage) => {
    return (price * (1 + percentage / 100)).toFixed(2);
  };

  // Update slider background as it moves
  useEffect(() => {
    const slider = document.querySelector('input[type="range"]');
    if (slider) {
      const percentage = ((sliderValue - 0.20) / (5.00 - 0.20)) * 100;
      slider.style.setProperty('--range-progress', `${percentage}%`);
    }
  }, [sliderValue]);

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
  };

  return (
    <div className="p-8 bg-[#1A1535] rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-6">
        Clear Pricing and Rebilling
      </h2>
      
      <p className="text-gray-300 mb-8">
        Allocate minutes per client and track their usage with straightforward transparent billing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-gray-400 mb-2">Price Per Minute:</p>
          <div className="bg-[#251D40] p-4 rounded-lg">
            <span className="text-white text-xl">$ {sliderValue.toFixed(2)}</span>
          </div>
        </div>

        <div>
          <p className="text-gray-400 mb-2">Profit Per Minute:</p>
          <div className="bg-[#251D40] p-4 rounded-lg">
            <span className="text-white text-xl">
              $ {calculateProfit(sliderValue, selectedPercentage)}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-400 mb-4">Your Price:</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
          {[5, 10, 15, 20, 25].map((percentage) => (
            <button
              key={percentage}
              onClick={() => setSelectedPercentage(percentage)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedPercentage === percentage
                  ? 'bg-purple-600 text-white'
                  : 'bg-[#251D40] text-gray-300 hover:bg-[#312952]'
              }`}
            >
              {percentage}%
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min="0.20"
          max="5.00"
          step="0.01"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider-input w-full h-2 bg-[#251D40] rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-gray-400 text-sm">
          <span>$0.20</span>
          <span>$5.00</span>
        </div>
      </div>
    </div>
  );
} 