import styled from "styled-components";

const PostContainer = styled.div`
  width: 88%;
  position: absolute;
  top: 6px;
  left: 28px;
  font-family: Pretendard;
  font-weight: lighter;
`;

const PostHeader = styled.header``;

const PostFeatureIcons = styled.div`
  position: absolute;
  right: 0px;

  & > .MuiIconButton-root:last-child {
    padding-right: 0px;
  }
`;

const PostHeaderBottom = styled.div`
  width: 100%;
  position: absolute;
  top: 58px;
  display: flex;
`;

const Date = styled.span``;

const PostHeadeWeatherIcons = styled.div`
  position: absolute;
  top: -9px;
  right: 0px;

  & > input {
    width: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: Pretendard;
  }

  & > input::-webkit-inner-spin-button,
  & > input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > .MuiIconButton-root:last-child {
    padding-right: 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 87px;
`;

const InputContainer = styled.div`
  width: 100%;

  & > input {
    width: 100%;
    height: 46px;
    font-size: 40px;
    background-color: #ffffff;
    border: none;
    outline: none;
  }
`;

const ThumbnailContainer = styled.div`
  width: 384px;
  height: 325px;
  position: absolute;
  top: 85px;

  background: #fffcf4;
  border: 3px solid #c1c6af;
  border-radius: 10px;
`;

const ThumbnailContainerActive = styled.div`
  width: 100%;
  height: 350px;
  position: absolute;
  top: 51px;

  & > img,
  & > a > img,
  & > video {
    border-radius: 10px;
    border: none;
    outline: none;
  }
`;

const NotThumbnailTextAreaContainer = styled.div`
  width: 100%;
  height: 770px;
  position: absolute;
  top: 51px;

  & > textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: Pretendard;
  }
`;

const TextAreaContainer = styled.div`
  width: 100%;
  height: 410px;
  position: absolute;
  top: 410px;

  & > textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    background-color: #ffffff;
    border: none;
    outline: none;
    font-family: Pretendard;
  }
`;

export {
  PostContainer,
  PostHeader,
  PostFeatureIcons,
  PostHeaderBottom,
  Date,
  PostHeadeWeatherIcons,
  Content,
  InputContainer,
  ThumbnailContainer,
  ThumbnailContainerActive,
  NotThumbnailTextAreaContainer,
  TextAreaContainer,
};
