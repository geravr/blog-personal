import { useEffect, useState } from "react";
import axiosClient from "../config/axios";

// Ant Design
import { message } from "antd";

const useFetch = (url, method, content) => {
  /*************** States ***************/
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*************** Functions ***************/
  const onChangePagination = (page, pageSize) => {
    if (page) {
      setCurrentPage(page);
    }
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  /*************** Lifecycle ***************/
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (method === "get") {
          const response = await axiosClient.get(`${url}?page=${currentPage}&limit=${pageSize}`)
          setData(response.data.results);
          setCount(response.data.count);
        }
        if (method === "post" && content) {
          const response = await axiosClient.post(url, content)
          setResponse(response);
        }
        if (method === "put" && content) {
          const response = await axiosClient.put(url, content)
          setResponse(response);
        }
        if (method === "patch" && content) {
          const response = await axiosClient.patch(url, content)
          setResponse(response);
        }
        if (method === "delete") {
          const response = await axiosClient.delete(url)
          setResponse(response);
        }
      } catch (error) {
        console.log(typeof error);
        if (!error.response) {
          setError('Ocurrió un error durante la solicitud');
        } else {
          setError(`Error: ${error.response.status} ${error.response.statusText}`);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, currentPage, pageSize]);

  useEffect(() => { 
    error && (
      message.error(error)
    )
   }, [error])

  return { response, data, count, pageSize, isLoading, onChangePagination };
};

export default useFetch;
