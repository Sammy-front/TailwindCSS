import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ModalAddItem({ onAddItem }) {

    const [titulo, setTitulo] = useState("")
    const [status, setStatus] = useState("")

    return (
        <div className="p-3">

            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="border border-gray-300 hover:border-gray-400 hover:bg-gray-100 transition-all duration-200 rounded-xl shadow-sm"
                    >
                        ➕ Adicionar item
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] rounded-2xl shadow-xl border border-gray-200 bg-white/90 backdrop-blur-md">
                    <DialogHeader className="text-center space-y-1">
                        <DialogTitle className="text-lg font-semibold text-gray-800">
                            Adicionando item
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                            Utilize este modal para adicionar itens à lista
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-6 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="titulo" className="text-sm font-medium text-gray-700">
                                Título
                            </Label>
                            <Input
                                id="titulo"
                                name="titulo"
                                placeholder="Digite o título..."
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-lg"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="status" className="text-sm font-medium text-gray-700">
                                Status
                            </Label>
                            <Input
                                id="status"
                                name="status"
                                placeholder="Digite o status..."
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="border-gray-300 focus:ring-2 focus:ring-indigo-500 rounded-lg"
                            />
                        </div>
                    </div>

                    <DialogFooter className="flex justify-end gap-3">
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                className="rounded-lg border-gray-300 hover:bg-gray-100 text-gray-700"
                            >
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault()
                                onAddItem({ titulo, status })
                            }}
                            className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                        >
                            Salvar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
