import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <p><span>&copy; 2023</span></p>
            </ul>
        </footer>
    );
}

export default Footer;