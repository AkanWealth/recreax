import React from 'react';
import { Upload, Calendar, Users } from 'lucide-react';

const MentoringSteps: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#DBF1F9] to-teal-50 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-green-400 rounded"></div>
            <div className="w-6 h-1 bg-green-300 rounded"></div>
            <div className="w-4 h-1 bg-green-200 rounded"></div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900">4 steps</h1>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">to start mentoring</h2>
      </div>

      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Step 1: Apply to Join */}
        <div className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden">
          <div className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6">
            1
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Apply to Join</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            Complete a quick form to tell us about your background, focus areas, and mentoring goals.
          </p>

          {/* Form mockup */}
          <div className="bg-purple-200 rounded-2xl p-6 relative">
            <div className="bg-white rounded-xl p-6">
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-2">CV Upload*</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Drag & drop files or Browse</p>
                  <p className="text-xs text-gray-400">Supports JPG, PNG & PDF formats</p>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 block mb-2">LinkedIn Profile*</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Step 2: Get Approved & Matched */}
        <div className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden">
          <div className="bg-[#F6FFCC] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6">
            2
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Get Approved & Matched</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            We&apos;ll review your profile and notify you if there&apos;s a fit. You&apos;ll also get access to your mentor dashboard.
          </p>

          {/* Approval notification mockup */}
          <div className="bg-yellow-200 rounded-2xl p-6">
            <div className="text-center">
              <div className="bg-orange-400 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-300 to-red-300 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-white font-bold">!</div>
              </div>
              
              <h4 className="font-bold text-gray-800 mb-2">Application Approved!</h4>
              <p className="text-sm text-gray-600">You can now proceed to your dashboard.</p>
            </div>
          </div>
        </div>

        {/* Step 3: Set Your Calendar */}
        <div className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden">
          <div className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6">
            3
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Set Your Calendar</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            Sync your availability through Calendar so mentees can book 1-on-1 time when it works best for you.
          </p>

          {/* Calendar mockup */}
          <div className="bg-purple-200 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-800">May 2025</h4>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-xs font-medium text-center py-1 bg-yellow-300 text-gray-700 rounded">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 4;
                  const isCurrentMonth = day > 0 && day <= 31;
                  const isSelected = day === 31;
                  
                  return (
                    <div
                      key={i}
                      className={`
                        h-8 flex items-center justify-center text-xs rounded
                        ${isCurrentMonth 
                          ? (isSelected 
                              ? 'bg-blue-600 text-white font-bold' 
                              : 'bg-cyan-100 text-gray-700 hover:bg-cyan-200'
                            )
                          : 'text-gray-300'
                        }
                      `}
                    >
                      {isCurrentMonth ? day : ''}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs text-gray-600">3 participants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Start Mentoring */}
        <div className="bg-[#8BD7E4] rounded-3xl p-8 relative overflow-hidden">
          <div className="bg-yellow-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-6">
            4
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Start Mentoring</h3>
          <p className="text-white/90 mb-8 leading-relaxed">
            You&apos;ll get booking alerts and reminders. Show up, share honestly, and guide someone forward.
          </p>

          {/* Meeting details mockup */}
          <div className="bg-green-200 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4">
              <h4 className="font-bold text-gray-800 mb-4">Meeting Details</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm font-medium">Interview Prep</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div className="text-sm">
                    <span className="font-medium">Tue 19 March</span>
                    <span className="text-gray-500 ml-4">Tue 19 March</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 text-gray-500">@</div>
                  <span className="text-sm">emily.mason@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 text-gray-500">#</div>
                  <span className="text-sm text-blue-600">https://meet.google.com/xyz-prime-de</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Participants(s)</span>
                    <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">JD</span>
                    </div>
                    <span className="text-sm">James Davis</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gray-800 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">SJ</span>
                </div>
                <div className="flex-1">
                  <div className="text-yellow-400 text-xs font-medium">BeGreat Mentoring Reminder</div>
                  <div className="text-white text-sm">Your mentorship session with James Smith is in 30 mins</div>
                </div>
                <span className="text-xs text-gray-400">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentoringSteps;