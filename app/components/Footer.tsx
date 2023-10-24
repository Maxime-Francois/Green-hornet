import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        boxShadow: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
      }}
    >
      <footer className="bg-white dark:bg-gray-900 mt-8">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center gap-2">
                <Image
                  alt="logo"
                  className=" md:block cursor-pointer "
                  height="60"
                  width="60"
                  src="/images/hornet-logo.svg"
                />

                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Green hornet cbd
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-md font-semibold text-b-900 uppercase dark:text-white">
                  Nous contacter
                </h2>
                <ul className="text-b-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a
                      href="mailto: green-hornet@gmail.com"
                      className="hover:text-green-500"
                    >
                      green-hornet@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:0768602888" className="hover:text-green-500">
                      07 68 60 28 88
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-b-900 uppercase dark:text-white">
                  Menu
                </h2>
                <ul className="text-b-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a
                      href="/products?category=Fleurs"
                      className="hover:text-green-500"
                    >
                      Fleurs
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/products?category=Résines"
                      className="hover:text-green-500"
                    >
                      Résines
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/products?category=Huiles"
                      className="hover:text-green-500"
                    >
                      Huiles
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/products?category=Accessoires"
                      className="hover:text-green-500"
                    >
                      Accessoires
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-b-900 uppercase dark:text-white">
                  Infos pratiques
                </h2>
                <ul className="text-b-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <a href="/mentions" className="hover:text-green-500">
                      Mentions légales
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/politique" className="hover:text-green-500">
                      Politique de confidentialité
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/livraison" className="hover:text-green-500">
                      Livraison et paiement
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:text-green-500">
                Green hornet™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-green-500 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-500 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  />
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer