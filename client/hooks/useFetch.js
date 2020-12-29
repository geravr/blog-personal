import { useEffect, useState } from "react";

const useFetch = (endpoint, initialParams = {}) => {
  /*************** States ***************/
  const [params, updateParams] = useState(initialParams)
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  /*************** Variables ***************/
  const baseURL = process.env.NEXT_STATIC_HOSTNAME_API;

  // const queryString = Object.keys(params)
  // .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
  // .join('&')
  
  /*************** Functions ***************/
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURL}${endpoint}`);
      setData(await response.json());
      setHasError(false);
      setErrorMessage("");
    } catch (error) {
      setHasError(true);
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isLoading, hasError, errorMessage, updateParams };
};

export default useFetch;
