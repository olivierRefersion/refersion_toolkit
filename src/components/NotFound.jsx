import { Button } from "../stories/Button"

export default function NotFound() {

    const goBack = () => window.history.go(-1);

    return (
        <main>
            <div className="container">
                <h1>404</h1>
                <p>Not Found</p>
                <Button label='Go Back' classes='primary' onClick={goBack}/>
            </div>
        </main>
    
    )
}