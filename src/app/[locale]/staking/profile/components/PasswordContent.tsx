import { useState } from "react";
import styled from "styled-components";
import { Box, Flex } from "@/components/Box";
import { Col, Row, message } from "antd";
import SubmitButton from "@/components/Button/SubmitButton";

const Wrapper = styled.div`
  color: #fff;

  .label {
    font-family: Manrope;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: rgba(35, 226, 183, 1);
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .body-content {
    flex: 1;
  }

  .box-content {
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    padding: 20px 20px 40px;
    border-radius: 20px;
    background-color: rgba(10, 9, 16, 1);
    height: 100%;
  }

  .avatar-box {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    .gradient {
      position: absolute;
      z-index: 2;
      inset: 0;
    }
  }

  .upload {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    background-color: rgba(56, 56, 70, 1);
    padding: 15px 32px;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      opacity: 0;
      cursor: pointer;
    }
  }

  .title {
    font-family: Trap;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
    margin-bottom: 20px;
  }

  .desc {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    max-width: 253px;
    color: rgba(167, 164, 164, 1);
  }

  .custom-button {
    width: 157px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 20px;
  }

  .input-text {
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    background-color: rgba(37, 37, 37, 1);
    padding: 15px 22px;
    outline: none;
    border-radius: 10px;
    height: 63px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #fff;
    width: 100%;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    @media (max-width: 768px) {
      padding: 0 15px;
      display: flex;
      align-items: center;
      height: 53px;
    }

    &::placeholder {
      color: rgba(92, 92, 92, 1);
    }

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &:focus {
      border-color: #40a9ff; /* Ant Design's focus border color */
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Ant Design's focus shadow */
    }
  }
`;

const PasswordContent = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const showError = (content: string) => {
    messageApi.open({
      type: "error",
      content,
    });
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      showError("New Password and Confirm Password do not match.");
      return;
    }
    // Add logic to change password here
    // This is where you would call your API to change the password
    console.log("Password changed successfully.");
    message.success("Password changed successfully.");
  };

  return (
    <Wrapper>
      {contextHolder}
      <Row gutter={[20, 20]}>
        <Col sm={10} xs={24}>
          <div className="title">Change password</div>
          <Box className="body-content">
            <Box className="box-content">
              <div className="label">Current Password</div>
              <input
                className="input-text"
                type="password" // Changed type to password
                placeholder="Enter Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div className="label">New Password</div>
              <input
                className="input-text"
                type="password" // Changed type to password
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="label">Confirm Password</div>
              <input
                className="input-text"
                type="password" // Changed type to password
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>
          </Box>
        </Col>
      </Row>

      <SubmitButton className="custom-button" onClick={handleChangePassword}>
        Save Changes
      </SubmitButton>
    </Wrapper>
  );
};

export default PasswordContent;
