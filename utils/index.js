export const checkImageURL = (url) => {
  if (!url) return false;
  return true;
  //   else {
  //     const pattern = new RegExp(
  //       "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
  //       "i"
  //     );
  //     return pattern.test(url);
  //   }
};
