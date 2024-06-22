import { Box } from "@/components/Box";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  background-color: rgba(10, 9, 16, 0.8);
  border-radius: 70px;
  width: 113px;
  position: relative;

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

interface IStakingMenu {
  value: string;
  onChange: (value: string) => void;
}

const StakingMenu: React.FC<IStakingMenu> = ({ value, onChange }) => {
  const dataMenu = [
    {
      title: "Dashboard",
      url: "/staking",
      nameIcon: "dashboard",
    },
    {
      title: "Wallet",
      url: "/staking",
      nameIcon: "wallet",
    },
    {
      title: "Investment Pool",
      url: "/staking",
      nameIcon: "investMent",
    },
    {
      title: "Member Team",
      url: "/staking",
      nameIcon: "team",
    },
    {
      title: "History",
      url: "/staking",
      nameIcon: "history",
    },
    {
      title: "Profile",
      url: "/staking",
      nameIcon: "profile",
    },
  ];

  return (
    <Wrapper>
      {dataMenu.map((item, index) => (
        <Box
          onClick={() => onChange(item.title)}
          className={`${item.title === value && "active"} item-menu `}
          key={index}
        >
          <Box className="gradient-border"></Box>
          <Image
            src={`images/staking/menu/${item.title === value ? "active-" : ""}${
              item.nameIcon
            }.svg`}
            width={30}
            height={30}
            alt=""
          />
          <Box mt={2} className="">
            {" "}
            {item.title}
          </Box>
        </Box>
      ))}
    </Wrapper>
  );
};

export default StakingMenu;
