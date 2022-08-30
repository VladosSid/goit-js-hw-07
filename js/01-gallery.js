import { galleryItems } from "./gallery-items.js";

const boxEl = document.querySelector(".gallery");

const newEl = galleryItems
  .map(
    (el) => `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}" target="_parent">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
</a>
</div>`
  )
  .join("");

boxEl.innerHTML = newEl;

boxEl.addEventListener("click", (event) => {
  event.preventDefault();
  const showEl = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  showEl.show();

  document.addEventListener("keyup", () => {
    showEl.close();
  });
});
