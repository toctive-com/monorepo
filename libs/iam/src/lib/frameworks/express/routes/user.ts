import express, { Request, Response, Router } from 'express';

export function UsersRouter(Controller: any) {
  const router = Router();
  const userController = Controller;

  router.get('/', userController.getAllUsers, (req, res) => {
    const { users } = res.locals;
    const usersData = users.map((user: any) => {
      return {
        id: user.getId(),
        email: user.getEmail(),
        firstName: user.getFirstName(),
        lastName: user.getLastName(),
      };
    });
    return res.json(usersData);
  });

  router.get(
    '/email/:email',
    userController.getUserByEmail,
    (_req: Request, res: Response) => {
      const { user } = res.locals;
      return res.send(`Found ${user.getEmail()} Users`);
    }
  );

  router.get(
    '/:hashId',
    userController.getUserById,
    (_req: Request, res: Response) => {
      const { user } = res.locals;
      return res.send(`Found ${user.getEmail()} Users`);
    }
  );

  router.put(
    '/:hashId',
    userController.updateUser,
    (_req: Request, res: Response) => {
      const { user } = res.locals;
      return res.send(`User with email: ${user.getEmail()} was created`);
    }
  );

  router.post(
    '/',
    userController.createUser,
    (_req: Request, res: Response) => {
      const { user } = res.locals;
      return res.send(`User with email: ${user.getEmail()} was created`);
    }
  );

  router.delete(
    '/',
    userController.deleteUser,
    (_req: Request, res: Response) => {
      const { user } = res.locals;
      return res.send(`User with email: ${user.getEmail()} was deleted`);
    }
  );

  return router;
}

export default UsersRouter;
