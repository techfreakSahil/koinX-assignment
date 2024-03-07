import { useEffect, useState } from "react";

interface Coin {
  item: {
    small: string;
    symbol: String;
    data: {
      sparkline: string;
      price: String;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

const useTrendingAPI = (url: RequestInfo | URL) => {
  const [data, setData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
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
        setData(jsonData.coins.slice(0, 3));
        const jsonNewData = jsonData.coins.filter(
          (el: Coin) => el.item.symbol !== "COQ"
        );
        setTrendingData(jsonNewData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError, trendingData };
};

export default useTrendingAPI;
