export default  function Areas () {
    return (
        <section className="py-5">
            <div className="py-2 text-center text-slate-800">
                <h2 className="font-bold text-xl">Áreas de atuação</h2>
            </div>
            <div className=" md:flex-row md:w-3/4 md:mx-auto flex flex-col py-2">
                <ListArea />
            </div>
        </section>
    )
}

function ListArea () {

    let areasAtuacao = [
        {
            icone : "Icone",
            area : "Área 1",
            servico : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio accusamus cupiditate"
        },
        {
            icone : "Icone",
            area : "Área 2",
            servico : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio accusamus cupiditate"
        },
        {
            icone : "Icone",
            area : "Área 3",
            servico : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio accusamus cupiditate"
        },
    ]

    return areasAtuacao.map((area) => {
        return (
            <div className="flex flex-col space-y-3 py-3 my-3 border-slate-200 border-2 p-2 mx-3 rounded">
                <h4 className="text-orange-500">{area.icone}</h4>
                <h3 className="text-slate-800">{area.area}</h3>
                <p className="md:text-justify text-sm text-slate-500">{area.servico}</p>
            </div>
        )
    })
}