import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Spinner } from "components";

import { Navbar, Sidebar } from "./components";

const drawerWidth = 280;

const Layout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" bgcolor="Background">
      <Navbar onOpen={handleOpen} drawerWidth={drawerWidth} />
      <Box
        component="aside"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar open={open} onClose={handleClose} drawerWidth={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100vw", md: `calc(100% - ${drawerWidth}px)` },
          height: "calc(100vh - 76px)",
          marginTop: "76px",
        }}
      >
        {/* {status === "pending" ? ( */}
        {false ? (
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Spinner />
          </Box>
        ) : (
          <Box
            height="100%"
            sx={{
              overflowY: "auto",
              padding: { xs: "0px 10px 20px 10px", md: "0px 16px 16px 16px" },
            }}
          >
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Layout;
