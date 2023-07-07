import { useState, useEffect } from "react";
import { bringCharacters } from "../../services/apiCalls";
import { CardCharacter } from "../../common/CardCharacter/CardCharacter";

export interface Person {
  id: string;
  name: string;
  image: string;
  location: { name: string };
}

export const Home = () => {

  //Hooks
  const [characters, setCharacters] = useState<Person[]>([]);

  useEffect(() => {
    if (characters.length === 0) {
      bringCharacters()
        .then((res) => {
          setCharacters(res);
        })
        .catch((error) => console.log(error));
    } else {
      console.log(characters);
    }
  }, [characters]);

  return (
    <>
      {characters.length > 0 ? (
        <>
          {characters.map((cartoon: Person) => {
            return <CardCharacter   
                character={cartoon}
            />;
          })}
        </>
      ) : (
        <>Aun no han venido los personajes...cargando</>
      )}
    </>
  );
};
