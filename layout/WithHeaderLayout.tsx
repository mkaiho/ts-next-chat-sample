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
      {props.children}
    </>
  );
};

export default WithHeaderLayout;
