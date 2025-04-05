// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../Logo";

// const Footer = () => {
//   return (
//     <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
//       <div className="relative z-10 mx-auto max-w-7xl px-4">
//         <div className="-m-6 flex flex-wrap">
//           <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//             <div className="flex h-full flex-col justify-between">
//               <div className="mb-4 inline-flex items-center">
//                 <Logo width="100px" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">
//                   &copy; Copyright 2023. All Rights Reserved by DevUI.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Company
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Features
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Pricing
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Affiliate Program
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Press Kit
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Support
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Account
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Help
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Customer Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//             <div className="h-full">
//               <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                 Legals
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Terms &amp; Conditions
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                     to="/"
//                   >
//                     Licensing
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <Logo width="120px" />
          <p className="mt-3 text-gray-300 text-sm">
            Your AI-powered healthcare assistant, providing trusted medical
            guidance.
          </p>
          <p className="mt-3 text-gray-400 text-xs">
            &copy; 2025 AI Healthcare. All Rights Reserved.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Healthcare AI</h3>
          <ul>
            <li className="mb-2">
              <Link to="/features" className="hover:underline">
                Features
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/how-it-works" className="hover:underline">
                How It Works
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/research" className="hover:underline">
                AI Research
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul>
            <li className="mb-2">
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/api-docs" className="hover:underline">
                API Documentation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/support" className="hover:underline">
                Customer Support
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/community" className="hover:underline">
                Community Forum
              </Link>
            </li>
            <li>
              <Link to="/report-issue" className="hover:underline">
                Report an Issue
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
