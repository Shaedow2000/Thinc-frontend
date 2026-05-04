function linkButtons(id: string, href: string): void {
  document.getElementById(id)!.addEventListener("click", (): void => {
    location.href = href;
  });
}

export { linkButtons };
