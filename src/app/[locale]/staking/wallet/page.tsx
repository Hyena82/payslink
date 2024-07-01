"use client";
import { redirect } from "next/navigation";

const WalletPage = () => {
  redirect("/staking/wallet/list-wallet");
};

export default WalletPage;
