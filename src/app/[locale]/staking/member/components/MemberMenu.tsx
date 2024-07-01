import { Flex } from "@/components/Box";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }

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
    flex: 1;

    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    &.active {
      background: rgba(35, 226, 221, 1);
      color: rgba(0, 0, 0, 1);
    }

    &:not(:last-child) {
      margin-right: 20px;
      @media (max-width: 768px) {
        margin-right: 10px;
      }
    }
  }
`;

const MemberMenu = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "Member Referral", href: "/staking/member/referral" },
    { name: "Member Tree", href: "/staking/member/tree" },
    { name: "Transfer", href: "/staking/member/transfer" },
    { name: "Transfer History", href: "/staking/member/history" },
  ];

  return (
    <Wrapper>
      <Flex>
        {tabs.map((tab) => (
          <Link
            href={tab.href}
            key={tab.name}
            className={`menu-item hover ${
              pathname === tab.href ? "active" : ""
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </Flex>
    </Wrapper>
  );
};
export default MemberMenu;
