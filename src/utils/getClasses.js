// this helper function works by filtering all of the classes
// if it's not empty we will return it, join them together
// if it's empty it will filter, otherwise it will keep it
// join the classes with space
// if we have space at the end it will trim it
// we will take all of the classes, filter them, if the item is empty, join them with a space, and trim it if there's a space in the beginning or in the end.
export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
