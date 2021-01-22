import { Canvas, useFrame, useThree } from "react-three-fiber";

import { OrbitControls, softShadows, Loader } from "@react-three/drei";
import { useSpring } from "react-spring";
import Chest from "./Components/Three/Chest";
import ChestModal from "./Components/ChestModal";

import "./Assets/Style/App.scss";
import React, { Suspense, useRef, useState } from "react";
import Lights from "./Components/Three/Lights";
import Floor from "./Components/Three/Floor";

softShadows();

const ZoomWithOrbital = () => {
  const orbitRef = useRef();
  const { gl, camera } = useThree();
  useSpring({
    from: {
      z: 30,
    },
    x: -5,
    y: 4,
    z: 4,
    // React Springs onFrame
    onFrame: ({ x, y, z }) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
    },
  });
  return (
    // Oribital controls via drei
    <OrbitControls
      ref={orbitRef}
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 4}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{
          position: [-5, 4, 8],
          fov: 40,
        }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Chest open={open} setOpen={setOpen} />
          <Floor />
          <ZoomWithOrbital />
        </Suspense>

        {/* Allows us to move the canvas around for different prespectives */}
      </Canvas>
      <Loader />
      <ChestModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
