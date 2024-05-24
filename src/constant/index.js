import project1 from '../assets/photos/3DPage.png';
import project2 from '../assets/photos/NorteraPage.png';
import project3 from '../assets/photos/disguised.png';
import project4 from '../assets/photos/personalWeb.png';
import { Linkedin } from '../icons';
import { Github } from '../icons';


export const projects = [
   {
       img: project1,
       name : '3D Landing Page',
       description: 'A landing page with 3d mesh, i was inspired from Dribble and decided to tried to cloned with some modification, i am using HTML, Vanilla CSS and Javascript and also some javascript library such as three, gsap and locomotive scroll.',
       link : "https://cloning3-d-page.vercel.app/"

   },
   {
       img: project2,
       name:"Nortera Cloned",
       description :"A cloned WebPage from https://www.norterafoods.com/, i am using HTML, Tailwind CSS and Javascript to clone the WebPage.",
       link : "https://github.com/Augustma551/Cloning-Nortera-WebPage"
   },
   {
       img: project3,
       name: "Disguised.gg Cloned",
       description : "A cloned WebPage from https://www.disguised.gg/, i am using ReactJs to cloned the WebPage",
       link :"https://cloning-disguised-gg-evbd.vercel.app/"

   },
   {
       img: project4,
       name:"El's Sandbox",
       description : "A portfolio web consisted by Bootstrap",
       link : "https://el-s-portfolio.vercel.app/"
   
   }
   
];

export const Bio = [
    {
        description: "Transitioning from a background in Bachelor of Economics, I've embarked on an exhilarating self-taught journey into web development. The prospect of learning something entirely new is both thrilling and invigorating, marking the beginning of an exciting chapter in my educational pursuit. Helped by my strong determination, adaptability, and constant willingness to learn new things, I was able to learn all the materials, giving grand endeavor to all the process."
    }
]

export const Social = [
    {
        iconUrl: Linkedin,
        name:"Linkedin",
        link:"https://www.linkedin.com/in/cherellenio/"

    },
    {
        iconUrl:Github,
        name: "Github",
        link: "https://github.com/Augustma551"
    }

]