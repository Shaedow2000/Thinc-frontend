function linkButtons(id: string, pathname: string): void {
  document.getElementById(id)!.addEventListener("click", (): void => {
    location.pathname = pathname;
  });
}

export { linkButtons };
