import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .menu-item {
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    width: 140px;
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

interface MemberMenuProps {
  active: string;
  setItem: (item: string) => void;
}

const MemberMenu: React.FC<MemberMenuProps> = ({ active, setItem }) => {
  return (
    <Wrapper>
      <div
        className={`menu-item hover ${
          active === "Member Referral" ? "active" : ""
        }`}
        onClick={() => setItem("Member Referral")}
      >
        Member Referral
      </div>
      <div
        className={`menu-item hover ${
          active === "Member Tree" ? "active" : ""
        }`}
        onClick={() => setItem("Member Tree")}
      >
        Member Tree
      </div>
      <div
        className={`menu-item hover ${active === "Transfer" ? "active" : ""}`}
        onClick={() => setItem("Transfer")}
      >
        Transfer
      </div>
      <div
        className={`menu-item hover ${
          active === "Transfer History" ? "active" : ""
        }`}
        onClick={() => setItem("Transfer History")}
      >
        Transfer History
      </div>
    </Wrapper>
  );
};

export default MemberMenu;
