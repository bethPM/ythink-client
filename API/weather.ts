import { AxiosResponse } from "axios";
import { Methods } from "./common/methods";
import Send from "./interceptor";
import { ICommon } from "./interface/common.interface";
import { ILatLon, IWeather } from "./interface/weather.interface";

const loadWeahterInfo = ({
  lat,
  lon,
}: ILatLon): Promise<AxiosResponse<ICommon<IWeather>>> => {
  return Send({
    method: Methods.GET,
    url: `/weather/getWeatherInfo?lat=${lat}&lon=${lon}`,
  });
};

export { loadWeahterInfo };
