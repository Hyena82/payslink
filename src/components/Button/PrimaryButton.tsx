import styled from "styled-components";
import { Box } from "../Box";
import { DownArrow, Staking, WhiteStaking } from "../Svg";
import Image from "next/image";
import React from "react";

const Wrapper = styled.div`
  .read-more-button {
    cursor: pointer;
    width: fit-content;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 1);
    color: #fff;
    text-align: center;
    align-items: center;

    text-transform: uppercase;

    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    padding: 9px;

    position: relative;
    overflow: hidden;

    span {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      transform: translateX(-100%);
      transition: transform 275ms ease;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      overflow: hidden;
      &::before {
        content: attr(data-content);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        height: 100%;
        background: var(--gradient);
        color: #fff;
        transform: translateX(100%);
        transition: transform 275ms ease;
      }
    }

    &.is-fromIcon {
      &:hover .icon-button {
        background: unset;
        .show-icon {
          display: flex;
        }
      }
      .icon-button {
        background: unset;
      }
    }

    &.is-no-icon {
      padding: 9px 9px;

      span {
        &::before {
          justify-content: flex-start;
          padding-left: 10px;
        }
      }

      &:hover > span {
        &::before {
          justify-content: flex-start;
          padding-left: 10px;
        }
      }
    }

    .icon-button {
      background: var(--gradient);
      z-index: 2;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;

      .show-icon {
      }

      .is-image {
        display: none;
      }
    }

    .arrow-button {
      z-index: 2;

      margin-left: 10px;
      width: 20px;
      height: 23px;
      path {
      }
    }

    &:hover {
      border: 1px solid transparent;
      color: #000;

      .icon-button {
        background: #000;

        .show-icon {
          display: none;
        }

        .is-image {
          display: flex;
        }

        svg rect {
          fill: #fff;
        }
      }

      .arrow-button {
        path {
          fill: #d9d9d9;
        }
      }

      span {
        transform: translateX(0);

        &::before {
          transform: translateX(0);
          color: #000;
        }
      }
    }
  }
`;

interface PrimaryButtonProps {
  children: React.ReactNode;
  icon?: string;
  activeIcon?: string;
  fromIcon?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  activeIcon,
  fromIcon,
}) => {
  const WIDTH = fromIcon ? 30 : 18;
  return (
    <Wrapper>
      <Box
        className={`${!icon && "is-no-icon"} ${
          fromIcon && "is-fromIcon"
        } read-more-button flex`}
      >
        {icon && (
          <div className={`${activeIcon && "is-image"} icon-button center`}>
            <div className="show-icon center">
              {icon && <Image src={icon} width={WIDTH} height={WIDTH} alt="" />}{" "}
            </div>

            {activeIcon && (
              <div className="is-image center">
                {<Image src={activeIcon} width={WIDTH} height={WIDTH} alt="" />}
              </div>
            )}
          </div>
        )}

        <span data-content={children} aria-hidden="true" />

        {children}

        <DownArrow className="arrow-button" />
      </Box>
    </Wrapper>
  );
};

export default PrimaryButton;
