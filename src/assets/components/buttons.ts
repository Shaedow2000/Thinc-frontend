const mainButton: Function = (
  text: string,
  href: string | null = null,
): string =>
  `<button class="button-main" ${href !== null ? "data-href='" + href + "'" : ""}>${text}</button>`;

const secondaryButton: Function = (
  text: string,
  href: string | null = null,
): string =>
  `<button class="secondary-button" ${href !== null ? "data-href='" + href + "'" : ""}>${text}</button>`;

const mainButtonIcon: Function = (
  text: string,
  icon: string,
  href: string | null = null,
): string =>
  `<button class="button-main-icon" ${href !== null ? "data-href='" + href + "'" : ""}>
    <img src="src/assets/SVG/${icon}.svg" alt="${icon}" />
    ${text}
  </button>
`;

const secondaryButtonIcon: Function = (
  text: string,
  icon: string,
  href: string | null = null,
): string =>
  `<button class="secondary-button-icon" ${href !== null ? "data-href='" + href + "'" : ""}>
    <img src="src/assets/SVG/${icon}.svg" alt="${icon}" />
    ${text}
  </button>`;

export { mainButton, secondaryButton, mainButtonIcon, secondaryButtonIcon };
