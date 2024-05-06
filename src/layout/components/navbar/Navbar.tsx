import { FC } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import { Menu } from "assets/icons";

interface NavbarProps {
  drawerWidth?: number;
  onOpen?: () => void;
}

const Navbar: FC<NavbarProps> = ({ drawerWidth = 280, onOpen }) => {
  return (
    <AppBar
      component="nav"
      sx={{
        height: "70px",
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            onClick={onOpen}
            sx={{
              display: { md: "none" },
              mr: 2,
            }}
          >
            <Menu />
          </IconButton>
        </Box>
        <Box width="100%" display="flex" justifyContent="flex-end">
          {/* <Language /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
