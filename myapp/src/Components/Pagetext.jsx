import React from 'react'
import datapic from './datapic.png'

// Only two slides intended for this page

const content = [
  {
    heading: 'Unlock the Power of Diverse Data Teams',
    photo: datapic,
    text: "Elevate your data team with my expertise. As a seasoned professional, I bring a unique blend of technical prowess and collaborative spirit. By fostering an inclusive environment, I empower teams to innovate, ensuring that diverse perspectives drive exceptional results. Let's revolutionize your data strategy together.",
    link: ''
  },
  {
    heading: 'Mastering Finance and Python for Business Success',
    photo: 'https://img.freepik.com/premium-vector/sales-performance-concept-with-people-scene-woman-man-analyzes-financial-data-makes-presentation-with-business-statistics-profit-vector-illustration-with-characters-flat-design-web_9209-9831.jpg?w=1060',
    text: "Position yourself for success with my expertise in finance and advanced Python skills. I bring a strategic mindset to financial analysis, leveraging data to make informed decisions that drive business growth. Ready to make a lasting impact on your organization's bottom line.",
    link: ''
  }
];




export const Pagetext = () => {
  return (
    <div>            
        <section className="bg-secondary p-3">
            <div className="container"> 
            <div className="row align-items-center justify-content-between ">
                                <div className="col-md ">
                                <img src={content[0].photo} alt="" className="img-fluid "></img>
                                </div>

                                    <div className="col-md px-3">
                                    <h3 className="text-md text-bold text-light "> {content[0].heading}</h3>

                                    <p className="lead text-light"> {content[0].text} </p>

                                    <button className="btn btn-light d-md-inline ">
                                        
                                        <a href={content[0].link} className="text-decoration-none text-dark"><i className="bi bi-chevron-right px-2"></i>See More</a>
                                        
                                    </button>
                                </div>
                            
                        </div>
            </div>
        </section>  

<section className="bg-white p-3 pt-5">
  <div className="container">
    <div className="row align-items-center justify-content-between ">

       
        <div className="col-md px-3">
          <h3 className="text-md text-bold "> {content[1].heading}</h3>

          <p className="lead">
          {content[1].text}
          </p>

         
          
          <button className="btn btn-secondary d-md-inline ">
            
            <a href={content[1].link} className="text-decoration-none text-light"><i className="bi bi-chevron-right px-2"></i>See More</a>
            
          </button>
        </div>

        <div className="col-md d-medium-none">
          <img src={content[1].photo} alt="" className="img-fluid "></img>
        </div>

    </div>
  </div>
</section>
    </div>
  )
}
