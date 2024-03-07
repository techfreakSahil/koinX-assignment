import { useEffect, useState } from "react";

interface Data {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}
const useDataAPI = (url: RequestInfo | URL) => {
  const [data, setData] = useState<Data>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData?.bitcoin);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useDataAPI;
