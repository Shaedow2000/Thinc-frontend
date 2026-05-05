import { mainButton, secondaryButton } from "../../assets/components/buttons";
import { header } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, label, pageTitle } from "../../assets/components/text";

const changePasswdPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${header}
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
          <span class="err-message" id="email-err"></span>
        </div>
        <div>
          ${label("Verification code")}
          ${input("text", "code", "code")}
          <span class="err-message" id="code-err"></span>
        </div>
         <div>
          ${label("New password")}
          ${input("password", "password", "password")}
          <span class="err-message" id="password-err"></span>
        </div>
         <div>
          ${label("Retype password")}
          ${input("password", "other", "password")}
          <span class="err-message" id="retype-password-err"></span>
        </div>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        <section class="flex items-center gap-md">
          ${mainButton("Change")}
          ${secondaryButton("Abort", "abort")}
        </section>
      </form> 
    </div>
  `;

  const changePasswdForm = document.getElementById(
    "change-passwd-form",
  ) as HTMLFormElement;

  if (
    (document.getElementsByName("password")[0] as HTMLInputElement)!.value !==
    (document.getElementsByName("other")[0] as HTMLInputElement)!.value
  ) {
    document.getElementById("other")!.innerHTML = "Passwords don't match";
  } else {
    document.getElementById("abort")!.addEventListener("click", (): void => {
      location.pathname = "/dashboard";
    });

    changePasswdForm.addEventListener(
      "submit",
      async (e: SubmitEvent): Promise<void> => {
        e.preventDefault();

        let response = await fetch(
          "http://localhost:8080/auth/password_reset",
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
              Object.fromEntries(new FormData(changePasswdForm)),
            ),
          },
        );

        let result = await response.json();

        if (Number(String(result.status)[0]) === 2) {
          location.pathname = "/dashboard";
        } else {
          let message: string[] = result.message.split(/[:,]/);

          for (let i: number = 0; i < message.length; i++) {
            message[i] =
              message[i][0] === " "
                ? message[i].split("").splice(1, message[i].length).join("")
                : message[i];

            document.getElementById("email-err")!.innerHTML = "";
            document.getElementById("password-err")!.innerHTML = "";
            document.getElementById("error-message")!.innerHTML = "";

            if (message[i] === "email")
              document.getElementById("email-err")!.innerHTML = message[i + 1];

            if (!message.includes("email") && !message.includes("password"))
              document.getElementById("error-message")!.innerHTML =
                message.toString();

            if (message[i] === "password")
              document.getElementById("password-err")!.innerHTML =
                message[i + 1];
          }

          if (!message.includes("email") && !message.includes("password"))
            document.getElementById("error-message")!.innerHTML =
              message.join("");
        }
      },
    );
  }
};

export default changePasswdPage;
