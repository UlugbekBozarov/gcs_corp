import { memo } from "react";
import { Box } from "@mui/material";

import { NotFound as NotFoundImage } from "assets/icons";

const NotFound = ({ width = "100%", height = "100%" }) => {
  return (
    <Box
      width={width}
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: { xs: "20px", sm: "50px", md: "100px", lg: "150px" } }}
    >
      <NotFoundImage />
    </Box>
  );
};

export default memo(NotFound);
