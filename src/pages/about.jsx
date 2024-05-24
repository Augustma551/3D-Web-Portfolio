import React from "react"
import CTA from "../components/CTA"
import ProfilePicture from "../assets/photos/PP.png"
import { Social } from "../constant"

const About = () =>{
 return(
    <section className="max-container">
        <div className="head-text mt-7">
            <h1>Hi!, I'm EL!</h1>
        </div>
        <div className="flex items-center">
        <div className="mt-1">
            <p className="text-left text-wrap leading-8 ">
        a Frontend Web Developer. After becoming a Bachelor of Economics majoring in Management and specialized in Marketing, I've decided to pivot my career towards the dynamic field of IT. I've delved into HTML, CSS, and JavaScript, I usually use React, as well as familiar with TailwindCss, Sass and Bootstrap. I am also planning into other relevant libraries such as React Three Fiber like this page I was build with React Three Fiber and Tailwindcss.
            </p>
        </div>
        <div className="flex justify-end items-end ">
            <img src={ProfilePicture}
                className="w-[1]h-[1] rounded-full ring-2 ring-blue-500/50 relative right-1"
            />
        </div>
        </div>

            <div className="flex items-center justify-start mt-10 gap-10">
            
                {Social.map((social) =>(
                    <a 
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                    <img 
                    src={social.iconUrl}
                    alt={social.name}
                    className="w-6 h-6">
                </img>
                </a>
            

            

                ))}
                <CTA/>
            </div>
    </section>
 )
}

export default About