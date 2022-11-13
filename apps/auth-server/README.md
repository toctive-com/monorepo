# Toctive Authentication Server

![GitHub issues](https://img.shields.io/github/issues/toctive-com/monorepo) ![GitHub stars](https://img.shields.io/github/stars/toctive-com/monorepo) ![GitHub stars](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftoctive-com%2Fmonorepo)

This is the authentication server for the Toctive project. It is a simple Node.js application that uses the [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) authentication library to provide authentication for the Toctive web application.

## Requirements

- Node.js 12.16.1
- MongoDB 4.2.3
- Yarn 1.22.4

## Installation

- Clone the repository
- Install dependencies with `yarn install`
- Create a `.env` file in the root directory and add the following environment variables:

```bash
# MongoDB connection string
MONGODB_URL=mongodb://127.0.0.1:27017/toctive-auth

# Port to run the server on
PORT=3000

# JWT keys to generate tokens
ACCESS_TOKEN_PRIVATE_KEY="ACCESS"
REFRESH_TOKEN_PRIVATE_KEY="REFRESH"
```

> Note: you can rename the `.env.example` file to `.env` and change the values.

- Run the server with `yarn nx run auth-server:serve`
- The server should now be running on `http://localhost:3000` or any other port you specified in the `.env` file.
- You can now use the API to register and login users

## Usage

To use the API, See the [Routes API documentation](./docs/routes.md).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. You can run the tests with `yarn nx run auth-server:test`. You can also run the tests in watch mode with `yarn nx run auth-server:test --watch)`.

To start working on a new feature or bug fix, fork this repo and create a new branch from the `dev` branch. When you are done, create a pull request to merge your branch into the `dev` branch.

We will review your pull request and merge it into the `dev` branch if it is approved.

To make sure that your code is formatted correctly, run `yarn nx lint` before committing your changes.

## Authors and acknowledgment

- [Toctive](https://toctive.com)
- [Sameh A. Elalfi](https://github.com/SamehElalfi)

## Changelog

- 0.1.0
  - Initial release

## Credits

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) the JWT library.
- [Node.js](https://nodejs.org/) the JavaScript runtime.
- [Yarn](https://yarnpkg.com/) the package manager.
- [TypeScript](https://www.typescriptlang.org/) the language.
- [Nx](https://nx.dev/) the workspace.
- [Express](https://expressjs.com/) the web framework.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) the password hashing.
- [MongoDB](https://www.mongodb.com/) the database.
- [Mongoose](https://mongoosejs.com/) the MongoDB object modeling.
- [dotenv](https://github.com/motdotla/dotenv) the environment variables.
- [ESLint](https://eslint.org/) the linter.
- [Jest](https://jestjs.io/) the testing framework.

## License

This project is licensed under the MIT license. See the [LICENSE](../../LICENSE) file for more info.
2022 © [Toctive](https://toctive.com)
