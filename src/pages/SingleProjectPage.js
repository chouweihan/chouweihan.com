import React from "react";
import { useParams, useHistory } from "react-router-dom";

const SingleProjectPage = () => {
  const { id } = useParams();
  return <div>{id}t</div>;
};

export default SingleProjectPage;
