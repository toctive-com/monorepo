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

  address?: string | null;
  city?: string | null;
  zip?: string | null;
  state?: string | null;
  country?: string | null;

  activeStatus?: boolean | null; // like messenger => true=online, false=offline, null=(not showing)

  verified?: boolean | null;
  activated?: boolean;

  createdAt?: Date;
  updatedAt?: Date;

  markedDeleted?: boolean; // soft delete to mark the user as deleted
  deletedAt?: Date | null; // date when the user was deleted (marked as deleted (soft delete))
}
