"use client"

import { useState, useEffect, UseCallback } from 'react'
import { api } from '@/lib/api'

export function useItems(itemsInitial = []) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [items, setItems] = useState(itemsInitial)

    const addItem = async (newItemData) => {
        console.log(newItemData);

        setLoading(true)
        setError(null)

        try {
            const createdItem = await api.post('items', newItemData)

            if (createdItem.error) {
                setError("ERRO AO CRIAR ITEM!")
            }

            setItems((prevItems) => [...prevItems, createdItem])
            setLoading(false)
        } catch (error) {
            setError("ERRO AO CRIAR ITEM!")

        }
    }

    const removeItem = async (id) => {
        setLoading(true)
        setError(null)

        try {
            const deleteItem = await api.del(`items/${id}`)

            if (deleteItem.error) {
                setError('ERRO AO EXCLUIR ITEM!')
                return;
            }

            setItems((prevItems) => prevItems.filter((item) => item.id !== id))
        } catch (error) {
            setError('ERRO AO EXCLUIR ITEM!')
        } finally {
            setLoading(false)
        }
    }

    const editItem = async (id, updatedItem) => {
        setLoading(true)
        setError(null)

        try {
            const editItem = await api.put(`items/${id}`, updatedItem)

            if (editItem.error) {   
                setError('ERRO AO EDITAR ITEM' + editItem.error)
                return;
            }

            setItems((prevItems) => prevItems.map((item) => {
                if (item.id === id) {
                    return editItem
                }

                return item;
            }))

        } catch (error) {
            setError('ERRO AO EDITAR ITEM')
            
        } finally {
            setLoading(false)
        }
    }

    return { items, loading, error, addItem, removeItem, editItem }

}