import { secondaryButtonIcon } from "../../assets/components/buttons";
import { headerSvgs } from "../../assets/components/header";
import { heading, pageTitle } from "../../assets/components/text";

const readNotePage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;
  let noteId: string =
    JSON.parse(sessionStorage.getItem("noteReadId") ?? "404") ?? "404";

  let noteTitle: string = "";
  let noteText: string = "";

  if (noteId.toString() === "404") {
    noteTitle = "Note not found";
  } else {
    console.log("hehee");
    let notes: any[] =
      JSON.parse(sessionStorage.getItem("notes") ?? "[]") ?? [];

    for (let i: number = 0; i < notes.length; i++) {
      if (noteId === notes[i]._id) {
        noteTitle = notes[i].title;
        noteText = notes[i].text;
        break;
      }
    }
  }

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

  if (noteId.toString() === "404") {
    (document.querySelector(".heading h1") as HTMLHeadingElement)!.style.color =
      "oklch(63.7% 0.237 25.331)";
  }

  headerSvgs();
};

export default readNotePage;
