import { styled } from "@mui/material";

export const StyledIconBlock = styled("span")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    transition: "all 0.3s",
  },
  "&.show svg": {
    transform: "rotate(90deg)",
  },
});
