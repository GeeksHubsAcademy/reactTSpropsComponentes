
interface InputProps {
    name: string,
    type: string,
    placeholder: string,
    state: Function,
}


export const TextInput = ({name, type, placeholder, state}: InputProps) => {

    const inputHandler = ({ target }: React.ChangeEvent<HTMLInputElement>, state:Function) => {
        
        const { name, value } = target;

        state((prevState : any) => ({
          ...prevState,
          [name]: value,
        }));
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={(e)=>inputHandler(e, state)}
        />
      )
}