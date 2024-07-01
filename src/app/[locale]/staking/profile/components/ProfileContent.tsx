import { useState } from "react";
import styled from "styled-components";
import ProfileMenu from "./ProfileMenu";
import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { Col, Row, message } from "antd";
import SubmitButton from "@/components/Button/SubmitButton";

const Wrapper = styled.div`
  color: #fff;

  .lable {
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
    @media (max-width: 768px) {
      padding: 10px 20px;
    }
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
    margin-left: auto;
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

const ProfileContent = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Profile");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleDelete = () => {
    setImagePreviewUrl("");
  };

  const showError = (content: string) => {
    messageApi.open({
      type: "error",
      content,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    const fileType = file.type;
    const fileSize = file.size / 1024 / 1024; // Convert bytes to MB

    // Check if the file type is JPEG, PNG, or GIF
    if (!["image/jpeg", "image/png", "image/gif"].includes(fileType)) {
      showError("File must be a JPEG, PNG, or GIF.");
      return;
    }

    // Check if the file size exceeds 10MB
    if (fileSize > 10) {
      showError("File cannot exceed 10MB.");
      return;
    }

    let reader = new FileReader();

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Wrapper>
      {contextHolder}
      <Row gutter={[20, 20]}>
        <Col sm={8} xs={24}>
          <Flex flexDirection="column" className="h-100">
            <div className="title">Avatar</div>
            <Box className="body-content ">
              <Flex
                flexDirection="column"
                alignItems="center"
                className="box-content"
              >
                <Box className="avatar-box">
                  {imagePreviewUrl ? (
                    <Image
                      src={imagePreviewUrl}
                      alt="Preview"
                      width={150}
                      height={150}
                      quality={100}
                    />
                  ) : (
                    <Image
                      src="/images/staking/avatar-full.png"
                      alt=""
                      width={150}
                      height={150}
                      quality={100}
                    />
                  )}
                  <Image
                    className="gradient"
                    src="/images/icons/gradient-border.svg"
                    alt=""
                    fill
                  />
                </Box>
                <Flex justifyContent="space-between" alignItems="center" my={3}>
                  <Flex className="upload hover" mr={4}>
                    <Image
                      src="/images/icons/upload.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <Box ml={2}>Upload Profile Picture</Box>

                    <input type="file" onChange={handleImageChange} />
                  </Flex>
                  <Box className="hover" onClick={handleDelete}>
                    <Image
                      src="/images/icons/delete.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </Box>
                </Flex>
                <p className="desc">
                  Must be JPEG, PNG, or GIF and cannot exceed 10MB.
                </p>
              </Flex>
              {activeMenuItem === "Change Password" && (
                <Box className="box-content">
                  <div className="lable">Old Password</div>
                  <input
                    className="input-text"
                    type="password"
                    placeholder="Old Password"
                  />
                  <div className="lable">New Password</div>
                  <input
                    className="input-text"
                    type="password"
                    placeholder="New Password"
                  />
                  <div className="lable">Confirm Password</div>
                  <input
                    className="input-text"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Box>
              )}
            </Box>
          </Flex>
        </Col>

        <Col sm={16} xs={24}>
          <div className="title">Information</div>
          <Box className="body-content">
            <Box className="box-content">
              <div className="lable">User Name</div>
              <input
                className="input-text"
                type="text"
                placeholder="Enter User Name"
              />
              <div className="lable">Full Name</div>
              <input
                className="input-text"
                type="text"
                placeholder="Enter Full Name"
              />
              <div className="lable">Phone Number</div>
              <input
                className="input-text"
                type="text"
                placeholder="Enter Phone Number"
              />
              <div className="lable">Email Address</div>
              <input
                className="input-text"
                type="email"
                placeholder="Enter Email"
              />
            </Box>
          </Box>
        </Col>
      </Row>

      <SubmitButton className="custom-button">Save Changes</SubmitButton>
    </Wrapper>
  );
};

export default ProfileContent;
