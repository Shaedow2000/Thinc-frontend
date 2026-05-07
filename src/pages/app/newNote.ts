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

  app.innerHTML = `
    ${pageTitle("Notes / New")}
    ${heading("Create new note")}
    <div class="w-full px-md py-xs">
      ${label("Note title")}
      ${input("text", "title", "Title")}
    </div>
    ${textArea}
    <span id="message" class="pt-lg text-center w-full text-caption font-medium text-green-500"></span>
    <div id="bottom-buttons-new-note" class="flex gap-md py-lg">
      ${secondaryButtonIcon("Home", "Home", "/dashboard")}
      ${mainButtonIcon("Save", "Save")}
    </div>
  `;

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
        `${import.meta.env.VITE_API_URL}/api/notes`,
        {
          method: "POST",
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

export { newNotePage };
