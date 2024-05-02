import React from "react";
import useTodos from "../../hooks/useTodos";
import TodoList from "../../lib/components/TodoList";

const Index = () => {
  const { error, isLoading, data } = useTodos();

  if (error) return <>Error</>;

  return (
    <div className="mt-5">
      {isLoading
        ? "LOADING"
        : data.map((data) => (
            <TodoList key={data.id} id={data.id} title={data.title} />
          ))}
    </div>
  );
};

export default Index;
