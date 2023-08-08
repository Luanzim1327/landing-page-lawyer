"use client";

import Modal from "../Modal";
import { useModalContact } from "../Modal";
import styles from "./styles.module.scss"
import ReactModal from "react-modal";

export default function Header () {
    const { displayModal , setDisplayModal } = useModalContact();

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerContent}>
                <h2>Logo</h2>
                <ul>
                    <li className={styles.active}>
                        <a>Home</a>
                    </li>
                    <li>
                        <a onClick={() => setDisplayModal(true)}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}