import Send from "./interceptor";
import { Methods } from "./common/methods";
import { AxiosResponse } from "axios";
import {
  AuthTypes,
  ICheckToken,
  ILogout,
  IMyInfo,
  IReissueToken,
  ISignIn,
  ISignInParameter,
} from "./interface/auth.interface";

const REFRESH_TOKEN = "REFRESH_TOKEN";

const signIn = (data: ISignInParameter): Promise<AxiosResponse<ISignIn>> => {
  return Send({
    method: Methods.POST,
    url: "/auth/kakao/signIn",
    data,
  });
};

const checkToken = (type: AuthTypes): Promise<AxiosResponse<ICheckToken>> => {
  return Send({
    method: Methods.GET,
    url: `/auth/kakao/checkToken`,
  });
};

const myInfo = (type: AuthTypes): Promise<AxiosResponse<IMyInfo>> => {
  return Send({
    method: Methods.GET,
    url: `/auth/kakao/myInfo`,
  });
};

const reissueToken = (
  type: AuthTypes
): Promise<AxiosResponse<IReissueToken>> => {
  const refresh_token = localStorage.getItem(REFRESH_TOKEN) as string;

  return Send({
    method: Methods.POST,
    url: `/auth/kakao/reissueToken`,
    data: { refresh_token },
  });
};

const logout = (type: AuthTypes): Promise<AxiosResponse<ILogout>> => {
  return Send({
    method: Methods.POST,
    url: `/auth/kakao/logout`,
  });
};

export { signIn, checkToken, reissueToken, myInfo, logout };
