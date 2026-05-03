import { mainButton, secondaryButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const unregisterPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLFormElement;

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Register")}
    <div class="center-form">
      ${heading("Register a new account")}
      <form class="form" id="register-form">
        <div>
          ${label("Username")}
          ${input("text", "username", "username")}
        </div>
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
        <div>
          ${label("Password")}
          ${input("password", "password", "password")}
        </div>
        <a class="small-link">Forgot passwrod?</a>
        <section class="flex items-center gap-md">
          ${mainButton("Unregister")}
          ${secondaryButton("Abort")}
        </section>
      </form> 
    </div>
  `;
};

export default unregisterPage;
