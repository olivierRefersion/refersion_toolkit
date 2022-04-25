import { Button } from "../components"

export default function NotFound() {

    const goBack = () => window.history.go(-1);
    const goHome = () => window.location.href = '/';

    return (
        <main className="notFound">
            <div className="container">
                <h1>404</h1>
                <p>We looked everywhere but ... <br /> we could not find he page you requested ¯\_(ツ)_/¯</p>
                <Button label='Go Back' classes='primary' onClick={goBack}/>
                <Button label='Go Home' classes='secondary-outlined' onClick={goHome}/>
            </div>
        </main>
    )
}