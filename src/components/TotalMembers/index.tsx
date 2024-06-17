import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid rgba(53, 53, 57, 1);
  padding: 18px 95px;
  font-family: Metrophobic;
  font-size: 18px;
  font-weight: 400;
  line-height: 22.19px;
  text-align: left;
  width: fit-content;
  border-radius: 100px;
  color: var(--Color-2, rgba(35, 226, 183, 1));
  @media (max-width: 768px) {
    padding: 19px 0;
    width: 267px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: center;
  }
  text-transform: uppercase;
`;

interface TotalMembersProps {
  text: string;
}

const TotalMembers: React.FC<TotalMembersProps> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default TotalMembers;
