import * as React from 'react';
import Link from '@mui/material/Link';
import './BasicBreadcrumbs.css';
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import navConstants from '../constants/navConstants'



function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
                <Container sx={{display: "inline-flex", justifyContent: "center", alignContent: "space-evenly", gap: "30px"}}>
                <Link color="secondary" component={NavLink} to={navConstants.work.to}  underline="hover" sx={{"&:hover":{"&:active": {color: deepOrange[600]}}}}>
                    Github Greatest Hits
                </Link>
                <Link color="secondary" component={NavLink} to="/about-me" underline="hover">
                    About Me
                </Link>
                <Link color="secondary" component={NavLink} to="/my-music"  underline="hover">
                    My Music
                </Link>
                </Container>
    
        </div>
    );
}