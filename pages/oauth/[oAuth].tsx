import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { signIn } from "../../API/auth";
import ImageTag from "../../components/Atoms/Image/Image";
import WithAuth from "../../hoc";
import useSnackBar from "../../hooks/useSnackBar";
import {
  ACCESS_TOKEN,
  AUTH_TYPE,
  REFRESH_TOKEN,
} from "../../store/user/tokenSlice/constant/tokenSlice.constant";

const OAuthPage = ({ code }: any) => {
  const router = useRouter();
  const { snackbar } = useSnackBar();

  useEffect(() => {
    (async () => {
      const {
        data: { success, data },
      } = await signIn({ code });

      if (success) {
        localStorage.setItem(ACCESS_TOKEN, data.token.access_token);

        if (data.token.refresh_token) {
          localStorage.setItem(REFRESH_TOKEN, data.token.refresh_token);
        }

        localStorage.setItem(AUTH_TYPE, data.type);

        if (code) {
          router.push("/");
        } else {
          router.back();
        }

        snackbar("로그인 성공!", "success");
      } else {
        console.log(`[OAuth].tsx ${data.type} SIGN_IN ERROR `, data);

        snackbar("로그인에 실패했습니다!", "error");
      }
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        // height: "100%",
        position: "absolute",
        top: "285px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Pretendard",
        // fontSize: "30px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <ImageTag
          src="/image/login_loading_logo.png"
          alt="로그인 로딩 로고"
          width="155px"
          height="185px"
        />
      </div>
      로그인 중...
    </div>
  );
};

export default WithAuth(OAuthPage, false);

export const getServerSideProps = (ctx: any) => {
  const { code } = ctx.query;
  return {
    props: { code }, // will be passed to the page component as props
  };
};
