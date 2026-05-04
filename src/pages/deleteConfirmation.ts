import { mainButton, secondaryButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const deleteConfirmationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Confirmation")}
    <div class="center-form">
      <div>
        ${heading("Confirm deleting the account")}
        <p>We’ve sent you a confirmation code.</p>
        <p>Please fill the following to delete the account.</p>
      </div>
      <form class="form" id="login-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
         <div>
          ${label("Password")}
          ${input("password", "password", "password")}
        </div>
        <a class="small-link">Resend confirmation code</a>
        <section class="flex items-center gap-md">
          ${mainButton("Confirm")}
          ${secondaryButton("Abort")}
        </section>
      </form>
    </div>
  `;
};

export default deleteConfirmationPage;
