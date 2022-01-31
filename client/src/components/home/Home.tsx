import React from 'react';
import { useHomeStyles } from '.';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
	const styles = useHomeStyles();

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
			<Box
				sx={{
					mt: '160px',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<img width='500px' height='500px' src='/bird.png' alt='' />
			</Box>
		</div>
	);
};
