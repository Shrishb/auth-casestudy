import { client } from "./api-client";

function handleUserResponse(data) {
  return data;
}

async function login({ email, password }) {
  let response = await client("login", { body: { email, password } });

  return response;
}

function register({ password, confirmPassword }) {
  return client("register", { body: { password, confirmPassword } }).then(
    handleUserResponse(data)
  );
}

export { login, register };