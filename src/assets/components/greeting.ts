const greeting: Function = (username: string): string => `
  <section class="greeting">
    <div>
      <p>Welcome back, ${username}!</p>
    </div>
  </section>
`;

const bigTitle: Function = (title: string): string => `
  <section class="greeting">
    <div>
      <p>${title}</p>
    </div>
  </section>
`;

export { greeting, bigTitle };
