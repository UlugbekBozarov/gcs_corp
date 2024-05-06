import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { get } from "lodash";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  background: get(
    theme,
    `palette.common.${
      get(theme, "palette.mode") === "light" ? "white" : "black"
    }`
  ),
  borderRadius: get(theme, "shape.borderRadius"),
}));
