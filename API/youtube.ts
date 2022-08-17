import { AxiosResponse } from "axios";
import { Methods } from "./common/methods";
import Send from "./interceptor";
import { ICommon } from "./interface/common.interface";
import { IYouTube } from "./interface/youtube.interface";

const loadOgTag = (v: string): Promise<AxiosResponse<ICommon<IYouTube>>> => {
  return Send({
    method: Methods.GET,
    url: `/youtube/getOgTag?v=${v}`,
  });
};

export { loadOgTag };
