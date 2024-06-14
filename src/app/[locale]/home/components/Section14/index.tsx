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
  "/images/partners/coingecko.svg",
  "/images/partners/xt.svg",
  "/images/partners/mexc.svg",
  "/images/partners/bitmart.svg",
  "/images/partners/coingecko.svg",
  "/images/partners/xt.svg",
  "/images/partners/mexc.svg",
  "/images/partners/bitmart.svg",
];

const dataRow2 = [
  "/images/partners/coingecko.svg",
  "/images/partners/stc.svg",
  "/images/partners/bitgert.svg",
  "/images/partners/binance.svg",
  "/images/partners/coingecko.svg",
  "/images/partners/stc.svg",
  "/images/partners/bitgert.svg",
  "/images/partners/binance.svg",
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