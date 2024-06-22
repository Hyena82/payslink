import styled from "styled-components";
import { Box, Flex } from "../Box";
import Image from "next/image";
import { compactAddressEdit } from "@/utils";
import FuncButton from "../Button/FuncButton";

const Wrapper = styled.div`
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  padding: 20px 35px 20px;
  background-color: rgba(10, 9, 16, 1);
  border-radius: 12px;
  position: relative;
  top: 30px;
  left: -30px;
  font-family: Manrope;
  color: #fff;

  .info-wallet {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    border-radius: 70px;
    padding: 7px 14px;
    p {
      margin: 0 10px;
    }
  }

  .amount-content {
    .image-token {
      width: 33px;
      height: 33px;
      border-radius: 6px;
      padding: 7px;
      background: rgba(36, 35, 50, 1);
      border: 1px solid rgba(46, 48, 56, 1);
    }

    span {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: center;
      color: rgba(108, 111, 121, 1);
    }

    .amount-content-row {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      justify-content: space-between;
      padding: 8px 12px;
      margin: 5px -8px;
      border-radius: 5px;

      transition: background-color 0.3s ease;

      .token-amount {
        color: rgba(35, 226, 183, 1);
      }

      &:hover {
        background-color: rgba(36, 35, 50, 1);
      }
    }
  }
`;

interface PopupContentProps {
  onClose: () => void;
}

const PopupContent: React.FC<PopupContentProps> = ({ onClose }) => {
  const data = [
    {
      image: "/images/token/bnb.svg",
      amount: "12.12",
      token: "BNB",
    },
    {
      image: "/images/token/usdt.svg",
      amount: "12.12",
      token: "USDT",
    },
    {
      image: "/images/token/pays.svg",
      amount: "12.12",
      token: "PAYS",
    },
  ];

  return (
    <Wrapper>
      <Flex className="center">
        <Image
          src="/images/staking/bnb-network.svg"
          width={40}
          height={40}
          quality={100}
          alt=""
        />

        <Flex mx={3} className="info-wallet center">
          <Image
            src="/images/staking/info-wallet.svg"
            width={25}
            height={25}
            alt=""
            quality={100}
          />

          <p>
            {compactAddressEdit(
              "0x4b8d90d68f26d8e0f3f0f6b9d6b7f3c4baa3f3b1",
              6,
              4
            )}
          </p>

          <Image
            src="/images/icons/down-arrow.svg"
            width={10}
            height={10}
            alt=""
          />
        </Flex>
        <Box className="hover center">
          <Image src="/images/icons/copy.svg" width={24} height={24} alt="" />
        </Box>
      </Flex>

      <Box className="amount-content">
        <Flex mt={3} mb={2} className="center">
          <span> Funds in wallet</span>
        </Flex>

        {data.map((item, index) => (
          <Flex mb={2} className="amount-content-row hover" key={index}>
            <Flex>
              <Flex className="image-token center">
                <Image src={item.image} width={20} height={20} alt="" />
              </Flex>
              <Box ml={2}>{item.token}</Box>
            </Flex>

            <Box className="token-amount">{item.amount}</Box>
          </Flex>
        ))}
      </Box>

      <Flex mt={4} className="center">
        <FuncButton onClick={onClose} className="size-s hover">
          Logout
        </FuncButton>
      </Flex>
    </Wrapper>
  );
};

export default PopupContent;
