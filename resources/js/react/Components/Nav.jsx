import React from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/favicon.ico'
import { Link } from 'react-router-dom'

const Nav = () => {
    const navegacionSinToken = [
        { name: 'Encuentra eventos', href: '/buscadoreventos' },
        { name: 'Contacto', href: '/ayuda' },
        { name: 'Iniciar sesión', href: '/login' },
        { name: 'Iniciar sesión', href: '/login' },
        { name: 'Registrarse', href: '/register' }
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const token = localStorage.getItem('user-token')

    return (
        <Disclosure as="nav" className="bg-gray-700">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-full px-2 lg:flex lg:justify-center ">
                        <div className="relative flex h-28 items-center justify-between ">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex mx-auto items-center justify-center md:items-stretch md:justify-start xl:flex-row lg:mt-0 flex-col">
                                <div className='flex gap-4 m-auto pt-0 '>
                                    <Link className='flex flex-shrink-0 items-center ' to="/">
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="Eventia"
                                        />
                                        <span className="ml-3 self-center text-2xl font-bold text-blue-500 whitespace-nowrap">
                                            EVENTIA
                                        </span>
                                    </Link>


                                    <div className="relative md:block mx-2 hidden">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-colorFuente "
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                            <span className="sr-only">Search icon</span>
                                        </div>
                                        <input
                                            type="text"
                                            id="search-navbar"
                                            className="block w-full md:w-[300px]
                            p-2 ps-10 text-sm text-colorFuente border border-[#eeedf2] 
                            rounded-2xl bg-[#f8f7fa] focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Buscar eventos"
                                            onChange={(e) => cambiarNombreBusqueda(e)}
                                            onKeyDown={(e) => buscarEventos(e)}
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:ml-6 md:block pt-">
                                    <div className="flex items-center justify-center gap-4">
                                        {!token ? (
                                            navegacionSinToken.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={`text-white hover:text-blue-500 rounded-md px-3 font-medium flex items-center ${item.name === 'Registrarse' && "block py-2 px-3 rounded-2xl md:rounded-md  md:text-white md:bg-blue-500 md:hover:bg-blue-700 md:hover:text-white text-colorFuente hover:bg-[#f8f7fa] hover:text-blue-500"}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))) : (
                                            <div></div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={`${!token && 'hidden'} absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </MenuButton>
                                    </div>
                                    <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </MenuItem>
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="xs:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <div className="relative md:block mx-2">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-colorFuente "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full md:w-[300px]
                            p-2 ps-10 text-sm text-colorFuente border border-[#eeedf2] 
                            rounded-2xl bg-[#f8f7fa] focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Buscar eventos"
                                    onChange={(e) => cambiarNombreBusqueda(e)}
                                    onKeyDown={(e) => buscarEventos(e)}
                                />
                            </div>
                            {navegacionSinToken.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}

export default Nav