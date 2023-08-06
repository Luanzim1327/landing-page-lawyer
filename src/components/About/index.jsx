import styles from './styles.module.scss';

export default function About () {
    return(
        <section className={styles.aboutContainer}>
            <div className={styles.aboutContentText}>
                <span>ABOUT ME</span>
                <h2>John <br/> Doe</h2>
                
                <div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
            </div>
            <div>
                <img src="https://i.pinimg.com/564x/ce/76/b2/ce76b20f89a9a46e372cb6d6b612eb90.jpg" alt="photo of lawyer" />
            </div>
        </section>
    )
}