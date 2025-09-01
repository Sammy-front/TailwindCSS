import Image from "next/image";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <section className="my-16 flex flex-col mx-auto container md:flex-row justify-center items-center gap-10 md: px-20">

        <div className="flex flex-col gap-14">
          <div>
            <h2 className="text-4xl text-cente font-extrabold">AI Your Business Can Run With</h2>
          </div>

          <div className="text-lg mx-6 text-justify">
            Grammarly Business combines AI communication assistance with the knowledge of your entire organization to achieve results. Experencie work with the intelligence you need, when you need it, where you're already working.
          </div>

          <div className="bg-white md:w-56 w-2/3 container mx-auto md:mx-0 rounded-lg font-bold flex items-center justify-center hover:bg-neutral-200 transition">
                        <a href="#" className="text-black px-6 py-4">Start a Free Trial</a>
                    </div>
        </div>

        <div>
          <img src="./logo/Quadro.png" alt="" className="w-100 h-100 mr-200"/>
        </div>

      </section>

      {/* 
      <section className="my-13 md:my-0 container mx-auto flex flex-col justify-center md:flex-row items-center">
                <div className="flex flex-col gap-16">
                    <div>
                        <h2 className="text-center font-extrabold text-3xl md:text-6xl">AI Your Business Can Run With</h2>
                    </div>

                    <div>
                        <p className="text-justify mx-6 text-lg md:text-xl">
                            Grammarly Business combines AI communication assistance with the knowledge of your entire organization to achieve results. Experencie work with the intelligence you need, when you need it, where you're already working.
                        </p>
                    </div>

                    <div className="bg-white md:w-56 w-2/3 container mx-auto md:mx-0 rounded-lg font-bold flex items-center justify-center hover:bg-neutral-200 transition">
                        <a href="#" className="text-black px-6 py-4">Start a Free Trial</a>
                    </div>
                </div>

                <div className="">
                    <img src="/dashboard.png" alt="foto dashboard" />
                </div>

            </section> */}

      <Footer />
    </>
  );
}

// import Image from "next/image";
