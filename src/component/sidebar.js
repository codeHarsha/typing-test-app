import React from 'react'
import './sidebar.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import KeyboardRoundedIcon from '@material-ui/icons/KeyboardRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import SpeedIcon from '@material-ui/icons/Speed';
import { Link } from 'react-scroll';

function Sidebar() {
    return (
        <div className="sidebar-comp">
            <div className="sidebar-inner">
                <Link to="landing" smooth={true} duration={500}><HomeRoundedIcon className="sidebar-icon" fontSize="small"/> </Link>
                <Link to="typer" smooth={true} duration={500}><KeyboardRoundedIcon className="sidebar-icon" fontSize="small"/> </Link>
                <Link to="score" smooth={true} duration={500}><SpeedIcon className="sidebar-icon" fontSize="small"/> </Link>
                <GitHubIcon className="sidebar-icon" fontSize="small"/>
            </div>
        </div>
    );
}

export default Sidebar;
