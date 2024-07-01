import { Box, Flex } from "@/components/Box";
import { Col, Progress, Row } from "antd";
import CountUp, { useCountUp } from "react-countup";

import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  font-family: Manrope;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }

  .box-item {
    background: rgba(10, 9, 16, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    padding: 17px 20px;
    border-radius: 16px;

    @media (max-width: 768px) {
      padding: 10px;
      height: 100%;
    }
  }

  .thumbnail {
    padding: 34px 42px;
    background: url("/images/staking/thumbnail.png") no-repeat center center;
    background-size: cover;

    @media (max-width: 768px) {
      padding: 20px;
      background-position: 80% 50%;
    }

    .text {
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
    }

    .title {
      font-family: Manrope;
      font-size: 36px;
      font-weight: 400;
      line-height: 44px;
      text-align: left;
      color: rgba(35, 226, 183, 1);
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .desc {
      font-family: Manrope;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      color: rgba(167, 164, 164, 1);
      max-width: 334px;
      width: 100%;
    }

    .button {
      background: var(--Neutral-900, rgba(23, 20, 35, 1));
      font-family: Manrope;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      text-align: left;
      padding: 10px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--Neutral-700, rgba(36, 35, 50, 1));
      border-radius: 70px;

      @media (max-width: 768px) {
        padding: 10px;
      }

      p {
        margin-left: 10px;
      }
      img {
        background: rgba(36, 35, 50, 1);
        border-radius: 50%;
      }
    }
  }

  .progress-bar {
    .title {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      margin-bottom: 1.5rem;
      span {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        text-align: right;
        color: rgba(35, 226, 221, 1);
      }
    }

    .detail {
      margin-top: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      .detail-box {
        margin-top: 10px;
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        text-align: left;
        color: rgba(35, 226, 183, 1);
        white-space: nowrap;

        p {
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          text-align: left;
        }
      }
    }

    .ant-progress .ant-progress-inner {
      background: rgba(36, 35, 50, 1);
    }
    .ant-progress .ant-progress-bg {
      background: var(--gradient);
    }
  }

  .detail-data {
    margin: 20px 0;
    .value-data {
      //styleName: Body/Medium/02;
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      }

      & .value-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        text-align: left;
        color: rgba(35, 226, 183, 1);
        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }

  .refer-us {
    padding: 25px 20px;

    p {
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
    }

    span {
      font-family: Manrope;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      text-align: right;
      color: rgba(35, 155, 226, 1);
      &.percent {
        color: rgba(167, 164, 164, 1);
      }
    }

    .data-content {
      .no-data-text {
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        color: rgba(122, 122, 122, 1);
      }
    }

    .copy-text {
      margin-top: 1rem;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: rgba(35, 155, 226, 1);
      padding: 23px 20px;
      width: 100%;
      border-radius: 16px;
      border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        padding: 10px;
      }

      p {
        margin: 0 8px;
        width: 100%;
        @media (max-width: 768px) {
          width: 80%;
          word-wrap: break-word;
        }
      }
    }
  }
