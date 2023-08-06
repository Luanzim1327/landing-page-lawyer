"use client";

import backgroundImage from "../../../public/images/background-header.jpg"

import styles from "./styles.module.scss"

export default function Header () {
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerContent}>
                <h2>Logo</h2>
                <ul>
                    <li className={styles.active}>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
