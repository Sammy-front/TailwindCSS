import Listagem from "@/components/blocks/Listagem"
import { apiServer } from "@/lib/api-server"

export default async function Lista() {

    let items = []

    try {
        // A busca de dados permanece a mesma
        items = await apiServer.get('items')
    } catch (error) {
        // É uma boa prática lidar com o erro, talvez mostrando uma mensagem
        console.error("Falha ao buscar os itens:", error);
    }

    return (
        // 1. Container Principal da Página
        // Define um fundo sutil e padding responsivo
        <main className="min-h-screen w-full bg-muted/40 p-4 sm:p-6 lg:p-8">
            
            {/* 2. Container de Conteúdo Centralizado */}
            {/* Limita a largura máxima e centraliza na tela */}
            <div className="mx-auto w-full max-w-5xl">
                
                {/* 3. Cabeçalho da Página */}
                {/* Dá título e contexto à lista de itens */}
                <div className="mb-8 border-b border-border pb-6">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Painel de Itens
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Gerencie, adicione e visualize todos os seus itens em um só lugar.
                    </p>
                </div>

                {/* 4. Área de Conteúdo Principal */}
                {/* Onde seu componente de listagem será renderizado */}
                <div>
                    <Listagem itemInitial={items} />
                </div>

            </div>
        </main>
    )
}