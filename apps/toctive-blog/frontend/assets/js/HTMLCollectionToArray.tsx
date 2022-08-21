/**
 * If the HTMLCollection has a length, return an array of the HTMLCollection, otherwise return an array
 * with a single div element.
 *
 * jest shows an error when trying to access the children of the title
 * and gsap doesn't work with HTMLCollection (ref.current.children's type)
 * so we need to use Array.from to convert it to an array
 * then check if there are any children and animate them or create a new div
 * to prevent the error
 *
 * @param {HTMLCollection} children - HTMLCollection
 * @returns [document.createElement('div')]
 */
export function HTMLCollectionToArray(children: HTMLCollection): Element[] {
  return Array.from(children).length
    ? Array.from(children)
    : [document.createElement('div')];
}
