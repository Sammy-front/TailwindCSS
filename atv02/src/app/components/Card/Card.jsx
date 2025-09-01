export default function Card() {

    const assinaturas = [
        { id: 1, titulo: 'Plano Basic', preco: 'R$ 200.90', descricao: '🤖 Pacotes e IA Grammarly V 1.5', descricao2: '🎯 6 Messes de acesso a estudos de utilização de IA' },
        { id: 2, titulo: 'Plano Pro', preco: 'R$ 400.90', descricao: '🤖 Pacotes e IA Grammarly V 2', descricao2: '🎯 1 anos de acesso a estudos de utilização de IA' },
        { id: 3, titulo: 'Plano Master', preco: 'R$ 550.70', descricao: '🤖 Pacotes e IA Grammarly V 3.5', descricao2: '🎯 2 anos de acesso a estudos de utilização de IA' },
    ];
    const cards = [
        { id: 4, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        { id: 5, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        { id: 6, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        { id: 7, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        { id: 8, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        { id: 9, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' }

    ];

    return (
        <>
            <div className="grid gap-3 justify-center items-center grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                {assinaturas.map((card) => (
                    <div key={card.id} className="bg-[#3c4577] rounded-xl p-5 flex flex-col border border-[#0d1436] w-full max-w-sm mx-auto">
                        {/* Titulo */}
                        <div className="flex justify-center items-center">
                            <h2 className="font-bold text-5xl text-white cursor-default">
                                {card.titulo}
                            </h2>
                        </div>

                        {/* Linha */}
                        <div className="bg-[#5b6ab8] w-[85%] h-[2px] rounded-2xl mx-auto my-5"></div>

                        {/* Preço */}
                        <div className="flex justify-center items-center h-20">
                            <h2 className="font-bold text-4xl text-white hover:text-green-600">{card.preco}</h2>
                        </div>

                        {/* Descrições */}
                        <ul className="text-base text-black">
                            <li>{card.descricao}</li>
                            <li>{card.descricao2}</li>
                        </ul>

                        {/* Botão */}
                        <a href="#" className="bg-emerald-700 text-white py-2 px-5 rounded-2xl flex justify-center items-center my-2 hover:bg-emerald-800 mx-auto">
                            Compre já
                        </a>
                    </div>
                ))}
            </div>


            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {cards.map((card) => (
                    <div key={card.id} className="bg-white rounded-xl p-4 flex flex-col border border-red-500">
                        <h2 className="font-bold text-lg">{card.titulo}</h2>
                        <p className="text-base">{card.descricao}</p>
                        <img src={card.img} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
}