import { StyledForm, InputLabel, InputText } from "./form-style";
import Button from "../button/Button";
import { useState, useRef } from "react";

interface iState  {
    form: {
        name: string,
        email: string
    }
}

interface iFormProps {
  
    submitFunction: any
    
}

const Form:React.FC<iFormProps> = ({submitFunction}) => {

    const [formState, setFormState] = useState<iState["form"]>({
        name: "",
        email: ""
    });

    //keeps focus as you type on form
        //think probably a state refresh thing with styled components?
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);


    function handleChange(event: any) {
        setFormState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
        <StyledForm
            onSubmit={() => submitFunction(false)}
        >
            <>
                <InputLabel htmlFor="name">
                    Name:
                </InputLabel>
                <InputText 
                    type="text" 
                    placeholder="name" 
                    name="name"
                    value={formState.name}
                    onChange={(event) => handleChange(event)}
                    ref={inputNameRef}
                    autoFocus={inputNameRef.current === document.activeElement}
                />     
            </>

            <>
                <InputLabel htmlFor="email">
                    Email:
                </InputLabel>
                <InputText 
                    type="email" 
                    placeholder="email" 
                    name="email"
                    value={formState.email}
                    onChange={(event) => handleChange(event)}
                    ref={inputEmailRef}
                    autoFocus={inputEmailRef.current === document.activeElement}
                />
            
            </>

            <Button 
                displayName="submit"
            />

        </StyledForm>
        </>
    )
}

export default Form;