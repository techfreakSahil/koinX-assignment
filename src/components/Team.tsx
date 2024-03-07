import role1 from "../assets/image 209.png";
import role2 from "../assets/image 209 (1).png";
import role3 from "../assets/image 209 (2).png";
const Team = () => {
  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-section-head mb-2">Team</h2>
        <p className="mb-4 text-[#3E424A] font-medium text-md ">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
        <div className="w-full md:grid-flow-col grid grid-flow-row rounded-lg gap-6 bg-section-backgroundCard p-4 mb-4">
          <div className=" flex flex-col items-center justify-center">
            <div className="">
              <img className="rounded-lg" src={role1} />
            </div>
            <h4 className=" text-gray-900 font-semibold text-md">John Smith</h4>
            <p className="text-xs text-gray-600 font-medium">
              Designation here
            </p>
          </div>
          <div>
            <p className="text-md text-gray-900 font-regular">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
        <div className="w-full md:grid-flow-col grid-flow-row grid  rounded-lg gap-6 bg-section-backgroundCard p-4 mb-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img className="rounded-lg" src={role2} />
            </div>
            <h4 className=" text-gray-900 font-semibold text-md">John Smith</h4>
            <p className="text-xs text-gray-600 font-medium">
              Designation here
            </p>
          </div>
          <div>
            <p className="text-md text-gray-900 font-regular">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
        <div className="w-full md:grid-flow-col grid-flow-row grid  rounded-lg gap-6 bg-section-backgroundCard p-4 mb-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img className="rounded-lg" src={role3} />
            </div>
            <h4 className=" text-gray-900 font-semibold text-md">
              Elina Wiliams
            </h4>
            <p className="text-xs text-gray-600 font-medium">
              Designation here
            </p>
          </div>
          <div>
            <p className="text-md text-gray-900 font-regular">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
