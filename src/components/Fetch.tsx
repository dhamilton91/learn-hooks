import React from "react";
import useFetch from "./useFetch";

const Fetch = () => {
  const { data, loading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts/42"
  });

  if (error) {
    return <div>Error!</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <>
        <div>{data.title}</div>
        <div>{data.body}</div>
      </>
    );
  }

  return <div />;
};

export default Fetch;
