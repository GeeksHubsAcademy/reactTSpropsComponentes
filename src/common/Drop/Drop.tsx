
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface DropProps {
    state: Function,
    titulo: string
}

export const Drop = ({state, titulo}:DropProps) => {

  const dropDownHandler = (value:boolean) => {

    //aquí lo estamos seteando....
    state(value);

  }

  return (
    <DropdownButton id="dropdown-basic-button" title={titulo}>
      <Dropdown.Item onClick={()=>dropDownHandler(true)}>Hombre</Dropdown.Item>
      <Dropdown.Item onClick={()=>dropDownHandler(false)}>Mujer</Dropdown.Item>
    </DropdownButton>
  );
};