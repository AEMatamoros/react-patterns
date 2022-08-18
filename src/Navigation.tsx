import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
export default function Navigation() {
  return (
    <>
      <nav className="nav">
        <ul className="ul">
          <li className="li">Compound-Components</li>
        </ul>
      </nav>
      <BrowserRouter>
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
