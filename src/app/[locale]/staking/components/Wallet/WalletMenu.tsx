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

interface WalletMenuProps {
  active: string;
  setItem: (item: string) => void;
}

const WalletMenu: React.FC<WalletMenuProps> = ({ active, setItem }) => {
  return (
    <Wrapper>
      <div
        className={`menu-item hover ${
          active === "List Wallet" ? "active" : ""
        }`}
        onClick={() => setItem("List Wallet")}
      >
        List Wallet
      </div>
      <div
        className={`menu-item hover ${active === "Deposit" ? "active" : ""}`}
        onClick={() => setItem("Deposit")}
      >
        Deposit
      </div>
      <div
        className={`menu-item hover ${active === "Swap" ? "active" : ""}`}
        onClick={() => setItem("Swap")}
      >
        Swap
      </div>
      <div
        className={`menu-item hover ${
          active === "Claim Profit" ? "active" : ""
        }`}
        onClick={() => setItem("Claim Profit")}
      >
        Claim Profit
      </div>
    </Wrapper>
  );
};

export default WalletMenu;
