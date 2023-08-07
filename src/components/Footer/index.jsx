import styles from "./styles.module.scss";
import {FaLinkedin , FaInstagram} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function Footer () {
    return (
        <footer>
            <section className={styles.containerFooter}>
                
                <section className={styles.containerSubscribeNewsletter}>
                    <h4>Subscribe Newsletter</h4>
                    <p>There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <input type="email" required placeholder="Enter your email"/>
                    <button type="button">
                        Subscripe
                    </button>
                </section>

                <section className={styles.containerNetwork}>
                    <h4>Follow us</h4>
                    <div>
                        <FaInstagram/>
                        <FaLinkedin />
                        <IoMdMail />
                    </div>
                </section>

                <section className={styles.containerPosts}>
                    <h4>Recent Posts</h4>
                    <ItemPost />
                    <ItemPost />
                    <ItemPost />
                </section>
            </section>

            <section className={styles.containerCopyright}>
                <p>Copyright ©2023 All rights reserved by dev Luan Mascarenhas</p>
            </section>
        </footer>
    )
}

function ItemPost () {
    return (
        <div className={styles.itemPost}>
            <h5>May 3, 2020</h5>
            <p>There live the Blind Texts</p>
        </div>
    )
}