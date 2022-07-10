export interface IdI {
  isValid: (id: string) => boolean;
  makeId: () => string;
}
