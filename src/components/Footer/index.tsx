import styled from "styled-components";
import Image from "next/image";
import { Box, Flex } from "../Box";
import { Discord, Instagram, Telegram, Twitter } from "../Svg";

const Wrapper = styled.div`
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  padding: 70px 50px;
  margin: 6rem auto 0;
  display: flex;
  max-width: 1322px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 6rem 16px 0;
    padding: 70px 16px;
    align-items: center;
    width: 92%;
  }

  .col1 {
    width: 250px;
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      & > div {
        justify-content: center;
        display: flex;
      }
    }
  }

  .left-content {
    width: 50%;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  .col2 {
    width: 346px;
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    @media (max-width: 768px) {
      margin-top: 3rem;
      text-align: center;
      width: 100%;
    }
  }

  .col3 {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: center;
    }

    a {
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: left;
      @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        display: block;
      }
    }

    .col3-mobile {
      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
      }

      & > div:first-child {
        @media (max-width: 768px) {
          margin-left: 0;
        }
      }
    }
  }

  .socials a {
    color: black;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .socials a:hover svg {
    fill: url(#paint0_linear_136_1517);
  }

  .footer-title {
    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: left;
    text-transform: uppercase;
    color: rgba(35, 226, 221, 1);
    @media (max-width: 768px) {
      text-align: center;
      margin-top: 2rem;
    }
  }
`;

export const socialList = [
  {
    name: "Telegram",
    link: "https://t.me/official",
    icon: <Telegram />,
  },
  {
    name: "X",
    link: "https://t.me/official",
    icon: <Twitter />,
  },

  {
    name: "Instagram",
    link: "https://t.me/official",
    icon: <Instagram />,
  },

  {
    name: "Discord",
    link: "https://t.me/official",
    icon: <Discord />,
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Flex className="left-content" justifyContent="space-between">
        <div className="col1">
          <Image src="/images/logo/logo.svg" width={230} height={40} alt="" />
          <Box my={4}>Official social media</Box>
          <div className="socials">
            {socialList.map((item, index) => (
              <a href={item.link} key={index} className="social-item">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="col2">
          <p>
            Payslink offers not only a decentralized payment mechanism based on
            the blockchain, but also a sustainable economy that produces,
            manages & securely send/receive large number of transactions each &
            every second.
          </p>
          <br />
          <p>
            Registered office address 19 High Street, Newtownbutler,
            Enniskillen, Northern Ireland, BT928JD
          </p>
          <br />
          <p>Contact us:</p>
          <p>
            <a
              className="hover"
              href="mailto:support@payslinks.comservice@payslinks.com"
              style={{
                wordBreak: "break-all",
              }}
            >
              support@payslinks.comservice@payslinks.com
            </a>
          </p>
        </div>
      </Flex>
      <div className="col3">
        <Flex
          className="col3-mobile"
          justifyContent="space-between"
          width="100%"
        >
          <Box ml={6}>
            <p className="footer-title">Payslink</p>
            <Box mt={3} mb={2}>
              <a href="" className="hover">
                Feature
              </a>
            </Box>
            <Box mb={2}>
              <a href="" className="hover">
                Roadmap
              </a>
            </Box>
            <Box mb={2}>
              <a href="" className="hover">
                Token
              </a>
            </Box>
            <Box>
              <a href="" className="hover">
                Whitepaper
              </a>
            </Box>
          </Box>
          <Box>
            <p className="footer-title">Resources</p>
            <Box mt={3} mb={2}>
              <a href="" className="hover">
                APIs
              </a>
            </Box>
            <Box mb={2}>
              <a href="" className="hover">
                Resource
              </a>
            </Box>
            <Box>
              <a href="" className="hover">
                Supports
              </a>
            </Box>
          </Box>
          <Box>
            <p className="footer-title">Developers</p>
            <Box mt={3} mb={2}>
              <a href="" className="hover">
                Document
              </a>
            </Box>
            <Box mb={2}>
              <a href="" className="hover">
                Github
              </a>
            </Box>
          </Box>
        </Flex>
      </div>
    </Wrapper>
  );
};

export default Footer;
