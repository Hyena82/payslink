"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import HomeLayout from "@/components/Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "@/state/counterSlice";
import { RootState } from "@/store/store";
import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useTranslations } from "next-intl";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .box {
    width: 200px;
    height: 200px;
    background: #fafafa;
  }
  p {
    font-family: "Familjen-Grotesk";
    font-weight: bold;
  }
`;

const HomePage = () => {
  const router = useRouter();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const t = useTranslations("Index");

  return (
    <HomeLayout>
      <Wrapper>
        <h1>{t("title")}</h1>
        <h1>{t("description")}</h1>

        <Box height={400} position="relative">
          <Image
            src="/images/dev-black.png"
            style={{
              objectFit: "cover",
            }}
            sizes="100vw"
            fill
            alt="Picture of the author"
          />
        </Box>

        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <button
              aria-label="Decrement value"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              increase by 5
            </button>
          </div>
        </div>
      </Wrapper>
    </HomeLayout>
  );
};

export default HomePage;
