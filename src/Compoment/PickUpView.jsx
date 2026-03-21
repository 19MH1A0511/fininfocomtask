import React, { useState } from 'react';

const ScheduleModal = ({ onClose, onSchedule }) => {
  const [mode, setMode] = useState('Pickup'); // 'Pickup' or 'Delivery'
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null); // for delivery

  const dates = ['Today', 'Tomorrow', 'Mon', 'Tue', 'Wed'];

  const timeSlots = {
    Today: ['8:15 - 8:55', '9:15 - 10:15', '10:15 - 11:15', '12:15 - 13:15', '14:15 - 15:15', '15:15 - 16:15'],
    Tomorrow: ['11:00 - 12:00', '13:00 - 14:00', '17:00 - 18:30', '19:00 - 20:00', '20:30 - 21:30'],
    Mon: ['12:00 - 14:00', '17:30 - 21:00'],
    Tue: ['11:30 - 14:30', '17:00 - 22:00'],
    Wed: ['12:00 - 15:00', '18:00 - 21:30'],
  };

  // Mock addresses (in real app → from user profile / geolocation / Google Places)
  const addressSuggestions = [
    { id: 1, label: 'West gorgie parks', details: 'West gorgie parks, Edinburgh' },
    { id: 2, label: '38 West gorgie parks', details: '38 West gorgie parks, £34' },
    { id: 3, label: '39 West gorgie parks', details: '39 West gorgie parks' },
    { id: 4, label: '42 West gorgie parks', details: '42 West gorgie parks' },
  ];

  const availableSlots = timeSlots[selectedDate] || [];

  const handleSchedule = () => {
    if (selectedTime && (mode === 'Pickup' || selectedAddress)) {
      const info = {
        mode,
        date: selectedDate,
        time: selectedTime,
        ...(mode === 'Delivery' && { address: selectedAddress }),
      };
      onSchedule?.(info);
      onClose?.();
    }
  };

  const DeliveryContent = () => (
    <div className="p-5 overflow-y-auto flex-1 space-y-6">
      {/* Address input + suggestions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter delivery address
        </label>
        <input
          type="text"
          placeholder="Q. EH6 5LT or street name..."
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
          // In real app: onChange → search API
        />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-600">Suggested addresses</p>
        {addressSuggestions.map((addr) => (
          <button
            key={addr.id}
            onClick={() => setSelectedAddress(addr)}
            className={`w-full p-4 text-left rounded-xl border transition flex flex-col ${
              selectedAddress?.id === addr.id
                ? 'border-orange-600 bg-orange-50'
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span className="font-medium">{addr.label}</span>
            <span className="text-sm text-gray-500">{addr.details}</span>
            {selectedAddress?.id === addr.id && (
              <span className="text-orange-600 mt-1 text-xs">✓ Selected</span>
            )}
          </button>
        ))}
      </div>

      {/* Date tabs - same as pickup */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-3">Date preference</p>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => {
                setSelectedDate(date);
                setSelectedTime(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium flex-shrink-0 transition ${
                selectedDate === date
                  ? 'bg-orange-600 text-white shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>

      {/* Time slots */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-3">Time preference</p>
        <div className="space-y-3">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`w-full p-4 text-left rounded-xl border transition flex justify-between items-center ${
                  selectedTime === slot
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{slot}</span>
                {selectedTime === slot && <span className="text-orange-600">✓</span>}
              </button>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">
              No delivery slots available for this day
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const PickUpContent = () => (
    <div className="p-5 overflow-y-auto flex-1">
      <div className="flex gap-2 overflow-x-auto pb-4">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => {
              setSelectedDate(date);
              setSelectedTime(null);
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium flex-shrink-0 transition ${
              selectedDate === date
                ? 'bg-orange-600 text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {availableSlots.length > 0 ? (
          availableSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`w-full p-4 text-left rounded-xl border transition flex justify-between items-center ${
                selectedTime === slot
                  ? 'border-orange-600 bg-orange-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{slot}</span>
              {selectedTime === slot && <span className="text-orange-600">✓</span>}
            </button>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            No pickup slots available for this day
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Schedule a {mode === 'Delivery' ? 'delivery' : 'pick-up'}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Schedule order for {mode === 'Delivery' ? 'delivery' : 'pickup'} at a date & time
          </p>
        </div>

        {/* Mode toggle */}
        <div className="px-5 pt-4 flex gap-3 border-b">
          <button
            className={`flex-1 py-3 px-4 rounded-t-xl font-medium text-center transition shadow ${
              mode === 'Delivery'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => {
              setMode('Delivery');
              setSelectedTime(null); // reset time
            }}
          >
            Delivery
          </button>
          <button
            className={`flex-1 py-3 px-4 rounded-t-xl font-medium text-center transition shadow ${
              mode === 'Pickup'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => {
              setMode('Pickup');
              setSelectedTime(null);
            }}
          >
            Pickup
          </button>
        </div>

        {/* Dynamic content based on mode */}
        {mode === 'Delivery' ? <DeliveryContent /> : <PickUpContent />}

        {/* Footer */}
        <div className="p-5 border-t flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSchedule}
            disabled={
              !selectedTime || (mode === 'Delivery' && !selectedAddress)
            }
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              selectedTime && (mode === 'Pickup' || selectedAddress)
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;