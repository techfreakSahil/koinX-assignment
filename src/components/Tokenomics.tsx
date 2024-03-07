const Tokenomics = () => {
  const tokenDistribution = [
    { label: "Crowdsale investors", value: 80 },
    { label: "Foundation", value: 20 },
  ];
  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-section-head mb-4">
          Tokenomics
        </h3>
        <h4 className="text-lg font-bold text-section-head mb-4">
          Initial Distribution
        </h4>
        <div className="flex gap-6 items-center mb-4">
          <div>
            <div
              className="w-28  h-28 rounded-full flex justify-center items-center"
              style={{
                backgroundImage:
                  "conic-gradient(rgb(59, 130, 246)  70%, rgb(234, 179, 8) 30%)",
              }}
            >
              <div className="w-16 h-16 rounded-full bg-[#ffff]"></div>
            </div>
          </div>
          <div className="text-center">
            <ul className="list-none text-sm">
              {tokenDistribution.map((item, index) => (
                <li key={index} className="mb-2 flex items-center">
                  <span
                    className={`inline-block w-4 h-4 rounded-full mr-2 ${
                      index === 0 ? "bg-blue-500" : "bg-yellow-500"
                    }`}
                  ></span>
                  <span className="text-[#202020] font-medium text-md">
                    {item.label}: <span>{item.value}%</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mb-4 text-[#3E424A] font-medium text-md">
          Lorem ipsum dolor sit amet consectetur. Cras aliquam tristique
          pharetra vestibulum nunc dignissim vel consectetur. Leo etiam iaculis
          vivendum amet enim sit dapib us amet. A metus orci augue fusce
          phasellus ac suscipit fusce adipiscing. Volutpat ultricies odio
          sodales massa vestibulum urna felis augue. Gravida aliquam fermentum
          augue eu imperdiet vivamus nisl aliquam laoreet. Vel ipsum dui mattis
          ests arcu m vetis dslm eget in at curabitur sem pasiere fap is vitae.
          Sed lorem an man id eget arceu it. Vulputate ipsum ac udet odio nisl
          eu ac risus.
        </p>
      </div>
    </section>
  );
};

export default Tokenomics;
