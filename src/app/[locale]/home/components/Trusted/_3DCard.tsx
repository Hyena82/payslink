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

  .dot {
    z-index: 2;

    & > * {
      width: 7px;
      height: 7px;
      transform: rotate(-135deg);
      position: absolute;
      background-color: #fff;
    }

    & > :nth-child(1) {
      top: 15px;
      left: 15px;
    }

    & > :nth-child(2) {
      top: 15px;
      right: 15px;
    }

    & > :nth-child(3) {
      bottom: 15px;
      left: 15px;
    }

    & > :nth-child(4) {
      bottom: 15px;
      right: 15px;
    }
  }

  .content-box {
    width: 472px;
    height: 280px;
    position: relative;
    flex-direction: column;
    /* margin-top: 38px; */
    z-index: 2;
    border-radius: 20px;

    transition: all 0.3s ease-in-out;

    &:hover {
      transition: all 0.3s ease-in-out;
      transform: scale(1.05);
      background: radial-gradient(
        66.53% 71.98% at 57.94% 42.74%,
        #0093fe 0%,
        #50ffd5 100%
      );
      & > * {
        color: #000 !important;
      }
      .number {
        background: unset;
        color: #000 !important;
        -webkit-text-fill-color: unset;
      }

      svg path {
        fill: #000;
      }
    }

    &:not(:last-child) {
      margin-right: 35px;
    }

    .title {
      z-index: 2;
      font-family: Metrophobic;
      font-size: 30px;
      font-weight: 400;
      line-height: 36.99px;
      text-align: center;
      color: #23e2b7;
    }

    .number {
      z-index: 2;

      font-family: Trap;
      font-size: 80px;
      font-weight: 700;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .desc {
      z-index: 2;

      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: center;
    }

    .dot {
      z-index: 2;

      & > * {
        width: 7px;
        height: 7px;
        transform: rotate(-135deg);
        position: absolute;
        background-color: #fff;
      }

      & > :nth-child(1) {
        top: 15px;
        left: 15px;
      }

      & > :nth-child(2) {
        top: 15px;
        right: 15px;
      }

      & > :nth-child(3) {
        bottom: 15px;
        left: 15px;
      }

      & > :nth-child(4) {
        bottom: 15px;
        right: 15px;
      }
    }

    & > svg {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const _3DCard = ({
  title,
  number,
  desc,
  arrow,
  last,
}: {
  title: string;
  number: string;
  desc: string;
  arrow?: boolean;
  last?: boolean;
}) => {
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
          position: "relative",
          height: "280px",
          width: "472px",
          borderRadius: "20px",
          marginRight: last ? 0 : "35px",
        }}
      >
        <div
          className="content-box center"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <p className="title _3dZ">{title}</p>

          <Flex alignItems="center" className="_3dZ">
            {arrow && (
              <Box mb={1}>
                <LeftArrow />
              </Box>
            )}

            <Box ml={3} className="number text-gradient ">
              {number}
            </Box>
          </Flex>

          <p className="desc _3dZ">{desc}</p>

          <div className="dot">
            <div />
            <div />
            <div />
            <div />
          </div>

          <GradientBorder />
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default _3DCard;
