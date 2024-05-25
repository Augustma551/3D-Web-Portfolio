import React from "react";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Island from "../models/island";
import Sky from "../models/sky";
import Bird from "../models/bird";
import Plane from '../models/plane';
import Loader  from "../components/loader";

const Home = () =>{

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const adjustislandForScreenSize = () =>{
    let screenScale = null;
      let screenPosition = [0, -0.2, -36];
      let rotation = [0.5, 0.9, 0];

      if (window.innerWidth < 768){
          screenScale = [0.9, 0.9, 0.9];
          screenPosition = [0, -6.5, -43];
      } else {
          screenScale = [1, 1, 1];
      }

      return [screenScale, screenPosition, rotation]
    }

    const adjustPlaneForScreenSize = () =>{
        let screenScale, screenPosition;

        if(window.innerWidth < 768){
            screenScale = [ 3,3,3]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [ 1,1,1]

            screenPosition = [ -0.3, 4.2, -9]
        }

        return[screenScale, screenPosition]
    }


    const [islandScale, islandPosition, islandRotation] = adjustislandForScreenSize();
    const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize()
    return(
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
            </div>


            <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{near: 0.1, far: 1000}}>
            <Suspense fallback={<Loader />}>
                <directionalLight position={[6, 3, 3.5]} intensity={2.5} />
                <ambientLight intensity={0.5} />
                <pointLight />
                <spotLight />
                <hemisphereLight skycolor="#b1e1ff" groundColor={"#D5E4DB"} waterColor={'#D5E4DB'}intensity={0.5} />

                <Bird />

                <Sky 
                isRotating = {isRotating} />
                
                <Plane 
                isRotating={isRotating}
                scale={PlaneScale}
                position={PlanePosition}
                rotation={[0, 20, 0]}/>
                
                <Island
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />

            </Suspense>
            </Canvas>
        </section>
        )
        
}
export default Home;
