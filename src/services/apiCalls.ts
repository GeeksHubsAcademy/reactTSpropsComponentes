import axios from "axios";

const URL = "https://express-api-basic.vercel.app";
const RM_URL = "https://rickandmortyapi.com/api";

interface LoginData {
  email: string;
  password: string;
}

export const bringCharacters = async () => {
  let { data } = await axios.get(`${RM_URL}/character`);

  return data.results;
};

export const logMe = async (body: LoginData) => {
  // let res = await axios.post(`${URL}/auth/login`, body);

  let res = {
    token: "askdlmfaskldmfasñlkdfmaslñdkfmaslñdkfm",
    name: "David",
    id: 5,
    age: 37
  }

  return res;
};
