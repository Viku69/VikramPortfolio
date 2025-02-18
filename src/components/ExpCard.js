import React from 'react'

function ExpCard(props) {
  return (
      <div>
          <div className='flex flex-col w-[50vw] h-[50vh] border border-black rounded-3xl shadow-2xl justify-between p-10'>
              <div className='w-32 h-22 border border-black rounded-3xl p-5'></div>
              <div className=''></div>
              <div className='flex flex-row justify-between items-center '>
                  <h1 className='text-center font-extrabold text-4xl'>{props.Role}</h1>
                  <div className='w-32 h-32 border border-black rounded-2xl overflow-hidden'>
                      {/* Render the passed ImageComponent */}
                      {props.ImageComponent ? (
                          props.ImageComponent
                      ) : (
                          <div className="h-20 w-20 bg-gray-200 rounded-2xl flex items-center justify-center">
                              {/* Placeholder content if no image is passed */}
                              <span>No Image</span>
                          </div>
                      )}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ExpCard