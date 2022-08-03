import * as React from "react";
import { Box, Drawer as MuiDrawer } from "@mui/material";

interface Props {
  anchor?: "left" | "top" | "right" | "bottom";
  open?: boolean;
  children: React.ReactNode;
  toggleDrawer?: (isOpen: boolean) => void;
}

const Drawer = ({ children, anchor, open, toggleDrawer }: Props) => {
  return (
    <MuiDrawer
      anchor={anchor}
      open={open}
      onClose={() => {
        toggleDrawer && toggleDrawer(false);
      }}
    >
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={() => {
          toggleDrawer && toggleDrawer(false);
        }}
        onKeyDown={() => {
          toggleDrawer && toggleDrawer(false);
        }}
      >
        {children}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
