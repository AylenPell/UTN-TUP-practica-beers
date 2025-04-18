import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"


export const NotFound = () => {
    const navigate = useNavigate();
    const handlerGoBack = () => {
        navigate("/library")
    }

    return (
        <div>
            <h2>Oops! Page not found... Drink it up! Cheers! </h2>
            <Button className="text-center btn-dark" onClick={handlerGoBack}>
                Volver
            </Button>
        </div>
    )
}
