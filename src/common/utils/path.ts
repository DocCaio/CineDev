export const getImageUrl = (path: string): string => {
  return new URL(`../../about/assets/${path}`, import.meta.url).href;
};
