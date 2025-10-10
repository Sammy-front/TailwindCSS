import Listagem from "@/components/blocks/Listagem"
import CardItem from "@/components/ui/CardItem"
import { apiServer } from "@/lib/api-server"

export default async function Lista() {

    let items = []

    try {
        items = await apiServer.get('items')
        console.log(items)
    } catch (error) {

    }

    return (
        <>
            <Listagem itemInitial={items} />
        </>
    )
}