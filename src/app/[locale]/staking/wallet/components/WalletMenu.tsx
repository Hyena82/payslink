import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .menu-item {
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    width: 120px;
    height: 42px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 1);

    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    &.active {
      background: rgba(35, 226, 221, 1);
      color: rgba(0, 0, 0, 1);
    }

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const WalletMenu = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "List Wallet", href: "/staking/wallet/list" },
    { name: "Deposit", href: "/staking/wallet/deposit" },
    { name: "Swap", href: "/staking/wallet/swap" },
    { name: "Claim Profit", href: "/staking/wallet/claim-profit" },
    { name: "Withdraw", href: "/staking/wallet/withdraw" },
  ];

  return (
    <Wrapper>
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.name}
          className={`menu-item hover ${pathname === tab.href ? "active" : ""}`}
        >
          {tab.name}
        </Link>
      ))}
    </Wrapper>
  );
};

export default WalletMenu;
