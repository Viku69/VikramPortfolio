import React from 'react'
import ThreeDot from './ThreeDot'

function ProfileCont({ imgSrc, link }) {
    

    const handleProfileClick = (link) => {
        return () => {
            window.open(link, "_blank");
        };
    };

    

  return (
      <div>
          <ThreeDot />
          <div className='flex justify-center items-center gap-3  '
          onClick={handleProfileClick(link)}>
              <div className='flex justify-center h-full w-[50%] items-center  border-black rounded-full'>
                  <img src={imgSrc} alt="ProfileLink" className='h-[100px] w-[100px]' />
              </div>
          </div>
    </div>
  )
}

export default ProfileCont