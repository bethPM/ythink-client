import { IToken } from "../../store/user/tokenSlice/interface/tokenSlice.interface";

export interface ICommon {
  success: boolean;
}

const KAKAO = "KAKAO";

export type AuthTypes = typeof KAKAO;

export interface ISignInParameter {
  code: string;
}
export interface ISignIn extends ICommon {
  data: {
    type: string;
    token: IToken;
  };
}

export interface ICheckToken extends ICommon {}

export interface IMyInfo extends ICommon {
  data: {};
}

export interface IReissueToken extends ICommon {
  data: {};
}

export interface ILogout extends ICommon {}

export interface IUser {
  authType: string;
  createdAt: string;
  email: string;
  refreshToken: string;
  role: number;
  updatedAt: string;
  __v: number;
  _id: string;
}
