import dashboardPage from "../pages/app/dashboard";
import { draftPage } from "../pages/app/draft";
import { newNotePage } from "../pages/app/newNote";
import readNotePage from "../pages/app/readNote";
import { searchNotePage } from "../pages/app/search";
import accountVerificationPage from "../pages/authPages/accountVerification";
import changePasswdPage from "../pages/authPages/changePasswd";
import deleteConfirmationPage from "../pages/authPages/deleteConfirmation";
import landing from "../pages/authPages/landingPage";
import loginPage from "../pages/authPages/login";
import passwdRecoveryPage from "../pages/authPages/passwdRecovery";
import registrationPage from "../pages/authPages/registration";
import resetConfirmationPage from "../pages/authPages/resetConfirmation";
import unregisterPage from "../pages/authPages/unregister";
import abortPage from "../pages/errorPages/abort";
import pageNotFound from "../pages/errorPages/notFound";
import isUserLoggedIn from "./userLoggedIn";

export default async function clientRouter(): Promise<void> {
  const router: Record<string, Function> = {
    "/": landing,
    "/login": loginPage,
    "/register": registrationPage,
    "/verify": accountVerificationPage,
    "/unregister": unregisterPage,
    "/unregister_confirmation": deleteConfirmationPage,
    "/reset": resetConfirmationPage,
    "/password_recovery": passwdRecoveryPage,
    "/change_passwd": changePasswdPage,
    "/abort": abortPage,
    "/dashboard": dashboardPage,
    "/note": readNotePage,
    "/new": newNotePage,
    "/draft": draftPage,
    "/search": searchNotePage,
  };

  const isLoggedIn: boolean = await isUserLoggedIn();

  if (
    (location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/register" ||
      location.pathname === "/verify" ||
      location.pathname === "/abort") &&
    isLoggedIn
  ) {
    history.pushState({}, "", "/dashboard");
  }

  let page: Function = router[location.pathname];

  if (page) page();

  if (!page) pageNotFound();
}
