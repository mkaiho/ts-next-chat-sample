import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = ({ children }: Props) => {
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>{children}</Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
