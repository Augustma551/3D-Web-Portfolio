
import React from "react";
import { projects } from '../constant/index'
import { Link } from 'react-router-dom'

const Projects = () =>{
    return(
        <div className="max-container">
            <div className="flex flex-wrap my-20 gap-16 ">
                {projects.map((project) =>(
                  <div className="lg:w-[400px] h-full" key={project}>
                        <div className=" flex justify-center items-center hover:scale-180 transition duration-300 ease-in-out">
                            <img 
                                src={project.img}
                                alt="3d web"
                                className="w-full h-full object-contain hover:items-center  group hover:rounded-lg rounded-red-400 "
                            />
                        </div>
                        <div className="mt-5 flex flex-col bg-transparent text-start">
                            <h4 className="text-2xl font-poppins font-semibold">
                                {project.name}
                            </h4>
                            <p className="text-slate mt-3 ">
                                {project.description}
                            </p>
                        </div>
                        <div className="text-start mt-2">
                            <Link
                                to = {project.link}
                                target =" _blank"
                                rel = "noopener noreferrer"
                                className="font-semibold text-red-600 "
                            >
                                Live Link
                            </Link>
                        </div>
                  </div>

                ))}
                
            </div>
        </div>
    )
}

export default Projects;