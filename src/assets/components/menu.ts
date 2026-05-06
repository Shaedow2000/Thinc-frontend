import { border } from "./border";
import { mainButtonIcon, secondaryButtonIcon } from "./buttons";
import { label } from "./text";

const menuComponent: Function = (): void => {
  const menu: string = /* html */ `
    <section class="menu hidden -right-200" id="menu">
      <div class="top-bar">
        <h1 class="py-sm w-fit h-fit font-bold text-lg text-dark-white">Menu</h1>
        <img src="src/assets/SVG/X mark.svg" id="x-mark" class="h-fit p-2.5" alt="x-mark" />
      </div>
      ${border}
      ${label("Quick actions")}
      <div class="quick-actions-section">
        ${mainButtonIcon("Home", "Home", "/dashboard")}
        ${mainButtonIcon("New", "New note", "/new")}
        ${mainButtonIcon("Draft", "Draft", "/draft")}
        ${mainButtonIcon("Search", "Search", "/search")}
      </div>
      ${label("Settings")}
      <div class="settings-section">
        ${secondaryButtonIcon("Account", "User", "/account")}
        ${secondaryButtonIcon("Reset", "Reset", "/reset")}
      </div>
    </section>
  `;

  document.body.insertAdjacentHTML("beforeend", menu);
};

export { menuComponent };
