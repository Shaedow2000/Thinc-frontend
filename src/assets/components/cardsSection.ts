import { card } from "./card";

const cardsSection: Function = (notes: []): string => {
  let cards: string = "";

  for (let i: number = 0; i < notes.length; i++) {
    cards += card(notes[i]["title"], notes[i]["text"]);
  }

  return `
  <section class="notes">
    <div>
      ${cards}
    </div>
  </section>
`;
};

export { cardsSection };
