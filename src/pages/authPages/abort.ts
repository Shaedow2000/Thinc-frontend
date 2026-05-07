import { mainButton } from "../../assets/components/buttons";
import { header } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, label, pageTitle } from "../../assets/components/text";

const abortPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Abort operation")}
    <div class="center-form">
      <div>
        ${heading("Abort changing password")}
        <p>Enter your email to abort changing its password</p>
      </div>
      <form class="form" id="abort-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
          <span class="err-message" id="email-err"></span>
        </div>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        ${mainButton("Abort")}
      </form> 
    </div>
  `;

  const abortForm = document.getElementById("abort-form") as HTMLFormElement;

  abortForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch("http://localhost:8080/auth/abort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(abortForm))),
      });

      let result = await response.json();

      if (Number(String(result.status)[0]) === 2) {
        location.pathname = "/aborted";
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

export default abortPage;
