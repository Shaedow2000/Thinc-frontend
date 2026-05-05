import { border } from "../../assets/components/border";
import { greeting } from "../../assets/components/greeting";
import { headerSvgs } from "../../assets/components/header";
import { quickActions } from "../../assets/components/quickActions";
import { recentNotesSection } from "../../assets/components/recentNotes";
import { pageTitle } from "../../assets/components/text";

const dashboardPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "fit-content";

  app.innerHTML = /* hmtl */ `
    ${headerSvgs}
    ${pageTitle("Dashboard")}
    ${greeting("username")}
    ${border}
    ${quickActions}
    ${border}
    ${recentNotesSection([])}
  `;
};

export default dashboardPage;
