import React from 'react'
import SkillsAvatar from "../../assets/images/SkillsAvatar.png";
import Title from '../../components/Title';


const skills = {

    "Frontend": ["Figma", "HTML", "CSS", "JavaScript", "React", "Figma", "HTML", "CSS", "JavaScript", "React"],
    "Backend": ["Node.js", "Python", "Express", "FastApi"],
    "Database": ["MongoDB", "MySql"]
};
function Skill() {
    return (
        <div>
            <div className='flex flex-row gap-x-[35vw] p-5 mx-10 my-auto max-w-screen-xxl'>
                <div className="h-20 w-20 bg-white rounded-full border-2 border-black overflow-hidden ">
                    <img src={SkillsAvatar} alt="EducationAvatar" className=' h-22 w-22  ' />
                </div>
                <Title title="Skills" />
            </div>
            <div className='flex flex-col gap-x-[35vw] p-5 mx-10 my-auto max-w-screen-xxl'>
                <div>
                    <h1>Frontend Development</h1>
                    <div className="flex flex-row flex-wrap h-[20%] w-[100%]  ">
                        {skills.Frontend.map((skill) => {
                            return (
                                <div key={skill} className="flex flex-col h-[60%] w-[10%] items-center border-2 border-black mr-4 mb-2
                                rounded-xl ">
                                    <div className="h-[30%] w-full border-2 border-black rounded-lg ">
                                        <img src={SkillsAvatar} alt="EducationAvatar" className="" />
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h1>Backend Development</h1>
                    <div className="flex flex-row flex-wrap h-[20%] w-[100%] ">
                        {skills.Backend.map((skill) => {
                            return (
                                <div key={skill} className="flex flex-col h-[60%] w-[10%] items-center border-2 border-black mr-4 mb-2
                                rounded-xl ">
                                    <div className="h-[30%] w-full border-2 border-black rounded-lg ">
                                        <img src={SkillsAvatar} alt="EducationAvatar" className="" />
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h1>Databases</h1>
                    <div className="flex flex-row flex-wrap h-[20%] w-[100%] ">
                        {skills.Database.map((skill) => {
                            return (
                                <div key={skill} className="flex flex-col h-[60%] w-[10%] items-center border-2 border-black mr-4 mb-2
                                rounded-xl ">
                                    <div className="h-[10%] w-full border-2 border-black rounded-lg ">
                                        <img src={SkillsAvatar} alt="EducationAvatar" className="" />
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill