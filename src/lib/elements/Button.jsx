import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className="bg-sky-700 hover:bg-sky-900 transition-colors text-white rounded-md p-3 select-none"
    >
      {props.children}
    </button>
  );
};

export default Button;
