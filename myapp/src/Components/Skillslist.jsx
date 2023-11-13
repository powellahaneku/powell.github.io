import React from 'react'
import excelpic from './excelpic.jpg'


const skills = [
    {
      text: 'Collaborating effectively to define data requirements',
      id: 1
    },
    {
      text: 'Assisting in data collection and validation processes',
      id: 2
    },
    {
      text: 'Cleaning and transforming data for analysis',
      id: 3
    },
    {
      text: 'Conducting insightful data analysis and reporting',
      id: 4
    },
    {
      text: 'Developing data visualizations and dashboards',
      id: 5
    },
    {
      text: 'Fostering an inclusive and collaborative data team environment',
      id: 6
    },
    {
      text: 'Leveraging diverse perspectives for innovative solutions',
      id: 7
    },
    {
      text: 'Strategic financial analysis for informed decision-making',
      id: 8
    },
    {
      text: 'Mastering Python for advanced data manipulation and modeling',
      id: 9
    },
  ];
  


export const Skillslist = () => {
  return (
    <div>
        <section className="bg-white p-3 pb-5">
  <div className="container">
    <div className="row align-items-center justify-content-between ">

        <div className="col-md ">
          <img src={excelpic} alt="" className="img-fluid "></img>
        </div>

        <div className="col-md px-3">
          <p className="text-dark text-body-emphasis pb-5 "> 
           <ul className="list-group">
            <li className="list-group-item bg-dark text-white text-center">SKILLS</li>

                {skills.map(item => (
                    <li key={item.id} className="list-group-item">{item.text}</li>

                ))}
           </ul>  
          </p>

          <button className="btn btn-secondary d-md-inline ">
            
            <a href="#" className="text-decoration-none text-light"><i className="bi bi-chevron-right px-2"></i>See More</a>
            
          </button>
        </div>


    </div>
  </div>
</section>
    </div>
  )
}
