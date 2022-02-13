import axios from "axios";

export async function doLogin(email, password) {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
    email,
    password,
  });
  return data;
}

export async function doLogout() {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/logout`, );
  return data;
}
