import { Button } from "@mui/material";
import React from "react";
import { isNullOrUndefined } from "../../utils/utils";

export default function PrimaryButton({
  size,
  name,
  height,
  width,
  textColor,
  borderRadius,
  border,
  borderColor,
  backgroundColor,
  hoverBackground,
  handleOnClick,
  handleTouchStart,
  type,
  isDisabled,
  loading,
}) {
  return (
    <Button
      variant="contained"
      size={size}
      disabled={isDisabled || loading ? true : false}
      sx={{
        height: height,
        width: isNullOrUndefined(width) ? "100%" : width,
        color: "#ffff",
        border: border,
        borderColor: borderColor,
        borderRadius: borderRadius,
        textTransform: "none",
        backgroundColor: isNullOrUndefined(backgroundColor)
          ? "#2d2d2d"
          : backgroundColor,
        fontFamily: "inherit",
        boxShadow: "none",
        ":hover": {
          backgroundColor: isNullOrUndefined(hoverBackground)
            ? "#2d2d2d"
            : hoverBackground,
          color: "#ffff",
          boxShadow: "none",
        },
        // "&:disabled": {
        //   backgroundColor: "#2d2d2d",
        //   color: "#ffff",
        // },
      }}
      onClick={handleOnClick}
      onTouchStart={handleTouchStart}
      type={type}
    >
      {loading ? <div className="loader w-[40px]"></div> : name}
      {/* {name} */}
    </Button>
  );
}
