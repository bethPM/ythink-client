import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > .MuiButtonBase-root {
    padding-right: 0px;
  }
`;

const SubTitle = styled.h5`
  line-height: 42px;
`;

export { Header, Title, HeaderRight, SubTitle };
