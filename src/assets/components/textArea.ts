const textArea: string = `
  <section class="textarea">
    <div class="separator"></div>
    <textarea name="text" placeholder="Your note here!"></textarea>
    <div class="separator"></div>
  </section>
`;

const editTextArea: Function = (text: string): string => `
  <section class="textarea">
    <div class="separator"></div>
    <textarea name="text" placeholder="Your note here!">${text}</textarea>
    <div class="separator"></div>
  </section>
`;

export { textArea, editTextArea };
