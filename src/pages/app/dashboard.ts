import { border } from "../../assets/components/border";
import { greeting } from "../../assets/components/greeting";
import { headerSvgs } from "../../assets/components/header";
import { quickActions } from "../../assets/components/quickActions";
import { recentNotesSection } from "../../assets/components/recentNotes";
import { pageTitle } from "../../assets/components/text";

const dashboardPage: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "fit-content";

  let notes: [] = JSON.parse(sessionStorage.getItem("notes") ?? "") ?? [];

  app.innerHTML = `
    ${pageTitle("Dashboard")}
    ${greeting(sessionStorage.getItem("username"))}
    ${border}
    ${quickActions}
    ${border}
    ${recentNotesSection(notes)}
  `;

  console.log(sessionStorage.getItem("notes"));

  headerSvgs();
};

export default dashboardPage;
