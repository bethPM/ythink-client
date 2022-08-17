import { AxiosResponse } from "axios";
import { Methods } from "./common/methods";
import Send from "./interceptor";
import { ICommon } from "./interface/common.interface";
import { IPost } from "./interface/post.interface";

const readPosts = (): Promise<AxiosResponse<ICommon<IPost[]>>> => {
  return Send({
    method: Methods.GET,
    url: "/post/readPosts",
  });
};

const readPost = (_id: string): Promise<AxiosResponse<ICommon<IPost>>> => {
  return Send({
    method: Methods.GET,
    url: `/post/readPost/${_id}`,
  });
};

const createPost = ({
  post: data,
}: {
  post: IPost;
}): Promise<AxiosResponse<Pick<ICommon<void>, "success">>> => {
  return Send({
    method: Methods.POST,
    url: "/post/createPost",
    data,
  });
};

const updatePost = ({
  post: data,
  _id,
}: {
  post: IPost;
  _id: string;
}): Promise<AxiosResponse<Pick<ICommon<void>, "success">>> => {
  return Send({
    method: Methods.POST,
    url: `/post/updatePost?_id=${_id}`,
    data,
  });
};

const deletePost = (
  _id: string
): Promise<AxiosResponse<Pick<ICommon<void>, "success">>> => {
  return Send({
    method: Methods.POST,
    url: `/post/deletePost?_id=${_id}`,
  });
};

export { readPost, readPosts, createPost, updatePost, deletePost };
