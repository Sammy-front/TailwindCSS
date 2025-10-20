"use client";

import { MenuIcon } from "lucide-react";
import React from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const features = [
    {
        title: "Dashboard",
        description: "Visão geral da sua atividade.",
        href: "#",
    },
    {
        title: "Analytics",
        description: "Acompanhe seu desempenho.",
        href: "#",
    },
    {
        title: "Settings",
        description: "Configure suas preferências.",
        href: "#",
    },
    {
        title: "Integrations",
        description: "Conecte-se com outras ferramentas.",
        href: "#",
    },
    {
        title: "Storage",
        description: "Gerencie seus arquivos.",
        href: "#",
    },
    {
        title: "Support",
        description: "Obtenha ajuda quando precisar.",
        href: "#",
    },
];

const navLinks = [
    {
        title: "Products",
        href: "#",
    },
    {
        title: "Resources",
        href: "#",
    },
    {
        title: "Contact",
        href: "#",
    },
];

export default function Navbar() {
    return (
        <header className="py-4">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    {/* Logo e Nome */}
                    <a href="#" className="flex items-center gap-2">
                        <img src="https://www.suportenet.com.br/assets/images/suportenetlogo-1368x1368.png" className="h-8 w-8" alt="Shadcn UI Navbar Logo"/>
                        <span className="text-lg font-semibold tracking-tighter">
                            Suporte.com
                        </span>
                    </a>

                    {/* Navegação Desktop */}
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {features.map((feature) => (
                                            <NavigationMenuLink href={feature.href} key={feature.title} className="hover:bg-muted/70 rounded-md p-3 transition-colors">
                                                <div key={feature.title}>
                                                    <p className="text-foreground mb-1 font-semibold">
                                                        {feature.title}
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    <NavigationMenuLink
                                        href={link.href}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        {link.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Botões de Ação Desktop */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <Button variant="outline" asChild>
                            <a href="/login">Sign in</a>
                        </Button>
                        <Button>Start for free</Button>
                    </div>

                    {/* Navegação Mobile (Sheet) */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <MenuIcon className="h-4 w-4" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="max-h-screen overflow-y-auto">
                                <SheetHeader className="mb-4">
                                    <SheetTitle>
                                        <a href="https://www.shadcnblocks.com" className="flex items-center gap-2">
                                            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg" className="h-8 w-8" alt="Shadcn UI Navbar Logo"/>
                                            <span className="text-lg font-semibold tracking-tighter">
                                                Shadcnblocks.com
                                            </span>
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="features">
                                            <AccordionTrigger className="text-base hover:no-underline">
                                                Features
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="grid grid-cols-1 gap-2 p-2 sm:grid-cols-2">
                                                    {features.map((feature) => (
                                                        <a key={feature.title} href={feature.href} className="hover:bg-muted/70 rounded-md p-3 transition-colors">
                                                            <p className="text-foreground mb-1 font-semibold">
                                                                {feature.title}
                                                            </p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {feature.description}
                                                            </p>
                                                        </a>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                    <div className="mt-4 flex flex-col gap-6 border-t pt-4">
                                        {navLinks.map((link) => (
                                            <a key={link.title} href={link.href} className="font-medium">
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-col gap-4 border-t pt-4">
                                        <Button variant="outline" asChild>
                                            <a href="/login">Sign in</a>
                                        </Button>
                                        <Button>Start for free</Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>
    );
}