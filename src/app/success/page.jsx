import Link from "next/link";

export default function Success () {
    return (
        <div>
            <h2>Mensagem enviada com sucesso</h2>
            <p>Entraremos em contato o mais rapido possível</p>
            <Link href={"/"}>Voltar a página principal</Link>
        </div>
    )
}