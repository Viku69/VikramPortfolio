import React from 'react';
import ExperienceAvatar from '../../assets/images/ExperienceAvatar.png';
import ExpCard from '../../components/ExpCard';
import CahsCryImg from '../../assets/images/cashcry1.png'
import EmbetterImg from '../../assets/images/EmbetterLogo.png'
import MlcoeImg from '../../assets/images/Mlcoe.jpeg'

const ExperienceDetails = [
    {
        id: 1,
        role: "App Developer",
        imageComponent: <img src={EmbetterImg} alt="EmbetterImage" />,
        company: "Embetter Technologies"
    },
    {
        id: 2,
        role: "iOS Developer",
        imageComponent: <img src={CahsCryImg} alt="CashcryImage"  />,
        company: "CashC₹y",
    },
    
    {
        id: 3,
        role: "Full Stack Developer",
        imageComponent: <img src={MlcoeImg} alt="MlcoeImage"  />,
        company: "MLCOE"
    },
];

function Experience() {
    return (
        <div className='my-20'>
            <div className='flex flex-row gap-x-[5vw] p-5 mx-10 my-auto max-w-screen-xxl'>
                <div className='flex flex-col h-[100vh] w-[10vw] bg-black items-center p-10 relative rounded-md'>
                    <div className="z-10 mb-10">
                        <div className="h-20 w-20 bg-black rounded-full border-2 border-white overflow-hidden">
                            <img src={ExperienceAvatar} alt="Experience Avatar" className='h-20 w-20' />
                        </div>
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center '>
                        <h1 className='text-white text-[8vw] transform -rotate-90 whitespace-nowrap text-center'>
                            Experience
                        </h1>
                    </div>
                </div>

                {/* Horizontal Scrollable Cards */}
                <div className='flex overflow-x-auto whitespace-nowrap w-full items-center'>
                    {ExperienceDetails.map((data) => {
                        return (
                            <div key={data.id} className="flex-none mx-5">
                                <ExpCard Role={data.role} ImageComponent={data.imageComponent} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Experience;

