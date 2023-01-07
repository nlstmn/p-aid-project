import React from "react";
// Mui
import Box from "@mui/material/Box";

interface Props {
  src: string;
  alt: string;
}

const style = {
  display: "block",
  maxWidth: "100%",
  height: "auto",
};

const Image = (props: Props) => {
  const { src, alt } = props;
  return <Box component="img" src={src} alt={alt} sx={style} />;
};

export default Image;
