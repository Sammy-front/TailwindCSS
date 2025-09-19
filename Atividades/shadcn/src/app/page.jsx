import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/header.jsx";
import Image from "next/image";
import { 
  Card, 
  CardAction, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
     

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Card 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Gerenciamento de Projetos</CardTitle>
            <CardDescription>Organize suas tarefas e colabore com sua equipe.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Nosso SaaS permite criar quadros Kanban, acompanhar progresso e definir prazos facilmente.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/">Ver mais</a>
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Automação de Marketing</CardTitle>
            <CardDescription>Alcance clientes de forma eficiente e automatizada.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Crie campanhas automatizadas, envie e-mails segmentados e acompanhe métricas em tempo real.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/">Explorar</a>
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Suporte ao Cliente</CardTitle>
            <CardDescription>Centralize solicitações e melhore a satisfação do cliente.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Gerencie tickets, chat online e FAQ em uma plataforma simples e intuitiva.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href="/">Começar</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
