import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const defaultSections = [
  {
    title: "Produto",
    links: [
      { name: "Visão Geral", href: "#" },
      { name: "Planos e Preços", href: "#" },
      { name: "Integrações", href: "#" },
      { name: "Funcionalidades", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nós", href: "#" },
      { name: "Equipe", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carreiras", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Contato Comercial", href: "#" },
      { name: "API & Docs", href: "#" },
      { name: "Política de Privacidade", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Termos de Uso", href: "#" },
  { name: "Política de Privacidade", href: "#" },
];

const Footer = ({
  logo = {
    url: "https:/",
    src: "/img/athes.png",
    alt: "logo",
    title: "Zenith SaaS",
  },
  sections = defaultSections,
  description = "Soluções SaaS para gestão, automação e crescimento do seu negócio.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Zenith. Todos os direitos reservados.",
  legalLinks = defaultLegalLinks,
}) => {

    return (
        <section className="p-2 lg:p-0">
            <div className="container mx-auto">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    {/* Logo, textinho e Icons */}
                    <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                        {/* Logo */}
                        <div className="flex items-center gap-2 lg:justify-start">
                            <a href={logo.url}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className="h-8"
                                />
                            </a>
                            <h2 className="text-xl font-semibold">{logo.title}</h2>
                        </div>
                        <p className="text-muted-foreground max-w-[70%] text-sm">
                            {description}
                        </p>
                        {/* Social Icons */}
                        <ul className="text-muted-foreground flex items-center space-x-6">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="hover:text-primary font-medium">
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div className="grid grid-cols-2 justify-items-center w-full gap-6 md:grid-cols-3 lg:gap-20">
                        {sections.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 font-bold">{section.title}</h3>
                                <ul className="text-muted-foreground space-y-3 text-sm">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary font-medium"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">{copyright}</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-primary">
                                <a href={link.href}> {link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export { Footer };
