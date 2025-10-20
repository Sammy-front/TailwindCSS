import { Trash2 } from "lucide-react";
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
import { useState } from "react"

export default function ModalDelItens({ onDelItem, item }) {
    const [titulo, setTitulo] = useState(item.titulo || '')
    const [openDel, setOpenDel] = useState(false)


    return (
        <div className="p-0">
            <Dialog open={openDel} onOpenChange={setOpenDel}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="p-1.5 text-red-600 hover:text-red-800 rounded-full hover:bg-red-100 transition-colors">
                        <Trash2 className="h-6 w-6" />
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] rounded-xl shadow-lg bg-background/95 backdrop-blur-sm">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">
                            Confirmar Exclusão
                        </DialogTitle>
                        <DialogDescription asChild>
                           <div>
                                Você tem certeza de que deseja excluir o item abaixo? Essa ação não pode ser desfeita.
                                <div className="mt-4 max-h-24 w-94 overflow-y-auto rounded-md border bg-muted/50 p-3 text-sm text-foreground break-words">
                                    {titulo}
                                </div>
                           </div>
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>

                        <Button type="button" variant="secondary" onClick={() => setOpenDel(false)}>
                            Cancelar
                        </Button>

                        <Button type="button" variant="destructive" onClick={() => {
                            onDelItem(item.id);
                            setOpenDel(false);
                        }}>
                            Excluir
                        </Button>
                        
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}