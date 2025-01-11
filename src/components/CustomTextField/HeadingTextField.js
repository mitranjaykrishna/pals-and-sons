import { TextField } from "@mui/material";
import React from "react";
import { isNullOrUndefined } from "../../utils/utils";

export default function HeadingTextField({
  textFieldName,
  value,
  onChange,
  heading,
  error,
  type,
  placeholder,
  disabled,
  height,
  loading,
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <span className="text-sm font-medium text-pkt-subheading">{heading}</span>
      <div className="flex flex-col justify-center gap-0.5">
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder={
            isNullOrUndefined(placeholder) ? `Enter ${heading}` : placeholder
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#000",
              fontSize: "14px",
              fontFamily: "inherit",
              input: {
                height: height,
                padding: "12px 14px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#EAEAEA",
                borderWidth: "1px",
                borderRadius: "10px",
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2d2d2d",
                  borderWidth: "2px",
                  borderRadius: "10px",
                },
              },
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ccc",
                  borderRadius: "10px",
                },
              },
            },
            "& .MuiInputLabel-outlined": {
              color: "#918F90",
              fontSize: "14px",
              fontFamily: "inherit",
              "&.Mui-focused": {
                color: "#60C0BD",
              },
            },
          }}
          value={value}
          onChange={onChange}
          name={textFieldName}
          type={isNullOrUndefined(type) ? "text" : type}
          error={!isNullOrUndefined(error)}
          disabled={disabled}
        />
        {!isNullOrUndefined(error) && (
          <span className="text-xs text-red-600">{error}</span>
        )}
      </div>
    </div>
  );
}
