import icon1 from "../assets/Frame 1116601921.png";
import icon2 from "../assets/Frame 1116601921 (2).png";
import Info from "../assets/Frame.png";
import button from "../assets/SVG.png";

const Sentiments = () => {
  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <h2 className="text-xl font-bold text-section-head mb-2">Sentiments</h2>
        <h3 className="flex  items-center gap-1 text-md text-gray-600 font-semibold">
          Key Events{" "}
          <span>
            <img src={Info} alt="info" />
          </span>{" "}
        </h3>
        <div className="my-2 overflow-x-hidden relative ">
          <div className="flex  gap-5 overflow-x-auto">
            <div className="grid  gap-5 grid-flow-col  p-3 rounded-lg  bg-section-backgroundCard">
              <img src={icon1} />
              <div className="flex flex-col">
                <h2 className="text-sm text-section-card font-medium">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h2>
                <p className="tex-xs text-gray-600 text-left">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
            <div className="grid gap-5 grid-flow-col p-3  rounded-lg  bg-section-backgroundCard">
              <img src={icon2} />
              <div className="flex flex-col">
                <h2 className="text-sm text-section-card font-medium">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h2>
                <p className="tex-xs text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-16">
              <img src={button} />
            </div>
          </div>
        </div>
        <h3 className="flex my-4 items-center gap-1 text-md text-gray-600 font-semibold">
          Analyst Estimates{" "}
          <span>
            <img src={Info} alt="info" />
          </span>{" "}
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-5">
          <div className="sm:col-span-1">
            <div className="w-[125px] text-[2rem] font-medium text-green-400 h-[120px] flex justify-center items-center rounded-full bg-section-backgroundCard">
              76 <span className="text-sm">%</span>
            </div>
          </div>
          <div className="sm:col-span-1 md:col-span-3 flex flex-col p-2 gap-3">
            <div className="flex items-center gap-4">
              <p className="text-gray-600 font-medium">Buy</p>
              <div className="w-[76%] h-[5px] bg-green-700 rounded-md"></div>
              <span className="text-md font-medium text-gray-600">76%</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-600 font-medium">Hold</p>
              <div className="w-[8%] h-[5px] bg-gray-700 rounded-md"></div>
              <span className="text-md font-medium text-gray-600">8%</span>
            </div>
            <div className="flex  items-center gap-3">
              <p className="text-gray-600 font-medium">Sold</p>
              <div className="w-[16%] h-[5px] bg-red-600 rounded-md"></div>
              <span className="text-md font-medium text-gray-600">16%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiments;
