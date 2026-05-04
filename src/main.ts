import { footer } from "./assets/components/footer";
import clientRouter from "./utils/clientRouter";
import { linkButtons } from "./utils/clickEvent";

clientRouter();
linkButtons();

document.body.insertAdjacentHTML("beforeend", footer);
