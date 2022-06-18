import { StyledButton } from "./button-styled"

interface iProps {
        displayName: string
}

//display a function as a react functional component type with certain type of props
const Button:React.FC<iProps> = ({displayName}) => (
    <StyledButton>
        {displayName}
    </StyledButton>
)

export default Button;
