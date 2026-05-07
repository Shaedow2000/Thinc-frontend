import {
  mainButtonIcon,
  secondaryButtonIcon,
} from "../../assets/components/buttons";
import { headerSvgs } from "../../assets/components/header";
import { label, pageTitle } from "../../assets/components/text";

const accountPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "fit-content";

  app.innerHTML = `
    ${pageTitle("Account")}
    <section class="flex py-caption gap-lg items-center justify-start w-full">
      <div class="w-40 h-40 ring-2 ring-primary bg-dark-white rounded-full"></div>
      <h1 class="w-fit h-fit text-dark-white text-lg font-bold">User</h1>
    </section>
    ${label("Stats")}
    <div class="flex flex-col gap-md w-full">
      ${secondaryButtonIcon(`Number of notes: ${JSON.parse(sessionStorage.getItem("notes") ?? "[]").length}`, "Edit")}
      <p class="text-center font-light text-text text-sm">That's it I guess...</p>
    </div>
    ${label("Actions")}
    <div class="flex flex-col gap-md w-full">
      ${mainButtonIcon("Logout", "Logout", "/logout")}
      ${mainButtonIcon("Reset account", "Reset", "/reset")}
      ${mainButtonIcon("Remove account", "Delete", "/unregister")}
    </div>
    <div class="w-full py-lg"></div>
  `;

  headerSvgs();
};

export default accountPage;
