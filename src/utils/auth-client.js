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

async function reset({ password, confirmPassword }) {
  try {
    let response = await client("register", {
      body: {email:"eve.holt@reqres.in", password },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export { login, reset };