import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

export default function HeaderBase() {
    return (
        <header className="bg-white w-auto h-11 justify-center items-center grid grid-cols-13">
            
            <div className="col-span-1 grid ml-5 grid-cols-2 justify-center items-center">
                <img src="./public/logo/Grammarly_logo.png" alt="" className=""/>
            </div>

            <div className="col-span-9 ml-27 grid-cols-5 container mx-auto grid">
                <Menu as="div" className="relative inline-block">
                    <MenuButton>
                        Why Grammarly
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>

                    <MenuItems>
                        <div className="">
                            <MenuItem>
                                <a href="">TESTE</a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>


                <Menu>
                    <MenuButton>
                        For Work
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>

                    <MenuItems>
                        <div className="">
                            <MenuItem>
                                <a href="">TESTE</a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>


                <Menu>
                    <MenuButton>
                        For Education
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>

                    <MenuItems>
                        <div className="">
                            <MenuItem>
                                <a href="">TESTE</a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>


                <Menu>
                    <MenuButton>
                        Compare Plans
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>

                    <MenuItems>
                        <div className="">
                            <MenuItem>
                                <a href="">TESTE</a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>


                <Menu>
                    <MenuButton>
                        Tools & Guides
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>

                    <MenuItems>
                        <div className="">
                            <MenuItem>
                                <a href="">TESTE</a>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </div>

            <div className="col-span-3 ml-27 grid-cols-2 container mx-auto grid">
                <button className="bg-green-800 cursor-pointer rounded-lg w-35 h-9 text-white justify-center items-center"></button>
                <button className="bg-green-800 cursor-pointer rounded-lg w-35 h-9 text-white justify-center items-center"></button>
            </div>
        </header>
    )
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <div className="w-auto h-[7svh] justify-center items-center bg-white grid  grid-cols-13 ">

//         <div className="col-span-1 grid ml-5 grid-cols-2 justify-center items-center">
//           <img className="w-15 h-15" src="../img/logo.png" alt="logo" />
//           <p className="text-preto text-xl"><span className=" font-bold">grammarly</span> </p>
//         </div>

//         <div className="col-span-9 ml-27 grid-cols-5 container mx-auto grid">
//           <p className="text-preto hover:text-gray-400  cursor-pointer">Why Grammarly <span className="font-bold">⌵</span></p>
//           <p className="text-preto hover:text-gray-400  cursor-pointer"> For Work <span className="font-bold">⌵</span></p>
//           <p className="text-preto hover:text-gray-400  cursor-pointer"> For Education <span className="font-bold">⌵</span></p>
//           <p className="text-preto hover:text-gray-400  cursor-pointer">Compare Plans <span className="font-bold">⌵</span></p>
//           <p className="text-preto hover:text-gray-400  cursor-pointer">Tools & Guides <span className="font-bold">⌵</span></p>
//         </div>

//         <div className=" col-span-3 ml-26 grid-cols-2 grid justify-center items-center">
//           <p className="text-preto"><span className=" font-bold">My Grammarly</span> </p>
//           <button className="bg-green-800 cursor-pointer rounded-lg w-35 h-9 text-white justify-center items-center hover:bg-green-900 hover:w-36 hover:h-10"><span className="font-bold">Start a free Trial</span></button>
//         </div>

//       </div>

//       <div className="w-auto h-[6svh]  items-center mb-auto grid-cols-7 bg-gray-100 grid ">

//         <div className=" ml-15">
//           <p className="text-preto text-base"><span className=" font-bold">Business</span> </p>
//         </div>

//         <div className="col-span-3 mr-40 grid-cols-4   grid">
//           <p className="text-preto hover:text-gray-400 cursor-pointer">Pricing</p>
//           <p className="text-preto hover:text-gray-400  cursor-pointer">Solucions <span className="font-bold">⌵</span></p>
//           <p className="text-preto  hover:text-gray-400  cursor-pointer">Learn</p>
//           <p className="text-preto hover:text-gray-400  cursor-pointer">Security</p>
//         </div>

//       </div>


//       <div className="grid items-center  justify-center mt-20">
//         <div className=" w-400 h-160 grid-cols-2  grid">

//           <div className=" w-200 h-160 col-span-1  grid justify-center ">

//             <div className="items-center grid justify-center ml-50 mt-20"><p className="text-white text-5xl"><span className="font-bold">AI Your Business Can Run With</span></p></div>

//             <div className=" w-150 h-50 ml-50 text-left">
//               <p className="text-white text-2xl ">Grammarly Business combines AI communication assistance with the knowledge of your entire organization to achieve results. Experience work with the intelligence you need,when you need it, where you're already working.</p>

//             </div>


//             <div className="ml-50 mb-20">
//               <button className="bg-white w-40 h-12 rounded-lg cursor-pointer hover:bg-gray-400 hover:w-41 hover:h-13">
//                 <p className="text-black "><span className="font-bold">Start a Free Trial</span></p>

//               </button>
//             </div>
//           </div>




//           <div className=" w-200 h-160 items-center grid  justify-center">
//             <div className="mt-20">
//               <img src="./img/avt.png" alt="" />
//             </div>
//           </div>

//         </div>


//       </div>

//       <div className="h-70 w-auto grid items-center justify-center bg-gray-800 mt-30">

//         <div className=" grid col-span-2   grid-cols-2">


//           <div className=" h-70 w-130 items-center  grid ">
//             <div className="mt-10">
//               <p className="text-base"><span className="font-bold">Grammarly Business</span></p>
//               <p className="text-sm">Improve your team's communication with artificial intelligence.</p>
//             </div>
//             <div className="mt-35">
//               <p className="text-sm"><span className="font-bold">© 2025 Grammarly, Inc. All rights reserved</span></p>
//             </div>
//           </div>




//           <div className=" h-70 w-130  ">

//           <div className="mt-18 ml-10 grid col-span-2 grid-cols-5">
//             <p className="text-base"><span className="font-bold">Siga-nos:</span></p>
//             <p className="text-sm hover:text-gray-500 cursor-pointer">LinkedIn</p>
//             <p className="text-sm hover:text-gray-500 cursor-pointer">Twitter</p>
//             <p className="text-sm hover:text-gray-500 cursor-pointer">Faceboock</p>
//           </div>

//           <div className="mt-20 ml-10 grid  grid-cols-5">
//             <p className="text-base hover:text-gray-500 cursor-pointer">Sobre nós</p>
//             <p className="text-base hover:text-gray-500 cursor-pointer">Recursos</p>
//             <p className="text-base hover:text-gray-500 cursor-pointer">Preços</p>
//             <p className="text-base hover:text-gray-500 cursor-pointer">Suporte</p>
//             <p className="text-base hover:text-gray-500 cursor-pointer">Política de Privacidade</p>
//           </div>


//           </div>

//         </div>
//       </div>




//     </>
//   );
// }
