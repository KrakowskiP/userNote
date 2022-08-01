import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControler = new AbortController();

    fetch(url, { signal: abortControler.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("error appears");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error.message);
        }
      });
    return () => abortControler.abort();
  }, [url]);

  return { data, error };
}
