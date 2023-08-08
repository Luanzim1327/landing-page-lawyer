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
            </section>
        </section>
    )
}

/*
   <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Fortaleza&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
*/  