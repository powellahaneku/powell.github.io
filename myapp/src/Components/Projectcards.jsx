import React from 'react'
import { projects } from './Projects'

export const Projectcards = () => {
  return (
    <div>
        <div className="bg-white p-5 ">
            <div className="container text-center ">
            <div className="row d-md-flex ">
                {projects.map(item => (
                    <div className="col-md m-2" key={item.id}>
                                    <div className={item.classColor}>
                                    <div className="card-img pt-3">
                                    <div className="h1"><i className={item.classIcon}></i></div>
                                    </div>
                                    <div className="card-title">
                                    <h3 className="text-light">{item.name}</h3>
                                    </div>
                                    <div className="card-text">
                                    <p className="text-light p-2">
                                    {item.desc} 
                                    </p>
                                    </div>
                                    <button className="btn pb-3">
                                    <a href={item.link} className="btn btn-primary "> Launch</a>
                                    </button>
                                </div>
                </div>
                ))}
            </div>  
            </div>  
        </div>
    </div>
   )
}
