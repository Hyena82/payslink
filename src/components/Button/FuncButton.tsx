import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(56, 56, 70, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  width: fit-content;
  padding: 15px 50px;
  border-radius: 70px;
  color: rgba(92, 92, 92, 1);

  &.size-s {
    padding: 9px 24px;
    font-size: 14px;
  }
`;

interface FuncButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const FuncButton: React.FC<FuncButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};

export default FuncButton;
