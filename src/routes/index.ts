import { renderRoutes } from "./generate-routes";

// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import ForgetPasswordConfirm from "../pages/ForgetPasswordConfirm";
import UI from "../pages/UI";
import EmptyLayout from "../layouts/EmptyLayout";
import UserSettingsLayout from "../layouts/UserSettingsLayout";
import Personal from "../pages/settings/Personal";
import Account from "../pages/settings/Account";
import Settings from "../pages/settings/Settings";
import Project from "../pages/Project";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export type RouteType = {
  name: string;
  title: string;
  component: () => JSX.Element;
  path: string;
  isPublic: boolean;
};

export type LayoutType = {
  layout: () => JSX.Element;
  routes: RouteType[];
};

export const routes: LayoutType[] = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/",
        isPublic: true,
      },
      {
        name: "login",
        title: "Login page",
        component: Login,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        component: Register,
        path: "/register",
        isPublic: true,
      },
      {
        name: "forgetPassword",
        title: "ForgetPassword page",
        component: ForgetPassword,
        path: "/forget-password",
        isPublic: true,
      },
      {
        name: "forgetPasswordConfirm",
        title: "ForgetPasswordConfirm page",
        component: ForgetPasswordConfirm,
        path: "/forget-password-confirm",
        isPublic: true,
      },
    ],
  },
  {
    layout: UserSettingsLayout,
    routes: [
      {
        name: "user personal settings",
        title: "اطلاعات فردی",
        component: Personal,
        path: "/user/personal",
        isPublic: true,
      },
      {
        name: "user account settings",
        title: "اطلاعات حساب",
        component: Account,
        path: "/user/account",
        isPublic: true,
      },
      {
        name: "user app settings",
        title: "تنظیمات سامانه",
        component: Settings,
        path: "/user/settings",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "project",
        title: "Project page",
        component: Project,
        path: "/projects",
        isPublic: true,
      },
      {
        name: "project",
        title: "Project page",
        component: Project,
        path: "/projects/:id/:boardType",
        isPublic: true,
      },
    ],
  },
  {
    layout: EmptyLayout,
    routes: [
      {
        name: "ui",
        title: "UI page",
        component: UI,
        path: "/ui",
        isPublic: true,
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
