import { mainButton, secondaryButton } from "../assets/components/buttons";
import { header } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const resetConfirmationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Reset confirmation")}
    <div class="center-form">
      <div>
        ${heading("Reset account confirmation")}
        <p>We’ve sent you a confirmation code.</p>
        <p>Please fill the following to reset the account.</p>
      </div>
      <form class="form" id="confirmation-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
          <span class="err-message" id="email-err"></span>
        </div>
         <div>
          ${label("Confirmation code")}
          ${input("text", "code", "code")}
          <span class="err-message" id="code-err"></span>
        </div>
        <a id="resend-verification-code-link" class="small-link">Resend confirmation code</a>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        <section class="flex items-center gap-md">
          ${mainButton("Confirm")}
          ${secondaryButton("Abort", "/")}
        </section>
      </form>
    </div>
  `;

  const resendCodeLink = document.getElementById(
    "resend-verification-code-link",
  ) as HTMLAnchorElement;

  resendCodeLink.addEventListener("click", async (): Promise<void> => {
    const email: string = (
      document.getElementsByName("email")[0] as HTMLInputElement
    ).value;

    if (!email.replaceAll(" ", "")) {
      document.getElementById("email-err")!.innerHTML = "An e-mail is required";
    } else {
      document.getElementById("email-err")!.innerHTML = "";

      let response = await fetch("http://localhost:8080/auth/reverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let result = await response.json();

      const messageDiv = document.getElementById(
        "error-message",
      ) as HTMLSpanElement;

      if (Number(String(result.status)[0]) === 2) {
        messageDiv.classList.remove("text-red-500");
        messageDiv.classList.add("text-green-500");

        messageDiv.innerHTML = result.message;
      } else {
        messageDiv.classList.remove("text-green-500");
        messageDiv.classList.add("text-red-500");

        let message: string[] = result.message.split(/[:,]/);

        document.getElementById("email-err")!.innerHTML = "";
        messageDiv.innerHTML = "";

        for (let i: number = 0; i < message.length; i++) {
          message[i] =
            message[i][0] === " "
              ? message[i].split("").splice(1, message[i].length).join("")
              : message[i];

          if (message[i] === "email")
            document.getElementById("email-err")!.innerHTML = message[i + 1];
        }

        if (!message.includes("email")) messageDiv.innerHTML = message.join("");
      }
    }
  });

  const confirmationForm = document.getElementById(
    "confirmation-form",
  ) as HTMLFormElement;

  confirmationForm.addEventListener(
    "submit",
    async (e: SubmitEvent): Promise<void> => {
      e.preventDefault();

      let response = await fetch("http://localhost:8080/auth/confirmation", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(new FormData(confirmationForm)),
        ),
      });

      let result = await response.json();

      if (Number(String(result.status)[0]) === 2) {
        location.pathname = "/dashboard";
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

export default resetConfirmationPage;
