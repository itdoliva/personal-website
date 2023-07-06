export const importContents = (render = false) => {
  const imports = import.meta.glob('$routes/*/*/*.md', { eager: true })

  const contents = []
  for (const path in imports) {
    const content = imports[path] as any;
    if (content) {
      contents.push({
        ...content.metadata,
        html: render && content.default.render 
          ? content.default.render()?.html 
          : undefined,
      });
    }
  }

  return contents;
}

export const filterContents = (contents: any[]) => {
  return contents.filter((content) => !content.hidden)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

