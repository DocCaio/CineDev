export const getImageUrl = (path: string): string => {
  return new URL(`../../app/pages/movies/assets/${path}`, import.meta.url).href;
};
