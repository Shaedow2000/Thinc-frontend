const mainButton: Function = (text: string): string =>
  `<button type="button" class="button-main">${text}</button>`;

const secondaryButton: Function = (text: string): string =>
  `<button type="button" class="secondary-button">${text}</button>`;

const mainButtonIcon: Function = (text: string, icon: string): string =>
  `<button type="button" class="button-main-icon">
    <img src="src/assets/components/${icon}.svg" alt="${icon}" />
    ${text}
  </button>
`;

const secondaryButtonIcon: Function = (text: string, icon: string): string =>
  `<button type="button" class="secondary-button-icon">
    <img src="src/assets/components/${icon}.svg" alt="${icon}" />
    ${text}
  </button>`;

export { mainButton, secondaryButton, mainButtonIcon, secondaryButtonIcon };
