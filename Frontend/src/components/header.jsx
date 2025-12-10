import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="w-full shadow-sm border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between py-5 px-4">
        <h1 className="text-3xl font-bold text-[#151875] cursor-pointer">
          Hekto
        </h1>

        <ul className="flex items-center gap-8 text-[#151875] font-medium">
          <li className="hover:text-[#FB2E86] transition cursor-pointer relative group">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FB2E86] group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="hover:text-[#FB2E86] transition cursor-pointer">
            Pages
          </li>
          <li className="hover:text-[#FB2E86] transition cursor-pointer">
            Products
          </li>
          <li className="hover:text-[#FB2E86] transition cursor-pointer">
            Blog
          </li>
          <li className="hover:text-[#FB2E86] transition cursor-pointer">
            Shop
          </li>
          <li className="hover:text-[#FB2E86] transition cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="flex border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-48 outline-none text-sm"
          />
          <button className="bg-[#FB2E86] text-white px-4 text-2`xl flex justify-center items-center hover:bg-[#d81e6d] transition">
            <IoSearchOutline />
          </button>
        </div>
      </nav>
    </div>
  );
}
