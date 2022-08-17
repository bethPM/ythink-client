import styled from "styled-components";

const PostContainer = styled.div`
  width: 90%;
  position: absolute;
  top: 6px;
  left: 21px;
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
  top: 49px;
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
    background-color: #fffcf4;
    text-align: right;
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
  top: 75px;
`;

const InputContainer = styled.div`
  width: 100%;

  & > input {
    width: 100%;
    height: 48px;
    font-size: 40px;
    background-color: #fffcf4;
    border: none;
    outline: none;
    font-family: Pretendard;
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 325px;
  position: absolute;
  top: 85px;

  background: #fffcf4;
  border: 3px solid #c1c6af;
  border-radius: 10px;
`;

const ThumbnailContainerActive = styled.div`
  width: 100%;
  height: 325px;
  position: absolute;
  top: 85px;

  & > img,
  & > a > img,
  & > video {
    border-radius: 10px;
    border: none;
    outline: none;
  }
`;

const ThumbnailTitle = styled.h2`
  width: 180px;
  height: 29px;
  position: absolute;
  left: 103px;
  top: 90px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #cacfd2;
`;

const ThumbnailTitle2 = styled.h2`
  width: 150px;
  height: 29px;
  position: absolute;
  left: 128px;
  top: 180px;
  font-size: 24px;
  color: #cacfd2;
`;

const TextAreaContainer = styled.div`
  width: 100%;
  height: 390px;
  position: absolute;
  top: 430px;

  & > textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    background-attachment: local;
    background-image: repeating-linear-gradient(
      #fffcf4,
      #fffcf4 30px,
      #ccc 30px,
      #ccc 31px,
      #fffcf4 31px
    );
    line-height: 31px;
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
  ThumbnailTitle,
  ThumbnailTitle2,
  TextAreaContainer,
};
