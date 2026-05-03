import { mainButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const registrationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* hmtl */ `
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
        ${mainButton("Register")}
      </form> 
    </div>
  `;

  const registerForm = document.getElementById(
    "register-form",
  ) as HTMLFormElement;

  registerForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      console.log("clicked");
      e.preventDefault();

      console.log("DATA:", new FormData(registerForm));

      let response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(registerForm))),
      });

      const result = await response.json();
      console.log("RESULT:", result);
    },
  );
};

export default registrationPage;
