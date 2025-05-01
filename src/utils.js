export const getImageUrl = (imagePath) => {
  if (imagePath.startsWith("/")) {
    return imagePath;
  }
  // Otherwise, prepend "/assets/"
  return `/assets/${imagePath}`;
};
