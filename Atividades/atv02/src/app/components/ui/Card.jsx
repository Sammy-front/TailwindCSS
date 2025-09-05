export default function Card() {
    const cards = [
        {
            id: 1,
            titulo: 'ChatGPT Plus',
            descricao: '💡 Inteligência Artificial avançada para responder, criar textos e auxiliar em estudos e projetos.',
            img: './logo/chatgpt.png',
            tag: ["chat", "produtividade", "estudos"]
        },
        {
            id: 2,
            titulo: 'Grammarly AI',
            descricao: '📝 Ferramenta de escrita que corrige gramática, estilo e clareza em tempo real.',
            img: './logo/grammarly.png',
            tag: ["escrita", "correção", "trabalho"]
        },
        {
            id: 3,
            titulo: 'MidJourney',
            descricao: '🎨 IA criadora de imagens realistas e artísticas a partir de descrições de texto.',
            img: './logo/midjourney.png',
            tag: ["arte", "design", "criatividade"]
        },
        {
            id: 4,
            titulo: 'Claude AI',
            descricao: '🤖 Assistente de escrita focado em produtividade, clareza e respostas seguras.',
            img: './logo/claude.png',
            tag: ["trabalho", "pesquisa", "produtividade"]
        },
        {
            id: 5,
            titulo: 'Copilot GitHub',
            descricao: '💻 IA para programadores que sugere códigos, funções e soluções automáticas.',
            img: './logo/copilot.png',
            tag: ["código", "programação", "dev"]
        },
        {
            id: 6,
            titulo: 'Perplexity AI',
            descricao: '🔍 Motor de busca inteligente que responde com base em fontes verificadas.',
            img: './logo/perplexity.png',
            tag: ["pesquisa", "busca", "informação"]
        },
        {
            id: 7,
            titulo: 'Runway Gen-2',
            descricao: '🎬 IA criadora de vídeos a partir de texto, revolucionando o audiovisual.',
            img: './logo/runway.png',
            tag: ["vídeo", "edição", "criatividade"]
        },
        {
            id: 8,
            titulo: 'Stable Diffusion',
            descricao: '🖌️ IA open-source para criação de imagens personalizadas com alto realismo.',
            img: './logo/stablediffusion.png',
            tag: ["arte", "open-source", "imagens"]
        },
        {
            id: 9,
            titulo: 'Jasper AI',
            descricao: '📢 IA especializada em marketing e criação de conteúdo publicitário.',
            img: './logo/jasper.png',
            tag: ["marketing", "conteúdo", "redação"]
        },
        
    ];

    return (
        <>
            <div className="w-sm m-auto justify-center items-center flex md:w-full ">
                <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">

                    {cards.map((card) => (

                        <div key={card.id} className="bg-[#1e2550] w-60 md:flex md:w-100 lg:w-120 " >
                            <div className="p-5">
                                <img src={card.img} className="w-50 h-50" />
                            </div>

                            <div className="flex flex-col justify-center items-center px-2">
                                <h2 className="font-bold text-2xl">{card.titulo}</h2>
                                <div className="bg-amber-100 w-40 h-[3px]"></div>
                                <p className="text-base pt-5">{card.descricao}</p>

                                <button className="">button</button>
                            </div>
                        </div>



                    ))}
                </div>
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
