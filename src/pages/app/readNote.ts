import { secondaryButtonIcon } from "../../assets/components/buttons";
import { headerSvgs } from "../../assets/components/header";
import { heading, pageTitle } from "../../assets/components/text";

const readNotePage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;
  let noteId: string = "00000000";
  let noteTitle: string = "Note title";
  let noteText: string = "";

  app.style.height = "100vh";

  app.innerHTML = `
    ${pageTitle("Note / " + noteId)}
    ${heading(noteTitle)}
    <section class="textarea">
      <div class="separator"></div>
      <p class="w-full h-full ">${noteText}</p>
      <div class="separator"></div>
    </section>
    <div class="flex gap-md py-lg">
      ${secondaryButtonIcon("Home", "Home", "/dashboard")}
      ${secondaryButtonIcon("Edit", "Edit", "")}
      ${secondaryButtonIcon("Delete", "Delete", "")}
    </div>
  `;

  headerSvgs();
};

export default readNotePage;
