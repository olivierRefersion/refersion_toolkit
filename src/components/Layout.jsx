import { Header } from '../stories/Header';
import { Outlet, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Layout() {

    let loggedIn = localStorage.getItem('loggedin');

    // Maps location pathname to header title text
    const titleMap = {
        "/": {
            title: "Bulk Upload Orders from CSV",
            icon: "input"
        },
        "/home": {
            title: "Homepage test",
            icon: "home"
        }
    }

    let location = useLocation();
    return (
        <>
            <Header
                title={titleMap[location.pathname].title}
                icon={titleMap[location.pathname].icon}
                loggedIn={loggedIn}
            />
            <aside>
                <h2><Link to="/">Test</Link></h2>
                <Link to="/home">Home</Link>
            </aside>
            <Outlet />
        </>
    );
}
