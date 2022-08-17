import Flicking from "@egjs/react-flicking";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import {
  isOpenEditAction,
  selectIsOpen,
} from "../../../store/isOpen/isOpenSlice";
import { editTheme, selectTheme } from "../../../store/theme/themeSlice";
import ImageTag from "../../Atoms/Image/Image";
import * as S from "./style";

const themes = [
  {
    name: "1",
    img: "3-theme",
  },
  {
    name: "2",
    img: "4-theme",
  },
  {
    name: "3",
    img: "5-theme",
  },
];

const SelectTheme = () => {
  const dispatch = useAppDispatch();
  const isTheme = useAppSelector(selectIsOpen).isTheme;
  const { name: themeName } = useAppSelector(selectTheme);

  const [theme, setTheme] = useState(1);

  return (
    <S.SelectThemeContainer>
      <S.SelectThemeTitle>테마 변경</S.SelectThemeTitle>
      <S.SelectThemeSubTitle>오늘의 마음의 드는 테마는?</S.SelectThemeSubTitle>
      <S.SelectTheme>
        <Flicking
          align={"center"}
          defaultIndex={parseInt(themeName) - 1}
          onChanged={(e) => setTheme((a) => e.index + 1)}
        >
          {themes.map((t) => (
            <S.Theme key={t.name}>
              <ImageTag
                src={`/image/${t.img}.png`}
                alt={t.name}
                width="100%"
                height="100%"
              />
            </S.Theme>
          ))}
        </Flicking>
        <S.ThemeBtn
          onClick={() => {
            dispatch(editTheme({ name: theme.toString() }));
            dispatch(isOpenEditAction({ isTheme: !isTheme }));
          }}
        >
          변경하기
        </S.ThemeBtn>
      </S.SelectTheme>
    </S.SelectThemeContainer>
  );
};

export default SelectTheme;
