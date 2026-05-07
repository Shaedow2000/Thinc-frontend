import { mainButton, secondaryButton } from "../../assets/components/buttons";
import { header } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, label, pageTitle } from "../../assets/components/text";

const unregisterPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLFormElement;

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Unregister")}
    <div class="center-form">
      ${heading("Delete your Thinc account")}
      <form class="form" id="unregister-form">
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
        <a href="/password_recovery" class="small-link">Forgot passwrod?</a>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        <section class="flex items-center gap-md" id="buttons-section-unregister">
          ${mainButton("Unregister")}
          ${secondaryButton("Abort", "/")}
        </section>
      </form> 
    </div>
  `;

  const unregisterForm = document.getElementById(
    "unregister-form",
  ) as HTMLFormElement;

  unregisterForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/unregister`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            Object.fromEntries(new FormData(unregisterForm)),
          ),
        },
      );

      const result = await response.json();

      if (Number(String(result.status)[0]) === 2) {
        location.pathname = "/unregister_confirmation";
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

export default unregisterPage;
