import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
export default function HeaderBase() {
    return (
        <header className="bg-white w-auto h-11 justify-center items-center grid grid-cols-13">
            
            <div className="col-span-1 grid ml-5 grid-cols-2 justify-center items-center">
                <img src="./public/logo/Grammarly_logo.png" alt="" className=""/>
            </div>

            <div className="col-span-9 ml-27 grid-cols-5 container mx-auto grid">
                <Menu>
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

