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

export const bringCharactersName = async (name:any) => {

  let { data } = await axios.get(`${RM_URL}/character/?name=${name.search}`)

  return data.results;
}

export const themoviedbExample = async (query:any) => {
  
  //Ejemplo de como hacer llamadas a la API themoviedb según su esquema en la web
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 210d6a5dd3f16419ce349c9f1b200d6d'
    }
  };

  let { data } = await axios.get(url, options);

  return data.results;
}

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
