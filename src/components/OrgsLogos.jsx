// /src/components/Figure.js file
import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

export const ZscalerLogo = (props) => {
  const svgData = useLoader(SVGLoader, "/assets/ZS.D_mod.svg");

  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 200,
  });
  geometry.center();

  return (
    <mesh {...props} geometry={geometry} scale={0.01}>
       <meshStandardMaterial attach="material" color="#009BDD" emissiveIntensity={1}
                             metalness={0.5} roughness={0.1} emissive="#009BDD" /> 
    </mesh>
  );
};

export const BrowserStackLogo = (props) => {
  const svgData = useLoader(SVGLoader, "/assets/browserstack.svg");
  const texture = useLoader(THREE.TextureLoader, "/assets/browserstack.svg");

  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 200,
  });
  geometry.center();

  return (
    <mesh {...props} geometry={geometry} scale={0.01}>
       <meshBasicMaterial attach="material" map={texture} /> 
    </mesh>
  );
};

export default {};