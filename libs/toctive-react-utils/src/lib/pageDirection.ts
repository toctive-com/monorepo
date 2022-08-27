import { isWindowDefined } from './windowDefined';

/**
 * It returns the value of the dir attribute of the html tag, or the value of the dir key in
 * localStorage, or the fallback value
 *
 * @param [fallback=ltr] - The default value to return if the direction is not set.
 * @version 1.0.0
 * @returns the value of the dir attribute of the html tag, or the value of the dir key in
 * localStorage, or the fallback value.
 */
export function getDirection(fallback = 'ltr'): string {
  if (!isWindowDefined()) return fallback;

  let htmlTagValue = document.querySelector('html')?.getAttribute('dir');
  if (typeof htmlTagValue === null) htmlTagValue = fallback;

  const localStorageValue = localStorage.getItem('dir');
  return localStorageValue || htmlTagValue || 'ltr';
}

export type DirectionType = 'ltr' | 'rtl';

/**
 * It sets the direction of the document to either 'ltr' or 'rtl' and returns true if it succeeds
 *
 * @param DirectionType direction - 'ltr' | 'rtl'
 * @version 1.0.0
 * @returns true
 */
export function setDirection(direction: DirectionType): boolean {
  document.querySelector('html')?.setAttribute('dir', direction);
  localStorage.setItem('dir', direction);
  return true;
}

/**
 * It returns true if the current document's direction is right-to-left
 *
 * @version 1.0.0
 * @returns A boolean value.
 */
export function isRTL(): boolean {
  return getDirection() === 'rtl';
}

/**
 * If the direction is ltr, return true, otherwise return false.
 *
 * @version 1.0.0
 * @returns A function that returns a boolean.
 */
export function isLTR(): boolean {
  return getDirection() === 'ltr';
}
