'use client';
import { useState } from "react";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      {/* NAVBAR */}
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./logo/Grammarly_logo.png" alt="Grammarly" className="h-8" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Menu>
            <MenuButton className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-700 transition">
              Why Grammarly
              <ChevronDownIcon className="h-4 w-4" />
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-700 transition">
              For Work
              <ChevronDownIcon className="h-4 w-4" />
            </MenuButton>
          </Menu>

          <Menu>
            <MenuButton className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-700 transition">
              For Education
              <ChevronDownIcon className="h-4 w-4" />
            </MenuButton>
          </Menu>

          <a href="#" className="font-medium text-gray-800 hover:text-emerald-700 transition">
            Compare Plans
          </a>

          <Menu>
            <MenuButton className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-700 transition">
              Tools & Guides
              <ChevronDownIcon className="h-4 w-4" />
            </MenuButton>
          </Menu>
        </div>

        {/* Botões */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="font-bold text-gray-800 hover:text-emerald-700">
            My Grammarly
          </a>
          <a
            href="#"
            className="rounded-md bg-emerald-700 px-4 py-2 font-bold text-white shadow-md transition hover:bg-emerald-800"
          >
            Start a Free Trial
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-800 border-t border-gray-200 bg-white">
          <a href="#" className="pt-4 hover:text-emerald-700">Why Grammarly</a>
          <a href="#" className="hover:text-emerald-700">For Work</a>
          <a href="#" className="hover:text-emerald-700">For Education</a>
          <a href="#" className="hover:text-emerald-700">Compare Plans</a>
          <a href="#" className="hover:text-emerald-700">Tools & Guides</a>

          <hr className="border-gray-200" />

          <a href="#" className="hover:text-emerald-700 font-bold">My Grammarly</a>
          <a
            href="#"
            className="rounded-md bg-emerald-700 px-4 py-2 text-center font-bold text-white shadow-md transition hover:bg-emerald-800"
          >
            Start a Free Trial
          </a>
        </div>
      )}

      {/* Subnav */}
      <section className="hidden md:flex justify-center gap-6 border-t border-gray-200 bg-white py-3">
        <a href="#" className="font-bold text-gray-800 hover:text-emerald-700">Business</a>
        <a href="#" className="text-gray-800 hover:text-emerald-700">Pricing</a>
        <a href="#" className="text-gray-800 hover:text-emerald-700">Solutions</a>
        <a href="#" className="text-gray-800 hover:text-emerald-700">Learn</a>
        <a href="#" className="text-gray-800 hover:text-emerald-700">Security</a>
      </section>
    </header>
  );
}
