import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Container from './Container';
import logo from '../../img/logo.jpg';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="MF SUPLEMENTOS" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"> INÍCIO</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/produtos"> PRODUTOS</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;