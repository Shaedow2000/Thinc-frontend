import { mainButton, secondaryButton } from "./buttons";

const headerSvgs: Function = (): void => {
  document.getElementById("app")!.insertAdjacentHTML(
    "afterbegin",
    `
  <header class="header">
    <div>
      <img src="src/assets/SVG/Logo.svg" data-href="/" alt="Thinc-Logo" />
      <div>
        <img data-href="/account" src="src/assets/SVG/Avatar.svg" alt="Avatar" class="svg" />
        <img id="open-menu" src="src/assets/SVG/Menu.svg" alt="menu" class="svg" />
      </div>
    </div>
  </header>
  `,
  );
};

const headerButtons: string = /* html */ `
  <header class="header">
    <div>
      <img src="src/assets/SVG/Logo.svg" data-href="/" alt="Thinc-Logo" />
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
      <img src="src/assets/SVG/Logo.svg" data-href="/" alt="Thinc-Logo" />
    </div>
  </header>
`;

const headerOneButton: Function = (name: string): string => `
  <header class="header">
    <div>
      <img src="src/assets/SVG/Logo.svg" data-href="/" alt="Thinc-Logo" />
      <div>
        ${secondaryButton(name, "/" + name.toLowerCase())}
      </div>
    </div>
  </header>
`;

export { headerSvgs, headerButtons, headerOneButton, header };
