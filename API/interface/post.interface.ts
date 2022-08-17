import { IUser } from "./auth.interface";

export interface IPost {
  _id?: string;
  // author: IUser;
  author: any;
  date: number;
  title: string;
  description: string;
  bookMark: boolean;
  src: IPostSrc;
  weatherInfo: IPostWeatherInfo;
  theme: string;
}

export interface IPostSrc {
  dataType: PostSrcDataType;
  dataUrl: string;
  youtubeUrl?: string;
}

export interface IPostWeatherInfo {
  temperature: string;
  weather: string;
}

export type PostSrcDataType =
  | "image"
  | "video"
  | "youtube_image"
  | "youtube_video"
  | "";
