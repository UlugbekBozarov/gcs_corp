import { FC, Fragment } from "react";
import { Trans } from "react-i18next";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import { get } from "lodash";

import ListItem from "./ListItem";
import { Book, Logout, Settings } from "assets/icons";

const DrawerContend = () => {
  return (
    <Fragment>
      <Toolbar sx={{ height: "70px" }} />
      <Divider />
      <Box height="calc(100vh - 223px)" sx={{ overflowY: "auto" }}>
        <List
          subheader={
            <ListSubheader>
              <Trans>Main menu</Trans>
            </ListSubheader>
          }
        >
          {[
            {
              id: "books",
              link: "/books",
              // disabled: true,
              labelKey: "Books",
              icon: <Book />,
            },
          ].map((item) => (
            <ListItem item={item} key={get(item, "id")} />
          ))}
        </List>
      </Box>
      <Box height="152px">
        <List
          subheader={
            <ListSubheader>
              <Trans>Preference</Trans>
            </ListSubheader>
          }
        >
          {[
            {
              id: "settings",
              disabled: true,
              link: "/settings",
              labelKey: "Settings",
              icon: <Settings />,
            },
            {
              id: "logout",
              disabled: true,
              link: "/logout",
              labelKey: "Logout",
              icon: <Logout />,
            },
          ].map((item) => (
            <ListItem item={item} key={get(item, "id")} />
          ))}
        </List>
      </Box>
    </Fragment>
  );
};

interface SidebarProps {
  drawerWidth?: number;
  open?: boolean;
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ drawerWidth = 280, open, onClose }) => {
  return (
    <Fragment>
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerContend />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <DrawerContend />
      </Drawer>
    </Fragment>
  );
};

export default Sidebar;
