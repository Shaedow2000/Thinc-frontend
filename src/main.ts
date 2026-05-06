import { footer } from "./assets/components/footer";
import clientRouter from "./utils/clientRouter";
import { linkButtons } from "./utils/clickEvent";
import { menuComponent } from "./assets/components/menu";

clientRouter();
linkButtons();

menuComponent();
document.body.insertAdjacentHTML("beforeend", footer);
