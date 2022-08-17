import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../API/interface/post.interface";
import { RootReducerType } from "../store";
import { POST } from "./constant/postSlice.constant";

const initialPostSliceState: IPost = {
  _id: "",
  date: 0,
  bookMark: false,
  author: {},
  title: "",
  description: "",
  theme: "",
  src: {
    dataType: "",
    dataUrl: "",
    youtubeUrl: "",
  },
  weatherInfo: {
    temperature: "",
    weather: "",
  },
};

const postSlice = createSlice({
  name: POST,
  initialState: initialPostSliceState,
  reducers: {
    postAction: (
      state,
      { type, payload }: PayloadAction<Partial<IPost>, string>
    ) => {
      return { ...state, ...payload };
    },
  },
});

const { postAction } = postSlice.actions;

const selectPost = (state: RootReducerType) => state.post;

export { postAction, selectPost };

export default postSlice.reducer;
