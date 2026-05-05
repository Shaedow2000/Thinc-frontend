import { mainButtonIcon } from "../../assets/components/buttons";
import { bigTitle } from "../../assets/components/greeting";
import { header } from "../../assets/components/header";
import { pageTitle } from "../../assets/components/text";

const abortPage: Function = async (): Promise<void> => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.style.height = "100vh";

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Abort changing password")}
    <div class="center-section pb-2xl">
      ${bigTitle("Operation aborted")}
      <span>The password for this account will not be changed.</span>
      <span>To change the password go to the settings, and reset it.</span>
    </div>
    ${mainButtonIcon("Home", "Home", "/")}
  `;

  await fetch(
    `http://localhost:8080/auth/user/${sessionStorage.getItem("userId")}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
  );
};

export default abortPage;
