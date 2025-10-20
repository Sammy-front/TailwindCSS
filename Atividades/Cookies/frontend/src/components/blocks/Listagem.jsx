"use client"

import { useItems } from "@/hooks/userItems"
import CardItem from "../ui/CardItem"
import ModalAddItem from "../Modal/ModalAddItem"

export default function Listagem({ itemInitial }) {
    const { items, loading, error, addItem, removeItem, editItem } = useItems(itemInitial)

    return (
        <>
        <ModalAddItem onAddItem={(newItem) => { addItem(newItem) }}/>
            {items && items.map((item) => {
                return <CardItem key={item.id} item={item} onDelete={removeItem} onEdit={editItem} />
            })}
        </>
    )
}