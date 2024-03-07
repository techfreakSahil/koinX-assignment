import vector from "../assets/Frame (1).png";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

const KoinX = () => {
  return (
    <div className="bg-[#0052FE] m-2 shadow-md rounded-lg">
      <div className="p-5 flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="text-[#ffffff] text-2xl mb-2 font-bold ">
          Get Started with KoinX <br /> for FREE
        </h2>
        <p className="text-center font-medium text-md text-[#F2F2F2] mb-2">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <div className="mb-2">
          <img src={vector} />
        </div>
        <Button
          content={"Get Started for FREE"}
          textColor={"#0F1629"}
          backgroundColor={"#ffffff"}
          icon={<FaArrowRight />}
        />
      </div>
    </div>
  );
};

export default KoinX;
