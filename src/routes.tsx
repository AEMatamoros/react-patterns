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
import ShopingPageES from "./extensible-styles/pages/ShopingPageES";

export const routes: iRouter[] = [
  {
    to: "/",
    path: "/",
    name: "Compound-Components",
    Component: ShopingPage,
  },
  {
    to: "/es",
    path: "/es",
    name: "Extensible Styles",
    Component: ShopingPageES,
  },
];
