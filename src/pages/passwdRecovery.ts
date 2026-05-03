import { mainButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const passwdRecoveryPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Password recovery")}
    <div class="center-form">
      <div>
        ${heading("Password recovery")}
        <p>Enter a recovery email so that we can send you a verification code to change your password</p>
      </div>
      <form class="form" id="recovery-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
        ${mainButton("Send")}
      </form> 
    </div>
  `;
};

export default passwdRecoveryPage;
