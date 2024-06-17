/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 397px;
  height: 125px;
  padding: 37px 99px;
  border: 1px solid rgba(53, 53, 57, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 107px;
    height: 30px;
    img {
      scale: 0.6;
    }
  }
`;
interface PartnerCardProps {
  imageSrc: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ imageSrc }) => {
  return (
    <Wrapper>
      <img src={imageSrc} alt="" />
    </Wrapper>
  );
};

export default PartnerCard;
