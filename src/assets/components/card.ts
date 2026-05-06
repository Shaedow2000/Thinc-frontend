const card: Function = (
  title: string,
  text: string,
  noteId: string,
): string => `
  <section class="card cursor-pointer" id="${noteId}">
    <div class="card-div">
      <h2 class="card-h2">${title}</h2>
      <p class="card-p">${text}</p>
    </div>
  </section>
`;

export { card };
