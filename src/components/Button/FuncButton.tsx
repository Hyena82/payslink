import styled from "styled-components";

const Wrapper = styled.div<{ color?: string; width?: string }>`
  background-color: rgba(56, 56, 70, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  padding: 15px 50px;
  border-radius: 70px;
  color: ${(props) => (props ? props.color : "rgba(92, 92, 92, 1)")};

  @media (max-width: 768px) {
    padding: 12.5px 30px;
  }

  &.size-s {
    padding: 9px 24px;
    font-size: 14px;
  }
`;

interface FuncButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
  width?: string;
}

const FuncButton: React.FC<FuncButtonProps> = ({
  children,
  className,
  onClick,
  color,
  width,
}) => {
  return (
    <Wrapper
      color={color}
      width={width}
      onClick={onClick}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

export default FuncButton;
