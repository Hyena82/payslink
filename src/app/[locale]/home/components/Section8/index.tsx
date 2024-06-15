import { Box, Flex } from "@/components/Box";
import PrimaryButton from "@/components/Button/PrimaryButton";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  border-bottom: 1px solid var(--Stroke, #353539);

  .right-content {
    width: 50%;
    height: 100%;
    padding: 8rem;
    border-left: 1px solid var(--Stroke, #353539);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title-section {
    max-width: 100%;
    margin-bottom: 10px;
  }

  .desc {
    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: left;
  }

  .left-content {
    width: 50%;
    height: 100%;
    position: relative;

    video {
      position: absolute;
      mix-blend-mode: screen;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }

    .ball-box {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      mix-blend-mode: color-dodge;
    }
    .box1 {
      mix-blend-mode: color-dodge;
      right: 40%;
      bottom: 30%;
    }

    .box2 {
      right: 16%;
      bottom: 50%;
    }

    .box3 {
      right: 23%;
      bottom: 7%;
    }
  }
`;

const Section8 = () => {
  const bubbleVariants = {
    x: [
      "25%",
      "30%",
      "35%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "70%",
      "75%",
      "80%",
    ],
    y: [
      "0%",
      "5%",
      "25%",
      "30%",
      "35%",
      "40%",
      "10%",
      "15%",
      "20%",
      "25%",
      "30%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
    ],
    rotate: [0, 80],
  };
  return (
    <Wrapper className="relative" id={SECTIONS[6]}>
      <InviewBox section={SECTIONS[6]} />
      <Flex justifyContent="flex-end" height="100%">
        <Box className="left-content">
          <video width="100%" height="100%" autoPlay muted loop playsInline>
            <source src="/videos/door.mp4" type="video/mp4" />
          </video>

          <motion.div
            className="ball-box box1"
            animate={bubbleVariants}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Box>
              <Image
                src="/images/home/stone1.png"
                width={85}
                height={92}
                quality={100}
                alt=""
              />
            </Box>
          </motion.div>

          <motion.div
            className="ball-box box2"
            animate={bubbleVariants}
            transition={{
              duration: 30,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/images/home/stone2.png"
              width={120}
              height={131}
              quality={100}
              alt=""
            />
          </motion.div>

          <motion.div
            className="ball-box box3"
            animate={bubbleVariants}
            transition={{
              duration: 40,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/images/home/stone3.png"
              width={282}
              height={279}
              quality={100}
              alt=""
            />
          </motion.div>
        </Box>

        <Box className="right-content">
          <div className="title-section">
            <Flex>
              <span>Audited</span> <Box ml={2}>and</Box>
            </Flex>

            <div>
              <span>Verified</span>
            </div>
          </div>

          <p className="desc">The most secure DeFi protocol for your profit</p>
          <p>PAYSLINK AUDIT REPORT</p>
          <Box mt={4}>
            <PrimaryButton>Check PAYSLINK AUDIT REPORT</PrimaryButton>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Section8;
