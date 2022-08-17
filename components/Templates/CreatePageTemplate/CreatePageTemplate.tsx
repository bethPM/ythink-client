import { Button, TextField } from "@mui/material";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { selectIsOpen } from "../../../store/isOpen/isOpenSlice";
import FileModal from "../../Organisms/FileModal/FileModal";
import IconTooltip from "../../Organisms/IconTooltip/IconTooltip";
import SelectTheme from "../../Organisms/SelectTheme/SelectTheme";
import useIconList, { IIcon } from "./IconList/useIconList";
import { useRouter } from "next/router";
import { selectInfo } from "../../../store/user/infoSlice/infoSlice";
import { selectTheme } from "../../../store/theme/themeSlice";
import { IPost } from "../../../API/interface/post.interface";
import useSnackBar from "../../../hooks/useSnackBar";
import Theme1 from "../../Organisms/Theme1/Theme1";
import Theme2 from "../../Organisms/Theme2/Theme2";
import Theme3 from "../../Organisms/Theme3/Theme3";

interface IProps {
  type: "create" | "update" | "read";
  post: IPost;
  setPost?: React.Dispatch<React.SetStateAction<IPost>>;
  submit?: (...args: any) => Promise<any>;
}

const CreatePageTemplate = ({ type, post, setPost, submit }: IProps) => {
  const router = useRouter();
  const isOpen = useAppSelector(selectIsOpen);
  const userInfo = useAppSelector(selectInfo);
  const theme = useAppSelector(selectTheme).name;
  const { snackbar } = useSnackBar();

  const handleCreatePost = async (bookMarkEvent: boolean) => {
    const {
      _id,
      author,
      bookMark,
      date,
      theme,
      title,
      src,
      description,
      weatherInfo,
    } = post;

    const postInfo: IPost = {
      author: type === "create" ? userInfo._id : author,
      date: type === "create" ? moment().unix() : date,
      title,
      src,
      description,
      bookMark: bookMarkEvent ? !post.bookMark : bookMark,
      theme,
      weatherInfo,
    };

    if (submit) {
      const res = await submit({ post: postInfo, _id });

      if (res.data.success) {
        snackbar(
          type === "create" ? "생성 성공!" : "업데이트 성공!",
          "success"
        );

        router.push("/post/list");
      } else {
        console.log(`CreatePageTemplate.tsx submit(${type})  ERROR `, res.data);

        snackbar(
          type === "create"
            ? "생성에 실패했습니다."
            : "업데이트에 실패했습니다.!",
          "error"
        );
      }
    }
  };

  const { postMenuIcons, weatherIcons, selectIcon } = useIconList({
    post,
    type,
    setPost,
    submit: handleCreatePost,
  });

  const onChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget.id;
    const value = e.currentTarget.value as string;

    if (setPost) {
      if (target === "temperature") {
        setPost({
          ...post,
          weatherInfo: {
            ...post.weatherInfo,
            [target]: String(value),
          },
        });
      } else {
        setPost({
          ...post,
          [target]: value,
        });
      }
    }
  };

  const printIcons = (arr: IIcon[]) => {
    return (
      <>
        {arr.map(({ title, icon, onClick }) => (
          <IconTooltip
            key={title}
            title={title}
            icon={icon}
            onClick={onClick}
          />
        ))}
      </>
    );
  };

  return (
    <>
      {theme === "1" && (
        <Theme1
          post={post}
          onChangeInputs={onChangeInputs}
          isOpen={isOpen}
          postMenuIcons={postMenuIcons}
          weatherIcons={weatherIcons}
          printIcons={printIcons}
        />
      )}
      {theme === "2" && (
        <Theme2
          post={post}
          onChangeInputs={onChangeInputs}
          isOpen={isOpen}
          postMenuIcons={postMenuIcons}
          weatherIcons={weatherIcons}
          printIcons={printIcons}
        />
      )}
      {theme === "3" && (
        <Theme3
          post={post}
          onChangeInputs={onChangeInputs}
          isOpen={isOpen}
          postMenuIcons={postMenuIcons}
          weatherIcons={weatherIcons}
          printIcons={printIcons}
        />
      )}
      {isOpen.isModal && (
        <FileModal post={post} setPost={setPost} selectIcon={selectIcon} />
      )}
      {isOpen.isTheme && <SelectTheme />}
    </>
  );
};

export default React.memo(CreatePageTemplate);
