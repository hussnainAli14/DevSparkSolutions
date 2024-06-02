export default function localImageLoader({ src, width, quality }) {
  // Construct the local URL based on the public folder structure
  const basePath = "/Images"; // Assuming Images is in the public folder
  const params = [`w_${width}`, `q_${quality || "auto"}`];

  // You can further process the parameters if needed (e.g., resizing, compressing)
  // For now, just include them as part of the query string for demonstration
  //   const queryString = params.join("&");

  // return `${basePath}/${src}?${queryString}`;
  return `${basePath}/${src}`;
}
