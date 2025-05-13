
export const Picture = (id, name) => {
    const url = `https://picsum.photos/id/${id}/200/200`;
    return `
    <figure>
      <img src="${url}" alt="${name}" class="redonda" data-name="${name}">
      <figcaption>${name}</figcaption>
    </figure>
  `;
};
