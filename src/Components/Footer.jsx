import React from 'react';
import styles from '../Styles/Footer.module.css';
import { useSelector } from 'react-redux';

const Footer = () => {
	const darkMode = useSelector((state) => state.theme.darkmode);
	return (
		<footer className={`${styles.footer} ${darkMode ? styles.dark : ""}`}>
			<p className='footer-copy'>&copy; {new Date().getFullYear()} Store. All Rights Reserved.</p>
		</footer>
	);
}

export default Footer;
