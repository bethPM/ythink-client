import styled from "styled-components";

const Header = styled.header`
  dispaly: flex;
`;

const Title = styled.h1`
  position: absolute;
  width: 89px;
  height: 29px;
  top: 26px;
  left: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

const HeaderRight = styled.div``;

const SubTitle = styled.h5`
  position: absolute;
  width: 209px;
  height: 13px;
  left: 228px;
  top: 30px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: #3b3b3b;
`;

const Content = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  position: absolute;
  width: 155px;
  height: 172px;
  left: 145px;
  top: 217px;
`;

const SigninTitle = styled.h3`
  position: absolute;
  width: 183px;
  height: 29px;
  left: 135px;
  top: 452px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #3b3b3b;
`;

const SignInTitleEng = styled.h5`
  position: absolute;
  width: 200px;
  height: 17px;
  left: 127px;
  top: 489px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #909090;
`;

const KakaoSignInBtn = styled.a`
  width: 214px;
  height: 45px;
  position: absolute;
  left: 114px;
  top: 590px;

  border-radius: 10px;
`;

export {
  Header,
  Title,
  HeaderRight,
  SubTitle,
  Content,
  Logo,
  SigninTitle,
  SignInTitleEng,
  KakaoSignInBtn,
};
