
import { Credentials } from '../../pages/Login/Login';
import { errorCheck } from '../../services/userFul';
import './TextInput.css';

interface InputProps {
    name: string,
    type: string,
    placeholder: string,
    design: string,
    state: Function,
    errorState: Function
}

export const TextInput = ({name, type, placeholder, design, state, errorState}: InputProps) => {

    const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>, state:Function) => {
        
        const { value, name } = target;

        state((prevState : Credentials) => ({
            ...prevState,
            [name]: value
          }));

    };

    const errorHandler = ({ target }: React.ChangeEvent<HTMLInputElement>, errorState:Function) => {
        
        const { name, value } = target;

        let message = errorCheck(name, value);
        errorState((prevState : any) => ({
            ...prevState,
            [name]: message
          }));

    };

    return (
        <input 
            className={design}
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={(e)=>inputHandler(e, state)}
            onBlur={(e)=>errorHandler(e, errorState)}
        />
      )
}