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

    if (
      element.classList.contains("card") ||
      element.classList.contains("card-div") ||
      element.classList.contains("card-h2") ||
      element.classList.contains("card-p")
    )
      redirectToNote(element.id);
  });
}

function toggleMenu(): void {
  document.getElementById("menu")!.classList.toggle("hidden");
  document.getElementById("menu")!.classList.toggle("-right-200");
}

function redirectToNote(id: string): void {
  sessionStorage.setItem("noteReadId", id);
  history.pushState({}, "", "/note");
  clientRouter();
}

export { linkButtons, toggleMenu };
