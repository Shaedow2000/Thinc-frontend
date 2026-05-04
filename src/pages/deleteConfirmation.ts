import { mainButton, secondaryButton } from "../assets/components/buttons";
import { header } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const deleteConfirmationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Confirmation")}
    <div class="center-form">
      <div>
        ${heading("Confirm deleting the account")}
        <p>We’ve sent you a confirmation code.</p>
        <p>Please fill the following to delete the account.</p>
      </div>
      <form class="form" id="confirmation-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
         <div>
          ${label("Confirmation code")}
          ${input("text", "code", "code")}
        </div>
        <a class="small-link">Resend confirmation code</a>
        <span class="text-red-500 font-medium text-center text-caption" id="error-message"></span>
        <section class="flex items-center gap-md">
          ${mainButton("Confirm")}
          ${secondaryButton("Abort", "abort")}
        </section>
      </form>
    </div>
  `;

  const confirmationForm = document.getElementById(
    "confirmation-form",
  ) as HTMLFormElement;

  document.getElementById("abort")!.addEventListener("click", (): void => {
    location.pathname = "/";
  });

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
        location.pathname = "/";
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

export default deleteConfirmationPage;
