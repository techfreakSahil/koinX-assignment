import InsightContent from "./InsightContent";

const Insight = () => {
  return (
    <div className="m-3">
      <div className="">
        <div className="flex items-center gap-3 text-gray-700 text-lg font-medium">
          <h2 className="cursor-pointer pb-2 border-[2px] border-r-0 border-l-0 border-t-0 border-section-highlight">
            Overview
          </h2>
          <div className="cursor-pointer pb-2 ">Fundamentals</div>
          <div className="cursor-pointer pb-2 ">News Insights</div>
          <div className="cursor-pointer pb-2 ">Sentiments</div>
          <div className="cursor-pointer pb-2 ">Team</div>
          <div className="cursor-pointer pb-2 ">Technicals</div>
          <div className="cursor-pointer pb-2 ">Tokenomics</div>
        </div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <InsightContent />
      </div>
    </div>
  );
};

export default Insight;
