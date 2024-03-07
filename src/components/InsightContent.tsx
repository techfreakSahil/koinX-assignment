import Info from "../assets/Frame.png";
import polygon from "../assets/Polygon 2.png";

const InsightContent = () => {
  return (
    <section className="bg-[#ffff] rounded-lg mt-3 shadow-lg">
      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-section-head text-xl font-bold">Performance</h2>
        <div className="flex justify-between items-center gap-2">
          <div>
            <div className="text-sm text-gray-700 font-normal">Today's Low</div>
            <div className=" text-gray-700 font-bold">46,930.22</div>
          </div>
          <div className="relative  h-2 rounded-full items-center bg-gradient-to-r from-[#FF4949] from-20% via-[#FF4E11] via-30% to-[#11EB68] to-90%  w-[65%]">
            <div className="absolute flex flex-col items-center text-center top-2 right-1">
              <img src={polygon} color="black" />
              <p className="text-sm font-bold">$48,637.83</p>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-700 font-normal">
              Today's High
            </div>
            <div className=" text-gray-700 font-bold">49,343.83</div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div>
            <div className="text-sm text-gray-700 font-normal">52W Low</div>
            <div className=" text-gray-700 font-bold">16,930.22</div>
          </div>
          <div className="flex  justify-center h-2 rounded-full items-center bg-gradient-to-r from-[#FF4949] from-20% via-[#FF4E11] via-30% to-[#11EB68] to-90%  w-[65%]"></div>
          <div>
            <div className="text-sm text-gray-700 font-normal">52W High</div>
            <div className=" text-gray-700 font-bold">49,743.83</div>
          </div>
        </div>
        <div>
          <div className="flex gap-1 text-gray-700 text-md font-semibold">
            Fundamentals <img width={26} height={20} src={Info} alt="info" />
          </div>

          <div className="sm:grid-cols-1 md:grid-cols-1 grid grid-cols-2 mt-2 gap-x-[4rem] gap-y-[1rem] font-medium">
            <div>
              <div className="flex justify-between items-center">
                <p className=" text-[#768396]">Bitcoin Price</p>
                <p className="text-[#111827]">$16,815.46</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">Market Cap</p>
                <p className="text-[#111827]">$323,507,290,047</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">24h Low / 24h High</p>
                <p className="text-[#111827]">$16,382.07 / $18,874.12</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">Market Cap Dominance</p>
                <p className="text-[#111827]">38.343%</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">7d Low / 7d High</p>
                <p className="text-[#111827]">$16,382.07 / $18,874.12</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">Volume / Market Cap</p>
                <p className="text-[#111827]">0.071B</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">Trading Volume</p>
                <p className="text-[#111827]">$23,249,202,782</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">All-Time High</p>
                <p className="text-sm flex flex-col justify-end items-end">
                  <p className="text-[#111827]">
                    $69,044.77 <span className="text-red-500">-75.6%</span>
                  </p>
                  <span className="text-xs ">Nov 10, 2021 (about 1 year)</span>
                </p>
              </div>
              <div className="w-full h-[1px] bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">Market Cap Rank</p>
                <p className="text-[#111827]">#1</p>
              </div>
              <div className="w-full h-[1px] mt-3 bg-slate-300"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-[#768396]">All-Time Low</p>
                <p className="text-sm flex flex-col justify-end items-end">
                  <p className="text-[#111827]">
                    $67.81 <span className="text-green-500">+24729.1%</span>
                  </p>
                  <span className="text-xs ">Jul 06, 2013 (over 9 years)</span>
                </p>
              </div>
              <div className="w-full h-[1px]  bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightContent;
