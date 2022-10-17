import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { getAssetPath } from 'utils/assets';

type GLTFResult = GLTF & {
  nodes: {
    plantLarge: THREE.Mesh;
    leaves: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder001_1: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    neonLeaves: THREE.MeshStandardMaterial;
    potMetal: THREE.MeshStandardMaterial;
    potDirt: THREE.MeshStandardMaterial;
  };
};

const path = getAssetPath('/games/my-app/topas-plant-1.glb');

export default function PlantModel({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(path) as unknown as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.plantLarge.geometry} material={materials['Material.001']} position={[0, 0.11, 0]}>
        <mesh geometry={nodes.leaves.geometry} material={materials.neonLeaves} />
      </mesh>
      <group position={[0, 0.13, 0]}>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.potMetal} />
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.potDirt} />
      </group>
    </group>
  );
}

useGLTF.preload(path);
