import clientRouter from "./clientRouter";

function linkButtons(): void {
  document.addEventListener("click", (e: Event): void => {
    const element = e.target as HTMLElement;

    if (element.dataset.href && !element.dataset.href.includes("https://")) {
      history.pushState({}, "", element.dataset.href);
      clientRouter();
    }

    if (element.dataset.href && element.dataset.href.includes("https://"))
      location.href = element.dataset.href;

    if (element.id === "open-menu" || element.id === "x-mark") toggleMenu();
  });
}

function toggleMenu(): void {
  document.getElementById("menu")!.classList.toggle("hidden");
  document.getElementById("menu")!.classList.toggle("-right-200");
}

export { linkButtons, toggleMenu };
