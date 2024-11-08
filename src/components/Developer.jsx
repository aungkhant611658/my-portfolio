import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Developer = ({ animationName = "developer", ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/human/developer.glb");

  const { animations: idleAnimation } = useGLTF("/models/human/developer.glb");

  idleAnimation[0].name = "developer";

  const { actions } = useAnimations([idleAnimation[0]], group);

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <skinnedMesh
        geometry={nodes.EyeLeft001.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeRight001.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body001.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses001.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair001.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Head001.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top001.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Teeth001.geometry}
        material={materials["Wolf3D_Teeth.002"]}
        skeleton={nodes.Wolf3D_Teeth001.skeleton}
      />
      <primitive object={nodes.mixamorigHips} />
    </group>
  );
};

useGLTF.preload("/models/human/developer.glb");

export default Developer;
