import React from "react";

interface IProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  style?: React.CSSProperties;
}

const ImageTag = ({ src, alt, width, height, style }: IProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: width, height: height, ...style }}
    />
  );
};

export default ImageTag;
