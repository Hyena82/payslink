"use client";
import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import styled from "styled-components";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--Stroke, #353539);
  padding: 166px 66px;
  position: relative;
  overflow: hidden;

  .desc {
    max-width: 834px;
    width: 100%;
    text-align: center;
    margin: 20px auto 20px;

    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: center;
  }

  .down-box {
    position: absolute;
    bottom: 40px;
    left: 40px;
    z-index: 2;
  }
`;

const Section7 = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const outImageScrollY = useTransform(scrollYProgress, [0.07, 0.3], [-860, 0]);
  const midImageScrollY = useTransform(scrollYProgress, [0.2, 0.4], [860, 0]);
  const downScrollX = useTransform(scrollYProgress, [0.4, 0.5], [-400, 0]);
  const outImageY = useSpring(outImageScrollY, { stiffness: 20, damping: 7 });
  const midImageY = useSpring(midImageScrollY, { stiffness: 20, damping: 10 });
  const downX = useSpring(downScrollX, { stiffness: 50, damping: 20 });

  return (
    <Wrapper ref={container}>
      <Box>
        <Box mt={4} className="down-box">
          <motion.div style={{ x: downX }}>
            <div className="title-section">
              Download
              <div>
                <span>app Payslink</span>
              </div>
            </div>
            <Flex mt={4}>
              <Box className="hover">
                <Image
                  src="/images/home/google-play-down.svg"
                  width={191}
                  height={49}
                  alt=""
                />
              </Box>

              <Box ml={3} className="hover">
                <Image
                  src="/images/home/app-store-down.svg"
                  width={191}
                  height={49}
                  alt=""
                />
              </Box>
            </Flex>
          </motion.div>
        </Box>

        <Flex justifyContent="center">
          <motion.div style={{ y: outImageY }}>
            <Image
              src="/images/home/left-phone.png"
              width={367}
              height={662}
              alt=""
            />
          </motion.div>
          <motion.div style={{ y: midImageY }}>
            <Image
              src="/images/home/mid-phone.png"
              width={367}
              height={662}
              alt=""
            />
          </motion.div>
          <motion.div style={{ y: outImageY }}>
            <Image
              src="/images/home/right-phone.png"
              width={367}
              height={662}
              alt=""
            />
          </motion.div>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Section7;
