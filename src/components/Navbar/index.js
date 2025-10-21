import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="container w-full mx-auto h-[90px] flex items-center justify-end">
      <div className="flex items-center justify-end">
        <div
          className={
            "w-full flex justify-end mr-4 space-x-4  ease-linear"
          }
        >
          <Link
            href={"#about-section"}
            scroll={false}
            className="sm:text-xl hover:text-rose-800 transition-colors"
          >
            About
          </Link>
          <Link
            href={"#skills-section"}
            scroll={false}
            className="sm:text-xl hover:text-rose-600 transition-colors"
          >
            Skills
          </Link>
          <Link
            href={"#projects-section"}
            scroll={false}
            className="sm:text-xl hover:text-rose-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            href={"#contacts-section"}
            scroll={false}
            className="sm:text-xl hover:text-rose-600 transition-colors"
          >
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
