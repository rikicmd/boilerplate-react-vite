import React from "react";
import { RouteObject } from "react-router-dom";

export const protectedRouteConfig: RouteObject[] | undefined = [
  {
    path: "",
    Component: React.lazy(() => import("pages/admin/DashboardPage")),
  },
];
