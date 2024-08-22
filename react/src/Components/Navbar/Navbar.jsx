import Logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./Darkmode";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Top Seller",
    link: "/#",
  },
  {
    name: "New Arrivals",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md w-full bg-white dark:bg-gray-900 duration-200 relative z-40">
      <div className="container py-3 md:py-0 ">
        <div className="flex justify-between items-center ">
          {/* Logo Section  */}
          <div>
            <a
              href="#"
              className="flex items-center text-2xl sm:text-3xl gap-2"
            >
              <img src={Logo} alt="" className="w-10" />
              <span className="font-bold">BeatBuds</span>
            </a>
          </div>

          {/* Menu Section  */}
          <div className="flex items-center justify-center gap-2 lg:gap-8">
            <ul className="hidden md:flex items-center gap-4">
              {Menus.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* Simple Dropdown Menu  */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex h-[72px] items-center gap-[2px]">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                {/* Dropdown Menu  */}
                <div className="absolute -left-9 z-[9999] hidden w-[150px] group-hover:block bg-white dark:bg-gray-800 dark:text-white p-2 shadow-md rounded-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.link}
                          className="inline-block w-[full] rounded-md p-2 hover:bg-primary/20"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            {/* Cart Section  */}
            <button
              className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full "
              onClick={() => alert("Cart is empty")}
            >
              <FaCartShopping className="text-xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
