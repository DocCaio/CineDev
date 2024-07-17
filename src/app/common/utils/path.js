export const getImageUrl = (path) => {
    return new URL(`../../about/assets/${path}`, import.meta.url).href;
  };