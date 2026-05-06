const card: Function = (
  title: string,
  text: string,
  noteId: string,
): string => `
  <section class="card" data-href="/note/${noteId}">
    <div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  </section>
`;

export { card };
