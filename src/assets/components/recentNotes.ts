import { heading } from "./text";
import { cardsSection } from "./cardsSection";

const recentNotesSection: Function = (notes: [] = []): string => `
  <section class="recent-notes">
    ${heading("Recent notes")}
    <div style="display: ${notes.length !== 0 ? "block" : "none"}">${cardsSection(notes)}</div>
    <div class="text-center text-text text-md" style="display: ${notes.length !== 0 ? "none" : "block"}">No notes yet!</div>
  </section>
`;

export { recentNotesSection };
