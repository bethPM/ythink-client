import React, { useEffect } from "react";
import PostListPageTemplate from "../../components/Templates/PostListPageTemplate/PostListPageTemplate";
import WithAuth from "../../hoc";
import { useAppDispatch } from "../../hooks/useRedux";
import { isOpenEditAction } from "../../store/isOpen/isOpenSlice";
const PostListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isOpenEditAction({ isSearch: false }));
  }, []);

  return <PostListPageTemplate />;
};

export default WithAuth(PostListPage, true);
