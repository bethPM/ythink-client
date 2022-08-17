import React from "react";
import { IPost } from "../../../API/interface/post.interface";
import { IIsOpen } from "../../../store/isOpen/isOpenSlice";
import ImageTag from "../../Atoms/Image/Image";
import { TbTemperatureCelsius } from "react-icons/tb";
import { IIcon } from "../../Templates/CreatePageTemplate/IconList/useIconList";
import moment from "moment";
import * as S from "./style";

interface IProps {
  post: IPost;
  onChangeInputs: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isOpen: IIsOpen;
  postMenuIcons: IIcon[];
  weatherIcons: IIcon[];
  printIcons: (arr: IIcon[]) => JSX.Element;
}

const Theme1 = ({
  post,
  onChangeInputs,
  isOpen,
  postMenuIcons,
  weatherIcons,
  printIcons,
}: IProps) => {
  return (
    <>
      <ImageTag
        src="/image/3-background.png"
        alt="background"
        width="100%"
        height="100%"
      />
      <S.PostContainer>
        <S.PostHeader>
          <S.PostFeatureIcons>{printIcons(postMenuIcons)}</S.PostFeatureIcons>
          <S.PostHeaderBottom>
            <S.Date>{moment().format("YYYY년 MM월 DD일")}</S.Date>
            <S.PostHeadeWeatherIcons>
              <input
                type="number"
                id="temperature"
                value={post.weatherInfo.temperature}
                onChange={onChangeInputs}
              />
              <TbTemperatureCelsius />
              {printIcons(weatherIcons)}
            </S.PostHeadeWeatherIcons>
          </S.PostHeaderBottom>
        </S.PostHeader>
        <S.Content>
          <S.InputContainer>
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={onChangeInputs}
            />
          </S.InputContainer>
          {!isOpen.isSearch ? (
            <S.ThumbnailContainer>
              <S.ThumbnailTitle>Youtube 썸네일</S.ThumbnailTitle>
              <S.ThumbnailTitle2>사진, 동영상</S.ThumbnailTitle2>
            </S.ThumbnailContainer>
          ) : (
            <S.ThumbnailContainerActive>
              {post.src.dataType === "image" && (
                <>
                  <ImageTag
                    src={post.src.dataUrl}
                    alt="사진"
                    width="100%"
                    height="100%"
                  />
                  {/* <Image
                    width={378}
                    height={300}
                    src={post.src.dataUrl}
                    alt="사진"
                  /> */}
                </>
              )}
              {post.src.dataType === "youtube_image" && (
                <a href={post.src.youtubeUrl} target="blank">
                  <ImageTag
                    src={post.src.dataUrl}
                    alt="사진"
                    width="100%"
                    height="100%"
                  />
                  {/* <Image
                    width={378}
                    height={300}
                    //   width="90%"
                    //   height="100%"
                    src={post.src.dataUrl}
                    alt="사진"
                  /> */}
                </a>
              )}
              {post.src.dataType === "video" && (
                <video src={post.src.dataUrl} />
              )}
              {post.src.dataType === "youtube_video" && (
                <iframe
                  title="유튜브 영상"
                  width="378"
                  height="300"
                  src={post.src.dataUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </S.ThumbnailContainerActive>
          )}
          <S.TextAreaContainer>
            <textarea
              id="description"
              value={post.description}
              onChange={onChangeInputs}
              cols={30}
              rows={10}
            ></textarea>
          </S.TextAreaContainer>
        </S.Content>
      </S.PostContainer>
    </>
  );
};

export default React.memo(Theme1);
