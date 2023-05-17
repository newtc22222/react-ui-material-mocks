import React from "react";
import { enqueueSnackbar } from "notistack";

import { SearchBar, ProductSplider } from "../../../components/common";
import { useAppContext } from "../../../components/context/AppContext";

const Home = () => {
  const {
    handleOpenCartCanvas,
    handleChangeTheme,
    webSetting: { theme }
  } = useAppContext();

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleChangeTheme();
          // handleOpenCartCanvas(true);
          enqueueSnackbar("Yeahhhhhhhhhhh", {
            variant: "success"
          });
        }}
      >
        Test
      </button>
    </>
  );
};

export default Home;
