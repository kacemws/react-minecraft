import { Canvas, useFrame } from "react-three-fiber";

import { softShadows, Loader } from "drei";
import Chest from "./Components/Three/Chest";

import "./Assets/Style/App.scss";
import { Suspense, useState } from "react";
import Lights from "./Components/Three/Lights";
import Floor from "./Components/Three/Floor";

softShadows();

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
        </Suspense>

        {/* Allows us to move the canvas around for different prespectives */}
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
