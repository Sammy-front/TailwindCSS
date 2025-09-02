export default function Card() {

    const cards = [
        // { id: 1, titulo: 'Plano Basic', preco: 'R$ 200.90', descricao: '🤖 Pacotes e IA Grammarly V 1.5', descricao2: '🎯 6 Messes de acesso a estudos de utilização de IA' },
        // { id: 2, titulo: 'Plano Pro', preco: 'R$ 400.90', descricao: '🤖 Pacotes e IA Grammarly V 2', descricao2: '🎯 1 anos de acesso a estudos de utilização de IA' },
        // { id: 3, titulo: 'Plano Master', preco: 'R$ 550.70', descricao: '🤖 Pacotes e IA Grammarly V 3.5', descricao2: '🎯 2 anos de acesso a estudos de utilização de IA' },
        { id: 4, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        // { id: 5, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        // { id: 6, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        // { id: 7, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        // { id: 8, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' },
        // { id: 9, titulo: 'assinatura', descricao: 'Compre já a nossa nova IA chamada Potato', img: '/logo/Quadro.png' }

    ];

    return (
        <>

            <div className="grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <div key={card.id}>
                        <div className="p-5">
                            <img src={card.img} className="w-50 h-50" />
                        </div>cdcd 

                        <div className="flex flex-col justify-center items-center">
                            <h2 className="font-bold text-2xl">asd</h2>
                            <p className="text-base">hhhh</p>

                            <button className="">button</button>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
}