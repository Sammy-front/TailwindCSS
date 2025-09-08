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
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NavBar -- É importante colocar este Header e essa DIV para poder deixar funcional o fator do avatar ficar na esquerda */}
      <header className={"w-full"}>
        <div className={"w-full flex justify-between items-center"}>

          {/* Logo do Zenith */}
          <div className="py-1 px-2 flex items-center">
            <Avatar className={"w-8 h-8"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="px-1 font-bold text-xl">Zenith</p>
          </div>

          {/* O component NavBar */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>

              {/* Itens da nav-bar */}
              <div className="flex">

                <NavigationMenuItem>

                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>

                </NavigationMenuItem>
                <NavigationMenuItem>

                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <NavigationMenuLink>fd</NavigationMenuLink>
                  </NavigationMenuContent>

                </NavigationMenuItem>

              </div>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Avatar */}
          <div className="py-1 px-4">
            <Avatar className={"w-12 h-12"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

        </div>
      </header>


      {/* separator tem a funcionalidade de criar um "espaçamento" */}
      <Separator />

      {/* Button and Card */}
      <div className="flex justify-center p-10">
        <Card className={"w-full max-w-sm"}>

          <CardHeader className={"justify-center"}>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription>Card Description</CardDescription>
            <form>
              <div className="flex flex-col gap-4">

                <p>Card Content</p>
              </div>
            </form>
          </CardContent>

          <CardFooter className={"flex justify-center"}>
            <Button variant={"action"}>Socorro</Button>
          </CardFooter>

        </Card>
      </div>



    </>
  );
}
