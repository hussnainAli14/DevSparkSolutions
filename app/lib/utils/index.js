export const truncate = (str, length) => {
  if (length) {
    return str.substring(0, length);
  } else {
    return str.substring(0, str.length / 2);
  }
};
