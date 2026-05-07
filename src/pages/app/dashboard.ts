import { border } from "../../assets/components/border";
import { greeting } from "../../assets/components/greeting";
import { headerSvgs } from "../../assets/components/header";
import { quickActions } from "../../assets/components/quickActions";
import { recentNotesSection } from "../../assets/components/recentNotes";
import { pageTitle } from "../../assets/components/text";
import isUserLoggedIn from "../../utils/userLoggedIn";

const dashboardPage: Function = async (): Promise<void> => {
  const app = document.getElementById("app") as HTMLDivElement;

  let notes: any[] = [];

  try {
    notes = JSON.parse(sessionStorage.getItem("notes") ?? "[]") ?? [];
  } catch (err: Error | unknown) {
    sessionStorage.clear();
    await isUserLoggedIn();
    notes = JSON.parse(sessionStorage.getItem("notes") ?? "[]") ?? [];
  }

  app.innerHTML = `
    ${pageTitle("Dashboard")}
    ${greeting(sessionStorage.getItem("username"))}
    ${border}
    ${quickActions}
    ${border}
    ${recentNotesSection(notes.reverse())}
  `;

  headerSvgs();
};

export default dashboardPage;
