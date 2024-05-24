import React, {useState, useEffect, Suspense, useRef} from "react";
import scene from '../assets/3d/vendingmachine.glb';
import { useGLTF, useAnimations } from "@react-three/drei";

const VendingMachine = ({currentAnimation, ...props}) =>{
  const group =useRef();
  const { nodes, materials, animations, geometry} = useGLTF(scene);
  const  {actions} = useAnimations(animations, group);

  useEffect(()=>{
    Object.values(actions).forEach((action) => action.stop());

    if(actions[currentAnimation]){
      actions[currentAnimation].play();
    }
    console.log('nodes:',nodes)
    console.log("material:", materials)
  },[actions,currentAnimation])

  return (
    <group {...props} dispose={null}>
      <group  scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Machine_Tokyo_Material_u1_v1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.wire_088144225}
        />
      </group>
    </group>
    )
}

export default VendingMachine;