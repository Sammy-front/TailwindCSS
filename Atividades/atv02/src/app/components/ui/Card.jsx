export default function Card() {
    const cards = [
        {
            id: 1,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: './logo/grammarly.png',
            tag: ["", "", ""]
        },
        {
            id: 2,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 3,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 4,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 5,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 6,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 7,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 8,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
        {
            id: 9,
            titulo: 'Plano Basic',
            descricao: '🤖 Pacotes e IA Grammarly V 1.5',
            img: '',
            tag: ["", "", ""]
        },
    ];

    return (
        <>
            <div className="w-sm m-auto justify-center items-center flex  md:w-full ">
                <div className="justify-center items-center gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                    {cards.map((card) => (

                        <div key={card.id} className="bg-[#1e2550] w-50 flex md:w-130" >
                            <div className="p-5">
                                <img src={card.img} className="w-50 h-50" />
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <h2 className="font-bold text-2xl">asd</h2>
                                <p className="text-base">hhhh</p>

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
