import logo from "../assets/Component 52.png";
import TradingViewWidget from "./TradingViewWidget";
import useDataAPI from "../hooks/useDataAPI";
const Hero = () => {
  const { data } = useDataAPI(
    " https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
  );
  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <div className="flex flex-col gap-3 ">
          {/* {Bitcoin Title} */}
          <div className="flex items-center gap-4">
            <div>
              <img src={logo} alt="bitcoin" />
            </div>
            <div className="flex gap-2">
              <h1 className="text-section-head font-bold sm:text-lg md:text-2xl">
                Bitcoin
              </h1>
              <div className="text-xs text-gray-400">BTC</div>
            </div>
            <div className="bg-section-rank text-white rounded-md p-1">
              Rank #1
            </div>
          </div>
          {/* {Price Chart USD or INR} */}
          <div className="flex items-baseline gap-4 text-section-head font-bold text-xl">
            <div className="flex flex-col">
              <div>
                {data?.usd?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
              <div className="text-sm">
                {data?.inr?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </div>
            </div>
            <div className="text-section-inc bg-section-incbg py-1 px-2 rounded-md font-medium  text-sm">
              {data?.usd_24h_change?.toFixed(2)}%
            </div>
            <div className="text-gray-500 text-sm font-medium">(24H)</div>
          </div>
          {/* {Line} */}
          <div className="w-full h-[1px] bg-slate-300"></div>
          {/* {Chart Heading} */}
          <div className="flex justify-between items-center">
            <div className="text-section-head font-bold text-lg mb-2">
              Bitcoin Price Chart (USD)
            </div>
            <div className="flex gap-4 font-medium text-sm text-slate-600">
              <div>1H</div>
              <div>24H</div>
              <div>7D</div>
              <div>1M</div>
              <div>3M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>ALL</div>
            </div>
          </div>
          {/* TradingWidgetChart */}
          <div className="h-[350px] w-full">
            <TradingViewWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
