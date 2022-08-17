import React from "react";
import { IconButton, Tooltip } from "@mui/material";

interface IProps {
  title: string;
  icon: any;
  onClick?: (e?: any) => void | any;
}

const IconTooltip = ({ title, icon, onClick }: IProps) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick}>{icon}</IconButton>
    </Tooltip>
  );
};

export default IconTooltip;
