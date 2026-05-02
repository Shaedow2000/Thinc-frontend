const main_button: Function = (text: string): string => {
  return `
    <button type="button" id="button-main">${text}</button>
  `;
};

const secondary_button: Function = (text: string): string => {
  return `
    <button type="button" id="secondary-button">${text}</button>
  `;
};

export { main_button, secondary_button };
