import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Supondo que você tenha o componente Badge do shadcn
import { Card } from "@/components/ui/card";

const Blog = ({
  heading = "From the Blog",
  description = "Descubra os insights e tutoriais mais recentes sobre desenvolvimento web moderno, design de UI e arquitetura orientada a componentes.",
  posts = [
    {
      id: "post-1",
      title:
        "Construindo UIs Modernas: Um Mergulho Profundo em Shadcn e Componentes React",
      summary:
        "Junte-se a nós para uma exploração aprofundada da construção de interfaces de usuário modernas usando shadcn/ui e React.",
      author: "Sarah Chen",
      published: "15 Fev 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      tags: ["Web Design", "UI Development"],
    },
    {
      id: "post-2",
      title: "Dominando o Tailwind CSS: Do Básico às Técnicas Avançadas",
      summary:
        "Descubra como aproveitar todo o poder do Tailwind CSS para criar sites bonitos e responsivos com código limpo e de fácil manutenção.",
      author: "Michael Park",
      published: "22 Fev 2024",
      url: "https://shadcnblocks.com",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
      tags: ["Web Design", "CSS"],
    },
  ],
}) => {
  return (
    // ESTILO: Fundo sutil para a seção
    <section className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-pretty text-3xl font-semibold tracking-tight md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl md:text-lg">
            {description}
          </p>
        </div>

        {/* Grid de Posts */}
        <div className="mt-16 grid gap-16 lg:grid-cols-1">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              // ESTILO: Removido o espaçamento central para ocupar a largura total no grid
              className="border-0 bg-transparent shadow-none"
            >
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                
                {/* Imagem do Post */}
                {/* ESTILO: Layout alternado usando a ordem (order) do flex/grid */}
                <div className={`order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <a href={post.url} target="_blank" className="block group">
                    <div className="aspect-video overflow-hidden rounded-lg border">
                      <img
                        src={post.image}
                        alt={post.title}
                        // ESTILO: Efeito de zoom na imagem ao passar o mouse (hover)
                        className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </a>
                </div>

                {/* Conteúdo do Post */}
                {/* ESTILO: Layout alternado usando a ordem (order) do flex/grid */}
                <div className={`order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {/* ESTILO: Tags agora são "Badges" para maior destaque */}
                    {post.tags?.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-semibold tracking-tight lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-muted-foreground mt-4 text-base">
                    {post.summary}
                  </p>

                  <div className="mt-6 flex items-center space-x-4 text-sm">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <time className="text-muted-foreground">
                      {post.published}
                    </time>
                  </div>

                  {/* ESTILO: Adicionado 'group' para animar a seta no hover */}
                  <a
                    href={post.url}
                    target="_blank"
                    className="group mt-6 inline-flex items-center font-semibold hover:text-primary transition-colors"
                  >
                    <span>Read more</span>
                    {/* ESTILO: Seta se move para a direita no hover */}
                    <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog };