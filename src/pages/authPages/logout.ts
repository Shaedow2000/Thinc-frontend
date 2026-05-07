import {
  mainButtonIcon,
  secondaryButton,
} from "../../assets/components/buttons";
import { bigTitle } from "../../assets/components/greeting";
import { header } from "../../assets/components/header";
import { pageTitle } from "../../assets/components/text";

const logoutPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Logout")}
    <div class="center-section pb-2xl">
      ${bigTitle("Logout from your account")}
      <span>Do you really want to logout from your account?</span>
      <span>Note: that this will not remove your account.</span>
    </div>
    <div class="flex py-sm gap-md" id="buttons-section-logout">
      ${mainButtonIcon("Logout", "Logout")}
      ${secondaryButton("Abort", "/dashboard")}
    </div>
  `;

  document
    .querySelector("#buttons-section-logout > .button-main-icon")
    ?.addEventListener("click", (): void => {
      localStorage.removeItem("token");
      sessionStorage.clear();

      location.pathname = "/";
    });
};

export default logoutPage;
