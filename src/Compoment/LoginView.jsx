import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const LoginView = ({onClose}) => {
  const [isSignup, setIsSignup] = useState(true); 

  const handleOpen = () => {
    onClose()
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4 z-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"> 

          {/* Header / Toggle overflow-hidden */}
          <div className='text-end pr-4 pt-2'><button className='hover:text-red-600' onClick={handleOpen}><IoMdClose size={24} /></button></div>
          <div className="p-6 pb-2">
            
            <div className='text-2xl text-center'>Login/Sign up</div>
            <p className="text-center text-gray-600 text-sm mb-4">
              Schedule an order for delivery/pickup for a date and time in the future
            </p>

            <div className="flex rounded-lg bg-gray-100 p-1.5">
              <button
                onClick={() => setIsSignup(false)}
                className={`flex-1 py-3 text-sm font-medium rounded-md transition-all ${
                  !isSignup
                    ? 'bg-white shadow text-gray-900'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setIsSignup(true)}
                className={`flex-1 py-3 text-sm font-medium rounded-md transition-all ${
                  isSignup
                    ? 'bg-white shadow text-gray-900'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="px-6 pb-6 space-y-4">

            {isSignup && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email / Phone
              </label>
              <input
                type="text"
                placeholder="Enter Email/Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <div className='flex justify-end'><button className='text-amber-700 hover:text-amber-600'>Forgot password?</button></div>
            </div>

            {isSignup && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password again"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </>
            )}

            {/* Terms / Checkbox sections */}
            {isSignup && (
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="mt-1 accent-orange-600" />
                  Lorem ipsum dolor sit amet consectetur. Pellentesque dolor diam gravida diam sit aliqua mauris a
                </label>
                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="mt-1 accent-orange-600" />
                  Lorem ipsum dolor sit amet consectetur. Pellentesque dolor diam gravida diam sit aliqua mauris a
                </label>
              </div>
            )}

            {/* Submit button */}
            <button
              className="w-full mt-2 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition-colors shadow-md"
            >
              {isSignup ? 'Create account' : 'Sign in'}
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginView;