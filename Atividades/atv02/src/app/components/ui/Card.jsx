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
            img: './logo/midjourney.svg',
            tag: ["arte", "design", "criatividade"]
        },
        {
            id: 4,
            titulo: 'Claude AI',
            descricao: '🤖 Assistente de escrita focado em produtividade, clareza e respostas seguras.',
            img: './logo/claude.svg',
            tag: ["trabalho", "pesquisa", "produtividade"]
        },
        {
            id: 5,
            titulo: 'Copilot GitHub',
            descricao: '💻 IA para programadores que sugere códigos, funções e soluções automáticas.',
            img: './logo/github-copilot.png',
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
            img: './logo/stable_diffusion.png',
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
            <div className="container mx-auto px-5 py-12">
                <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {cards.map((card) => (

                        <div key={card.id} className="bg-[#1e2550] flex flex-col rounded-xl shadow-xl/20 shadow-[#5e70df] items-center p-6 w-full max-w-2xl mx-auto hover:scale-105 hover:-shadow-xl lg:flex-row lg:items-start" >

                            <img src={card.img} className="w-24 h-24 mb-4 hover:scale-106 lg:mb-0 lg:mr-6" />

                            <div className="flex flex-col text-center px-2 flex-1 lg:text-left">

                                <h2 className="font-bold text-xl mb-2 md:text-2xl">{card.titulo}</h2>

                                <div className="bg-amber-100 w-20 md:w-32 h-[3px] mb-4 mx-auto lg:mx-0"></div>

                                <p className="text-sm  mb-4 md:text-base">{card.descricao}</p>

                                <button className="mt-auto px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-800 active:bg-emerald-900">
                                    Saiba Mais
                                </button>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}