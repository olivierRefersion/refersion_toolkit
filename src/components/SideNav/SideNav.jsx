import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, titleMap, Button } from '..';
import logoIcon from '../../assets/images/refersion-icon-white.svg'
import './SideNav.css';

export const SideNav = () => {

    const [isOpen, setisOpen] = useState(false);

    // TODO: Add logic for toggling the full menu
    const toggleMenu = () => {
        setisOpen(!isOpen)
    };

    const goToIntegrationsSuite = () => {
        window.location.href = 'https://prod-test.rfsn.dev'
    }

    return (
        <aside className={isOpen ? 'open' : 'closed'}>
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
            <Button
                label="Back to testing suite"
                classes='primary with-icon'
                withIcon={true}
                icon='arrow_back'
                wrap='true'
                size='small'
                onClick={goToIntegrationsSuite}
                style={{
                    padding: isOpen ? '5px 15px' : '5px',
                    fontSize: isOpen ? '1rem' : '.8rem',
                    margin: '0 auto'
                }}
            />
        </aside>
    )
}
