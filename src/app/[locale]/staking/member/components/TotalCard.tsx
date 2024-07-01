import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 36px 20px;
  display: flex;
  align-items: center;
  background: rgba(10, 9, 16, 1);
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  border-radius: 16px;
  font-family: Manrope;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  .content-box {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: var(--Neutral-White, rgba(255, 255, 255, 1));

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }

    p:last-child {
      font-size: 36px;
      font-weight: 400;
      line-height: 44px;
      text-align: left;
      color: rgba(35, 226, 183, 1);

      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
      }
    }
  }
`;
interface TotalCardProps {
  name: string;
  value: string;
}

const TotalCard: React.FC<TotalCardProps> = ({ name, value }) => {
  return (
    <Wrapper>
      <Image
        src="/images/staking/member/member-card.svg"
        alt=""
        width={64}
        height={64}
      />

      <Flex
        ml={3}
        className="content-box h-100"
        flexDirection="column"
        justifyContent="space-between"
      >
        <p>Total member {name}</p>
        <p>{value}</p>
      </Flex>
    </Wrapper>
  );
};

export default TotalCard;
