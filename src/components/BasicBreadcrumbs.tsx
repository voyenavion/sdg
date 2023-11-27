import * as React from 'react';
import Link from '@mui/material/Link';
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
                <Link color='info.main' component={NavLink} to={navConstants.work.to}  underline="hover" sx={{"&:hover":{"&:active": {color: deepOrange[600]}}}}>
                    {navConstants.work.display}
                </Link>
                <Link color='info.main' component={NavLink} to={navConstants.about.to} underline="hover">
                {navConstants.about.display}

                </Link>
                <Link color='info.main' component={NavLink} to={navConstants.contact.to}  underline="hover">
                {navConstants.contact.display}
                </Link>
                </Container>
    
        </div>
    );
}