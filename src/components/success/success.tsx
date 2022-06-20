import { StyledSuccess, StyledSuccessHeader } from "./success-style"


const Success:React.FC = () => {
    return (
        <StyledSuccess>
            <StyledSuccessHeader>
                Thanks for submitting!
            </StyledSuccessHeader>
        </StyledSuccess>
    )
}

export default Success;