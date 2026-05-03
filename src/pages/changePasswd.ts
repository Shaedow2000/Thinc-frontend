import { mainButton, secondaryButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const changePasswdPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Change password")}
    <div class="center-form">
      <div>
        ${heading("Change your password")}
        <p>Please enter the verification code sent to the provided email address, after that you can change your password.</p>
      </div>
      <form class="form" id="recovery-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
        <div>
          ${label("Verification code")}
          ${input("text", "code", "code")}
        </div>
         <div>
          ${label("New password")}
          ${input("password", "password", "password")}
        </div>
         <div>
          ${label("Retype password")}
          ${input("password", "other", "password")}
        </div>
        <section class="flex items-center gap-md">
          ${mainButton("Change")}
          ${secondaryButton("Abort")}
        </section>
      </form> 
    </div>
  `;
};

export default changePasswdPage;
