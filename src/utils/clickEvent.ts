function linkButtons(): void {
  document.addEventListener("click", (e: Event): void => {
    const element = e.target as HTMLElement;

    if (element.dataset.href && !element.dataset.href.includes("https://"))
      location.pathname = element.dataset.href;

    if (element.dataset.href && element.dataset.href.includes("https://"))
      location.href = element.dataset.href;
  });
}

export { linkButtons };
