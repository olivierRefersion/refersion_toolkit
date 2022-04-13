import { React, useState } from 'react';
import { Header } from '../stories/Header';
import { Outlet, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from '../stories/Icon';
import logoIcon from '../assets/refersion-icon-white.svg'
import { Modal } from '../stories/Modal';

export default function Layout() {

    // Handles toggling the auth modal visibility
    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleModal = () => setModalVisibility(!modalVisibility);
    const closeModal = () => setModalVisibility(false);
    const toggleModalClassName = modalVisibility ? "show" : "hide";

    // Temporary until some auth logic is in place
    let loggedIn = localStorage.getItem('loggedin') !== null ? localStorage.getItem('loggedin') : false;

    // Maps location pathname to header title text
    const titleMap = {
        "/": {
            title: "Bulk Tools",
            icon: "home"
        },
        "/bulk-manual-commission-credits": {
            title: "Bulk Manual Commission Credits",
            icon: "savings"
        },
        "/bulk-manual-order-credits": {
            title: "Bulk Manual Order Credits",
            icon: "shopping_bag"
        },
        "/bulk-edit-affiliates": {
            title: "Bulk Edit Affiliates",
            icon: "create"
        },
        "/bulk-delete-triggers": {
            title: "Bulk Delete Triggers",
            icon: "emergency"
        },
        "/bulk-upload-orders": {
            title: "Bulk Upload Orders from CSV",
            icon: "file_present"
        }
    }

    // TODO: Add logic for toggling the full menu
    const toggleMenu = () => {
        console.log('clicked')
    };

    let location = useLocation();
    return (
        <>
            <Header
                title={titleMap[location.pathname].title}
                icon={titleMap[location.pathname].icon}
                loggedIn={loggedIn}
                toggleModal={toggleModal}
            />
            <aside>
                <span id="toggle" onClick={toggleMenu}><img src={logoIcon}></img></span>
                {/* TODO: and add tooltips to icon-based menu */}
                <ul>
                    <li>
                        <Link to="/">
                            <Icon icon={titleMap["/"].icon} display="boxed" /><span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bulk-manual-commission-credits">
                            <Icon icon={titleMap["/bulk-manual-commission-credits"].icon} display="boxed" /> <span>Bulk Manual Commission Credits</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bulk-manual-order-credits">
                            <Icon icon={titleMap["/bulk-manual-order-credits"].icon} display="boxed" /> <span>Bulk Manual Order Credits</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bulk-edit-affiliates">
                            <Icon icon={titleMap["/bulk-edit-affiliates"].icon} display="boxed" /> <span>Bulk Edit Affiliates</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bulk-delete-triggers">
                            <Icon icon={titleMap["/bulk-delete-triggers"].icon} display="boxed" /> <span>Bulk Delete Triggers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bulk-upload-orders">
                            <Icon icon={titleMap["/bulk-upload-orders"].icon} display="boxed" /> <span>Bulk Upload Orders</span>
                        </Link>
                    </li>
                </ul>
            </aside>
            <Outlet />
            <Modal className={toggleModalClassName} close={closeModal} title='Modal'>
                <p>Modal</p>
            </Modal>
        </>
    );
}
