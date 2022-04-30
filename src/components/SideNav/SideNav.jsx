import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, titleMap, Button, Tooltip } from '..';
import IconLogo from '../../assets/images/refersion-icon-white.svg';
import FullLogo from '../../assets/images/Refersion-Logo-White.svg';
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
            <span id="toggle" onClick={toggleMenu}>{isOpen ? <img src={FullLogo} className="full" /> : <img src={IconLogo} alt="Refersion Logo" />}</span>
            {/* TODO: and add tooltips to icon-based menu */}
            <ul>
                <li>
                    <Tooltip text='Home' direction='right' 
                    children={
                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/">
                            <Icon icon={titleMap["/"].icon} display="boxed" /><span>Home</span>
                        </NavLink>
                    } />
                </li>
                <li>
                    <Tooltip text='Bulk Manual Commission Credits' direction='right' 
                    children={
                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/bulk-manual-commission-credits">
                            <Icon icon={titleMap["/bulk-manual-commission-credits"].icon} display="boxed" /> <span>Bulk Manual Commission Credits</span>
                        </NavLink>
                    } />
                </li>
                <li>
                    <Tooltip text='Bulk Manual Order Credits' direction='right' 
                    children={
                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/bulk-manual-order-credits">
                            <Icon icon={titleMap["/bulk-manual-order-credits"].icon} display="boxed" /> <span>Bulk Manual Order Credits</span>
                        </NavLink>
                    } />
                </li>
                <li>
                    <Tooltip text='Bulk Edit Affiliates' direction='right' 
                    children={
                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/bulk-edit-affiliates">
                            <Icon icon={titleMap["/bulk-edit-affiliates"].icon} display="boxed" /> <span>Bulk Edit Affiliates</span>
                        </NavLink>
                    } />
                </li>
                <li>
                    <Tooltip text='Bulk Delete Triggers' direction='right' 
                    children={
                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/bulk-delete-triggers">
                            <Icon icon={titleMap["/bulk-delete-triggers"].icon} display="boxed" /> <span>Bulk Delete Triggers</span>
                        </NavLink>
                    } />
                </li>
                <li>
                    <Tooltip text='Bulk Upload Orders' direction='right' 
                    children={
                        <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/bulk-upload-orders">
                            <Icon icon={titleMap["/bulk-upload-orders"].icon} display="boxed" /> <span>Bulk Upload Orders</span>
                        </NavLink>
                    } />
                </li>
            </ul>
            <Button
                label="Back to testing suite"
                classes='secondary with-icon'
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
