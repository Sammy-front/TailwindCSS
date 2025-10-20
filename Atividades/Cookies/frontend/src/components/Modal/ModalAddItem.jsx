import { PlusCircle } from "lucide-react"
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
    const [isOpen, setIsOpen] = useState(false)
    const [titulo, setTitulo] = useState("")
    const [status, setStatus] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!titulo.trim()) {
            return
        }
        onAddItem({ titulo, status })
        setTitulo("")
        setStatus("")
        setIsOpen(false)
    }

    return (
        <div className="p-3">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>

                    <Button variant="outline">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Adicionar item
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] rounded-xl shadow-lg bg-background/95 backdrop-blur-sm">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">
                            Adicionar Novo Item
                        </DialogTitle>
                        <DialogDescription>
                            Preencha os campos abaixo para incluir um item na lista.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="titulo" className="text-right">
                                    Título
                                </Label>
                                <Input id="titulo" name="titulo" placeholder="Ex: Estudar React" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="col-span-3" required />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="status" className="text-right">
                                    Status
                                </Label>
                                <Input id="status" name="status" placeholder="Ex: Em andamento" value={status} onChange={(e) => setStatus(e.target.value)} className="col-span-3" />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit" disabled={!titulo.trim()}>
                                Salvar
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}