import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import { routes } from "./routes";
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <ul
            className="ul"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            {routes.map((route, index) => {
              return (
                <NavLink to={route.to} key={index}>
                  {route.name}
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, name, Component, nested }) => {
            return (
              <Route path={path} element={<Component />} key={name}>
                {nested?.map(({ path, name, Component }) => {
                  return (
                    <Route path={path} element={<Component />} key={name} />
                  );
                })}
              </Route>
            );
          })}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
