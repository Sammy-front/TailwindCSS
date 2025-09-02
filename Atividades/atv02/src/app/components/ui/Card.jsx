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


// export default function Card() {
//   return (
//     <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
//       {/* Imagem */}
//       <img
//         src="/logo/quadro.png"
//         alt="Card Image"
//         className="w-full md:w-1/2 object-cover hover:scale-105 transition-transform duration-500"
//       />

//       {/* Conteúdo */}
//       <div className="flex flex-col justify-center p-6 md:p-8 w-full md:w-1/2">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
//           Título do Card
//         </h2>

//         <p className="text-gray-600 text-base md:text-lg mb-5">
//           Este é um exemplo de card responsivo com TailwindCSS. 
//           No celular a imagem aparece em cima, e no PC aparece à esquerda.
//         </p>

//         <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
//           Saiba Mais 🚀
//         </button>
//       </div>
//     </div>
//   );
// }
