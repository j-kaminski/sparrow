import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from "../../redux/hooks";
import { tempToggleAuth} from "../../features/auth";

const useAppBarStyles = makeStyles({
    root: {
        borderBottom: '2px solid #1a4453',
        '& ul': {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
        },
    },

    nav: {
        width: '100%',
        height: '100%',
        padding: '1em 1em',
    },

    list: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        color: 'white',
        fontSize: '25px',
        letterSpacing: '2px',
        textDecoration: 'underline',
        cursor: 'pointer',
        transition: 'all .3s',
        '&:hover': {
            color: '#fc8e08',
        }
    },

    logout: {
    },
});


export const AppBar = ({showNavItems= true}) => {
    const styles = useAppBarStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <div className={styles.logo}  onClick={() => navigate('/')}>Sparrow</div>
                    </li>
                    {showNavItems && (<li>
                        <Link className={styles.logout} to='/Dashboard'>
                            <Button onClick={() => dispatch(tempToggleAuth())}>
                                Logout
                            </Button>
                        </Link>
                    </li>)}

                </ul>
            </nav>
        </div>
    );
};
