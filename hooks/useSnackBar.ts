import React from "react";
import { useSnackbar, VariantType } from "notistack";

const useSnackBar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const snackbar = (message: string, type: VariantType) => {
    enqueueSnackbar(message, {
      variant: type,
    });
  };

  return { snackbar };
};

export default useSnackBar;
