"use client";

import { RootState } from "@/store/store";
import Link from "next/link";
import { use } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SECTIONS } from "@/configs/constants";

const Wrapper = styled.div`
  position: fixed;
  top: 30%;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  font-size: 14px;
  font-weight: 400;
  line-height: 17.26px;
  text-align: left;
  color: #6d6d6d;
  a {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-bottom: 7px;
  }

  p {
    display: none;
    margin-top: 5px;
  }

  a.active {
    .item-section {
      border: 0.34px solid var(--Color, #23e2dd);
    }
    p {
      display: block;
    }
  }

  .item-section {
    width: 15px;
    height: 15px;
    border-radius: 50%;

    .dot {
      width: 6px;
      height: 6px;
      background-color: #6b6b6b;
      border-radius: 50%;
    }
  }
`;

const NavScroll = () => {
  const currentSection = useSelector(
    (state: RootState) => state.system.currentSection
  );

  console.log("~~", currentSection);
  return (
    <Wrapper>
      {SECTIONS.map((section) => (
        <Link
          key={section}
          href={`#${section}`}
          className={`${currentSection === section && "active"} `}
        >
          <motion.div
            className="item-section center"
            animate={{
              scale: currentSection === section ? 1.2 : 1,
              opacity: currentSection === section ? 1 : 0.5,
            }}
          >
            <div className="dot" />
          </motion.div>
          <motion.div animate={{ x: currentSection === section ? 0 : 10 }}>
            <p>{section}</p>
          </motion.div>
        </Link>
      ))}
    </Wrapper>
  );
};

export default NavScroll;
