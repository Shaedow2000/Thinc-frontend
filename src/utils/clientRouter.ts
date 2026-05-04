import accountVerificationPage from "../pages/accountVerification";
import changePasswdPage from "../pages/changePasswd";
import deleteConfirmationPage from "../pages/deleteConfirmation";
import landing from "../pages/landingPage";
import loginPage from "../pages/login";
import passwdRecoveryPage from "../pages/passwdRecovery";
import registrationPage from "../pages/registration";
import resetConfirmationPage from "../pages/resetConfirmation";
import unregisterPage from "../pages/unregister";

export default function clientRouter(): void {
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
  };

  let page: Function = router[location.pathname];

  if (page) page();
}
