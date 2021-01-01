import React from "react";

function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow // this plane receives shadows
    >
      {/* The floor 'or' scene for the app */}
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.3} />
    </mesh>
  );
}

export default Floor;
