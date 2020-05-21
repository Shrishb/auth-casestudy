import { client } from "./api-client";

function handleUserResponse(data) {
  return data;
}

function login({ email, password }) {
  return client("login", { body: { email, password } }).then(
    (data) => {
      handleUserResponse(data);
    },
    (error) => {
      handleUserResponse(error);
    }
  );
}

function register({ username, password }) {
  return client("register", { body: { username, password } }).then(
    handleUserResponse(data)
  );
}

export { login, register };