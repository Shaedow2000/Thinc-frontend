import { mainButtonIcon } from "../../assets/components/buttons";
import { bigTitle } from "../../assets/components/greeting";
import { header } from "../../assets/components/header";
import { pageTitle } from "../../assets/components/text";

const pageNotFound: Function = (): void => {
  const app = document.getElementById("app") as HTMLDivElement;

  app.innerHTML = /* html */ `
    ${header}
    ${pageTitle("Not found")}
    <div class="center-section pb-2xl">
      ${bigTitle("Page not found")}
      <span>the page you are trying to visit is not found.</span>
      <span>Try verifying any typos in the url.</span>
    </div>
    ${mainButtonIcon("Home", "Home", "/")}
  `;
};

export default pageNotFound;
