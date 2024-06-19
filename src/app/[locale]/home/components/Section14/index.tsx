import styled from "styled-components";
import PartnerCard from "./PartnerCard";
import { Box } from "@/components/Box";
import { motion } from "framer-motion";
import { SECTIONS } from "@/configs/constants";
import InviewBox from "@/components/InViewBox";

const Wrapper = styled.div`
  margin-top: 50px;
  .row-data {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
  }

  .marquee {
    display: flex;
  }
`;

const dataRow1 = [
  "/images/partners/xt.svg",
  "/images/partners/coingecko.svg",
  "/images/partners/stc.svg",
  "/images/partners/bitgert.svg",
  "/images/partners/binance.svg",

  "/images/partners/Gbox.svg",
  "/images/partners/ibm.svg",
  "/images/partners/diviner.svg",

  "/images/partners/xt.svg",
  "/images/partners/coingecko.svg",
  "/images/partners/stc.svg",
  "/images/partners/bitgert.svg",
  "/images/partners/binance.svg",

  "/images/partners/Gbox.svg",
  "/images/partners/ibm.svg",
  "/images/partners/diviner.svg",
];

const dataRow2 = [
  "/images/partners/mexc.svg",
  "/images/partners/bitmart.svg",
  "/images/partners/metamask.svg",
  "/images/partners/light.svg",

  "/images/partners/Celestloan.svg",
  "/images/partners/BinanceLive.svg",
  "/images/partners/3sWallet.svg",

  "/images/partners/mexc.svg",
  "/images/partners/bitmart.svg",
  "/images/partners/metamask.svg",
  "/images/partners/light.svg",

  "/images/partners/Celestloan.svg",
  "/images/partners/BinanceLive.svg",
  "/images/partners/3sWallet.svg",
];

const Section14 = () => {
  return (
    <Wrapper className="relative" id={SECTIONS[12]}>
      <InviewBox section={SECTIONS[12]} />
      <Box className="row-data" mb="-1px">
        <motion.div
          className="marquee"
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {dataRow1.map((item, index) => (
            <PartnerCard key={index} imageSrc={item} />
          ))}
          {dataRow1.map((item, index) => (
            <PartnerCard key={index + dataRow1.length} imageSrc={item} />
          ))}
        </motion.div>
      </Box>

      <Box className="row-data">
        <motion.div
          className="marquee"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {dataRow2.map((item, index) => (
            <PartnerCard key={index} imageSrc={item} />
          ))}
          {dataRow2.map((item, index) => (
            <PartnerCard key={index + dataRow2.length} imageSrc={item} />
          ))}
        </motion.div>
      </Box>
    </Wrapper>
  );
};

export default Section14;
