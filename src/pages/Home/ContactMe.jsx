import React from 'react'
import ContactAvatar from '../../assets/images/ContactAvatar.png'
import Title from '../../components/Title'
import ProfileCont from '../../components/ProfileCont'

function ContactMe() {
    return (
        <div className='my-20'>
            <div className='flex flex-row gap-x-[35vw] p-5 mx-10 my-auto max-w-screen-xxl'>
                <div className="h-20 w-20 bg-white rounded-full border-2 border-black overflow-hidden ">
                    <img src={ContactAvatar} alt="EducationAvatar" className=' h-22 w-22  ' />
                </div>
                <Title title="Contact Me" />
            </div>
            <div className='ContactMain flex flex-row  '>
                <div className='ContactMeLeft'>
                    <h4>Profiles</h4>
                    <ProfileCont
                        imgSrc="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/E802/production/_89649395_instagram_logo_976.jpg"
                        link="https://gmail.com"
                    />

                </div>
                <div className='flex h-[100%] w-2 bg-black '/>
                <div className='ContactMeRight'>

                </div>
            </div>
        </div>
    )
}

export default ContactMe