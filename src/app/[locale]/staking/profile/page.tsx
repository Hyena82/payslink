"use client";
import { useState } from "react";
import styled from "styled-components";
import ProfileMenu from "./components/ProfileMenu";
import { Box, Flex } from "@/components/Box";
import ProfileContent from "./components/ProfileContent";
import PasswordContent from "./components/PasswordContent";

const Wrapper = styled.div`
  padding: 20px;
  color: #fff;
`;

const Profile = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Profile");

  return (
    <Wrapper>
      <ProfileMenu active={activeMenuItem} setItem={setActiveMenuItem} />
      <Box mt={4}>{activeMenuItem === "Profile" && <ProfileContent />}</Box>
      <Box mt={4}>
        {activeMenuItem === "Change Password" && <PasswordContent />}
      </Box>
    </Wrapper>
  );
};

export default Profile;
