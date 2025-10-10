"use client"

import { useState, useEffect, useCallback } from "react"
import { api } from "@/lib/api"
import { Award } from "lucide-react"

export function useItems(itemsInitial = []) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [items, setItems] = useState(itemsInitial)
    // adicionar
    const addItem = async (newItemData) => {
        console.log(newItemData)
        setLoading(true)
        setError(null)
        try {
            const createdItem = await api.post("items", newItemData)
            if (createdItem.error) {
                setError("Erro ao criar item.")
            }
            setItems((prevItems) => [...prevItems, createdItem])
        } catch (error) {
            setError("Erro ao criar item")
        }
    }
    // delete
    const delItem = async (id) => {
        console.log(id)
        setLoading(true)
        setError(null)
        try {
            const deletarItem = await api.del(`items/${id}`)

            if (deletarItem.error) {
                setError("Erro ao deletar o item.")
            }

            setItems((prevItems) => prevItems.filter((item) => item.id !== id))
        } catch (error) {
            setError("Erro ao deletar")
        }
    }
    // editar
    const ediItem = async (id, updateItem) => {
        console.log(id, updateItem)
        setLoading(true)
        setError(null)
        try{
            const editarItem = await api.put(`items/${id}`, updateItem)

            setItems((prevItems) => prevItems.map((item) => item.id === id ? updateItem : item ))

            if(editarItem.error){
                setError("Erro ao editar")
            }
        } catch(error){
            setError("Erro ao editar")
        }
    }

    return { items, loading, error, addItem, delItem, ediItem }
}