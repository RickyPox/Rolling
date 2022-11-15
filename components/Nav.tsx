import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
{name: "Home", href: "/"},
{name: "Sobre nós", href: "/#sobre"},
{name: "Produtos", href: "#"},
{name: "Contactos", href: "#"},
];

function classNames(...classes: String[]) {
return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
return (
<Disclosure as="nav">
    {({ open }) => (
    <>
    <div className="px-2 sm:px-6 lg:py-[10px] lg:px-[200px] ">
        <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-[#203B4D]">
                <span className="sr-only">Open main menu</span>
                {open ? (
                <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                ) : ( 
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
            </Disclosure.Button> 
            </div>
            <div className="flex w-full items-center justify-center sm:items-start sm:justify-start sm:w-auto">
                    <img
                    className="w-[100px]"
                    src="/RollingLogo.svg"
                    alt="Rolling Logo"
                    />
                </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            "text-black",
                            "px-3 py-2 font-medium text-[14px] hover:bg-[#FAF9F6] rounded-[5px] transition-all duration-200"
                        )}
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Disclosure.Panel className="sm:hidden bg-[#203B4D]">
        <div className="space-y-1 px-2 pt-2 pb-3   ">
            {navigation.map((item) => (
            <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                    "text-white",
                "block px-3 py-2 font-medium text-[14px]"
                )}

            >
                {item.name}
            </Disclosure.Button>
            ))}
        </div>
    </Disclosure.Panel>
    </>
    )}
</Disclosure>
);
}
