import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ title, id }) => {
  return (
    <div className="border-slate-900 border p-2 mb-2 rounded-md cursor-pointer hover:bg-slate-900 hover:text-white transition-all">
      <Link className="block" to={`/todo/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default TodoList;
