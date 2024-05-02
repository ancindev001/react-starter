import React from "react";
import { useParams } from "react-router-dom";
import useTodoDetail from "../../hooks/useTodoDetail";

const Index = () => {
  const params = useParams();
  if (!/([0-9])/g.test(params.id)) {
    return <>Error</>;
  }

  const { data, error, isLoading } = useTodoDetail(params.id);

  return <div>{isLoading ? "Loadinvg..." : data.title}</div>;
};

export default Index;
