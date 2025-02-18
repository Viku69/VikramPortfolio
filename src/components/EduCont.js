import React from 'react'
import ThreeDot from './ThreeDot'

function EduCont(props) {
  return (
    <div className='relative flex flex-col w-3/6  justify-center items-center border border-black rounded-lg p-5 mx-10 my-auto max-w-screen-xxl'>
      {/* ThreeDot in the top-left corner */}
      <div className='absolute top-0 left-0 p-5'>
        <ThreeDot />
      </div>
      {/* Centered Title */}
      <div className='w-full text-center'>
        <h1 className='relative font-extrabold text-2xl'>
          {props.Edutitle}
          <span className='block w-2/4 border-b-2 border-black mx-auto mt-2'></span>
        </h1>
      </div>
      <div className='flex flex-row justify-evenly mt-5'>
        <div className='flex flex-col w-11/12 justify-center gap-y-5 items-center p-20 mx-10 my-auto border border-black rounded-lg shadow-md shadow-black'>
          <h2 className='text-center font-bold '>{props.InstituteName}</h2>
          <p className=' text-center font-bold'>( {props.Time} )</p>
        </div>
        <div className='flex flex-col w-6/12 border border-black rounded-lg shadow-md shadow-black justify-center items-center p-10'>
          <h2 className='text-2xl'>MARKS</h2>
          <p className='text-center font-serif font-bold'>{props.Marks}</p>
        </div>
      </div>
    </div>
  )
}

export default EduCont




// Fully Responsive 

// import React from 'react'
// import ThreeDot from './ThreeDot'

// function EduCont(props) {
//   return (
//     <div className='relative flex flex-col w-full lg:w-3/6 justify-center items-center border border-black rounded-lg p-5 mx-4 lg:mx-10 my-6 max-w-screen-xxl'>
//       {/* ThreeDot in the top-left corner */}
//       <div className='absolute top-2 left-2 lg:top-0 lg:left-0 p-2 lg:p-5'>
//         <ThreeDot />
//       </div>
//       {/* Centered Title */}
//       <div className='w-full text-center'>
//         <h1 className='relative font-extrabold text-lg md:text-2xl'>
//           {props.Edutitle}
//           <span className='block w-1/2 border-b-2 border-black mx-auto mt-1 md:mt-2'></span>
//         </h1>
//       </div>
//       <div className='flex flex-col md:flex-row justify-evenly mt-5 w-full'>
//         <div className='flex flex-col w-full md:w-6/12 justify-center gap-y-5 items-center p-8 md:p-20 mx-4 md:mx-10 my-auto border border-black rounded-lg shadow-md shadow-black'>
//           <h2 className='text-center font-bold'>{props.InstituteName}</h2>
//           <p className='text-center font-bold'>({props.Time})</p>
//         </div>
//         <div className='flex flex-col w-full md:w-5/12 border border-black rounded-lg shadow-md shadow-black justify-center items-center p-5 md:p-10 mt-5 md:mt-0'>
//           <h2 className='text-lg md:text-2xl'>MARKS</h2>
//           <p className='text-center font-serif font-bold'>{props.Marks}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EduCont

