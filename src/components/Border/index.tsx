import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    height: 89px;
    @media (max-width: 768px) {
      height: 66px;
      left: -50px;
    }
  }
  .left-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 89px;
    transform: rotate(0deg);

    @media (max-width: 768px) {
      height: 66px;
      left: -17px;
    }
  }

  .right-bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 89px;
    @media (max-width: 768px) {
      height: 66px;
      right: -17px;
    }
  }
`;

interface GradientBorderProps {
  children: React.ReactNode;
}

const GradientBorder: React.FC<GradientBorderProps> = ({ children }) => {
  return (
    <Wrapper>
      <svg
        className="left-bottom"
        width="166"
        height="84"
        viewBox="0 0 166 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.92773V49.4914C1 67.7323 15.7872 82.5195 34.0282 82.5195H164.489"
          stroke="url(#paint0_linear_14_1299)"
          stroke-width="1.65141"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_1299"
            x1="1"
            y1="41.7236"
            x2="164.489"
            y2="41.7236"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0093FE" />
            <stop offset="1" stop-color="#50FFD5" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="top"
        width="374"
        height="91"
        viewBox="0 0 374 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 90.074V34.1021C1 15.8612 15.7872 1.07397 34.0282 1.07397H373"
          stroke="url(#paint0_linear_14_1298)"
          stroke-width="1.65141"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_1298"
            x1="1"
            y1="45.574"
            x2="373"
            y2="45.574"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0093FE" />
            <stop offset="1" stop-color="#50FFD5" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="right-bottom"
        width="179"
        height="65"
        viewBox="0 0 179 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M178 1.07397V23.074C178 45.7176 159.644 64.074 137 64.074H1"
          stroke="url(#paint0_linear_14_1300)"
          stroke-width="1.65141"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_1300"
            x1="178"
            y1="32.574"
            x2="1"
            y2="32.574"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0093FE" />
            <stop offset="1" stop-color="#50FFD5" />
          </linearGradient>
        </defs>
      </svg>

      {children}
    </Wrapper>
  );
};

export default GradientBorder;
