import React from 'react'

function Title({ title,

}) {
  return (
    <div className='flex '>
      <h1 className='flex justify-center items-center '>
        <p className='font-bold text-5xl'>{title} </p>
      </h1>
    </div>
  )
}

export default Title