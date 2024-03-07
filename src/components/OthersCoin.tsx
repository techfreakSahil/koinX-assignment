import useTrendingAPI from "../hooks/useTrendingAPI";
import polygon from "../assets/Polygon 2.png";

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
const OthersCoin = () => {
  const { trendingData } = useTrendingAPI(
    "https://api.coingecko.com/api/v3/search/trending"
  );

  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-section-head mb-4">
          You May Also Like
        </h2>
        <div dir="ltr" className="overflow-x-auto relative mb-4">
          <div className="scroll-ps-6 flex gap-4">
            {trendingData.map((el: Coin) => (
              <div className="border-[1px] border-gray-300 rounded-xl p-3 min-w-64">
                <div className="flex gap-2">
                  <img src={el.item.small} height={20} width={20} alt="coin" />
                  <h4>{el.item.symbol}</h4>
                  <div className="bg-[#EBF9F4] grid grid-flow-col items-center justify-center w-10 gap-x-1 text-[#14B079] rounded-lg">
                    <img src={polygon} />
                    <p className=" text-xs ">
                      {el.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <h2 className="text-[#171717] font-medium text-lg">
                    {el.item.data.price}
                  </h2>
                  <div>
                    <img src={el.item.data.sparkline} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-section-head mb-4">
          Trending Coins
        </h2>
        <div dir="ltr" className="overflow-x-auto relative mb-4">
          <div className="scroll-ps-6 flex gap-4">
            {trendingData.map((el: Coin) => (
              <div className="border-[1px] border-gray-300 rounded-xl p-3 min-w-64">
                <div className="flex gap-2">
                  <img src={el.item.small} height={20} width={20} alt="coin" />
                  <h4>{el.item.symbol}</h4>
                  <div className="bg-[#EBF9F4] grid grid-flow-col items-center justify-center w-10 gap-x-1 text-[#14B079] rounded-lg">
                    <img src={polygon} />
                    <p className=" text-xs ">
                      {el.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <h2 className="text-[#171717] font-medium text-lg">
                    {el.item.data.price}
                  </h2>
                  <div>
                    <img src={el.item.data.sparkline} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OthersCoin;
