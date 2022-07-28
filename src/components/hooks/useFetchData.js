import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);

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
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        }
      });
    return () => abortControler.abort();
  }, [url]);

  return { data };
}
