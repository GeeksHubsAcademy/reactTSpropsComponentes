

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Person } from '../../pages/Home/Home';

interface IProps {
  character: Person
}

export const CardCharacter = ({ character }: IProps) => {

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={character.image} alt={character.id}/>
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              {character.location.name}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}


