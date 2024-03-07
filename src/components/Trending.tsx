import polygon from "../assets/Polygon 2.png";
import useTrendingAPI from "../hooks/useTrendingAPI";
interface Coin {
  item: {
    small: string;
    name: String;
    symbol: String;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

const Trending = () => {
  const { data } = useTrendingAPI(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-section-head mb-4">
          Trending Coins(24h)
        </h2>
        {data.map((el: Coin) => (
          <div className="flex justify-between  mb-4">
            <div className="flex gap-2 items-center">
              <div>
                <img src={el.item.small} width={35} height={35} alt="image" />
              </div>
              <h3 className="text-lg text-nav-primary font-medium">
                {el.item.name}
                <span className="ml-1">({el.item.symbol})</span>
              </h3>
            </div>
            <div className="bg-[#EBF9F4] grid grid-flow-col items-center justify-center w-28 gap-x-1 text-[#14B079] rounded-lg">
              <img src={polygon} />
              <p className=" text-md ">
                {el.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
