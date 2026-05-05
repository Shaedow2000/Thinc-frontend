import { border } from "../../assets/components/border";
import {
  mainButton,
  secondaryButtonIcon,
} from "../../assets/components/buttons";
import { foundNotes } from "../../assets/components/cardsSection";
import { headerSvgs } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, pageTitle } from "../../assets/components/text";

const searchNotePage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "fit-content";
  app.style.minHeight = "100vh";

  app.innerHTML = /* html */ `
    ${headerSvgs}
    ${pageTitle("Notes / Search")}
    ${heading("Search")}
    <div class="flex flex-col py-caption px-md gap-md items-center justify-center w-full">
      ${input("text", "title", "Note title")}
      <div class="flex items-center justify-center py-xs gap-md">
        ${secondaryButtonIcon("home", "Home", "/dashboard")}
        ${mainButton("Search")}
      </div>
    </div>
    ${border}
    ${foundNotes([])}
  `;
};

export { searchNotePage };
