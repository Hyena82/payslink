import { Box } from "@/components/Box";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  background-color: rgba(10, 9, 16, 0.8);
  border-radius: 70px;
  width: 113px;
  position: relative;
  height: 810px;

  .gradient-border {
    background-color: rgba(255, 255, 255, 0.1);
    width: 100%;
    height: 100%;
    inset: 0;
    border-width: 1.5px;
    --b: 1.5px;
    color: #313149;
    z-index: 0;
    overflow: hidden;
    display: none;
    border-radius: 45.5px;
    position: absolute;
    transition: all 0.2s ease-in-out;

    &:before {
      content: "";
      position: absolute;
      z-index: -2;
      inset: 0;
      background: var(--c, linear-gradient(90deg, #0093fe 0%, #50ffd5 100%));
      padding: var(--b);
      border-radius: inherit;
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  .item-menu {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* padding: 16px 34px; */
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s;
    border-radius: 45.5px;
    margin: 10px;
    height: 123px;
    width: 89px;
    position: relative;

    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: rgba(122, 122, 122, 1);
    transition: all 0.2s ease-in-out;

    &:hover:not(.active) {
      transition: all 0.2s ease-in-out;

      .gradient-border {
        transition: all 0.2s ease-in-out;

        display: block;
      }
    }

    &.active {
      background-color: rgba(0, 0, 0, 1);
      border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    }

    & > svg path {
      /* fill: rgba(122, 122, 122, 1); */
    }
  }
`;

const StakingMenu = () => {
  const dataMenu = [
    {
      title: "Dashboard",
      url: "/staking/dashboard",
      nameIcon: "dashboard",
    },
    {
      title: "Wallet",
      url: "/staking/wallet",
      nameIcon: "wallet",
    },
    {
      title: "Investment Pool",
      url: "/staking/investment-pool",
      nameIcon: "investment",
    },
    {
      title: "Member Team",
      url: "/staking/member",
      nameIcon: "team",
    },
    {
      title: "History",
      url: "/staking/history",
      nameIcon: "history",
    },
    {
      title: "Profile",
      url: "/staking/profile",
      nameIcon: "profile",
    },
  ];
  const pathname = usePathname();

  return (
    <Wrapper>
      {dataMenu.map((item, index) => (
        <Link
          className={`${pathname.startsWith(item.url) && "active"} item-menu `}
          key={index}
          href={item.url}
        >
          <Box className="gradient-border"></Box>
          <Image
            src={`/images/staking/menu/${
              pathname.startsWith(item.url) ? "active-" : ""
            }${item.nameIcon}.svg`}
            width={30}
            height={30}
            alt=""
          />
          <Box mt={2} className="">
            {" "}
            {item.title}
          </Box>
        </Link>
      ))}
    </Wrapper>
  );
};

export default StakingMenu;
