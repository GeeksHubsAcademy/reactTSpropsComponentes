
import './TextInput.css';

interface InputProps {
    name: string,
    type: string,
    placeholder: string,
    state: Function,
}


export const TextInput = ({name, type, placeholder, state}: InputProps) => {

    const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>, state:Function) => {
        
        const { value, name } = target;

        state((prevState : any) => ({
            ...prevState,
            [name]: value,
          }));

    };

    return (
        <input className='my-4 inputDesign'
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={(e)=>inputHandler(e, state)}
        />
      )
}