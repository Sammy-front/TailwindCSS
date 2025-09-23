import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = ({
  title = "Fale Conosco",
  description = "Entre em contato com nossa equipe de suporte e tire suas dúvidas sobre nossa plataforma SaaS.",
  
  emailLabel = "E-mail",
  emailDescription = "Respondemos todas as mensagens em até 24h.",
  email = "suporte@zenith.com",
  
  officeLabel = "Escritório",
  officeDescription = "Se preferir, visite nossa sede para uma conversa.",
  officeAddress = "Av. Central, 1000 - São Paulo, SP, 01000-000",
  
  phoneLabel = "Telefone",
  phoneDescription = "Atendimento disponível de Seg. a Sex., das 9h às 18h.",
  phone = "+55 (11) 99999-0000",
  
  chatLabel = "Chat ao Vivo",
  chatDescription = "Fale em tempo real com nossa equipe de suporte.",
  chatLink = "Iniciar Chat",
}) => {
    return (
        <section className="container mx-auto flex flex-col items-center bg-background pb-24">
            <div className="container">
                <div className="mb-14">
                    <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
                        {title}
                    </h1>
                    <p className="text-muted-foreground max-w-xl text-lg">
                        {description}
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-muted rounded-lg p-6">
                        <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                            <Mail className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
                        <p className="text-muted-foreground mb-3">{emailDescription}</p>
                        <a
                            href={`mailto:${email}`}
                            className="font-semibold hover:underline"
                        >
                            {email}
                        </a>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                        <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                            <MapPin className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
                        <p className="text-muted-foreground mb-3">{officeDescription}</p>
                        <a href="#" className="font-semibold hover:underline">
                            {officeAddress}
                        </a>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                        <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                            <Phone className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
                        <p className="text-muted-foreground mb-3">{phoneDescription}</p>
                        <a href={`tel:${phone}`} className="font-semibold hover:underline">
                            {phone}
                        </a>
                    </div>
                    <div className="bg-muted rounded-lg p-6">
                        <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
                            <MessageCircle className="h-6 w-auto" />
                        </span>
                        <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
                        <p className="text-muted-foreground mb-3">{chatDescription}</p>
                        <a href="#" className="font-semibold hover:underline">
                            {chatLink}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
