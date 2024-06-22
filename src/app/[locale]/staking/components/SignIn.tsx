import { Box } from "@/components/Box";
import SubmitButton from "@/components/Button/SubmitButton";
import TextInput from "@/components/Input/TextInput";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 58px);

  .sign-in-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 520px;
    position: relative;
    z-index: 10;

    justify-content: center;

    .title-box {
      font-family: Trap;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      text-align: left;
    }

    .lable-input {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;
      color: rgba(35, 226, 183, 1);
    }

    .invalid-value {
      margin-top: 10px;
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: rgba(255, 55, 55, 1);
    }
  }

  .blur-box {
    background: linear-gradient(278.24deg, #08cdda 39.63%, #1af7a8 108.26%);
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    transform: translate(-40%, 50%);
    width: 850px;
    height: 550px;
    border-radius: 50%;
    filter: blur(350px);
  }

  .blur-box-top {
    background: linear-gradient(278.24deg, #08cdda 39.63%, #1af7a8 108.26%);
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    transform: translate(20%, -50%);
    width: 850px;
    height: 450px;
    border-radius: 50%;
    filter: blur(270px);
  }

  .bg {
    position: fixed;
    z-index: 1;
    bottom: -30%;
    right: -15%;
    width: calc(1020px + 10vw);
    height: calc(1020px + 10vw);
  }
`;
interface SignInProps {
  setIsLogIn: (value: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ setIsLogIn }) => {
  const [email, setEmailValue] = useState("");
  const [password, setPasswordValue] = useState("");

  return (
    <Wrapper>
      <div className="container h-100">
        <div className="sign-in-box h-100">
          <div className="title-box">
            <p className="title-section">
              <span>Sign in</span>
            </p>
            <Box mt={3}>Welcome back! Please enter your details.</Box>
          </div>

          <Box mb={2} mt={4} className="lable-input">
            Email
          </Box>

          <TextInput
            value={email}
            onChange={setEmailValue}
            placeholder="Enter Your Email"
          />

          <Box className="invalid-value">Invalid email address</Box>

          <Box mt={4} mb={2} className="lable-input">
            Password
          </Box>

          <TextInput
            value={password}
            onChange={setPasswordValue}
            placeholder="Enter Your Password"
            isPassword
          />

          <Box mt={4}>
            <SubmitButton onClick={() => setIsLogIn(true)}>
              Sign in
            </SubmitButton>
          </Box>
        </div>

        <div className="blur-box-top" />
        <div className="blur-box" />

        <div className="bg">
          <Image
            src="/images/staking/sign-in-bg.png"
            sizes="100%"
            quality={100}
            fill
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
