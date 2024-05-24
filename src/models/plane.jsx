import { useAnimations, useGLTF } from "@react-three/drei"
import { useRef, useEffect} from "react";
import Balloon from '../assets/3d/balloon.glb'


const Plane = ({isRotating, ...props}) =>{
    const planeRef = useRef()
    const { scene, animations } = useGLTF(Balloon)
    const { actions } = useAnimations(animations, planeRef)
    console.log('animations',  animations)

    useEffect(()=>{
        if(isRotating){
            actions["Animation"].play();
        } else {
            actions['Animation'].stop();
        }
      
    },[actions, isRotating])
    return(
        <mesh {...props} ref={planeRef} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane;