import styled from "styled-components";
import { Box } from "../Box";
import Image from "next/image";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Wrapper = styled.div`
  .icon-staking {
    position: fixed;
    left: 40px;
    top: 40%;
    z-index: 9999;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 9999;
    backdrop-filter: blur(10px);

    .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border-radius: 10px;
      width: 500px;
      text-align: center;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

const StakingNow = () => {
  const [first, setfirst] = useState(false);
  const loadingPage = useSelector(
    (state: RootState) => state.system.loadingPage,
    shallowEqual
  );

  if (loadingPage) {
    return null;
  }

  return (
    <Wrapper>
      <Box className="icon-staking">
        <Image
          src="/images/home/staking-now.svg"
          width={137}
          height={150}
          quality={100}
          alt=""
        />
      </Box>

      {first && (
        <div className="modal" onClick={() => setfirst(false)}>
          <div className="content">
            <Image
              src="/images/home/staking1.jpg"
              width={418}
              height={536}
              alt=""
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default StakingNow;
