"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss"

export default function Header () {
    const [activeItem , setActiveItem] = useState(false); 

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.headerContent}>
                <h2>Logo</h2>
                <ul>
                    <li>
                        <Link className={styles.navigationLink} href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.navigationLink} href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}