import { mainButton, secondaryButton } from "./buttons";

const headerSvgs: string = /* html */ `
  <header class="header">
    <div>
      <a href="/" class="my-auto"><img src="src/assets/SVG/Logo.svg" alt="Thinc-Logo" /></a>
      <div>
        <img src="src/assets/SVG/Avatar.svg" alt="Avatar" class="svg" />
        <img src="src/assets/SVG/Menu.svg" alt="menu" class="svg" />
      </div>
    </div>
  </header>
`;

const headerButtons: string = /* html */ `
  <header class="header">
    <div>
      <a href="/" class="my-auto"><img src="src/assets/SVG/Logo.svg" alt="Thinc-Logo" /></a>
      <div>
        ${secondaryButton("Login", "/login")}
        ${mainButton("Register", "/register")}
      </div>
    </div>
  </header>
`;

const header: string = /* html */ `
  <header class="header">
    <div>
      <a href="/" class="my-auto"><img src="src/assets/SVG/Logo.svg" alt="Thinc-Logo" /></a>
    </div>
  </header>
`;

const headerOneButton: Function = (name: string): string => `
  <header class="header">
    <div>
      <a href="/" class="my-auto"><img src="src/assets/SVG/Logo.svg" alt="Thinc-Logo" /></a>
      <div>
        ${secondaryButton(name, "/" + name.toLowerCase())}
      </div>
    </div>
  </header>
`;

export { headerSvgs, headerButtons, headerOneButton, header };
