import styled from "styled-components";
import { Box, Flex } from "../Box";
import Image from "next/image";

const Wrapper = styled.div`
  text-transform: uppercase;
  width: fit-content;

  .image-token {
    width: 33px;
    height: 33px;
    border-radius: 6px;
    padding: 7px;
    background: rgba(36, 35, 50, 1);
    border: 1px solid rgba(46, 48, 56, 1);
  }

  color: #fff;
`;
interface TokenBoxProps {
  name: string;
}

const TokenBox: React.FC<TokenBoxProps> = ({ name }) => {
  return (
    <Wrapper>
      <Flex alignItems="center">
        <Flex className="image-token center">
          <Image
            src={`/images/token/${name}.svg`}
            width={20}
            height={20}
            alt=""
          />
        </Flex>
        <Box ml={2}>{name}</Box>
      </Flex>
    </Wrapper>
  );
};

export default TokenBox;
