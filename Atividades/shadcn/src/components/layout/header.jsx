import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">

            <div className="flex items-center justify-between w-full max-w-7xl mx-auto p-4">

                <div className="flex items-center gap-4 lg:gap-8">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Avatar className={"w-10 h-10"}>
                            <AvatarImage src="./img/zenith.gif" />
                            <AvatarFallback>Z</AvatarFallback>
                        </Avatar>
                        <h2 className="font-bold text-2xl px-2 text-gray-900">Zenith</h2>
                    </div>

                    {/* NavBar - Items (Oculto em telas menores, visível em 'lg' e maiores) */}
                    <NavigationMenu viewport={false} className="hidden lg:block">
                        {/* não criar varios menuList. caso queira fazer mais itens faça copiando o MenuItem */}
                        <NavigationMenuList className="space-x-4">

                            {/* item 1 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-black">Home</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink href="/" className="px-4 py-2 block">Início</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* item 2 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-black">Produtos</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink href="#" className="px-4 py-2 block">Celulares</NavigationMenuLink>
                                    <NavigationMenuLink href="#" className="px-4 py-2 block">Notebooks</NavigationMenuLink>
                                    <NavigationMenuLink href="#" className="px-4 py-2 block">Acessórios</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>


                            {/* item 3 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-black">Serviços</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink href="/servicos" className="px-4 py-2 block">Assistência</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* item 4 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-black">Sobre</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink href="/sobre" className="px-4 py-2 block">Nossa História</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* item 5 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-700 hover:text-black">Contato</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink href="/contato" className="px-4 py-2 block">Contate nos</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>


                {/* Avatar do usuario e Menu Mobile*/}
                <div className="flex items-center gap-4">
                    <div className="lg:hidden">

                        <Drawer direction="right">

                            <DrawerTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" /> {/* Ícone de 3 barrinhas */}
                                </Button>
                            </DrawerTrigger>

                            <DrawerContent className="h-full right-0 mt-0 w-64 fixed bottom-0 rounded-none">

                                <DrawerHeader className="text-left">
                                    <DrawerTitle>Zenith Navegação</DrawerTitle>
                                    <DrawerDescription>Explore nossas opções</DrawerDescription>
                                </DrawerHeader>

                                <div className="p-4 overflow-y-auto">
                                    <Accordion type="single" collapsible className="w-full">
                                        {/* item 1 */}
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Home</AccordionTrigger>
                                            <AccordionContent>
                                                <a href="/" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">
                                                    Início
                                                </a>
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* item 2 */}
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>Produtos</AccordionTrigger>
                                            <AccordionContent>
                                                <a href="#" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">Celulares</a>
                                                <a href="#" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">Notebooks</a>
                                                <a href="#" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">Acessórios</a>
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* item 3 */}
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>Serviços</AccordionTrigger>
                                            <AccordionContent>
                                                <a href="/servicos" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">Assistência</a>
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* item 4 */}
                                        <AccordionItem value="item-4">
                                            <AccordionTrigger>Sobre</AccordionTrigger>
                                            <AccordionContent>
                                                <a href="/sobre" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">Nossa História</a>
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* item 5 */}
                                        <AccordionItem value="item-5">
                                            <AccordionTrigger>Contato</AccordionTrigger>
                                            <AccordionContent>
                                                <a href="/contato" className="px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground rounded-sm">Contate-nos</a>
                                            </AccordionContent>
                                        </AccordionItem>

                                    </Accordion>
                                </div>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <Button variant="outline">Fechar</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>

                    <Avatar className={"w-10 h-10 lg:w-12 lg:h-12"}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>

            </div>
        </header>
    )

}