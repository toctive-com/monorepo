export type Gender = 'male' | 'female';

/* Defining the interface of the User model. */
export interface UserI {
  id?: string;

  firstName: string;
  middleName?: string | null;
  lastName: string;

  email: string;
  password: string;

  birthday?: Date | null;
  gender?: Gender | null;

  profileImage?: string | null;
  coverImage?: string | null;
  bioDescription?: string | null;

  // TODO: add address 1 and address 2
  // TODO: add markedDeleted property

  activeStatus?: boolean | null; // like messenger => true=online, false=offline, null=(not showing)

  verified?: boolean | null;
  activated?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
}
