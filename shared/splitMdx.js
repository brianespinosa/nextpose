// Accepts and array of React children and splits the array into
// separate arrays at every <hr> tag.

const splitMDX = (children) => {
  const splitPoints = [];
  const slides = [];

  // Find the index of each hr element to split our children at
  children.forEach((element, i) => {
    if (element.props.mdxType === 'hr') {
      splitPoints.push(i);
    }
  });

  // Split our children into separate arrays
  let lastSplit;
  splitPoints.forEach((split) => {
    const elements = [children.slice(lastSplit, split)];
    slides.push(elements);
    lastSplit = split + 1;
  });

  // Add the leftover elements as the last slide
  slides.push([children.slice(lastSplit)]);

  return slides;
};

export default splitMDX;
