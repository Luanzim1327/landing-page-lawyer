import styles from './styles.module.scss'

export default function Contact () {    
    return (

        <section className={styles.containerContact}>
            <div className={styles.containerBanner}>
                <h2>Contact</h2>
            </div>

            <section className={styles.containerFormInfo}>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Your name' required/>

                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="number" name='phone' placeholder='Your phone'/>

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your email' required/>
                    
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
                    <button type='submit'>
                        Enviar
                    </button>
                </form>
                <div>

                </div>
            </section>
        </section>
    )
}