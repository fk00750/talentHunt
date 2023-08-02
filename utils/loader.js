export default loader = ({ src, width }) => {
  return `${src}?w=${width}`; // This adds the width parameter to the image URL
};
