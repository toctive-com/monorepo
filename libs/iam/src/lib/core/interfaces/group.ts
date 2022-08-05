import { UserI } from './user';

/* Defining the interface of the Group model. */
export interface GroupI {
  id?: string;

  title: string;

  profileImage?: string | null;
  coverImage?: string | null;
  description?: string | null;

  activated?: boolean;

  createdAt?: Date;
  updatedAt?: Date;

  markedDeleted?: boolean; // soft delete to mark the group as deleted
  deletedAt?: Date | null; // date when the group was deleted (marked as deleted (soft delete))

  users: UserI[];
}
