import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import {
  isOpenEditAction,
  selectIsOpen,
} from "../../../store/isOpen/isOpenSlice";
import { SelectIconType } from "../../Templates/CreatePageTemplate/IconList/useIconList";
import { loadOgTag } from "../../../API/youtube";
import ImageTag from "../../Atoms/Image/Image";
import {
  IPost,
  IPostSrc,
  PostSrcDataType,
} from "../../../API/interface/post.interface";

interface IProps {
  post: IPost;
  setPost?: React.Dispatch<React.SetStateAction<IPost>>;
  selectIcon: SelectIconType;
}

const FileModal = ({ post, setPost, selectIcon }: IProps) => {
  const dispatch = useAppDispatch();
  const { isModal } = useAppSelector(selectIsOpen);

  const [file, setFile] = useState<IPostSrc>({
    dataUrl: "",
    dataType: "",
    youtubeUrl: "",
  });

  const [type, setType] = useState<PostSrcDataType>("youtube_image");

  const [oGTag, setOGTag] = useState({
    image: "",
    video: "",
    dataUrl: "",
  });

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "#ffffff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const data = e?.target?.files[0] as File;

    const newBlob = new Blob([data], {
      type: data.type,
    });

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setFile({
        dataUrl: reader.result as string,
        dataType: data.type.split("/")[0] === "image" ? "image" : "video",
      });
    });

    reader.readAsDataURL(newBlob);
  };

  const handleSelectType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataType = e.currentTarget.value as "youtube_image" | "youtube_video";

    setType(
      e.currentTarget.value as
        | "image"
        | "video"
        | "youtube_image"
        | "youtube_video"
        | ""
    );

    setFile({
      dataType,
      dataUrl: dataType === "youtube_image" ? oGTag.image : oGTag.video,
      youtubeUrl: oGTag.dataUrl,
    });
  };

  const handleYoutubeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value.split("v=")[1].includes("&")
      ? e.currentTarget.value.split("v=")[1].split("&")[0]
      : e.currentTarget.value.split("v=")[1];

    const { data } = await loadOgTag(v);

    setOGTag({
      image: data.data["og:image"],
      // video: `https://www.youtube-nocookie.com/embed/${v}`,
      video: v,
      dataUrl: data.data["og:url"],
    });

    setFile({
      dataType: type,
      dataUrl: data.data["og:image"],
      youtubeUrl: data.data["og:url"],
    });
  };

  return (
    <Modal
      open={isModal}
      onClose={() => {
        dispatch(isOpenEditAction({ isModal: false }));
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          {selectIcon}
        </Typography>

        {selectIcon !== "YOUTUBE" ? (
          <>
            <p>권장 사이즈 385X325</p>
            <input type="file" onChange={handleFileUpload} />

            {file.dataUrl && (
              <>
                {file.dataType === "image" ? (
                  <>
                    {file.dataUrl && (
                      <ImageTag
                        src={file.dataUrl}
                        alt="이미지"
                        width="100%"
                        height="100%"
                      />
                    )}
                  </>
                ) : (
                  <>
                    <video src={file.dataUrl} />
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              onChange={handleYoutubeFile}
              placeholder="URL을 입력해주세요."
            />
            {file.dataUrl && (
              <>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    저장 타입
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="image"
                    onChange={handleSelectType}
                    value={type}
                  >
                    <FormControlLabel
                      value="youtube_image"
                      control={<Radio />}
                      label="사진"
                    />
                    <FormControlLabel
                      value="youtube_video"
                      control={<Radio />}
                      label="동영상"
                    />
                  </RadioGroup>
                </FormControl>
              </>
            )}
            {oGTag.image && (
              <>
                {file.dataType === "youtube_image" ? (
                  <>
                    <a href={oGTag.dataUrl} target="blank">
                      <ImageTag
                        src={oGTag.image}
                        alt="유튜브 썸네일"
                        width="100%"
                        height="300px"
                      />
                    </a>
                  </>
                ) : (
                  <>
                    <iframe
                      title="유튜브 영상"
                      width="100%"
                      height="300px"
                      src={oGTag.video}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </>
                )}
              </>
            )}
          </>
        )}
        {file.dataUrl && (
          <Button
            variant="contained"
            onClick={() => {
              if (setPost) {
                setPost({ ...post, src: file });
              }
              dispatch(isOpenEditAction({ isModal: false, isSearch: true }));
            }}
          >
            OK
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default FileModal;
