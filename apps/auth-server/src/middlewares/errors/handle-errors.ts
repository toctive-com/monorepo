import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

/**
 * If there is an error, set the error message and error object in the response
 * locals, and then call the next function with the error object
 *
 * @param {HttpError} err - The error object that was thrown.
 * @param {Request} req - Request - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - This is a function that we call when we are done
 * with the middleware.
 */
export const handleErrors = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    let errorMessage = err.message || 'Something went wrong!';

    // add the error message if we are in development mode
    if (process.env.NODE_ENV === 'development' && err.stack) {
      errorMessage += ': ';
      errorMessage += err.stack;
    }

    const error = {
      ...err,
      status: err.status || 500,
      message: errorMessage,
    };

    return next(error);
  }

  next();
};

export default handleErrors;
