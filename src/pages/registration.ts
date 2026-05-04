import { mainButton } from "../assets/components/buttons";
import { headerOneButton } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";
import { linkButtons } from "../utils/clickEvent";

const registrationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* hmtl */ `
    ${headerOneButton("Login")}
    ${pageTitle("Register")}
    <div class="center-form">
      ${heading("Register a new account")}
      <form class="form" id="register-form">
        <div>
          ${label("Username")}
          ${input("text", "username", "username")}
          <span class="err-message" id="username-err"></span>
        </div>
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
          <span class="err-message" id="email-err"></span>
        </div>
        <div>
          ${label("Password")}
          ${input("password", "password", "password")}
          <span class="err-message" id="password-err"></span>
        </div>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        ${mainButton("Register")}
      </form> 
    </div>
  `;

  linkButtons("login-button", "/login");

  const registerForm = document.getElementById(
    "register-form",
  ) as HTMLFormElement;

  registerForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(registerForm))),
      });

      const result = await response.json();

      if (Number(String(result.status)[0]) === 2) {
        location.href = "/verify";
      } else {
        let message: string[] = result.message.split(/[:,]/);

        document.getElementById("username-err")!.innerHTML = "";
        document.getElementById("email-err")!.innerHTML = "";
        document.getElementById("password-err")!.innerHTML = "";
        document.getElementById("error-message")!.innerHTML = "";

        for (let i: number = 0; i < message.length; i++) {
          message[i] =
            message[i][0] === " "
              ? message[i].split("").splice(1, message[i].length).join("")
              : message[i];

          if (message[i] === "username")
            document.getElementById("username-err")!.innerHTML = message[i + 1];

          if (message[i] === "email")
            document.getElementById("email-err")!.innerHTML = message[i + 1];

          if (message[i] === "password")
            document.getElementById("password-err")!.innerHTML = message[i + 1];
        }

        if (
          !message.includes("username") &&
          !message.includes("email") &&
          !message.includes("password")
        )
          document.getElementById("error-message")!.innerHTML =
            message.join("");
      }
    },
  );
};

export default registrationPage;
