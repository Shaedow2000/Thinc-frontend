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
  });
}

export { linkButtons };
