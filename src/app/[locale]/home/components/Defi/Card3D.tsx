import styled from "styled-components";
import { Box, Flex } from "@/components/Box";
import { GradientBorder, LeftArrow } from "@/components/Svg";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  ._3dZ {
    transform-style: preserve-3d;
    transform: translateZ(75px);
  }

  ._3-box {
    transform-style: preserve-3d;
    width: 408px;
    height: 236px;
    padding: 30px 20px;

    position: relative;
    background: rgba(3, 6, 10, 0.7);
    /* background: green; */
    backdrop-filter: blur(6px);

    border-radius: 20px;

    &:hover {
      background: var(--gradient);
      backdrop-filter: unset;

      & .title-card,
      .desc-card {
        color: #000;
      }
    }

    .title-card {
      //styleName: H3;
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: center;
      color: rgba(35, 226, 183, 1);
      margin-bottom: 10px;

      text-transform: uppercase;
    }

    .desc-card {
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: center;
    }
  }
`;

const Card3D = ({ title, desc }: { title: string; desc: string }) => {
  const ref = useRef<any>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Wrapper>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="_3-box"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <p className="title-card">{title}</p>

          <p className="desc-card">{desc}</p>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Card3D;
