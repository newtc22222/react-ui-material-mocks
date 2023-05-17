import React from "react";
import { useAppContext } from "../../context/AppContext";

import HeaderBanner from "./HeaderBanner";
import HeaderMenu from "./HeaderMenu";

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

const Header = () => {
  const {
    webSetting: { theme }
  } = useAppContext();

  return (
    <header {...setTheme(theme)}>
      <HeaderBanner />
      <HeaderMenu theme={theme} />
    </header>
  );
};

export default Header;
