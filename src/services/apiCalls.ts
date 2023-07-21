import axios from "axios";

const URL = "https://express-api-basic.vercel.app";
const RM_URL = "https://rickandmortyapi.com/api";
const BASIC_API_URL = "http://localhost:3000";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  id: number;
  name: string;
  surname: string;
  age: number;
  userId: number;
}

export const bringCharacters = async () => {
  let { data } = await axios.get(`${RM_URL}/character`);

  return data.results;
};

export const bringCharactersName = async (name: any) => {
  let { data } = await axios.get(`${RM_URL}/character/?name=${name.search}`);

  return data.results;
};

export const themoviedbExample = async (query: any) => {
  //Ejemplo de como hacer llamadas a la API themoviedb según su esquema en la web
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 210d6a5dd3f16419ce349c9f1b200d6d",
    },
  };

  let { data } = await axios.get(url, options);

  return data.results;
};

export const logMe = async (body: LoginData) => {
  //En este primer paso me traigo a todos los usuarios de la bd.
  let res = await axios.get(`${BASIC_API_URL}/users`);

  let found = {};

  res.data.map(user => {
    if (user.email === body.email && user.password === body.password) {
      //Si entramos en este condicional, es que las credenciales son correctas..
      found = user;
    }
  });

  return found;

};

export const registerMe = async (body: RegisterData) => {
  let { data } = await axios.post(`${BASIC_API_URL}/users`, body);

  return data;
};

export const profileUser = async (id: string) => {
  let { data } = await axios.get(`${BASIC_API_URL}/users/${id}`);

  return data;
};

export const newOrder = async (product_id: string, user_id: string) => {
  console.log(product_id);

  let body = {
    id: 2,
    user_id: user_id,
    product_id: product_id,
    date: "20/07/2023",
  };

  let { data } = await axios.post(`${BASIC_API_URL}/orders`, body);

  return data;
};
