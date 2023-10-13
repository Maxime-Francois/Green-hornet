'use client'


import React, { useState } from 'react';
import Image from "next/image"
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import {SlBasket} from 'react-icons/sl'
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLogin';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import CartCount from './CartCount';
import Categories from './Categories';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const router = useRouter;

const Navbar:React.FC<NavbarProps> = ({ 
  currentUser
}) => {
  console.log({ currentUser })
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownMobileOpen, setDropdownMobileOpen] = useState(false);
  const [isDropdownUserOpen, setDropdownUserOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false); 

  

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    const toggleMobileDropdown = () => {
    setDropdownMobileOpen(!isDropdownMobileOpen);
  };

   const toggleUserDropdown = () => {
    setDropdownUserOpen(!isDropdownUserOpen);
  };
    const toggleCart = () => {
      setCartOpen(!isCartOpen);
    };


  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image
                alt="logo"
                className="hidden md:block cursor-pointer"
                height="60"
                width="60"
                src="/images/hornet-logo.svg"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                GREEN HORNET CBD
              </span>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href={"/"}>
                  <div
                    className="block py-2 pl-3 pr-4 text-white bg-green-400 rounded md:bg-transparent md:text-green-400 md:p-0 md:dark:text-green-400 dark:bg-green-400 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Accueil
                  </div>
                </Link>
              </li>

              <li>
                <a
                  href="#services" // Replace "#" with the services page link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Fleurs CBD
                </a>
              </li>
              <li>
                <a
                  href="#pricing" // Replace "#" with the pricing page link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Résines CBD
                </a>
              </li>
              <li>
                <a
                  href="#contact" // Replace "#" with the contact page link
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Huiles CBD
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleMobileDropdown}
                >
                  Accessoires{" "}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className={`${
                    isDropdownMobileOpen ? "block" : "hidden"
                  } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#settings" // Replace "#" with the settings page link
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#earnings" // Replace "#" with the earnings page link
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#signout" // Replace "#" with the signout page link
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium  p-4 md:p-0  rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0FD531]-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <HiOutlineSearch size={25} color="black" />
              </li>

              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent relative ">
                <button
                  id="dropdownNavbarLinkUser"
                  data-dropdown-toggle="dropdownNavbarUser"
                  className="flex items-center justify-between w-full py-2 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleUserDropdown}
                >
                  <AiOutlineUser size={25} color="black" />{" "}
                </button>
                {/* Dropdown user menu */}
                <div
                  id="dropdownNavbarUser"
                  className={`${
                    isDropdownUserOpen ? "block" : "hidden"
                  } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute `}
                >
                  {currentUser ? (
                    <>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link href={"/orders"}>
                            <div
                              onClick={() => {}}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Mes Commandes
                            </div>
                          </Link>
                        </li>
                        <li>
                          <div
                            onClick={() => {}}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Détails du compte
                          </div>
                        </li>
                        <li>
                          <div
                            onClick={() => signOut()}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Se déconnecter
                          </div>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <div
                            onClick={loginModal.onOpen}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Connexion
                          </div>
                        </li>
                        <li>
                          <div
                            // Replace "#" with the settings page link
                            onClick={registerModal.onOpen}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Créer un compte
                          </div>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </li>

              <Link href={"/cart"}>
                <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <CartCount />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav><Categories/>
      
    </div>
  );
};

export default Navbar;