import accountVerificationPage from "../pages/authPages/accountVerification";
import changePasswdPage from "../pages/authPages/changePasswd";
import deleteConfirmationPage from "../pages/authPages/deleteConfirmation";
import landing from "../pages/authPages/landingPage";
import loginPage from "../pages/authPages/login";
import passwdRecoveryPage from "../pages/authPages/passwdRecovery";
import registrationPage from "../pages/authPages/registration";
import resetConfirmationPage from "../pages/authPages/resetConfirmation";
import unregisterPage from "../pages/authPages/unregister";

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
