import { Contact } from "@/components/Blocks/Contact/index";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/header.jsx";
import { Footer } from "@/components/Blocks/Footer";
import { Blog } from "@/components/Blocks/Blog";
import CardsHome from "@/screens/Home/index";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main - Cards */}
      <main className="flex-grow py-15">
        <Blog />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 py-20">
          <CardsHome />
        </div>
        <Contact />
      </main>

      <div className={"py-10"}>
        <Separator />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
