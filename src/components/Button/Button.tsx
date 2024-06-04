import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div`
  padding: 8px 13px 8px 13px;
  gap: 10px;
  border-radius: 30px;
  color: #000;

  font-family: Trap;
  font-size: 14px;
  font-weight: 700;
  line-height: 15.4px;
  text-align: left;
  cursor: pointer;

  background: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
  transition: box-shadow 0.3s ease, color 0.3s ease; // Add this line

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(80, 255, 213, 1);
    color: #fff;
  }
`;

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Button;
