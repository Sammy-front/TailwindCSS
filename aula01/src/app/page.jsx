import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto bg-red-500 px-2 py-8">
        <div className="bg-white">
          <h2 className="text-base ms-4 bg-amber-700">Volta PUDIM.COM.BR</h2>
          <p className="text-xs"> texto minusculo </p>
          <p className="text-sm text-right"> texto pequeno </p>
          <p className="text-base text-center"> texto normal </p>
          <p className="text-lg"> texto maior </p>
          <p className="text-xl text-cyan-600"> texto grande </p>
          <p className="text-2xl">
            texto <span className="font-bold"> muito </span>  grande
          </p>
        </div>
      </div>


      <h2>Testando cores</h2>
      <div className="bg-blue-600 hover:bg-[#FF45]/50 w-96 h-96"></div>
      <div className="bg-[var(--color-error)] hover:bg-[#FF45]/50 w-auto h-96"></div>


      <section className="container mx-auto">
        <h2 className="text-5xl font-bold text-red-500">
          Aprendendo Flex no TailwindCSS
        </h2>

        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="h-10 w-10 bg-blue-400 rounded-xl"></div>
          <div className="h-14 w-10 bg-blue-400 rounded-xl"></div>
          <div className="h-10 w-10 bg-blue-400 rounded-xl"></div>
          <div className="h-14 w-10 bg-blue-400 rounded-xl"></div>
        </div>


        <h2 className="text-5xl font-bold text-red-500">
          Aprendendo GRID no TailwindCSS
        </h2>

        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="h-10 w-auto bg-blue-400 rounded-xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded-xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded-xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded-xl"></div>
          <div className="h-10 w-auto bg-blue-400 rounded-xl md:col-span-2"></div>
        </div>

        <div className="container mx-auto">
          <h2 className="text-lg md:text-xl lg:text-3xl">Titulo muito bom</h2>
            <p className="text-base md:text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum sint error quia repellat! Itaque minima atque nulla impedit dolores cupiditate repellat quam reprehenderit eligendi nesciunt, beatae et aperiam fugit!</p>
        </div>

        <button className="bg-red-400 hover:bg-red-600 active:bg-green-400 text-withe font-bold">CLIQUE ME</button>
        <button className="bg-primary">teste</button>
      </section>
    </>
  );
}

// Maneiras de definir codigo
// .container.mx-auto>h2.text-2xl      <- começa como DIV

//  section.container.mx-auto>h2.text-5xl.font-bold.text-red-500       <- Basta começar com qualquer tag

// div.flex.flex-row.gap-2>div.h-10.w-10.bg-blue-400.rounded-xl*4    <- Multiplicar o mesmo elemento

// Maneiras de definir espaçamentos
// px-2  Por Rem     ==     py-[20px]  Por Pixel     ==    py-[calc(100svh-20px)] Por Cálculo

{/* 
  <p className="text-xs"> texto minusculo </p>
  <p className="text-sm"> texto pequeno </p>
  <p className="text-base"> texto normal </p>
  <p className="text-lg"> texto maior </p>
  <p className="text-xl"> texto grande </p>
  <p className="text-2xl">
    Texto <span className="font-bold"> muito </span>  grande
  </p> 
  className="text-3xl
  className="text-4xl
  className="text-5xl
  className="text-6xl
  className="text-7xl
  className="text-8xl
  className="text-9xl
*/}

// Maneiras de definir cores
{/* <div className="bg-blue-600/50 w-96 h-96"></div> */ }
// bg-blue-600/50  Transparência
// bg-blue-600     Sem Transparência
// bg-blue-600 hover:bg-blue-600/50  Ao passar o mouse

// Maneira de definir funções pelo Global CSS
// bg-[var(--color-error)]

// Maneira de definir Width e Height
// w-96 h-96  Por Rem
// w-[400px] h-[400px]  Por Pixel
// w-1/2 h-1/2  Por Fração (1/2, 1/3, 1/4, 1/5, 1/6, 1/12)


// Base sobre Flex e Grid
// flex para alinhmaento de distribuição linear (uma dimensão)
// grid para layout estruturado em colunas e linhas (duas dimensões)


// Maneira de definir Flexbox
// flex flex-row 
// flex flex-col

// Maneira de definir Grid
// grid gap-2 grid-cols-2 



// Maneira de definir responsividade para diferentes tamanhos de tela
// md:grid-cols-2  A partir de 768px (médio)
// lg:grid-cols-3  A partir de 1024px (grande)
// xl:grid-cols-4  A partir de 1280px (extra grande)
// 2xl:grid-cols-5 A partir de 1536px (duplo extra grande)

// Brack-point