`;

const Button = styled.div`
  background-color: rgba(56, 56, 70, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  width: fit-content;
  padding: 15px 50px;
  border-radius: 70px;
  color: rgba(92, 92, 92, 1);

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  &.size-s {
    padding: 9px 24px;
    font-size: 14px;
  }
`;

const DashboardContent = () => {
  const progress = 50;

  const data = [
    {
      title: "Volume Network",
      value: "$ 0",
      image: "/images/staking/volume.svg",
    },
    {
      title: "Token Profit",
      value: "$ 0",
      image: "/images/staking/token-profit.svg",
    },
    {
      title: "Total Earn",
      value: "0 PAYS",
      image: "/images/staking/volume.svg",
      icon: "/images/token/pays.png",
    },
    {
      title: "Total Investment",
      value: "$ 0",
      image: "/images/staking/total.svg",
    },

    {
      title: "Total member",
      value: "0",
      image: "/images/staking/total-member.svg",
    },

    {
      title: "Withdrawal",
      value: "0 PAYS",
      image: "/images/staking/volume.svg",
      icon: "/images/token/pays.png",
      button: "Withdraw",
    },
  ];

  return (
    <Wrapper>
      <Row gutter={[20, 20]}>
        <Col span={24} sm={18}>
          <div className="box-item thumbnail">
            <p className="text">Welcome back</p>

            <p className="title">Payslink user name</p>
            <p className="desc">
              Enjoy profitable yield farming and exchanging with the lowest fees
              in DeFi space!
            </p>

            <Flex mt={4}>
              <Box className="button">
                <Image
                  src="/images/staking/trade-fee.png"
                  width={40}
                  height={40}
                  alt=""
                  quality={100}
                />
                <Box width={88}>
                  <p>The Lowest Trade Fee</p>
                </Box>
              </Box>

              <Box className="button" ml={3}>
                <Image
                  src="/images/staking/exchange-fee.png"
                  width={40}
                  height={40}
                  alt=""
                  quality={100}
                />
                <Box width={108}>
                  <p>Exchange Fee Reimbursement</p>
                </Box>
              </Box>
            </Flex>
          </div>
        </Col>

        <Col span={24} sm={6}>
          <div className="progress-bar box-item h-100">
            <Flex className="title" justifyContent="space-between">
              Token sale progress
              <span>{progress.toFixed(2)}%</span>
            </Flex>

            <Progress
              percent={progress}
              showInfo={false}
              status="active"
              size={["100%", 11]}
            />

            <Flex className="detail" justifyContent="space-between">
              <Box className="detail-box">
                <p>Price</p>

                <div>0.70 USDT</div>
              </Box>

              <Box className="detail-box">
                <p>Total</p>

                <div>0 PAYS</div>
              </Box>

              <Box className="detail-box">
                <p>Sold Amount</p>

                <div>12,000,000 PAYS</div>
              </Box>
            </Flex>

            <Flex mt={4} justifyContent="center" className="w-100">
              <Button>
                <p>Buy token</p>
              </Button>
            </Flex>
          </div>
        </Col>
      </Row>

      <Row
        gutter={[
          { sm: 20, xs: 10 },
          { sm: 20, xs: 10 },
        ]}
        className="detail-data"
      >
        {data.map((item, index) => (
          <Col
            sm={8}
            span={
              index === data.length - 1 || index === data.length - 2 ? 24 : 12
            }
            key={index}
          >
            <Flex className="box-item">
              <Image src={item.image} width={60} height={60} alt="" />
              <Box className="value-data" ml={3}>
                <p>{item.title}</p>
                <Flex alignItems="center">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      width={30}
                      height={30}
                      quality={100}
                      alt=""
                    />
                  )}
                  <p className="value-text">{item.value}</p>
                </Flex>
              </Box>
              {item.button && (
                <Flex alignItems="center" justifyContent="flex-end">
                  <Button className="size-s"> {item.button} </Button>
                </Flex>
              )}
            </Flex>
          </Col>
        ))}
      </Row>

      <Row gutter={[20, 20]}>
        <Col span={24} sm={8}>
          <Box className="box-item refer-us h-100">
            <Flex justifyContent="space-between">
              <p>Refer Us & Earn</p>

              <span className="hover">See All</span>
            </Flex>

            <Flex
              className="data-content"
              justifyContent="center"
              alignItems="center"
            >
              <Box className="no-data-text" pt={4} pb={2}>
                There is no record
              </Box>
            </Flex>
          </Box>
        </Col>

        <Col span={24} sm={16}>
          <Box className="box-item refer-us">
            <Flex justifyContent="space-between">
              <p>Refer Us & Earn</p>

              <span className="percent">50.00%</span>
            </Flex>

            <Flex justifyContent="center" alignItems="center">
              <Flex className="copy-text" pt={4} pb={2} alignItems="center">
                <Image
                  src="/images/icons/link.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <p className="hover">
                  https://payslinks.com/auth/sign-up?ref=1962
                </p>
                <Box className="hover center">
                  <Image
                    src="/images/icons/copy.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DashboardContent;
