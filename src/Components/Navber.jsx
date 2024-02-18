import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import "../Style/Navber.css";
const Navber = () => {
  const navber = (
    <>
      <li className="bg-gray-200   rounded  text-[18px] font-semibold  hover:bg-gradient-to-tl from-[#1E242E] to-[#424c5e] hover:text-gray-200">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "" : isPending ? "pending" : ""
          }
        >
          <AiOutlineHome />
          Home
        </NavLink>
      </li>
      <li className="bg-gray-200   rounded  text-[18px] font-semibold  hover:bg-gradient-to-tl from-[#1E242E] to-[#424c5e] hover:text-gray-200">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "" : isPending ? "pending" : ""
          }
        >
          <IoPersonOutline />
          About
        </NavLink>
      </li>
      <li className="bg-gray-200   rounded  text-[18px] font-semibold  hover:bg-gradient-to-tl from-[#1E242E] to-[#424c5e] hover:text-gray-200">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "" : isPending ? "pending" : ""
          }
        >
          <HiOutlineNewspaper />
          Resume
        </NavLink>
      </li>
      <li className="bg-gray-200   rounded  text-[18px] font-semibold  hover:bg-gradient-to-tl from-[#1E242E] to-[#424c5e] hover:text-gray-200">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "" : isPending ? "pending" : ""
          }
        >
          <BsPersonWorkspace />
          Work
        </NavLink>
      </li>
      <li className="bg-gray-200   rounded  text-[18px] font-semibold  hover:bg-gradient-to-tl from-[#1E242E] to-[#424c5e] hover:text-gray-200">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "" : isPending ? "pending" : ""
          }
        >
          <RiContactsLine />
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-gray-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
            >
              {navber}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Frisk</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{navber}</ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
