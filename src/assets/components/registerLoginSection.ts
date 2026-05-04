import { heading } from "./text";
import { mainButton, secondaryButton } from "./buttons";

const registerLoginSection: string = /* html */ `
  <section class="reg-log-section">
    ${heading("Embark in a new journey!")}
    <p>Create a new account</p>
    ${mainButton("Register", "/register")}
    <p>Or, log-in if you already have account account</p>
    ${secondaryButton("Login", "/login")}
  </section>
`;

export { registerLoginSection };
