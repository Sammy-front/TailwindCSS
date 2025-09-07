import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Card from "./components/ui/Card.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <section className="my-16 flex flex-col-reverse md:flex-row items-center justify-center gap-10 container mx-auto px-6 md:px-20">

        {/* Texto */}
        <div className="flex flex-col gap-8 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold cursor-default leading-tight">
            AI Your Business Can <br /> Run With
          </h2>

          <p className="text-base md:text-lg cursor-default leading-relaxed">
            Grammarly Business combines AI communication assistance <br className="hidden md:block" />
            with the knowledge of your entire organization to achieve <br className="hidden md:block" />
            results. Experience work with the intelligence you need, <br className="hidden md:block" />
            when you need it, where you're already working.
          </p>

          <div className="bg-white md:w-56 w-full max-w-xs mx-auto md:mx-0 rounded-lg font-bold flex items-center justify-center hover:bg-neutral-200 transition">
            <a href="#" className="text-black px-6 py-4 block">Start a Free Trial</a>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="./logo/Quadro.png"
            alt="AI Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </section>

      <Card />

      <Footer />
    </>
  );
}
