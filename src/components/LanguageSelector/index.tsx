import Image from "next/image";
import styled from "styled-components";
import { Box } from "../Box";

const Wrapper = styled.div`
  margin-left: 23px;
  .wrapper-selector {
    padding: 10px;
    border: 0.5px solid rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    font-size: 14px;
    font-weight: 400;
    line-height: 17.26px;
    text-align: center;

    p {
      padding: 0 10px;
    }
  }
`;

const LanguageSelector = () => {
  return (
    <Wrapper className="hover">
      <Box className="wrapper-selector">
        <Image src="/images/flag/US.svg" width={16} height={16} alt="flag" />
        <p>EN</p>
        <Image
          src="/images/icons/down-arrow.svg"
          width={10}
          height={5}
          alt="flag"
        />
      </Box>
    </Wrapper>
  );
};

export default LanguageSelector;
