import { heading } from "./text";
import { mainButtonIcon, secondaryButtonIcon } from "./buttons";

const quickActions: string = `
  <section class="quick-actions">
    ${heading("Quick actions")}
    <div>
      ${mainButtonIcon("New", "New note", "/new")}
      ${secondaryButtonIcon("Search", "Search", "/search")}
      ${secondaryButtonIcon("Draft", "Draft", "/draft")}
    </div>
  </section>
`;

export { quickActions };
