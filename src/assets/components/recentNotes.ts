import { heading } from "./text";
import { cardsSection } from "./cardsSection";

const recentNotesSection: Function = (notes: []): string => `
  <section class="recent-notes">
    ${heading("Recent notes")}
    ${cardsSection(notes)}
  </section>
`;

export { recentNotesSection };
