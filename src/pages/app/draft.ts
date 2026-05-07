import { secondaryButtonIcon } from "../../assets/components/buttons";
import { headerSvgs } from "../../assets/components/header";
import { heading, pageTitle } from "../../assets/components/text";
import { textArea } from "../../assets/components/textArea";

const draftPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = `
    ${pageTitle("Notes / Draft")}
    ${heading("Draft")}
    ${textArea}
    <div class="flex gap-md py-lg">
      ${secondaryButtonIcon("Home", "Home", "/dashboard")}
    </div>
  `;

  headerSvgs();
};

export { draftPage };
