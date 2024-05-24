import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import birdScene from '../assets/3d/birds.glb';



const bird = () =>{
    const birdRef = useRef([])
    const { scene, animations } = useGLTF(birdScene)
    const { actions } = useAnimations(animations, birdRef)
    console.log('Animations:', animations);


    useEffect(() =>{
        actions['Scene'].play()
        }, []);

    useFrame(({ clock, camera}) =>{
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.05 + 7;

        if(birdRef.current.position.x > camera.position.x + 10){
            birdRef.current.position.y = Math.PI;
        } else if (birdRef.current.position.X < camera.position.x - 10){
            birdRef.current.position.y = -7;
        }
        if ( birdRef.current.position.y === 0){
            birdRef.current.position.x += 0.01
            birdRef.current.position.z -= 0.01
        } else {
            birdRef.current.position.x += 0.01
            birdRef.current.position.z -= 0.01
        }
    })
    return(
        <mesh ref={birdRef} position={[-15, 16.03, -10]} scale={[2.003, 2.003, 2.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default bird;