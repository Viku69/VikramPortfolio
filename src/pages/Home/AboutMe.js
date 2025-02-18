import React from 'react'
import AboutAvatar from '../../assets/images/AboutAvatar.png'

function AboutMe() {
    return (
        <div className='flex  justify-between p-5 mx-10 my-auto max-w-screen-xxl  h-screen relative'>

            <div className='w-7/12 h-5/6  border-2 border-zinc-400 rounded-3xl flex flex-col justify-between  px-10 py-16 relative'>
                <div className='flex flex-col gap-y-10'>
                    <h1 className='text-8xl '>Hello !</h1>
                    <h1 className='text-7xl p-2  bg-gradient-to-r from-green-400 to-blue-500 z-10  rounded-3xl ' > I'm Vikram Singh</h1>
                    <h2 className='text-7xl p-2  bg-gradient-to-r from-orange-400 to-pink-500 z-10 rounded-3xl'>Software Engineer</h2>
                </div>
                <div className='flex gap-8  text-3xl text-black'>
                    <button className='bg-white border-4 border-black rounded-3xl px-10 py-4 shadow-2xl '>
                        Resume
                    </button>
                    <button className='bg-white border-4 border-black rounded-3xl px-10 py-4 shadow-2xl '>
                        Hire Me
                    </button>
                </div>

                <div
                    className='absolute z-10 h-[30vh] left-[500px] bottom-[20px]'
                    style={{
                        WebkitTransform: 'translateZ(0)', // This can help with Safari rendering issues
                        transform: 'translateZ(0)',
                    }}
                >
                    <dotlottie-player
                        src="https://lottie.host/1412555f-a4a4-4931-83ba-b37ebaf7a5c1/gqhrDPq1aj.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    >
                    </dotlottie-player>
                </div>

            </div>
            <div className='w-2/12 h-5/6  border-2 border-zinc-400 rounded-3xl relative '>
                <div className='absolute h-[20vh] right-4 top-4'>
                    <dotlottie-player src="https://lottie.host/cc7fa89e-306b-4c00-a9e0-49aa71bc9bfa/czcrgUDhRF.json" background="transparent"
                        speed="1"
                        loop autoplay>

                    </dotlottie-player>
                </div>
            </div>
            <img src={AboutAvatar} alt="Avatar About" className=' absolute w-22 h-22 right-2 top-10 py-14 m-5' />
            
           
            
        </div>
    )
}

export default AboutMe





// Responsive site 
