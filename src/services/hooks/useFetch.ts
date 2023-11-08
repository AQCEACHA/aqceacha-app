import { useQuery } from "react-query"
import axios from "axios"

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url)
  return response.data
}

export default function useCustomFetch<T = unknown>(url: string) {
  return useQuery<T>({
    queryKey: ['fetch-data', url],
    queryFn: () => fetchData<T>(url),
    retry: 5,
  })
}
