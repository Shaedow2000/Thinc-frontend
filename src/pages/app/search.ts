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

  app.innerHTML = `
    ${pageTitle("Notes / Search")}
    ${heading("Search")}
    <div class="flex flex-col py-caption px-md gap-md items-center justify-center w-full">
      ${input("text", "title", "Note title")}
      <div id="buttons-section-search" class="flex items-center justify-center py-xs gap-md">
        ${secondaryButtonIcon("home", "Home", "/dashboard")}
        ${mainButton("Search")}
      </div>
    </div>
    ${border}
    <div id="found-notes" class="w-full h-full">
      ${foundNotes([])}
    </div>
  `;

  document
    .querySelector("#buttons-section-search > .button-main")!
    .addEventListener("click", (): void => {
      let foundNotesArrayIndexes: number[] = [];
      let foundNotesArray: { title: string; text: string }[] = [];

      const searchQuerry: string = (
        document.getElementsByName("title")[0] as HTMLInputElement
      ).value;

      const notes: any[] =
        JSON.parse(sessionStorage.getItem("notes") ?? "[]") ?? [];

      for (let i: number = 0; i < notes.length; i++) {
        if (notes[i].title.includes(searchQuerry))
          foundNotesArrayIndexes.push(i);
      }

      for (let i: number = 0; i < foundNotesArrayIndexes.length; i++) {
        foundNotesArray.push(notes[foundNotesArrayIndexes[i]]);
      }

      document.getElementById("found-notes")!.innerHTML =
        foundNotes(foundNotesArray);
    });

  headerSvgs();
};

export { searchNotePage };
