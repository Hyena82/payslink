"use client";
import HomePage from "./home/page";
import StoreProvider from "../StoreProvider";

const Home = () => {
  return (
    <main>
      <StoreProvider>
        <HomePage />
      </StoreProvider>
    </main>
  );
};

export default Home;
