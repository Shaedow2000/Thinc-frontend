import { heading } from "./text";
import { mainButtonIcon } from "./buttons";

const forDevsSection: string = /* html */ `
  <section class="for-devs">
    ${heading("For developers:")}
    <p>Any contribution to the project is welcome !!!</p>
    <p>
      You can find the code to the app freely available on Github, just go
      to:
    </p>
    ${mainButtonIcon("Thinc Backend code (API)", "Code", "https://github.com/Shaedow2000/Thinc-API")}
    ${mainButtonIcon("Thinc Frontend code", "Code", "https://github.com/Shaedow2000/Thinc-frontend")}
  </section>
`;

export { forDevsSection };
