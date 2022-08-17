import React, { useEffect, useState } from "react";
import { IPost } from "../API/interface/post.interface";
import { createPost } from "../API/post";
import { loadWeahterInfo } from "../API/weather";
import CreatePageTemplate from "../components/Templates/CreatePageTemplate/CreatePageTemplate";
import WithAuth from "../hoc";
import { useAppDispatch } from "../hooks/useRedux";
import useSnackBar from "../hooks/useSnackBar";
import { postAction } from "../store/post/postSlice";

const IndexPage = () => {
  const dispatch = useAppDispatch();
  const { snackbar } = useSnackBar();

  const [post, setPost] = useState<IPost>({
    _id: "",
    author: "",
    date: 0,
    title: "",
    description: "",
    bookMark: false,
    src: {
      dataType: "",
      dataUrl: "",
      youtubeUrl: "",
    },
    theme: "",
    weatherInfo: {
      temperature: "",
      weather: "",
    },
  });

  useEffect(() => {
    document.cookie = "crossCookie=bar; SameSite=None; Secure";

    https: navigator.geolocation.getCurrentPosition(
      async (nav) => {
        const {
          data: { data },
        } = await loadWeahterInfo({
          lat: nav.coords.latitude,
          lon: nav.coords.longitude,
        });

        dispatch(
          postAction({
            weatherInfo: {
              temperature: data.main.temp.toFixed(1),
              weather: data.weather[0].main,
            },
          })
        );

        setPost({
          ...post,
          weatherInfo: {
            temperature: data.main.temp.toFixed(1),
            // temperature: data.main.temp,
            weather: data.weather[0].main,
          },
        });
      },
      (err: any) => {
        console.log("IndexPage geolocation ERROR ", err);

        snackbar("위치 검색 중 문제가 발생했습니다.", "warning");
      }
    );
  }, []);

  return (
    <CreatePageTemplate
      type="create"
      post={post}
      setPost={setPost}
      submit={createPost}
    />
  );
};

export default WithAuth(IndexPage, true);
