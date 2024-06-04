import { ModelRobot } from "@/components/_3DRobot";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 58px);
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 1);

  &:after {
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home/first-page-bg.png");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    filter: blur(1px) brightness(0.6);
  }

  .model-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 800px;
  }
`;

const FirstPage = () => {
  return (
    <Wrapper>
      <div className="model-box">
        <Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}>
          <PerspectiveCamera fov={105} />
          <Environment preset="studio" />
          <OrbitControls />
          <ModelRobot />
        </Canvas>
      </div>
    </Wrapper>
  );
};

export default FirstPage;
