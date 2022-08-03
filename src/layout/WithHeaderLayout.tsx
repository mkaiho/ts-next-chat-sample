import { ReactElement, useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "../components/organisms/header";
import Drawer from "../components/organisms/drawer";

const sideMenuLinks: { [key: string]: string } = {
  Home: "/",
};

type WithHeaderLayoutProps = {
  disableMenuButton?: boolean;
  readonly children: ReactElement;
};

const WithHeaderLayout = ({
  children,
  disableMenuButton,
}: WithHeaderLayoutProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <Header {...{ children }}>
        <>
          {!disableMenuButton && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsOpenMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Button color="inherit" variant="outlined">
            <Link href="/signup">sign up</Link>
          </Button>
          <Button color="inherit">
            <Link href="/signin">sign in</Link>
          </Button>
        </>
      </Header>
      <Drawer anchor="left" open={isOpenMenu} toggleDrawer={setIsOpenMenu}>
        <List>
          {Object.keys(sideMenuLinks).map((name, _) => {
            return (
              <ListItem key={name} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={<Link href={sideMenuLinks[name]}>{name}</Link>}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Container>
        <Box sx={{ my: 8 }}>{children}</Box>
      </Container>
    </>
  );
};

export default WithHeaderLayout;
