import { mainButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const accountVerificationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLFormElement;

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Account verification")}
    <div class="center-form">
      <div>
        ${heading("Verify the account")}
        <p>We’ve sent you a verification code.</p>
        <p>Please fill the following to verify the account.</p>
      </div>
      <form class="form" id="account-verification-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
        <div>
          ${label("Verification code")}
          ${input("text", "code", "code")}
        </div>
        <a class="small-link">Resend verification code</a>
        ${mainButton("Verify")}
      </form> 
    </div>
  `;
};

export default accountVerificationPage;
