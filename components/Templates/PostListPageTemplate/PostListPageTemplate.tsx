import React, { useEffect, useState } from "react";
import IconTooltip from "../../Organisms/IconTooltip/IconTooltip";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";

import * as S from "./style";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import {
  isOpenEditAction,
  selectIsOpen,
} from "../../../store/isOpen/isOpenSlice";
import { Box, Grow } from "@mui/material";
import moment from "moment";

import { useRouter } from "next/router";
import { deletePost, readPosts, updatePost } from "../../../API/post";
import { IPost } from "../../../API/interface/post.interface";
import { ImShare } from "react-icons/im";
import ImageTag from "../../Atoms/Image/Image";
import useSnackBar from "../../../hooks/useSnackBar";

const PostListPageTemplate = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const isOpen = useAppSelector(selectIsOpen);

  useEffect(() => {
    (async () => {
      const res = await readPosts();

      setPosts(res.data.data);
    })();
  }, []);

  const dispatch = useAppDispatch();
  const { isBookMark } = useAppSelector(selectIsOpen);
  const { snackbar } = useSnackBar();

  const router = useRouter();

  const handleDetailPost = (e: React.MouseEvent<HTMLElement>, post: IPost) => {
    e.stopPropagation();
    router.push(`/post/update/${post._id}`);
  };

  const handleEditBookMark = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(isOpenEditAction({ isBookMark: true }));
  };

  const handleDeletePost = async (
    e: React.MouseEvent<HTMLButtonElement>,
    post: IPost
  ) => {
    e.stopPropagation();

    if (post._id) {
      const {
        data: { success },
      } = await deletePost(post._id);

      if (success) {
        setPosts(posts.filter((f) => f._id !== post._id));

        snackbar("삭제 성공!", "success");
      } else {
        snackbar("삭제 중 문제가 발생했습니다.", "error");
      }
    }
  };

  const handleSharePost = (
    e: React.MouseEvent<HTMLButtonElement>,
    postId: string
  ) => {
    e.stopPropagation();

    window.navigator.clipboard.writeText(
      `http://localhost:3000/post/${postId}`
    );

    snackbar("클립보드에 복사했습니다.", "success");
  };
  const postItem = (post: IPost, idx: number) => (
    <Grow
      in={true}
      timeout={idx * 300}
      style={{
        width: "100%",
        cursor: "pointer",
        fontFamily: "Pretendard",
        fontWeight: "lighter",
      }}
      onClick={(e) => handleDetailPost(e, post)}
    >
      <div
        className="post"
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          padding: "5% 0px",
          borderTop: "1px solid rgba(163, 171, 175, 1)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "150px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="video-img"
            style={{ width: "203px", height: "132px" }}
          >
            {post.src.dataType === "image" && (
              <ImageTag
                src={post.src.dataUrl}
                alt="사진"
                width="203px"
                height="132px"
                style={{ borderRadius: "20px" }}
              />
            )}
            {post.src.dataType === "youtube_image" && (
              <ImageTag
                src={post.src.dataUrl}
                alt="사진"
                width="203px"
                height="132px"
                style={{ borderRadius: "20px" }}
              />
            )}
            {post.src.dataType === "video" && <video src={post.src.dataUrl} />}
            {post.src.dataType === "youtube_video" && (
              <iframe
                title="유튜브 영상"
                width="203"
                height="132"
                src={post.src.dataUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "20px" }}
              />
            )}
          </div>
          <div
            className="post-info"
            style={{
              width: "182px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div className="date">
              <span style={{ color: "#8C8C8C" }}>
                {moment.unix(post.date).format("YYYY.M.DD")}
              </span>
            </div>
            <h3
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "30px",
                maxHeight: "30px",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {post.title.length >= 14
                ? `${post.title.slice(0, 13)}...`
                : post.title}
            </h3>
            <div
              className="description"
              style={{
                maxWidth: "100%",
                minHeight: "57px",
                maxHeight: "57px",
                display: "flex",
                flexWrap: "wrap",
                whiteSpace: "pre-line",
                wordWrap: "break-word",
                wordBreak: "break-all",
                overflow: "hidden",
              }}
            >
              {/* {sliceStr(post.description)} */}
              {/* {post.description.length >= 34
                ? `${post.description.slice(0, 35)}...`
                : post.description} */}
              {post.description}
            </div>
            <div
              className="post-btns"
              style={{ width: "100%", textAlign: "right" }}
            >
              {isOpen.isBookMark ? (
                <>
                  <IconTooltip
                    title="리스트"
                    icon={<MenuIcon />}
                    onClick={(e) => {
                      e.stopPropagation();

                      dispatch(isOpenEditAction({ isBookMark: false }));
                    }}
                  />
                </>
              ) : (
                <>
                  {post.bookMark ? (
                    <>
                      <IconTooltip
                        title="북마크"
                        icon={<FavoriteIcon style={{ color: "#C643C9" }} />}
                        onClick={handleEditBookMark}
                      />
                      <IconTooltip
                        title="공유"
                        icon={<ImShare />}
                        onClick={(e) => handleSharePost(e, post._id as string)}
                      />
                      <IconTooltip
                        title="삭제"
                        icon={<DeleteIcon />}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                          handleDeletePost(e, post)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <IconTooltip
                        title="공유"
                        icon={<ImShare />}
                        onClick={(e) => handleSharePost(e, post._id as string)}
                      />
                      <IconTooltip
                        title="삭제"
                        icon={<DeleteIcon />}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                          handleDeletePost(e, post)
                        }
                      />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );

  return (
    <div style={{ padding: "10px", backgroundColor: "#fcf5c9" }}>
      <S.Header>
        <S.Title>YTHINK</S.Title>
        <S.HeaderRight>
          <S.SubTitle>당신의 YTHINK 다이어리를 응원합니다!</S.SubTitle>
        </S.HeaderRight>
      </S.Header>
      <Box>
        {isOpen.isBookMark ? (
          <>
            {posts
              .filter((f) => f.bookMark)
              .map((post, idx) => (
                <React.Fragment key={post._id}>
                  {postItem(post, idx)}
                </React.Fragment>
              ))}
          </>
        ) : (
          <>
            {posts
              .sort((a, b) => a.date - b.date)
              .sort((a, b) => Number(b.bookMark) - Number(a.bookMark))
              .map((post, idx) => (
                <React.Fragment key={post._id}>
                  {postItem(post, idx)}
                </React.Fragment>
              ))}
          </>
        )}
      </Box>
    </div>
  );
};

export default PostListPageTemplate;
