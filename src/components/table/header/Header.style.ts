import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledStickyTableRow = styled(TableRow)(({ theme }) => ({
  position: "sticky",
  background: theme?.palette?.background?.paper,
  zIndex: 99,
}));
