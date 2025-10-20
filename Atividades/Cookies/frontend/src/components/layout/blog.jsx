import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Supondo que você tenha o componente Badge do shadcn
import { Card } from "@/components/ui/card";

const Blog = ({
  heading = "Central de Chamados",
  description = "Registre e acompanhe solicitações de suporte, dúvidas ou problemas técnicos de forma rápida e organizada.",
  posts = [
    {
      id: "post-1",
      title:
        "Como Abrir um Novo Chamado de Suporte",
      summary:
        "Aprenda o passo a passo para registrar um novo chamado e garantir um atendimento mais ágil e eficiente pela nossa equipe técnica.",
      author: "Equipe de Suporte",
      published: "15 Out 2025",
      url: "#",
      image: "https://www.tiresolve.com/wp-content/uploads/2021/02/ilustracao-de-social-midia-conceito_53876-17828-1.jpg",
      tags: ["Atendimento", "Suporte Técnico"],
    },
    {
      id: "post-2",
      title: "Dicas para Descrever seu Problema com Clareza",
      summary:
        "Veja como detalhar corretamente o seu chamado para facilitar o diagnóstico e agilizar a resolução do seu pedido.",
      author: "Central de Atendimento",
      published: "18 Out 2025",
      url: "#",
      image: "https://images.ctfassets.net/63bmaubptoky/JBmzcXeQjvfKwWAWpCZtdu5nq9iaBpteG4EdRc0DxMQ/8adb43095c085d450eb07fe5ceb40339/sistema-chamados-open-source-BR-Capterra-Header-1.png",
      tags: ["Boas Práticas", "Suporte"],
    },
  ]
  ,
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