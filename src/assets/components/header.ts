import { main_button, secondary_button } from "./buttons";

const header_svgs: string = /* html */ `
  <header class="header">
    <div>
      <img src="src/assets/SVG/Logo.svg" alt="Thinc-Logo" />
      <div>
        <img src="src/assets/SVG/Avatar.svg" alt="Avatar" class="svg" />
        <img src="src/assets/SVG/Menu.svg" alt="menu" class="svg" />
      </div>
    </div>
  </header>
`;

const header_buttons: string = /* html */ `
  <header class="header">
    <div>
      <img src="src/assets/SVG/Logo.svg" alt="Thinc-Logo" />
      <div>
        ${secondary_button("Login")}
        ${main_button("Register")}
      </div>
    </div>
  </header>
`;

export { header_svgs, header_buttons };
