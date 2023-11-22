import { useQuery } from "react-query"
import axios from "axios"
import { useEffect, useState } from "react"

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url)
  return response.data
}

export default function useCustomFetch<T = any>(url: string) {
  return useQuery<T>({
    queryKey: ['fetch-data', url],
    queryFn: () => fetchData<T>(url),
    retry: 5,
  })
}


export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const json = await response.data;
      setData(json);
    };
    fetchData();
  }, [url]);
  return { data };
};
