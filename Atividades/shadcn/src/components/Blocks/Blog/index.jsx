import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";


const Blog = ({
  heading = "Artigos e Insights",
  description = "Explore estratégias, práticas e novidades do universo SaaS. De gestão de projetos a automação de marketing, descubra como otimizar processos e impulsionar resultados.",
  posts = [
    {
      id: "post-1",
      title: "Começando com Gerenciamento de Projetos",
      summary:
        "Descubra como organizar suas tarefas, criar quadros Kanban e acompanhar prazos para aumentar a produtividade da sua equipe.",
      label: "Projetos",
      author: "Equipe Zenith",
      published: "1 Jan 2024",
      url: "#",
      image: "/img/gestaoprojetos.jpg",
    },
    {
      id: "post-2",
      title: "Automação de Marketing na Prática",
      summary:
        "Aprenda a criar campanhas automatizadas, enviar e-mails segmentados e acompanhar métricas em tempo real para alcançar mais clientes.",
      label: "Marketing",
      author: "Equipe Zenith",
      published: "1 Jan 2024",
      url: "#",
      image: "/img/automaçãomarketing.jpg",
    },
    {
      id: "post-3",
      title: "Análises Avançadas para Decisões Inteligentes",
      summary:
        "Veja como usar relatórios automáticos e métricas detalhadas para identificar oportunidades e impulsionar o crescimento do seu negócio.",
      label: "Análises",
      author: "Equipe Zenith",
      published: "1 Jan 2024",
      url: "#",
      image: "/img/AnálisesInteligentes.jpeg",
    },
  ],
}) => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center p-3 gap-16 lg:p-0 lg:px-16">

        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover rounded-xl object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Leia mais
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };
