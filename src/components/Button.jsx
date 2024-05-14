import React from "react";

const Button = () => {
  return (
    <>
      <div className="mt-8 border-t-2 border-gray-400-800 pt-5 md:mt-0 md:border-none md:pt-0">
        <ul className="font-bold">
          <li className="md:px-5">
            <button>Login</button>
          </li>
          <li className="md:px-5">
            <button className="signup px-8 py-3 rounded-full text-white ">Sign Up</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Button;
