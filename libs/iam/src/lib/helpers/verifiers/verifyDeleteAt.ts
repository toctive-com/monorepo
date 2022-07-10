/**
 * "If the user is marked as deleted, then deletedAt must be a Date."
 *
 * @param {boolean} markedDeleted - boolean - This is a boolean that indicates whether the user is
 * marked as deleted.
 * @param {Date | null} deletedAt - The date the user was deleted.
 */
export function verifyDeleteAt(markedDeleted: boolean, deletedAt: Date | null) {
  if (markedDeleted && deletedAt === null) {
    throw new Error('DeletedAt must be a Date if user marked as deleted.');
  }
}
