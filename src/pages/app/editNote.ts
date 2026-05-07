import {
  mainButtonIcon,
  secondaryButtonIcon,
} from "../../assets/components/buttons";
import { headerSvgs } from "../../assets/components/header";
import { input } from "../../assets/components/input";
import { heading, label, pageTitle } from "../../assets/components/text";
import { editTextArea } from "../../assets/components/textArea";

const editNotePage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;
  const noteId: string = sessionStorage.getItem("noteReadId") ?? "404";

  let noteTitle: string = "";
  let noteText: string = "";

  if (noteId.toString() === "404") {
    noteTitle = "Note not found";
  } else {
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

  app.innerHTML = `
    ${pageTitle(`Notes / Edit`)}
    ${heading("Edit note")}
    <div class="w-full px-md py-xs">
      ${label("Note title")}
      ${input("text", "title", "Title")}
    </div>
    ${editTextArea(noteText)}
    <span id="message" class="pt-lg text-center w-full text-caption font-medium text-green-500"></span>
    <div id="bottom-buttons-new-note" class="flex gap-md py-lg">
      ${secondaryButtonIcon("Home", "Home", "/dashboard")}
      ${mainButtonIcon("Save", "Save")}
    </div>
  `;

  (document.getElementsByName("title")[0] as HTMLInputElement)!.value =
    noteTitle;

  document
    .querySelector("#bottom-buttons-new-note > .button-main-icon")
    ?.addEventListener("click", async (): Promise<void> => {
      let title: string = (
        document.getElementsByName("title")[0] as HTMLInputElement
      ).value;
      let text: string = (
        document.querySelector("textarea") as HTMLTextAreaElement
      ).value;

      const numberONotes: number = (
        JSON.parse(sessionStorage.getItem("notes") ?? "[]") ?? []
      ).length;

      if (title.replaceAll(" ", "") === "")
        title = `Untiteled #${numberONotes + 1}`;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/note/${noteId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            text: text,
          }),
        },
      );

      const result = await response.json();

      if (Number(String(result.status)[0]) === 2)
        sessionStorage.setItem("notes", JSON.stringify(result.data.notes));

      if (Number(String(result.status)[0]) !== 2) {
        let messageArray: string[] = result.message.split(/[:,]/);
        let message: string = "";

        if (messageArray.length === 3) message = messageArray[2];
        if (messageArray.length > 3)
          message = `
          ${messageArray[2]};
          ${messageArray[4]}
        `;

        document.getElementById("message")!.style.color =
          "oklch(63.7% 0.237 25.331)";

        document.getElementById("message")!.innerHTML = message;
      } else {
        document.getElementById("message")!.style.color =
          "oklch(72.3% 0.219 149.579)";
        document.getElementById("message")!.innerHTML = result.message;
      }
    });

  headerSvgs();
};

export default editNotePage;
