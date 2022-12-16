import { useState } from "react";

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="">
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
                <h1 className="text-3xl font-bold text-yellow-500">Sergey Skorokhod</h1>
                <ul className="hidden md:flex">
                    <li className="p-4">About</li>
                    <li className="p-4">Experience</li>
                    <li className="p-4">Projects</li>
                    <li className="p-4">Contacts</li>
                </ul>
                <div className="block md:hidden hover:text-[#00df9a]">
                </div>
                <div onClick={handleNav}
                     className={
                         "fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700 md:hidden " +
                         (nav ? "left-0" : "left-[-100%]")
                     }
                >
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-8">
                        DataWAVE.
                    </h1>
                    <ul className="p-4 uppercase">
                        <li className="p-4 border-b border-gray-600">Home</li>
                        <li className="p-4 border-b border-gray-600">Company</li>
                        <li className="p-4 border-b border-gray-600">Resources</li>
                        <li className="p-4 border-b border-gray-600">About</li>
                        <li className="p-4">Contacts</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;