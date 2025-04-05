// import React, { useState } from "react";
// import { Container, Logo, LogoutBtn } from "../index";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();

//   const navItems = [
//     { name: "Home", slug: "/", active: authStatus },
//     { name: "Login", slug: "/login", active: !authStatus },
//     { name: "Signup", slug: "/signup", active: !authStatus },
//     { name: "doctors", slug: "/doctors", active: authStatus },
//     { name: "chat-bot", slug: "/chat-bot", active: authStatus },
//     { name: "insurance", slug: "/insurance", active: authStatus },
//     { name: "About", slug: "/about", active: authStatus },
//   ];

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="py-3 shadow bg-blue-800 fixed w-full z-50">
//       <Container>
//         <nav className="flex items-center justify-between">
//           <div className="mr-4">
//             <Link to="/">
//               <Logo width="70px" />
//             </Link>
//           </div>

//           <ul className="hidden md:flex gap-4 items-center ml-auto">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className="inline-block px-4 py-2 text-white hover:bg-blue-100 hover:text-black rounded-full cursor-pointer"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>

//           <div className="md:hidden text-white text-2xl ml-auto">
//             <button onClick={toggleMenu}>
//               {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
//             </button>
//           </div>
//         </nav>

//         {menuOpen && (
//           <div className="md:hidden mt-3 bg-white shadow rounded-lg p-4 space-y-2">
//             {navItems.map((item) =>
//               item.active ? (
//                 <div key={item.name}>
//                   <button
//                     onClick={() => {
//                       navigate(item.slug);
//                       setMenuOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100 rounded"
//                   >
//                     {item.name}
//                   </button>
//                 </div>
//               ) : null
//             )}
//             {authStatus && (
//               <div>
//                 <LogoutBtn />
//               </div>
//             )}
//           </div>
//         )}
//       </Container>
//     </header>
//   );
// };

// export default Header;

// --------------------------------

import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "Doctors", slug: "/doctors", active: authStatus },
    { name: "ChatBot", slug: "/chat-bot", active: authStatus },
    { name: "Insurance", slug: "/insurance", active: authStatus },
    { name: "About", slug: "/about", active: authStatus },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="py-3 shadow-md backdrop-blur-sm bg-blue-900/80 fixed w-full z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="hidden md:flex gap-6 items-center ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 text-white font-medium hover:text-blue-200 hover:underline transition duration-200 rounded-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          <div className="md:hidden text-white text-2xl ml-auto">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg p-4 space-y-2 animate-slide-down">
            {navItems.map((item) =>
              item.active ? (
                <div key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 font-medium text-gray-700 hover:bg-blue-100 rounded transition"
                  >
                    {item.name}
                  </button>
                </div>
              ) : null
            )}
            {authStatus && (
              <div>
                <LogoutBtn />
              </div>
            )}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
