import { titleMap, Alert } from "../components"
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Index() {
    
    let [params, setParams] = useSearchParams();

    const homepageTitleMap = Object.keys(titleMap).filter(entry => !entry.includes('results') && entry !== '/');

    let loggedout = false;
    if (params.get('loggedout') && sessionStorage.getItem('__auth') === null) {
        loggedout = true;
    }

    return (
        <main>
            <div className="container">
                {loggedout && <Alert type='success' children="Success! You've been logged out" />}
                <h1 className="margin-top">Welcome to our bulk internal tools suite</h1>

                <div className="home-grid">
                    {
                        homepageTitleMap.map((route, i) =>
                            <Link to={route} style={{ display: 'block' }} key={i}>
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