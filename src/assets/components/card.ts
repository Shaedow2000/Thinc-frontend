const card: Function = (title: string, text: string): string => `
  <section class="card">
    <div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  </section>
`;

export { card };
