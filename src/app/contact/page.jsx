"use client";

import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

export default function Contact () {    
    const form = useForm();
    const { register , handleSubmit , formState} = form;
    const { errors } = formState;

    function onSubmit (data) {
        console.log("form submited" , data);
    }

    return (

        <section className={styles.containerContact}>
            <div className={styles.containerBanner}>
                <h2>Contact</h2>
            </div>

            <section className={styles.containerFormInfo}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name='name' 
                        id='name' 
                        {...register("name" , {
                            required: {
                                value : true,
                                message : "Names is required"
                            }
                        })} 
                        placeholder='Your name'
                    />
                    <p className={styles.errors}>{errors.name?.message}</p>


                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                        type="number"
                        name='phone' 
                        id='phone'
                        placeholder='Your phone'
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        {...register("email" , {
                            required : {
                                value : true,
                                message: "Email is required"
                            }
                        })} 
                        placeholder='Your email'
                    />
                    <p className={styles.errors}>{errors.email?.message}</p>
                    
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        cols="30" rows="10" 
                        placeholder='Your message' 
                        id="message" 
                        {...register("message" , {
                            required : {
                                value : true,
                                message: "Message is required"
                            }
                        })} 
                    >
                    </textarea>
                    <p className={styles.errors}>{errors.message?.message}</p>

                    <button type='submit'>
                        Enviar
                    </button>
                </form>
            </section>
        </section>
    )
}