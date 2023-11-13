import React from 'react'



const Showcase = () => {
  return (
    <div>
        <section className="bg-white text-light-emphasis p-5 text-center text-sm-start" section="cards">
            <div className="container pt-5">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div>
                        <h1>
                        Welcome to My <span className="text-success">Portfolio</span>
                        </h1>

                        <p className="lead my-4"> <span className=" text-bg-warning">This page is still under construction</span>  Hello there! Welcome to my portfolio. This sample 
                        web app created by yours truly. Feel free to check out my projects.
                        I will add on to this as I go.</p>

                        <div className=" align-bottom ">
                            <button className="btn btn-primary btn-lg"> 
                            <a href="#" className="text-decoration-none text-light">See Projects</a>
                            </button>
                        </div>
                    </div>
                <div>
                    <img className="img-fluid w-50 d-small-none " src="movingdata.gif" alt="" ></img>

                </div>
            </div>
            </div>
        </section>
    </div>);
};

export default Showcase;
