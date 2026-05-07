import {
  mainButtonIcon,
  secondaryButton,
} from "../../assets/components/buttons";
import { bigTitle } from "../../assets/components/greeting";
import { header } from "../../assets/components/header";
import { pageTitle } from "../../assets/components/text";
import clientRouter from "../../utils/clientRouter";

const deleteNotePage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Confirm")}
    <div class="center-section pb-2xl">
      ${bigTitle("Delete note")}
      <span>Do you really want to delete this note?</span>
    </div>
    <div class="flex py-sm gap-md" id="buttons-section-delete">
      ${mainButtonIcon("Delete", "Delete")}
      ${secondaryButton("Abort", "/dashboard")}
    </div>
    <span id="message" class="pt-lg text-center w-full text-caption font-medium text-green-500"></span>
  `;

  document
    .querySelector("#buttons-section-delete > .button-main-icon")
    ?.addEventListener("click", async (): Promise<void> => {
      let noteId: string = sessionStorage.getItem("noteReadId") ?? "";

      const response = await fetch(`http://localhost:8080/api/note/${noteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const result = await response.json();

      if (Number(String(result.status)[0]) === 2) {
        const notes: { _id: string; title: string; text: string }[] =
          JSON.parse(sessionStorage.getItem("notes") ?? "[]");

        let newNotesArray: { _id: string; title: string; text: string }[] = [];

        for (let i: number = 0; i < notes.length; i++)
          if (notes[i]._id !== noteId) newNotesArray.push(notes[i]);

        sessionStorage.setItem("notes", JSON.stringify(newNotesArray));
      }

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

      setTimeout((): void => {
        history.pushState({}, "", "/dashboard");
        clientRouter();
      }, 800);
    });
};

export default deleteNotePage;
