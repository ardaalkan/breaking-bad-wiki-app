import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] items-center bg-indigo-500 text-gray-50 flex content-center justify-evenly backdrop-blur-md hover:backdrop-blur-lg">
      <NavLink
        to="/"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        Home Page
      </NavLink>
      <NavLink
        to="characters"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        Characters
      </NavLink>
      <NavLink
        to="quotes"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        Quotes
      </NavLink>
      <NavLink
        to="episodes"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        Episodes
      </NavLink>
      <NavLink
        to="contact"
        className={(activeStyle) =>
          activeStyle.isActive
            ? "mr-12 text-black font-bold hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
            : "mr-12 text-white hover:bg-indigo-600 p-3 transition ease-in-out delay-75 rounded-md"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
