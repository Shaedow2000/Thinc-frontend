import { mainButton } from "../../assets/components/buttons";
import { header } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, label, pageTitle } from "../../assets/components/text";

const passwdRecoveryPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Password recovery")}
    <div class="center-form">
      <div>
        ${heading("Password recovery")}
        <p>Enter a recovery email so that we can send you a verification code to change your password</p>
      </div>
      <form class="form" id="recovery-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
          <span class="err-message" id="email-err"></span>
        </div>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        ${mainButton("Send")}
      </form> 
    </div>
  `;

  const recoveryForm = document.getElementById(
    "recovery-form",
  ) as HTMLFormElement;

  recoveryForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch(
        "http://localhost:8080/auth/reset_verification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(recoveryForm))),
        },
      );

      let result = await response.json();

      if (Number(String(result.status)[0]) === 2) {
        location.pathname = "/change_passwd";
      } else {
        let message: string[] = result.message.split(/[:,]/);

        document.getElementById("email-err")!.innerHTML = "";
        document.getElementById("error-message")!.innerHTML = "";

        for (let i: number = 0; i < message.length; i++) {
          message[i] =
            message[i][0] === " "
              ? message[i].split("").splice(1, message[i].length).join("")
              : message[i];

          if (message[i] === "email")
            document.getElementById("email-err")!.innerHTML = message[i + 1];
        }

        if (!message.includes("email"))
          document.getElementById("error-message")!.innerHTML =
            message.join("");
      }
    },
  );
};

export default passwdRecoveryPage;
