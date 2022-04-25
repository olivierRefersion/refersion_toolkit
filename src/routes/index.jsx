import { titleMap, Icon } from "../components"
import { Link } from "react-router-dom";

export default function Index() {

    const homepageTitleMap = Object.keys(titleMap).filter(entry => entry !== '/');

    return (
        <main>
            <div className="container">
                <h1 className="margin-top">Welcome to our bulk internal tools suite</h1>
                <div className="home-grid">
                    {
                        homepageTitleMap.map((route) =>
                            <Link to={route} style={{ display: 'block' }}>
                                <h4>{titleMap[route].title}</h4>
                                <p className="muted">{titleMap[route].description}</p>
                            </Link>
                        )
                    }
                </div>
            </div>
        </main>
    )
}