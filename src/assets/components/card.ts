const card: Function = (
  title: string,
  text: string,
  noteId: string,
): string => {
  if (title.length >= 14) {
    title = title.slice(0, 13);
    title = `${title}...`;
  }

  if (text.length >= 60) {
    text = text.slice(0, 56);
    text = `${text}...`;
  }

  return `
    <section class="card cursor-pointer" id="${noteId}">
      <div class="card-div">
        <h2 class="card-h2">${title}</h2>
        <p class="card-p">${text}</p>
      </div>
    </section>
  `;
};

export { card };
