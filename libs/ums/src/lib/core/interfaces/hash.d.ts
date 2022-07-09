export interface HashI {
  generate: (str: string) => string;
  compare: (str: string, hash: string) => boolean;
}
