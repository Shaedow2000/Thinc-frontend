import { heading } from "./text";
import { mainButton, secondaryButton } from "./buttons";

const registerLoginSection: string = /* html */ `
  <section class="reg-log-section">
    ${heading("Embark in a new journey!")}
    <p>Create a new account</p>
    ${mainButton("Register")}
    <p>Or, log-in if you already have an account</p>
    ${secondaryButton("Login")}
  </section>
`;

export { registerLoginSection };
