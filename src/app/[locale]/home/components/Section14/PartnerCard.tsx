/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 397px;
  padding: 37px 99px;
  height: 125px;
  border: 1px solid rgba(53, 53, 57, 1);
  display: flex;
  justify-content: center;
  align-items: center;
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
