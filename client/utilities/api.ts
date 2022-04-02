import axios from "axios";
import { useState, useEffect } from "react";

export const useGetData = (url: any) => {
  const [data, setData] = useState({});

  const getData = (url: any) => {
    axios(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData(url);
  }, []);

  return data;
};

const fetchData = (method: any, { url, data }: any) =>
  new Promise<void>((resolve, reject) => {
    axios({ method, url, data })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

const api = {
  post: ({ url, data }: any) => fetchData("POST", { url, data }),
  delete: ({ url, data }: any) => fetchData("DELETE", { url, data }),
  put: ({ url, data }: any) => fetchData("PUT", { url, data }),
};

export default api;
