

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Person } from '../../pages/Home/Home';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';{ }
import { addCharacter } from '../../pages/detailSlice'; 

interface IProps {
  character: Person
}

export const CardCharacter = ({ character }: IProps) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const seeDetail = () => {

    //Primero guardo en RDX los datos del personaje en concreto...
    dispatch(addCharacter({character: character}));

    //A continuación voy a la página de detalle de ese personaje...
    navigate("/detail");

  }

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={character.image} alt={character.id}/>
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              {character.location.name}
            </Card.Text>
            <Button variant="primary" onClick={()=>seeDetail()}>Details about me</Button>
          </Card.Body>
        </Card>
      );
}


