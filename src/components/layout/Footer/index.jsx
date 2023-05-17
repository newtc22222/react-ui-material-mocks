import React from "react";

import { useAppContext } from "../../context/AppContext";

import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";

const setTheme = (theme) => {
  const config = {};

  switch (theme) {
    case "light":
      config.style = { backgroundColor: "#a8dfca" };
      break;
    case "dark":
      config.className = "text-white";
      config.style = { backgroundColor: "#0c9970" };
      break;
    default:
      break;
  }

  return config;
};

const Footer = () => {
  const {
    webSetting: { theme }
  } = useAppContext();

  return (
    <footer {...setTheme(theme)}>
      <FooterContact theme={theme} />
      <FooterCopyright theme={theme} />
    </footer>
  );
};

export default Footer;
