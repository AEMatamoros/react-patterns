import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface iRouter {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  nested?: iRouter[];
}
//Components
import ShopingPage from "./compound-component/pages/ShopingPage";

export const routes: iRouter[] = [
  {
    to: "/",
    path: "/",
    name: "main",
    Component: ShopingPage,
  },
];
