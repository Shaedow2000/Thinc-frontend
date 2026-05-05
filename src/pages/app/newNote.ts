import {
  mainButtonIcon,
  secondaryButtonIcon,
} from "../../assets/components/buttons";
import { headerSvgs } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, label, pageTitle } from "../../assets/components/text";
import { textArea } from "../../assets/components/textArea";

const newNotePage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${headerSvgs}
    ${pageTitle("Notes / New")}
    ${heading("Create new note")}
    <div class="w-full px-md py-xs">
      ${label("Note title")}
      ${input("text", "title", "Title")}
    </div>
    ${textArea}
    <div class="flex gap-md py-lg">
      ${secondaryButtonIcon("Home", "Home", "/dashboard")}
      ${mainButtonIcon("Save", "Save")}
    </div>
  `;
};

export { newNotePage };
