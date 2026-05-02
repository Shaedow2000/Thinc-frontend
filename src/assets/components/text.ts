const heading: Function = (text: string): string => `
  <section class="heading">
    <h1>${text}</h1>
  </section>
`;

const label: Function = (text: string): string => `
  <section class="label">
    <h4>${text}</h4>
  </section>
`;

export { heading, label };
