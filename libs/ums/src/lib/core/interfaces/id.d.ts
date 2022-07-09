export interface IdI {
  isValidId: (id: string) => boolean;
  makeId: () => string;
}
