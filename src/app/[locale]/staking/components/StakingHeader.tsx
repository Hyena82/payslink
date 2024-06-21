import { Box } from "@/components/Box";
import { Link } from "@/navigation";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid rgba(53, 53, 57, 1);

  .header-logo {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 198px;
    width: 100%;
    border-right: 1px solid rgba(53, 53, 57, 1);
  }
`;

const StakingHeader = () => {
  return (
    <Wrapper>
      <div className="container h-100">
        <Box className="header-logo">
          <Link href="/">
            <Image
              className="desk-logo"
              width={146}
              height={26}
              src="/images/logo/header-logo.png"
              alt="Logo"
            />
          </Link>
        </Box>
      </div>
    </Wrapper>
  );
};

export default StakingHeader;
