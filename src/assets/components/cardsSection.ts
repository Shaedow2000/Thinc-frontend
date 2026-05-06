import { card } from "./card";
import { label } from "./text";

const cardsSection: Function = (notes: []): string => {
  let cards: string = "";

  for (let i: number = 0; i < notes.length; i++) {
    cards += card(notes[i]["title"], notes[i]["text"], notes[i]["_id"]);
  }

  return `
  <section class="notes">
    <div>
      ${cards}
    </div>
  </section>
`;
};

const foundNotes: Function = (notes: []): string => {
  if (notes.length === 0)
    return `
      <section class="found-notes">
        ${label("Notes")}
        <span class="text-text text-md">No notes found</span>
      </section>
    `;

  return `
  <section class="found-notes">
    ${label("Notes")}
    ${cardsSection(notes)}
  </section>
`;
};

export { cardsSection, foundNotes };
