"use client";
import styled from "styled-components";

import { redirect } from "next/navigation";

const Wrapper = styled.div`
  padding-left: 85px;
`;

const MemberPage = () => {
  redirect("/staking/member/referral");
};

export default MemberPage;
