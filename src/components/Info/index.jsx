import styles from './styles.module.scss'

let infoContentText = [
    {
        title:"Effective",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        title:"99% Cases wins",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        title:"Expert Lawyers",
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    }
]

export default function Info () {
    return (
        <section className={styles.infoContainer}>
            <div>
                <img src="https://i.pinimg.com/564x/ce/76/b2/ce76b20f89a9a46e372cb6d6b612eb90.jpg" alt="photo of lawyer" />
            </div>
            <div className={styles.infoContent}>
                <h2>Why Choose Us</h2>
                <div>
                    <ItemInfo />
                </div>
            </div>
        </section>
    )
}


function ItemInfo () {
    return (
        infoContentText.map((item) => {
            return(
                <div className={styles.infoItem}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p> 
                </div>
            )
        })
    )
}