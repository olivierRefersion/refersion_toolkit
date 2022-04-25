import { React, useState } from 'react';
import { Outlet, useLocation} from "react-router-dom";
import { Header, Modal, SideNav, titleMap, AuthForm } from '.';

export default function Layout() {

    // Handles toggling the auth modal visibility
    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleModal = () => setModalVisibility(!modalVisibility);
    const closeModal = () => setModalVisibility(false);
    const toggleModalClassName = modalVisibility ? "show" : "hide";

    // Temporary until some auth logic is in place
    let loggedIn = localStorage.getItem('loggedin') !== null ? localStorage.getItem('loggedin') : false;

    let location = useLocation();

    return (
        <>
            <SideNav />
            <section>
            <Header
                title={titleMap[location.pathname].title}
                icon={titleMap[location.pathname].icon}
                loggedIn={loggedIn}
                toggleModal={toggleModal}
            />
            <Outlet />
            </section>
            <Modal className={toggleModalClassName} close={closeModal} title='Modal'>
                <AuthForm />
            </Modal>
        </>
    );
}
