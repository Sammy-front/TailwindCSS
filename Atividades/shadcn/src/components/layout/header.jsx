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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
    return (
        <header className="w-full">
            <div className="flex items-center justify-between w-full px-4">

                <div className="flex items-center gap-15">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Avatar className={"w-10 h-10"}>
                            <AvatarImage src="./img/zenith.gif" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h2 className="font-bold text-xl px-1 font">Zenith</h2>
                    </div>

                    {/* NavBar - Items */}

                    <NavigationMenu viewport={false}>
                        {/* não criar varios menuList. caso queira fazer mais itens faça copiando o MenuItem */}
                        <NavigationMenuList>

                            {/* item 1 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* item 2 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            {/* item 3 */}

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            {/* item 4 */}

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* item 5 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* item 6 */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>dsds</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>


                    </NavigationMenu>
                </div>


                {/* Avatar do usuario */}
                <div className="px-4 py-2">
                    <Avatar className={"w-13 h-13"}>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

            </div>
        </header>
    )

}