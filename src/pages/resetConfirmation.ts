import { mainButton, secondaryButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const resetConfirmationPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${headerButtons}
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
        </div>
         <div>
          ${label("Confirmation code")}
          ${input("text", "code", "code")}
        </div>
        <a class="small-link">Resend confirmation code</a>
        <section class="flex items-center gap-md">
          ${mainButton("Confirm")}
          ${secondaryButton("Abort")}
        </section>
      </form>
    </div>
  `;

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
    },
  );
};

export default resetConfirmationPage;
