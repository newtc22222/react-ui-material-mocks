import React from "react";
import { Typography } from "@mui/material";

const FooterCopyright = ({ theme }) => {
  return (
    <Typography
      align="center"
      variant="subtitle2"
      sx={{ color: theme === "dark" && "white", paddingBottom: "5px" }}
    >
      &copy;2023, {process.env.REACT_APP_WEB_SOURCE}
    </Typography>
  );
};

export default FooterCopyright;
