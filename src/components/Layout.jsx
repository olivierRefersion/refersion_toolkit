import { React, useState } from 'react';
import { Outlet, useLocation} from "react-router-dom";
import { Header, Modal, SideNav, titleMap, AuthForm } from '.';

export default function Layout() {

    // Handles toggling the auth modal visibility
    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleModal = () => setModalVisibility(!modalVisibility);
    const closeModal = () => {
        setModalVisibility(false);
        window.dispatchEvent(new CustomEvent("modalClosed"));
    }
    const toggleModalClassName = modalVisibility ? "show" : "hide";

    let loggedIn = sessionStorage.getItem('__auth') !== null ? true : false;

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
                setModalVisibility={setModalVisibility}
            />
            <Outlet />
            </section>
            <Modal className={toggleModalClassName} close={closeModal} title='Modal'>
                <AuthForm />
            </Modal>
        </>
    );
}
