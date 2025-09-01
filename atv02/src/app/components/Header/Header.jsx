import { Menu, MenuButton } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

export default function Header() {
    return (
        <header className="w-full flex flex-col">
            <nav className="bg-white flex flex-col border-1 border-solid border-[#dedede] md:flex-row justify-center items-center gap-5 w-auto h-16">

                <div className="w-100 flex items-end justify-center ml-8 py-2">
                    <img src="./logo/Grammarly_logo.png" alt="" className="h-8" />
                </div>

                <Menu className="w-115 flex items-center justify-center">
                    <MenuButton className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Why Grammarly
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                    </MenuButton>
                </Menu>

                <Menu className="w-115 flex items-center justify-center">
                    <MenuButton className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        For Work
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                    </MenuButton>
                </Menu>

                <Menu className="w-115 flex items-center justify-center">
                    <MenuButton className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        For Educaiton
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                    </MenuButton>
                </Menu>

                <Menu className="w-115 flex items-center justify-center">
                    <MenuButton className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Compare Plans
                    </MenuButton>
                </Menu>

                <Menu className="w-115 flex items-center justify-center">
                    <MenuButton className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Tools & Guides
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                    </MenuButton>
                </Menu>


                <div className="w-300 flex items-center justify-end gap-5 pr-8">
                    <button className="text-black py-2 px-3">
                        <a className="w-full font-bold text-base" href="#">My Grammarly</a>
                    </button>
                    <button className="bg-emerald-700 text-white py-2 px-3 rounded-md hover:bg-emerald-800 transition-colors duration-200 shadow-md">
                        <a className="w-full font-bold" href="#">Start a Free Trial</a>
                    </button>
                </div>
            </nav>

            <section className="bg-white items- flex flex-col border-1 border-solid border-[#dedede] md:flex-row justify items-center gap-5 w-auto h-13">

                <button className="text-black py-2 px-6">
                    <a className="w-full font-bold text-lg" href="#">Buniness</a>
                </button>

                <div className="w- flex items-center justify-center">
                    <a className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" href="#">
                        Pricing
                    </a>
                </div>

                <Menu className="w- flex items-center justify-center">
                    <MenuButton className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Solutions
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-black" />
                    </MenuButton>
                </Menu>

                <div className="w- flex items-center justify-center">
                    <a className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" href="#">
                        Learn
                    </a>
                </div>

                <div className="w flex items-center justify-center">
                    <a className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" href="#">
                        Security
                    </a>
                </div>

            </section>
        </header>
    )
}