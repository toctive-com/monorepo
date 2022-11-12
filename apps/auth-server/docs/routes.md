# Toctive Auth Server

This project contains several routes to authenticate user using JWT tokens.
The project uses passport.js and jsonwebtoken to generate and verify access tokens and refresh tokens.

## Routes

### POST /auth/register

Register a new user. This route takes user data that will be saved into database (MongoDB).

Example:

```json
{
  "email": "user@example.com",
  "username": "user",
  "password": "123asdQWE"
}
```

The email must be a valid email. We use isemail package to check if the email is valid.
The username might contain English-alphabet (lowercase or uppercase), numbers, dashes and underscores.
The password must be at least 8 characters and at most 255 characters. and must contain one number, one lowercase letter and uppercase letter.

Response:

```json
{
  "message": "User registered successfully!"
}
```

### POST /auth/login

Login the user and get access token and refresh token in JSON format.
This route can take email and password or username and password. After successful login the server will return a response in JSON format and set a new cookie to store the refresh token for one month.
Examples:

Request using email and password:

```json
{
  "email": "user@example.com",
  "password": "123asdQWE"
}
```

Request using username and password:

```json
{
  "username": "samehelalfi2",
  "password": "123QWEasd"
}
```

Response:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZmYzhlYWRmYmU0YzM5MGZhY2RlNjUiLCJyb2xlcyI6W10sImlhdCI6MTY2ODI3MDU1MCwiZXhwIjoxNjY4MjcxMTUwfQ.Gp5pfrK5AAu4gU53Gj2IewIbIzA6QoKf1-5XJIeJuQ4",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZmYzhlYWRmYmU0YzM5MGZhY2RlNjUiLCJyb2xlcyI6W10sImlhdCI6MTY2ODI3MDU1MCwiZXhwIjoxNjcwODYyNTUwfQ.snjhuRjpD3ZVx-fde0rTWYfrIFVt34xTzw-AC-NlCPk"
}
```
