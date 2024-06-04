"use client";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../../../store/store";
import { setLoadingPage } from "@/state/systemSlice";
import { SvgTest } from "../../../../../components/Svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import CircleProgressBar from "../../../../../components/CircleProgressBar";
import { motion } from "framer-motion";

const Wrapper = styled.div<{ active: boolean }>`
  position: fixed;

  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .loading-line-right,
  .loading-line-left {
    border: 1px solid rgba(53, 53, 57, 1);
    position: absolute;
    top: 50%;
    z-index: 2;
    transition: all 0.3s ease-in-out;

    transform: translateY(-50%);
    &.line-right {
      left: 50%;
    }
    &.line-left {
      right: 50%;
    }
  }

  .box-top,
  .box-bottom {
    position: absolute;
    z-index: 2;

    &.box-top {
      left: 0;
      right: 0;
      height: 50%;
      top: 0;
      background-color: #000;
      transform: translateY(0);
      animation: animateHeight 4s ease-in-out 2s forwards;
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
        width: 100%;
        height: 1px;
      }
    }
    &.box-bottom {
      background-color: #000;
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        content: "";
        background: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
        width: 100%;
        height: 1px;
      }

      left: 0;
      right: 0;
      height: 50%;
      bottom: 0;
      animation: animateHeightBottom 5s ease-in-out 2s forwards;
    }

    @keyframes animateHeight {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-100%);
      }
    }

    @keyframes animateHeightBottom {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(100%);
      }
    }
  }

  .loading-text {
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    position: absolute;
    background-color: #000;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    overflow: hidden;
    border-radius: 50%;
    width: 136px;
    height: 136px;
    .logo-image {
      position: absolute;
      z-index: 4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    p {
      z-index: 4;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingPage = () => {
  const loadingPage = useSelector(
    (state: RootState) => state.system.loadingPage
  );
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0); // Add this line

  const [delayedState, setDelayedState] = useState(false); // Add this line

  useEffect(() => {
    if (progress < 100) {
      return;
    }

    const timer = setTimeout(() => {
      setDelayedState(true);
    }, 2000); // 2 seconds delay

    return () => {
      clearTimeout(timer);
    };
  }, [progress]);

  const handleChange = () => {
    dispatch(setLoadingPage(!loadingPage));
  };

  // Add this effect to update progress over time
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Generate a random increment between 1 and 10
        const increment = Math.floor(Math.random() * 20) + 1;
        const newProgress = oldProgress + increment;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Wrapper
      active
      style={{ backgroundColor: progress < 100 ? "#000" : "transparent" }}
    >
      {progress < 100 && (
        <>
          <div
            className="loading-line-left line-left"
            style={{ width: `${progress / 2}%` }} // Set width based on progress
          ></div>
          <div
            className="loading-line-right line-right"
            style={{ width: `${progress / 2}%` }} // Set width based on progress
          ></div>
        </>
      )}

      {progress >= 100 && (
        <>
          <div className="box-top"></div>

          <div className="box-bottom"></div>
        </>
      )}

      {!delayedState && (
        <>
          <div className="loading-text">
            <CircleProgressBar progress={progress} />
            {progress < 100 ? (
              <p>Loading...</p>
            ) : (
              <div className="logo-image">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    src="/images/logo/loading-logo.png"
                    alt="logo-loading-logo.png"
                    width={60}
                    height={57}
                  />
                </motion.div>
              </div>
            )}
          </div>
        </>
      )}

      {/* <button onClick={handleChange}>change loading...</button> */}
    </Wrapper>
  );
};

export default LoadingPage;
