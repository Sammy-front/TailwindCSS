import CardItem from './CardItem';
import { useState } from 'react';

export default function MinhaListaDeItens() {
    const [itens, setItens] = useState([
        { id: 1, titulo: 'Revisar o relatório', status: 'Em andamento' },
        { id: 2, titulo: 'Enviar e-mails de acompanhamento', status: 'Pendente' },
    ]);

    // Função para lidar com a edição
    const handleEdit = (itemParaEditar) => {

        console.log('Editar item:', itemParaEditar);
        alert(`Editando: ${itemParaEditar.titulo}`);
    };


    const handleDelete = (idParaDeletar) => {

        console.log('Deletar item com ID:', idParaDeletar);
        const novaLista = itens.filter(item => item.id !== idParaDeletar);
        setItens(novaLista);
    };

    return (
        <ul className="space-y-4">
            {itens.map(item => (
                <CardItem
                    key={item.id}
                    item={item}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
}