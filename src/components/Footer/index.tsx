import styled from "styled-components";
import Image from "next/image";
import { Box, Flex } from "../Box";
import { Discord, Instagram, Telegram, Twitter } from "../Svg";

const Wrapper = styled.div`
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  padding: 70px 50px;
  margin: 6rem 22px 0;
  display: flex;
  max-width: 1322px;
  width: 100%;
  .col1 {
    width: 250px;
  }

  .col2 {
    width: 300px;
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
  }

  .col3 {
    width: 50%;

    a {
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: left;
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
  }
`;

const Footer = () => {
  const data = [
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
  return (
    <Box className="center">
      <Wrapper>
        <Flex width="50%" justifyContent="space-between">
          <div className="col1">
            <Image src="/images/logo/logo.svg" width={230} height={40} alt="" />
            <Box my={4}>Official social media</Box>
            <div className="socials">
              {data.map((item, index) => (
                <a href={item.link} key={index} className="social-item">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="col2">
            <p>
              Payslink offers not only a decentralized payment mechanism based
              on the blockchain, but also a sustainable economy that produces,
              manages & securely send/receive large number of transactions each
              & every second.
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
              >
                support@payslinks.comservice@payslinks.com
              </a>
            </p>
          </div>
        </Flex>
        <div className="col3">
          <Flex justifyContent="space-between" width="100%">
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
    </Box>
  );
};

export default Footer;
