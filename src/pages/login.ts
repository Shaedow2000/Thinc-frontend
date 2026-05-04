import { mainButton } from "../assets/components/buttons";
import { headerOneButton } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const loginPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${headerOneButton("Register")}
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
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
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

      if (Number(String(result.status)[0]) === 2) {
        location.href = "/dashboard";
      } else {
        let message: string[] = result.message.split(/[:,]/);

        document.getElementById("email-err")!.innerHTML = "";
        document.getElementById("password-err")!.innerHTML = "";
        document.getElementById("error-message")!.innerHTML = "";

        for (let i: number = 0; i < message.length; i++) {
          message[i] =
            message[i][0] === " "
              ? message[i].split("").splice(1, message[i].length).join("")
              : message[i];

          if (message[i] === "email")
            document.getElementById("email-err")!.innerHTML = message[i + 1];

          if (message[i] === "password")
            document.getElementById("password-err")!.innerHTML = message[i + 1];
        }

        if (!message.includes("email") && !message.includes("password"))
          document.getElementById("error-message")!.innerHTML =
            message.join("");
      }
    },
  );
};

export default loginPage;
