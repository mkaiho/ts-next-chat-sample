import { Box, Container } from "@mui/material";
import { NextPage } from "next";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import Header from "../components/organisms/header";

type WithHeaderLayoutProps = Required<{
  readonly children: ReactElement;
}>;

const WithHeaderLayout = (props: WithHeaderLayoutProps) => {
  return (
    <>
      <Header {...props} />
      <Container>
        <Box sx={{ my: 8 }}>{props.children}</Box>
      </Container>
    </>
  );
};

export default WithHeaderLayout;
