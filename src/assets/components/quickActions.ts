import { heading } from "./text";
import { mainButtonIcon, secondaryButtonIcon } from "./buttons";

const quickActions: string = `
  <section class="quick-actions">
    ${heading("Quick actions")}
    <div>
      ${mainButtonIcon("New", "New note")}
      ${secondaryButtonIcon("Search", "Search")}
      ${secondaryButtonIcon("Draft", "Draft")}
    </div>
  </section>
`;

export { quickActions };
