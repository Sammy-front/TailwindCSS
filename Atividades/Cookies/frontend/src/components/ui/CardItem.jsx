import ModalDelItens from "../Modal/ModalDelItens";
import ModalEditarItens from "../Modal/ModalEditarItens";


export default function CardItem({ item, onEdit, onDelete }) {
    return (
        <>
            <div className="p-2 w-full">
                <li className="group relative p-5 rounded-2xl border border-gray-200 bg-gradient-to-br from-white/90 to-gray-50 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative">

                    <div className="w-200">
                        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 truncate">
                            {item.titulo}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300 truncate">
                            {item.status}
                        </p>
                        
                        {/* Botões de Editar e Deletar */}
                    </div>
                        <div className="absolute top-2 right-0 flex items-start space-x-2 transition-opacity duration-300">
                            <ModalEditarItens item={item} onEditItem={onEdit} />
                            <ModalDelItens item={item} onDelItem={onDelete} />
                        </div>
        </div>
                </li>
            </div>
        </>
    )
}

