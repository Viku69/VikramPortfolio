import React from 'react'
import EducationAvatar from '../../assets/images/EducationAvatar.png'
import Title from '../../components/Title'
import EduCont from '../../components/EduCont'
import Marker from '../../components/Marker'

const EducationDetails = [
  {
    id: 1,
    EduTitle: "Bachelor of Technology ( C.S.E )",
    InstituteName: "Ajay Kumar Garg Engineering College",
    Time: "2021-25",
    Marks: "80%"
  },
  {
    id: 2,
    EduTitle: "INTERMEDIATE",
    InstituteName: "Maharishi Vidya Mandir School",
    Time: "2019-20",
    Marks: "93%"
  },
  {
    id: 3,
    EduTitle: "HIGH SCHOOL",
    InstituteName: "Maharishi Vidya Mandir School",
    Time: "2017-18",
    Marks: "90.8%"
  },
]

function Education() {
  return (
    <div>
      <div className='flex flex-row gap-x-[35vw] p-5 mx-10 my-auto max-w-screen-xxl'>
        <div className="h-20 w-20 bg-white rounded-full border-2 border-black overflow-hidden ">
          <img src={EducationAvatar} alt="EducationAvatar" className=' h-22 w-22  ' />
        </div>
        <Title title="Education" />
      </div>
      <div className='flex flex-col gap-x-[15vw] gap-y-[5vh] p-5 mx-10 my-auto max-w-screen-xxl' >
        {EducationDetails.map((data) => {
          return (
            <div
              key={data.id}
              className={`flex flex-row ${data.id % 2 === 0 ? 'justify-end' : 'justify-start'}`}
            >
              {data.id % 2 === 0 ? (
                <>
                  <EduCont Edutitle={data.EduTitle} InstituteName={data.InstituteName} Time={data.Time} Marks={data.Marks} />
                  <Marker />
                </>
              ) : (
                <>
                  <Marker />
                    <EduCont Edutitle={data.EduTitle} InstituteName={data.InstituteName} Time={data.Time} Marks={data.Marks} />
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education






// Responsive website 
