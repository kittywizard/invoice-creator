import styled from "styled-components";

export const StyledButton = styled.button`

    border: none;
    border-radius: 10px;
    cursor: pointer;
    
    background: rgb(200,252,202);
    font-family: "Lexend Deca", sans-serif;
    padding: 1em 2em;
    font-weight:800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 2.5em;
    transition: background .7s ease-in-out;

    &:hover,
    &:focus {
        background:rgba(255,252,202,1);
    }
`;