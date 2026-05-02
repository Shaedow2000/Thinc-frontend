const main_button: Function = (text: string): string =>
  `<button type="button" class="button-main">${text}</button>`;

const secondary_button: Function = (text: string): string =>
  `<button type="button" class="secondary-button">${text}</button>`;

const main_button_icon: Function = (text: string, icon: string): string =>
  `<button type="button" class="button-main-icon">
    <img src="src/assets/components/${icon}.svg" alt="${icon}" />
    ${text}
  </button>
`;

const secondary_button_icon: Function = (text: string, icon: string): string =>
  `<button type="button" class="secondary-button-icon">
    <img src="src/assets/components/${icon}.svg" alt="${icon}" />
    ${text}
  </button>`;

export {
  main_button,
  secondary_button,
  main_button_icon,
  secondary_button_icon,
};
