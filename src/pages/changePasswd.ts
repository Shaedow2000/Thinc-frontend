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
      <form class="form" id="change-passwd-form">
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

  const changePasswdForm = document.getElementById(
    "change-passwd-form",
  ) as HTMLFormElement;

  changePasswdForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch("http://localhost:8080/auth/password_reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(new FormData(changePasswdForm)),
        ),
      });

      let result = await response.json();
    },
  );
};

export default changePasswdPage;
