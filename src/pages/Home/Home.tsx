import { useState, useEffect } from "react";
import { bringCharacters } from "../../services/apiCalls";
import { CardCharacter } from "../../common/CardCharacter/CardCharacter";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { searchData } from "../searchSlice";

export interface Person {
  id: string;
  name: string;
  image: string;
  location: { name: string };
}

export const Home = () => {
  //Conectamos Home a Redux

  const searchRdxData = useSelector(searchData);

  //Hooks
  const [characters, setCharacters] = useState<Person[]>([]);

  useEffect(() => {
    //Búsqueda alternativa a si el buscador está vacio.....
    if (searchRdxData.findings.length === 0) {
      bringCharacters()
        .then((res) => {
          setCharacters(res);
        })
        .catch((error) => console.log(error));
    }
  }, [searchRdxData]);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          {searchRdxData.findings.length > 0 ? (
            <>{searchRdxData.findings.map((cartoon: Person) => {
              return (
                <Col
                  className="d-flex justify-content-center"
                  xs={10}
                  md={4}
                  xl={3}
                  key={cartoon.id}
                >
                  <CardCharacter character={cartoon} />
                </Col>
              );
            })}</>
          ) : (
            <>
              {characters.map((cartoon: Person) => {
                return (
                  <Col
                    className="d-flex justify-content-center"
                    xs={10}
                    md={4}
                    xl={3}
                    key={cartoon.id}
                  >
                    <CardCharacter character={cartoon} />
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
