import styled from "styled-components";

const Wrapper = styled.div`
  background: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
  border-radius: 30px;
  font-family: Manrope;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  padding: 15px 0;
  width: 100%;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    padding: 12px 0;
  }

  &:hover {
    color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(80, 255, 213, 1);
  }
`;

interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default SubmitButton;
