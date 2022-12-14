import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { myInfoAction } from "../store/user/infoSlice/infoSlice";
import {
  ACCESS_TOKEN,
  AUTH_TYPE,
} from "../store/user/tokenSlice/constant/tokenSlice.constant";
import { tokenStatusAction } from "../store/user/tokenSlice/func/tokenSlice.func";
import { ITokenStatus } from "../store/user/tokenSlice/interface/tokenSlice.interface";
import { selectToken } from "../store/user/tokenSlice/tokenSlice";

/**
 * option
 * true => 로그인 한 사람
 * false => 로그인 안 한 사람
 * null => 누구나
 */

const WithAuth = (Component: React.FC, option: boolean | null) => {
  const AuthenticationCheck = (props: any) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
      (async () => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        if (accessToken) {
          const authType = localStorage.getItem(AUTH_TYPE) as "KAKAO";
          const {
            payload: { isLogin },
          } = (await dispatch(tokenStatusAction(authType))) as {
            payload: ITokenStatus;
          };

          if (isLogin) {
            const ACCESS_RIGHTS = localStorage.getItem("ACCESS_RIGHTS");

            if (!ACCESS_RIGHTS) {
              router.push("/accessRights");
            }

            await dispatch(myInfoAction(authType));

            if (option === false) {
              router.push("/");
            }
          } else {
            if (option) {
              router.push("/signIn");
            }
          }
        } else {
          if (option === true) {
            router.push("/signIn");
          }
        }
      })();
    }, []);

    return <Component {...props} />;
  };
  return AuthenticationCheck;
};

export default WithAuth;
