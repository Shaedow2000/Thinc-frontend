import { mainButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const loginPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Login")}
    <div class="center-form">
      ${heading("Login by an existing account")}
      <form class="form" id="login-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
         <div>
          ${label("Password")}
          ${input("password", "password", "password")}
        </div>
        <a class="small-link">Forgot password?</a>
        ${mainButton("Login")}
      </form>
    </div>
  `;

  const loginForm = document.getElementById("login-form") as HTMLFormElement;

  loginForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(loginForm))),
      });

      let result = await response.json();
    },
  );
};

export default loginPage;
