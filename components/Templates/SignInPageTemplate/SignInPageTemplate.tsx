import React from "react";
import ImageTag from "../../Atoms/Image/Image";
import * as S from "./style";

const SignInPageTemplate = () => {
  return (
    <>
      <S.Header>
        <S.Title>YTHINK</S.Title>
        <S.HeaderRight>
          <S.SubTitle>당신의 YTHINK 다이어리를 응원합니다!</S.SubTitle>
        </S.HeaderRight>
      </S.Header>
      <S.Content>
        <S.Logo>
          <ImageTag
            src="/image/logo.png"
            alt="로고"
            width="155px"
            height="185px"
          />
        </S.Logo>
        <S.SigninTitle>로그인 및 회원가입</S.SigninTitle>
        <S.SignInTitleEng>Sign up for login member ship</S.SignInTitleEng>
        <S.KakaoSignInBtn
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
        >
          <ImageTag
            src="/image/kakao_login.png"
            alt="카카오 로그인"
            width="100%"
            height="100%"
          />
        </S.KakaoSignInBtn>
      </S.Content>
    </>
  );
};

export default SignInPageTemplate;
