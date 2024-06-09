import { SECTIONS } from "@/configs/constants";
import { setCurrentSection } from "@/state/systemSlice";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #000;
  border: 1px solid #fff;
`;

const Staking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(SECTIONS[1]));
    }
  }, [isInView]);

  return (
    <Wrapper id="Staking" ref={ref}>
      content
    </Wrapper>
  );
};

export default Staking;
