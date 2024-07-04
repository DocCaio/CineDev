export const getImageUrl = (path) => {
    return new URL(`../app/assets/${path}`, import.meta.url).href;
  };