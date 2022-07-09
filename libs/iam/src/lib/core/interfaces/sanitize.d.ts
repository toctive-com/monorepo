export interface SanitizeI {
  sanitize: (str: string) => string;
  containsBadWords: (str: string) => boolean;
  isSpamEmail: (email: string) => boolean;
  validateEmail: (email: string) => boolean;
  isPwnedPassword: (password: string) => boolean;
  validateURL: (url: string) => boolean;
}
