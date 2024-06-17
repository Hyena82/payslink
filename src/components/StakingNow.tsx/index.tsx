import styled from "styled-components";
import { Box } from "../Box";
import Image from "next/image";
import { useEffect, useState } from "react";

import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Modal } from "antd";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  .icon-staking {
    position: fixed;
    right: 60px;
    top: 40%;
    z-index: 999;
    cursor: pointer;

    @media (max-width: 768px) {
      right: 20px;
      top: 75%;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .close-button {
    position: absolute;
    right: 90px;
    top: 30px;
    @media (max-width: 768px) {
      right: 20px;
      top: 0px;
    }
  }

  .popup-image {
    @media (max-width: 768px) {
      width: 88%;
      height: auto;
    }
  }

  .staking-button {
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 17.64px 0px rgba(80, 255, 213, 1);

    font-family: Trap;
    font-size: 21.17px;
    font-weight: 800;
    line-height: 23.29px;
    text-align: center;
    padding: 12px 33px;
    width: fit-content;
    border-radius: 26.6px;
    background: var(--gradient);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: color 0.3s ease;

    &:hover {
      color: #fff;
    }

    img {
      position: absolute;
      left: -50px;
      bottom: -50px;
    }
  }
`;

const StakingNow = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const loadingPage = useSelector(
    (state: RootState) => state.system.loadingPage,
    shallowEqual
  );

  if (loadingPage) {
    return null;
  }

  return (
    <Wrapper>
      <Box className="icon-staking" onClick={() => setOpen(true)}>
        <Image
          src="/images/home/staking-now.svg"
          width={137}
          height={150}
          quality={100}
          alt=""
        />
      </Box>

      <Modal
        open={open}
        centered
        onCancel={handleClose}
        footer={false}
        width={557}
        closeIcon={false}
      >
        <ContentBox>
          <Box className="close-button hover" onClick={handleClose}>
            <Image
              src="/images/icons/close.svg"
              width={30}
              height={30}
              alt=""
            />
          </Box>

          <Image
            className="popup-image"
            src="/images/home/staking-popup.png"
            width={418}
            height={411}
            quality={100}
            alt=""
          />

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
            className="staking-button"
          >
            Staking Now
            <Image
              src="/images/icons/hand.svg"
              width={77}
              quality={100}
              height={74}
              alt=""
            />
          </motion.div>
        </ContentBox>
      </Modal>
    </Wrapper>
  );
};

export default StakingNow;
