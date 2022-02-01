import React, {useEffect, useState} from 'react';
import {useHomeStyles} from '.';
import {Box, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';


type Joke = {
    setup: string;
    delivery: string;
}
const isEmpty = (obj: any) => Object.keys(obj).length === 0;

export const Home = () => {
    const styles = useHomeStyles();
    const [joke, setJoke] = useState<Joke>({} as Joke);

    const fetchJokeAPI = async () => {
        const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
        const data = await res.json();
        setJoke({setup: data.setup, delivery: data.delivery})
    }

    useEffect(() => {
        fetchJokeAPI();
    }, []);



    return (
        <div className={styles.root}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <div className={styles.logo}>Sparrow</div>
                    </li>
                    <li>
                        <Link className={styles.sparrow} to='/Dashboard'>
                            Run Sparrow
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.content}>
                {isEmpty(joke) ? (<>loading </>)  : (
                    <div className={styles.joke}>
                        <Typography sx={{color: 'orange'}} variant='h5'>{joke.setup}</Typography>
                        <Typography sx={{mt:2, color: 'white'}}>{joke.delivery}</Typography>
                        <Button onClick={() => fetchJokeAPI()} sx={{mt:4}} variant='contained'>NEXT JOKE</Button>
                    </div>
                )}
                <img width='300px' height='300px' src='/bird.png' alt=''/>
            </div>
        </div>
    );
};
