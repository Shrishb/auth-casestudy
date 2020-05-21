import { client } from "./api-client";

async function login({ email, password }) {
  try {
    let response = await client("login", {
      body: { email, password },
    });
    return response;
  } catch (error) {
    return error;
  }
}

async function register({ password, confirmPassword }) {
  let response = await client("register", {
    body: { password, confirmPassword },
  });
}

export { login, register };