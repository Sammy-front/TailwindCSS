import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function EditItemModal({ onEditItem, item }) {
    const [titulo, setTitulo] = useState(item.titulo || '');
    const [status, setStatus] = useState(item.status || '');
    const [openEdit, setOpenEdit] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const updatedItem = { titulo, status };
        onEditItem(item.id, updatedItem);
        setOpenEdit(false);
    }
 
    return (
       <div className="p-0"> 
            <Dialog open={openEdit} onOpenChange={setOpenEdit}>

                <DialogTrigger asChild>
                    <Button variant="ghost" className="p-1.5 text-blue-600 hover:text-blue-800 rounded-full hover:bg-blue-200 transition-colors" aria-label="Editar item">
                        <Pencil className="h-6 w-6" />
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] rounded-xl shadow-lg bg-background/95 backdrop-blur-sm">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold">
                            Editar Item
                        </DialogTitle>
                        <DialogDescription>
                            Altere os campos abaixo para salvar as modificações.
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
                            <Button type="button" variant="secondary" onClick={() => setOpenEdit(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit" disabled={!titulo.trim()}>
                                Salvar Alterações
                            </Button>
                        </DialogFooter>  
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
}