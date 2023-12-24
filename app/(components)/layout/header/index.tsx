import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-winter-wizard py-4">
      <div className="custom_container mx-auto text-slate-800">
        {/* Logo and links */}
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4 font-semibold">
            <h2>Logo</h2>
            <ul className="text-lg">
              <li className="cursor-pointer">Tools</li>
            </ul>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-4 text-lg font-semibold">
              <li className="cursor-pointer">Login</li>
              <li className="cursor-pointer">Sign up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
