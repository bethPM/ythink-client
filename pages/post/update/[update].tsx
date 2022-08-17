import React, { useEffect, useState } from "react";
import { IPost } from "../../../API/interface/post.interface";
import { readPost, updatePost } from "../../../API/post";
import CreatePageTemplate from "../../../components/Templates/CreatePageTemplate/CreatePageTemplate";
import WithAuth from "../../../hoc";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import useSnackBar from "../../../hooks/useSnackBar";
import { isOpenEditAction } from "../../../store/isOpen/isOpenSlice";
import { selectPost } from "../../../store/post/postSlice";
import { selectInfo } from "../../../store/user/infoSlice/infoSlice";

interface IProps {
  update?: string;
}

const PostUpdatePage = ({ update: _id }: IProps) => {
  const dispatch = useAppDispatch();
  // const post = useAppSelector(selectPost);
  const { snackbar } = useSnackBar();
  const info = useAppSelector(selectInfo);

  const [post, setPost] = useState<IPost>({
    _id: "",
    author: {},
    date: 0,
    title: "",
    description: "",
    bookMark: false,
    src: {
      dataType: "",
      dataUrl: "",
      youtubeUrl: "",
    },
    theme: "",
    weatherInfo: {
      temperature: "",
      weather: "",
    },
  });

  useEffect(() => {
    (async () => {
      if (_id) {
        const {
          data: { success, data },
        } = await readPost(_id);

        // if(data.data)

        if (success) {
          if (data.src.dataType) {
            dispatch(isOpenEditAction({ isSearch: true }));
          }

          setPost(data);
        } else {
          console.log("[update].tsx readPost ERROR ", data);

          snackbar("POST 가져오기에 실패했습니다.", "error");
        }
      } else {
        snackbar("매치되는 POST가 없습니다.", "error");
      }
    })();
  }, []);

  return (
    <>
      {post._id !== "" && (
        <CreatePageTemplate
          type="update"
          post={post}
          submit={updatePost}
          setPost={setPost}
        />
      )}
    </>
  );
};

export default WithAuth(PostUpdatePage, true);

export const getServerSideProps = (ctx: any) => {
  const { update } = ctx.query;

  return {
    props: { update }, // will be passed to the page component as props
  };
};
