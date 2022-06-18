import { StyledForm } from "./form-style";
import styled from "styled-components";
import Button from "../button/Button";

export default function Form() {

    const InputText = styled.input`
        border: none;
        padding: 0.5em;
        border-radius: 10px;
        background-color: rgb(200, 226, 255);
        font-family: 'Lexend Deca', sans-serif;
        max-width: 600px;
    `;

    const InputLabel = styled.label`
        margin: 0.52em;

    `;

    return (
        <>
        <StyledForm>
            <>
                <InputLabel htmlFor="name">
                    Name:
                </InputLabel>
                <InputText type="text" placeholder="name" name="name"/>     
            </>

            <>
                <InputLabel htmlFor="email">
                    Email:
                </InputLabel>
                <InputText type="email" placeholder="email" name="email"/>
            
            </>

            <Button displayName="subMIT"/>

        </StyledForm>
        </>
    )
}