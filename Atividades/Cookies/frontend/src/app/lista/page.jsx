import Listagem from "@/components/blocks/Listagem"
import { apiServer } from "@/lib/api-server"

export default async function Lista() {

    let items = []

    try {
        items = await apiServer.get('items')
    } catch (error) {
        console.error("Falha ao buscar os itens:", error);
    }

    return (
        <main className="min-h-screen w-full bg-muted/40 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-5xl">
                
                <div className="mb-8 border-b border-border pb-6">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Painel de Itens
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Gerencie, adicione e visualize todos os seus itens em um só lugar.
                    </p>
                </div>

                <div>
                    <Listagem itemInitial={items} />
                </div>

            </div>
        </main>
    )
}