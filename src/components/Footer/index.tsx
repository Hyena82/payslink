import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

const Wrapper = styled.div``;

const Header = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return <Wrapper>Header {count}</Wrapper>;
};

export default Header;
