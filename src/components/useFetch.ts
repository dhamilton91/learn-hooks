import { useState, useEffect } from "react";

interface Props {
  url: string;
}

const useFetch = ({ url }: Props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
    error
  };
};

export default useFetch;
