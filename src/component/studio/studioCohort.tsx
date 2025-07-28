"use client";
import React from 'react';

// Studio Cohort Component
const StudioCohortSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-4">
            Inside the <span className="text-[#1a2b47]">ReCreax</span>
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-[#1a2b47] mb-6">
            Studio Cohort <span className="text-4xl">📊</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A hands-on product sprint designed to give you real experience building useful things with a team.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Left - Join a Startup Building Sprint */}
          <div className="bg-gray-100 rounded-2xl p-8 lg:col-span-2 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-blue-500 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2b47] mb-4">Join a Startup-Building Sprint</h3>
              <p className="text-gray-600 max-w-lg">
                Enter a 3-month program working on early-stage product ideas from the ReCreax Studio.
              </p>
            </div>
            <div className="ml-8">
              <div className="bg-white rounded-lg p-6 shadow-lg w-48">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1">
                      <div className="w-full h-2 bg-green-400 rounded"></div>
                      <div className="w-3/4 h-2 bg-green-300 rounded"></div>
                      <div className="w-1/2 h-2 bg-green-200 rounded"></div>
                      <div className="w-1/4 h-2 bg-green-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left - Own Product Features */}
          <div className="bg-pink-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-8 h-1 bg-pink-500 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#1a2b47] mb-4">Own Product Features</h3>
            <p className="text-gray-600 mb-8">
              Contribute to real deliverables that go into live minimum viable products.
            </p>
            
            {/* Mock Interface */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Linear Issue</span>
                    <span className="text-xs text-gray-500">Add webhook for testing</span>
                    <span className="text-xs text-gray-500">changed to</span>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-xs">Done</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">/Landing Page</span>
                  </div>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Released</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">/Mobile App</span>
                  </div>
                  <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded">In Development</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">/Dashboard</span>
                  </div>
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">MVP V3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Collaborate in Cohorts */}
          <div className="bg-yellow-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
              <div className="w-8 h-1 bg-yellow-500 rounded"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </div>
            <h3 className="text-2xl font-bold text-[#1a2b47] mb-4">Collaborate in Cohorts</h3>
            <p className="text-gray-600 mb-8">
              Work across roles in a guided team environment that simulates how real startups execute.
            </p>
            
            {/* Mock Team Interface */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="bg-green-100 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-4">Product Manager</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                      <span className="text-sm font-medium">Daniel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">James Ito</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-gray-800 rounded-full text-white text-xs flex items-center justify-center">?</div>
                        <div className="w-4 h-4 bg-gray-800 rounded-full text-white text-xs flex items-center justify-center">?</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                      <span className="text-sm font-medium">Aderemi</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                      <span className="text-sm font-medium">James Ito</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                      <span className="text-sm font-medium">Mark Dele</span>
                    </div>
                    <div className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                      Waiting Final
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Full Width - Earn Certification */}
          <div className="bg-green-100 rounded-2xl p-8 lg:col-span-2 flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-6 h-1 bg-gray-300 rounded"></div>
                <div className="w-8 h-1 bg-green-500 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2b47] mb-4">Earn Certification and Recommendations</h3>
              <p className="text-gray-600 max-w-lg">
                Receive validation of your work with a certificate and recommendation from a product lead.
              </p>
            </div>
            <div className="ml-8">
              <div className="bg-white rounded-lg p-6 shadow-lg transform -rotate-3">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded transform rotate-45"></div>
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-teal-600 mb-2">ReCreax</div>
                  <div className="text-xs text-gray-600 mb-2">CERTIFICATE OF COMPLETION</div>
                  <div className="text-xs text-gray-600 mb-4">PRESENTED TO</div>
                  <div className="text-sm font-bold text-gray-800 mb-4">Your name goes here</div>
                  <div className="text-xs text-gray-600 mb-2">
                    has successfully completed a 3-month product
                  </div>
                  <div className="text-xs text-gray-600 mb-4">
                    sprint with the ReCreax Studio
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Date</span>
                    <span>Signature</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StudioCohortSection;