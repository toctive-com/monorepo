export interface UserI {
  _id: string;
  activated: boolean;
  email: string;
  username: string;
  password: string;
  access_tokens: Token[];
  refresh_tokens: Token[];
  roles: string[];
  createdAt: Date;
  updateAt: Date;
}

export interface Token {
  token: string;
  createdAt: Date;
}

export type JwtPayload = {
  sub: string;
  username: string;
};
