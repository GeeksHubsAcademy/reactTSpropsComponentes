import { useState, useEffect } from "react";
import { bringCharacters } from "../../services/apiCalls";
import { CardCharacter } from "../../common/CardCharacter/CardCharacter";
import { Container, Row, Col } from "react-bootstrap";

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
        <Container fluid>
          <Row className="justify-content-center">
          {characters.map((cartoon: Person) => {
            return (
            <Col className="d-flex justify-content-center" xs={10} md={4} xl={3} key={cartoon.id}>
            <CardCharacter   
                character={cartoon}
            />
            </Col>
          )})}
          </Row>
        </Container>
      ) : (
        <>Aun no han venido los personajes...cargando</>
      )}
    </>
  );
};
