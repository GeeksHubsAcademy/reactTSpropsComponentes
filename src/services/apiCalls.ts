
import axios from 'axios';

const RM_URL = 'https://rickandmortyapi.com/api'


export const bringCharacters = async () => {

    let {data} = await axios.get(`${RM_URL}/character`);

    return data.results;
}