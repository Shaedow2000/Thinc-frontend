const mainButton: Function = (text: string, id: string | null = null): string =>
  `<button class="button-main" ${id !== null ? "id='" + id + "'" : ""}>${text}</button>`;

const secondaryButton: Function = (
  text: string,
  id: string | null = null,
): string =>
  `<button class="secondary-button" ${id !== null ? "id='" + id + "'" : ""}>${text}</button>`;

const mainButtonIcon: Function = (
  text: string,
  icon: string,
  id: string | null = null,
): string =>
  `<button class="button-main-icon" ${id !== null ? "id='" + id + "'" : ""}>
    <img src="src/assets/SVG/${icon}.svg" alt="${icon}" />
    ${text}
  </button>
`;

const secondaryButtonIcon: Function = (
  text: string,
  icon: string,
  id: string | null = null,
): string =>
  `<button class="secondary-button-icon" ${id !== null ? "id='" + id + "'" : ""}>
    <img src="src/assets/SVG/${icon}.svg" alt="${icon}" />
    ${text}
  </button>`;

export { mainButton, secondaryButton, mainButtonIcon, secondaryButtonIcon };
