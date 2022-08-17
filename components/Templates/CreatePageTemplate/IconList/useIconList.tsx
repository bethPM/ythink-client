import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useRedux";
import {
  IIsOpen,
  isOpenEditAction,
  selectIsOpen,
} from "../../../../store/isOpen/isOpenSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { IPost } from "../../../../API/interface/post.interface";
import { selectInfo } from "../../../../store/user/infoSlice/infoSlice";

import { BsUmbrella } from "react-icons/bs";
import useSnackBar from "../../../../hooks/useSnackBar";

export interface IIcon {
  title: string;
  icon: any;
  onClick?: (arg?: any) => any | void;
}

const IMAGE = "IMAGE";
const VIDEO = "VIDEO";
const YOUTUBE = "YOUTUBE";

export type SelectIconType = typeof IMAGE | typeof VIDEO | typeof YOUTUBE;

interface IUseIconListRes {
  postMenuIcons: IIcon[];
  weatherIcons: IIcon[];
  selectIcon: SelectIconType;
}

interface IProps {
  post: IPost;
  type: "create" | "update" | "read";
  setPost?: React.Dispatch<React.SetStateAction<IPost>>;
  submit: (bookMarkEvent: boolean) => Promise<any>;
}

const useIconList = ({
  post,
  type,
  setPost,
  submit,
}: IProps): IUseIconListRes => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isOpen = useAppSelector(selectIsOpen);
  const userInfo = useAppSelector(selectInfo);
  const { snackbar } = useSnackBar();

  const dispatchIsOpenAction = (payload: Partial<IIsOpen>) => {
    dispatch(isOpenEditAction({ ...payload }));
  };

  const routerPush = (url: string) => {
    router.push(url);
  };

  const [selectIcon, setSelectIcon] = useState<SelectIconType>("IMAGE");

  const postMenuIcons: IIcon[] = [
    {
      title: "사진",
      icon: <CameraAltIcon />,
      onClick: (e) => {
        if (type !== "read") {
          dispatchIsOpenAction({ isModal: true, isSearch: false });
          setSelectIcon("IMAGE");
        }
      },
    },
    {
      title: "동영상",
      icon: <VideoCallIcon />,
      onClick: () => {
        if (type !== "read") {
          dispatchIsOpenAction({ isModal: true, isSearch: false });
          setSelectIcon("VIDEO");
        }
      },
    },
    {
      title: "유튜브",
      icon: <YouTubeIcon />,
      onClick: () => {
        if (type !== "read") {
          dispatchIsOpenAction({ isModal: true, isSearch: false });
          setSelectIcon("YOUTUBE");
        }
      },
    },
    {
      title: "테마",
      icon: <CalendarTodayIcon />,
      onClick: () => {
        if (type !== "read") {
          dispatchIsOpenAction({ isTheme: !isOpen.isTheme });
        }
      },
    },
    {
      title: "북마크",
      icon: (
        <FavoriteBorderIcon
          style={{
            color: post.bookMark ? "#C643C9" : "#757470",
          }}
        />
      ),
      onClick: async () => {
        if (type !== "read") {
          await submit(true);
        }
      },
    },
    {
      title: "리스트",
      icon: <MenuIcon />,
      onClick: async () => {
        if (type !== "read") {
          await submit(false);
        }
      },
    },
  ];

  const weatherIcons: IIcon[] = [
    {
      title: "화창",
      icon: (
        <WbSunnyIcon
          style={{
            color: post.weatherInfo.weather === "Clear" ? "black" : "#cacfd2",
          }}
        />
      ),
      onClick: () => {
        if (type !== "read") {
          if (setPost) {
            setPost({
              ...post,
              weatherInfo: { ...post.weatherInfo, weather: "Clear" },
            });
          }
        }
      },
    },
    {
      title: "구름",
      icon: (
        <CloudIcon
          style={{
            color: post.weatherInfo.weather === "Clouds" ? "black" : "#cacfd2",
          }}
        />
      ),
      onClick: () => {
        if (type !== "read") {
          if (setPost) {
            setPost({
              ...post,
              weatherInfo: { ...post.weatherInfo, weather: "Clouds" },
            });
          }
        }
      },
    },
    {
      title: "비",
      icon: (
        <BsUmbrella
          style={{
            color:
              post.weatherInfo.weather === "Rain" ||
              post.weatherInfo.weather === "Rain"
                ? "black"
                : "#cacfd2",
          }}
        />
      ),
      onClick: () => {
        if (type !== "read") {
          if (setPost) {
            setPost({
              ...post,
              weatherInfo: { ...post.weatherInfo, weather: "Rain" },
            });
          }
        }
      },
    },
    {
      title: "눈",
      icon: (
        <AcUnitIcon
          style={{
            color: post.weatherInfo.weather === "Snow" ? "black" : "#cacfd2",
          }}
        />
      ),
      onClick: () => {
        if (type !== "read") {
          if (setPost) {
            setPost({
              ...post,
              weatherInfo: { ...post.weatherInfo, weather: "Snow" },
            });
          }
        }
      },
    },
  ];

  return { postMenuIcons, weatherIcons, selectIcon };
};

export default useIconList;
