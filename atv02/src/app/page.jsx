import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Card from "./components/ui/Card.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <section className="my-16 flex flex-col mx-auto container md:flex-row justify-center items-center gap-10 md: px-20">

        <div className="flex flex-col gap-14">
          <div>
            <h2 className="text-4xl text-cente font-extrabold cursor-default">AI Your Business Can <br />Run With</h2>
          </div>

          <div className="text-lg cursor-default">
            Grammarly Business combines AI communication assistance  <br />with the knowledge of your entire organization to achieve <br /> results. Experencie work with the intelligence you need, <br /> when you need it, where you're already working.
          </div>

          <div className="bg-white md:w-56 w-2/3 container mx-auto md:mx-0 rounded-lg font-bold flex items-center justify-center hover:bg-neutral-200 transition">
            <a href="#" className="text-black px-6 py-4">Start a Free Trial</a>
          </div>
        </div>

        <div>
          <img src="./logo/Quadro.png" alt="" className="w-150 h-120 mx-10" />
        </div>

      </section>
      <Card />

      <Footer />
    </>
  );
}
