function linkButtons(): void {
  document.addEventListener("click", (e: Event): void => {
    const element = e.target as HTMLElement;

    if (element.dataset.href) location.pathname = element.dataset.href;
  });
}

export { linkButtons };
