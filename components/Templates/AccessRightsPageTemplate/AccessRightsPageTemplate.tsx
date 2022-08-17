import React, { useState } from "react";
import IconTooltip from "../../Organisms/IconTooltip/IconTooltip";
import CheckIcon from "@mui/icons-material/Check";
import * as S from "./style";
import { useRouter } from "next/router";

const AccessRightsPageTemplate = () => {
  const router = useRouter();

  const [optionalAccess, setOptionalAccess] = useState({
    camera: false,
    storage: false,
  });

  const handleChangeOptionalAccess = (e: any) => {
    const target = e.target.id as "camera" | "storage";

    setOptionalAccess({
      ...optionalAccess,
      [target]: !optionalAccess[target],
    });
  };

  const handleAccessRights = () => {
    const { camera, storage } = optionalAccess;

    if (camera && storage) {
      localStorage.setItem("ACCESS_RIGHTS", JSON.stringify(true));

      router.push("/");
    }
  };

  return (
    <>
      <S.AccessRightsContainer>
        <S.AccessRightsTitle>YTHINK 앱 접근 권한 안내</S.AccessRightsTitle>
        <S.AccessRightsTitleEng>
          Information on access lights requirded when using the service
        </S.AccessRightsTitleEng>
        <S.OptionalAccessRightsTitle>
          선택적 접근권한
        </S.OptionalAccessRightsTitle>
        <S.OptionalAccessRightsTitleEng>
          Optional Access Guide
        </S.OptionalAccessRightsTitleEng>
        <S.AccessRightsOptionContainer>
          <IconTooltip
            title={optionalAccess.camera ? "비동의" : "동의"}
            icon={
              <CheckIcon
                id="camera"
                className={optionalAccess.camera ? "active" : ""}
              />
            }
            onClick={handleChangeOptionalAccess}
          />
          <S.AccessRightsOptionTitle>카메라/앨범</S.AccessRightsOptionTitle>
          <S.AccessRightsOptionTitleEng>
            Camera / Album
          </S.AccessRightsOptionTitleEng>
          <S.AccessRightsOptionSubTitle>
            사진, 동영상 업로드 할 때 사용
          </S.AccessRightsOptionSubTitle>
          <S.AccessRightsOptionSubTitleEng>
            Use to upload pictures and videos
          </S.AccessRightsOptionSubTitleEng>
        </S.AccessRightsOptionContainer>
        <S.AccessRightsOptionContainer2>
          <IconTooltip
            title={optionalAccess.storage ? "비동의" : "동의"}
            icon={
              <CheckIcon
                id="storage"
                className={optionalAccess.storage ? "active" : ""}
              />
            }
            onClick={handleChangeOptionalAccess}
          />
          <S.AccessRightsOptionTitle2>
            내/외부 저장소
          </S.AccessRightsOptionTitle2>
          <S.AccessRightsOptionTitleEng2>
            In/External storage
          </S.AccessRightsOptionTitleEng2>
          <S.AccessRightsOptionSubTitle2>
            파일 업로드 할 때 사용
          </S.AccessRightsOptionSubTitle2>
          <S.AccessRightsOptionSubTitleEng2>
            Use to upload file
          </S.AccessRightsOptionSubTitleEng2>
        </S.AccessRightsOptionContainer2>
        <S.ServiceDescription>
          선택적 접근권한은 해당 기능 사용 시 허용이 필요하며, 비허용시에도 해당
          기능 외 서비스 이용이 가능합니다.
        </S.ServiceDescription>
        <S.ServiceDescriptionEng>
          The right to choose is agreed upon when using and can be used without
          permission.
        </S.ServiceDescriptionEng>
        <S.AccessRightsBtn onClick={handleAccessRights}>
          <S.AccessRightsBtnValue>확인</S.AccessRightsBtnValue>
        </S.AccessRightsBtn>
      </S.AccessRightsContainer>
    </>
  );
};

export default AccessRightsPageTemplate;
