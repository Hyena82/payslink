import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid rgba(53, 53, 57, 1);

  .background-s10 {
    padding-top: 200px;
    width: 50%;
  }

  .flex-box {
  }

  .right-content {
    border-left: 1px solid rgba(53, 53, 57, 1);
    width: 50%;
    padding-left: 40px;
    padding: 200px 0 0 40px;
  }

  .center-menu {
    max-width: 600px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid rgba(53, 53, 57, 1);

    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;

    .menu-item {
      width: calc(100% / 4);
      padding: 16px 0;
      text-align: center;
      cursor: pointer;

      &:first-child.acitve ~ .line-slider {
        transform: translateX(0);
      }

      &:nth-child(2).active ~ .line-slider {
        transform: translateX(100%);
      }

      &:nth-child(3).active ~ .line-slider {
        transform: translateX(200%);
      }

      &:nth-child(4).active ~ .line-slider {
        transform: translateX(300%);
      }
    }

    .line-slider {
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% / 4);

      height: 2px;
      background: rgba(35, 226, 221, 1);
      transform-origin: 0 0;
      transition: transform 0.25s;
    }
  }

  .content-tab {
    max-width: 600px;
    width: 100%;
  }

  .description-tab {
    width: 100%;

    margin-top: 50px;
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: justify;
    span {
      color: rgba(35, 226, 221, 1);
    }
  }
`;

type DataType = {
  [key: string]: {
    title: string;
    description: string;
  };
};

const data: DataType = {
  Payment: {
    title: "Payment",
    description:
      "<p>On the Payslink platform, users can effortlessly buy and spend digital currencies through a simple and seamless interface.</p> <br />  <p>Payslink's mission is to alleviate these challenges by incorporating decentralized blockchain technology and self-executing smart contracts into business processes, revolutionizing international commerce. Specifically, Payslink provides the following:</p> <br/> <p>Payslink provides <span>integrated payment solutions</span> for both digital and fiat currencies. In a digital currency transaction, the buyer deposits PAYS tokens into a smart contract, where they are held until the seller provides proof of fulfilling the contractual conditions. Once verified, the smart contract releases the tokens to the seller.</p>",
  },
  "P2P Exchange": {
    title: "P2P Exchange",
    description:
      "<p>Payslink is a trusted name in P2P trading, offering an intuitive user interface. Users can buy Bitcoin using bank transfer, PayPal, Western Union, and various gift cards, with the flexibility to choose the best rates. Transactions are swift, with cryptocurrencies delivered within minutes upon fund transfer. Sellers incur a 1% fee, while buyers enjoy fee-free transactions.</p>",
  },
  LAUNCHPAD: {
    title: "LAUNCHPAD",
    description:
      "<p>Payslink Launchpads provide an exclusive fundraising platform for startups to showcase their projects to a global network of investors, offering the opportunity to secure funding and support for their ventures. With a focus on accessibility, the only requirement for entry is participation in the vesting system, ensuring fairness and commitment to the platform's ecosystem. For investors, Payslink Launchpads offer numerous advantages, consolidating a diverse range of projects onto a single platform for streamlined access and evaluation. By becoming a launchpad member, investors gain early access to upcoming projects, granting them the advantage of securing tokens at preferential prices compared to the wider market.</p>",
  },
  Metaverse: {
    title: "Metaverse",
    description:
      "<p>Payslink introduces a virtual world where users can explore immersive 3D environments and bring their ideas to life. Convenient and secure transactions are guaranteed on the Payslink platform. Additionally, Payslink enables the conversion of virtual investment assets into real assets, enriching the user experience with a diverse utility ecosystem. The platform's expansion includes the creation of an NFT marketplace within the Metaverse, offering decentralized trading for buyers and sellers, enhancing the NFT trading experience.</p>",
  },
};

const Section10 = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Payment");

  return (
    <Wrapper>
      <Flex className="flex-box">
        <div className="background-s10">
          <Image
            src="/images/home/section10-bg.png"
            width={720}
            height={808}
            alt=""
          />
        </div>
        <div className="right-content">
          <div className="title-section">
            <span> PAYSLINK </span>
            Ecosystem
          </div>

          <Flex mt={4} className="center-menu" justifyContent="space-around">
            <Box
              className={`${selectedItem === "Payment" && "active"} menu-item`}
              onClick={() => setSelectedItem("Payment")}
            >
              Payment
            </Box>
            <Box
              className={`${
                selectedItem === "P2P Exchange" && "active"
              } menu-item`}
              onClick={() => setSelectedItem("P2P Exchange")}
            >
              P2P Exchange
            </Box>
            <Box
              className={`${
                selectedItem === "LAUNCHPAD" && "active"
              } menu-item`}
              onClick={() => setSelectedItem("LAUNCHPAD")}
            >
              LAUNCHPAD
            </Box>

            <Box
              className={`${
                selectedItem === "Metaverse" && "active"
              } menu-item`}
              onClick={() => setSelectedItem("Metaverse")}
            >
              Metaverse
            </Box>

            <Box className="line-slider" />
          </Flex>

          <div className="content-tab">
            <motion.div
              key={selectedItem}
              className="description-tab"
              dangerouslySetInnerHTML={{
                __html: data[selectedItem].description,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default Section10;
