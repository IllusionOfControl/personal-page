import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpened, setOpened] = useState(false);

  const handleBurgerMenu = () => setOpened(!isOpened);

  return (
    <nav className="absolute right-5 top-5 sm:right-20 sm:top-10">
      <div className="flex items-center justify-end">
        <div
          className={
            "w-full flex justify-end mr-4 space-x-4 transition-all duration-200 ease-linear" +
            (isOpened ? " opacity-100" : " opacity-0 translate-y-4")
          }
        >
          <Link
            href={"#about-section"}
            scroll={false}
            className="sm:text-2xl hover:text-rose-800"
          >
            About
          </Link>
          <Link
            href={"#skills-section"}
            scroll={false}
            className="sm:text-2xl hover:text-rose-600"
          >
            Skills
          </Link>
          <Link
            href={"#projects-section"}
            scroll={false}
            className="sm:text-2xl hover:text-rose-600"
          >
            Projects
          </Link>
          <Link
            href={"#contacts-section"}
            scroll={false}
            className="sm:text-2xl hover:text-rose-600"
          >
            Contacts
          </Link>
        </div>
        <div
          className="flex flex-col items-end justify-center cursor-pointer transition-all text-right"
          onClick={handleBurgerMenu}
        >
          <span
            className={
              "block w-8 h-0.5 bg-gray-300 duration-200 ease-linear" +
              (isOpened ? " mb-0" : " mb-2")
            }
          ></span>
          <span
            className={
              "block w-8 h-0.5 bg-gray-300 duration-200 ease-linear" +
              (isOpened ? " mb-0" : " mb-2")
            }
          ></span>
          <span
            className={
              "block w-3 h-0.5 bg-gray-300 duration-200 ease-linear" +
              (isOpened ? " opacity-0" : " opacity-100")
            }
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
