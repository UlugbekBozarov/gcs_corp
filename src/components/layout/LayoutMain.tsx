import { FC, memo } from "react";
import { Box, IconButton, Stack } from "@mui/material";

import { Breadcrumb } from "layout/components";
import { History, Settings } from "assets/icons";

interface LayoutMainProps {
  children?: any;
  onHistoryClick?: () => void | undefined;
  onSettingsClick?: () => void | undefined;
}

const LayoutMain: FC<LayoutMainProps> = ({
  children,
  onHistoryClick,
  onSettingsClick,
}) => {
  return (
    <Box>
      <Box
        minHeight="30px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="8px"
      >
        <Box
          width={`calc(100%${onHistoryClick ? "- 40px" : ""}${
            onSettingsClick ? "40px" : "0px"
          })`}
          pr="20px"
        >
          <Breadcrumb />
        </Box>
        <Stack spacing="10px" direction="row">
          {onHistoryClick && (
            <IconButton size="small" onClick={onHistoryClick}>
              <History />
            </IconButton>
          )}
          {onSettingsClick && (
            <IconButton size="small" onClick={onSettingsClick}>
              <Settings width="20" height="20" />
            </IconButton>
          )}
        </Stack>
      </Box>
      {children}
    </Box>
  );
};

export default memo(LayoutMain);
