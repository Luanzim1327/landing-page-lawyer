"use client"

import ReactModal from "react-modal"
import { useModalContact } from "../Modal";

let posts = [
    {
        title : "Teste 1",
        topic : "Topico 1",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dicta? Quod iste id",
    },
    {
        title : "Teste 2",
        topic : "Topico 2",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dicta? Quod iste id",
    },
    {
        title : "Teste 3",
        topic : "Topico 3",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dicta? Quod iste id.",
    }
]

export default function RecommendedPosts () {
    return (
        <section>
            <h2>Recommended</h2>
            <PostItem />
        </section>
    )
}

export function PostItem () {
    const { displayModal , setDisplayModal } = useModalContact();

    return (
        posts.map((item) => {
            return (
                <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.topic}</p>
                    <button type="button" onClick={() => setDisplayModal(true)}>Ler mais</button>

                    <ReactModal
                        isOpen={displayModal}
                        ariaHideApp={false}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => setDisplayModal(false)}>Fechar</button>
                    </ReactModal>
                </div>
            )
        })
    )
}