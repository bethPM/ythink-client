import React, { useEffect } from "react";
import { readPost } from "../../API/post";
import CreatePageTemplate from "../../components/Templates/CreatePageTemplate/CreatePageTemplate";
import WithAuth from "../../hoc";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import useSnackBar from "../../hooks/useSnackBar";
import { isOpenEditAction } from "../../store/isOpen/isOpenSlice";
import { postAction, selectPost } from "../../store/post/postSlice";

interface IProps {
  _id?: string;
}

const PostDetailPage = ({ _id }: IProps) => {
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPost);
  const { snackbar } = useSnackBar();

  useEffect(() => {
    (async () => {
      if (_id) {
        const {
          data: { success, data },
        } = await readPost(_id);

        if (success) {
          if (data.src.dataType) {
            dispatch(isOpenEditAction({ isSearch: true }));
          }

          dispatch(postAction(data));
        } else {
          console.log("[update].tsx readPost ERROR ", data);

          snackbar("POST 가져오기에 실패했습니다.", "error");
        }
      } else {
        snackbar("매치되는 POST가 없습니다.", "error");
      }
    })();
  }, []);

  return <CreatePageTemplate type="read" post={post} />;
};

export default WithAuth(PostDetailPage, true);

export const getServerSideProps = (ctx: any) => {
  const { _id } = ctx.query;

  return {
    props: { _id }, // will be passed to the page component as props
  };
};
