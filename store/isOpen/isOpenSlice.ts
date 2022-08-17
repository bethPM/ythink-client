import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootReducerType } from "../store";
import { IS_OPEN } from "./constant/isOpenSlice.constant";

export interface IIsOpen {
  isTheme: boolean;
  isSearch: boolean;
  isModal: boolean;
  isBookMark: boolean;
}

const initialIsOpenSliceState: IIsOpen = {
  isTheme: false,
  isSearch: false,
  isModal: false,
  isBookMark: false,
};

const isOpenSlice = createSlice({
  name: IS_OPEN,
  initialState: initialIsOpenSliceState,
  reducers: {
    isOpenEditAction: (
      state,
      { type, payload }: PayloadAction<Partial<IIsOpen>, string>
    ) => {
      return { ...state, ...payload };
    },
  },
});

const { isOpenEditAction } = isOpenSlice.actions;

const selectIsOpen = (state: RootReducerType) => state.isOpen;

export { selectIsOpen, isOpenEditAction };

export default isOpenSlice.reducer;
