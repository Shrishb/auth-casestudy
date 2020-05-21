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

function register({ password, confirmPassword }) {
  return client("register", { body: { password, confirmPassword } }).then(
    handleUserResponse(data)
  );
}

export { login, register };