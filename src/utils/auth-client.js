import { client } from "./api-client";

function handleUserResponse(data) {
  return data;
}

function login({ email, password }) {
  return client("login", { body: { email, password } }).then(data=>
   { handleUserResponse(data)},
   error => {
    console.error('oh no, login failed')
  },
  );
}

function register({ username, password }) {
  return client("register", { body: { username, password } }).then(
    handleUserResponse(data)
  );
}

function isLoggedIn() {
  return true;
}

export { login, register, isLoggedIn };