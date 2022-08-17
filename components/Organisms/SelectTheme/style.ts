import styled from "styled-components";

const SelectThemeContainer = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 1000;
  text-align: center;
`;

const SelectThemeTitle = styled.h1`
  margin-top: 30px;
  font-weight: unset;
  color: white;
`;

const SelectThemeSubTitle = styled.h3`
  margin-top: 20px;
  font-weight: unset;
  color: white;
`;

const SelectTheme = styled.div`
  width: 100%;
  height: 80%;

  & > .flicking-viewport {
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > .flicking-camera {
      width: 651px;
      height: 100%;
      display: flex;
    }
  }
`;

const Theme = styled.div`
  height: 30%;
  display: flex;
  alignitems: flex-start;

  width: 100%;
  height: 100%;
  margin: 30px 10px;
  cursor: pointer;

  & > img {
    width: 217px !important;
    height: 472px !important;
  }
`;

const ThemeBtn = styled.button`
  position: absolute;
  width: 357px;
  height: 84px;
  left: 35px;
  top: 650px;
  background-color: #909090;
  border-radius: 30px;

  font-size: 25px;
  color: white;
`;

export {
  SelectThemeContainer,
  SelectThemeTitle,
  SelectThemeSubTitle,
  SelectTheme,
  Theme,
  ThemeBtn,
};
