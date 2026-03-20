import React, { useState } from 'react';


const DetailView = ({ onClose, restaurant }) => {
  const [activeCategory, setActiveCategory] = useState('Burger');

  // Dummy categories (you can make dynamic)
  const categories = ['Burger menu', 'Pizza', 'Indian', 'Fries', 'Drinks'];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex flex-col z-50 overflow-hidden">
      {/* Full-screen scrollable content */}
      <div className="flex-1 overflow-y-auto bg-white">
        {/* Hero / Cover Image */}
        <div className="relative h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop"
            alt="Food spread"
            className="w-full h-full object-cover"
          />
          {/* Optional close button */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              X
            </button>
           )} 
        </div>

        {/* Restaurant Info */}
        <div className="p-5 md:p-6 border-b">
          <h1 className="text-2xl md:text-3xl font-bold">Grafterr Food</h1>
          <p className="text-gray-600 mt-1">
            Id amet lorem ipsum habitant lorem nulla. Lorem ipsum dolor sit amet...
          </p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
            <div>107-109 Fountainbridge, Edinburgh EH3 9QH</div>
            <div>Call us: 07424 284185</div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium">
              Delivery
            </button>
            <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-full font-medium">
              Pickup
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p>£4.29 Delivery • Free over £20</p>
            <p>Open until 10:55 pm</p>
            <p>Scheduled time: 24 Nov 17:45–17:55</p>
          </div>
        </div>

        {/* Featured Items (horizontal scroll) */}
        <div className="p-5 md:p-6">
          <h2 className="text-xl font-bold mb-4">Featured ★</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {Array(6).fill(0).map((_, i) => (
              <div
                key={i}
                className="min-w-[220px] snap-start bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop`}
                  alt="Kebab"
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-semibold">Kebab with chips</h3>
                  <p className="text-orange-600 font-medium mt-1">£3.30</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-5 md:px-6">
          <div className="flex overflow-x-auto gap-3 pb-4 border-b">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition ${
                  activeCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Section - Burger example */}
        <div className="p-5 md:p-6">
          <h2 className="text-xl font-bold mb-4">{activeCategory}</h2>
          <div className="space-y-6">
            {['Burger', 'Southern Burger', 'Vegetable deluxe', 'Triple cheese burger', 'Bacon mayo chicken', 'Bacon double cheeseburger'].map((name, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b pb-4 last:border-b-0"
              >
                <div>
                  <h3 className="font-medium">{name}</h3>
                  <p className="text-orange-600 font-semibold mt-1">
                    £{ (3.99 + i * 0.40).toFixed(2) }
                  </p>
                </div>
                <button
                  className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-700"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cart Bar */}
      <div className="bg-white border-t shadow-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-xl font-bold">£13.12</p>
        </div>
        <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-orange-700 flex items-center gap-2">
          View basket (2) →
        </button>
      </div>
    </div>
  );
};

export default DetailView;