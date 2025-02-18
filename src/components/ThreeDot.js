import React from 'react'

function ThreeDot() {
  return (
      <div>
          <div className='flex gap-1'>
              <div className="h-5 w-5 bg-red-500 rounded-full border-2 border-black overflow-hidden ">
              </div>
              <div className="h-5 w-5 bg-yellow-500 rounded-full border-2 border-black overflow-hidden ">
              </div>
              <div className="h-5 w-5 bg-green-500 rounded-full border-2 border-black overflow-hidden ">
              </div>
          </div>
      </div>
  )
}

export default ThreeDot