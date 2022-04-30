import { Button } from ".";
import { useLocation, useNavigate } from "react-router-dom"

export default function Results() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const goback = () => {
        navigate(state.prevpage)
    }

    return (
        <main>
            <div className="container">
                <h1>Results</h1>
                {/* TODO: Write logic to display unsuccessful results */}
                <p>testing</p>
                <Button classes='primary' label='Start another upload' onClick={goback}/>
            </div>
        </main>
    )
}