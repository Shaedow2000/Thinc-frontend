import { mainButton, secondaryButton } from "../assets/components/buttons";
import { headerButtons } from "../assets/components/header";
import { input } from "../assets/components/input";
import { heading, label, pageTitle } from "../assets/components/text";

const unregisterPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLFormElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${headerButtons}
    ${pageTitle("Unregister")}
    <div class="center-form">
      ${heading("Delete your Thinc account")}
      <form class="form" id="unregister-form">
        <div>
          ${label("Email")}
          ${input("email", "email", "email")}
        </div>
        <div>
          ${label("Password")}
          ${input("password", "password", "password")}
        </div>
        <a class="small-link">Forgot passwrod?</a>
        <section class="flex items-center gap-md">
          ${mainButton("Unregister")}
          ${secondaryButton("Abort")}
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

      let response = await fetch("http://localhost:8080/auth/unregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(unregisterForm))),
      });

      const result = await response.json();
    },
  );
};

export default unregisterPage;
