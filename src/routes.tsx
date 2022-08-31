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
import ShopingPageCP from "./control-props/pages/ShopingPageCP";

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
  {
    to: "/cp",
    path: "/cp",
    name: "Control Props",
    Component: ShopingPageCP,
  },
];
