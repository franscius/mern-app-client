import { useEffect, useState } from "react";
import axios from "axios";

// Backend || Server ==> URL Address
const api = axios.create({ baseURL: 'https://gold-elegant-bison.cyclic.cloud/api' });

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { res} = await api.get(endPoint);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [endPoint]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const { res } = await api.get(endPoint);
      setData(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }

  return { data, loading, error, reFetch };
};

export default useFetch;