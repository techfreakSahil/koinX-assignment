import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../assets/Rectangle 11947.png";
import img2 from "../assets/Rectangle 11947 (2).png";

const AboutBitcoin = () => {
  return (
    <section className="bg-[#ffff] m-2 shadow-md rounded-lg">
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-section-head mb-2">
          About Bitcoin
        </h2>
        <div>
          <h3 className="text-lg font-bold text-section-head mb-2">
            What is Bitcoin?
          </h3>
          <p className="mb-2 text-[#3E424A] font-medium text-md ">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
          <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
          <h3 className="text-lg font-bold text-section-head mb-2">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="mb-4 text-[#3E424A] font-medium text-md">
            Lorem ipsum dolor sit amet, consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam si et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus.
          </p>
          <p className="mb-4 text-[#3E424A] font-medium text-md">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus pharetra
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat, id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis pharetra auctor enim convallInt
            eger peltesquesa enim convallint eger pelte.
          </p>
          <p className="mb-2 text-[#3E424A] font-medium text-md">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis quis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti lacus laoreet
            congue ipsum ferras amet dui. Purus ultricies tincidunt volutpat in
            eget. Ullamcorper dui.
          </p>
          <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-section-head">
          Already Holding Bitcoins?
        </h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 mb-2 overflow-x-auto">
          <div className="flex bg-[#79F1A4] min-w-[200px] gap-7 p-4 rounded-xl ">
            <div className="flex justify-center">
              <img src={img1} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-xl text-[#ffffff]">
                Calculate your
                <br /> profits
              </div>
              <Button
                content={"Check Now"}
                textColor={"#0F1629"}
                backgroundColor={"#ffffff"}
                icon={<FaArrowRight />}
              />
            </div>
          </div>
          <div className="flex bg-[#FF9865] min-w-[200px] gap-7 p-4 rounded-xl ">
            <div className="flex justify-center">
              <img src={img2} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-xl text-[#ffffff]">
                Calculate your
                <br /> taxes
              </div>
              <Button
                content={"Check Now"}
                textColor={"#0F1629"}
                backgroundColor={"#ffffff"}
                icon={<FaArrowRight />}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
        <p className="mb-2 text-[#3E424A] font-medium text-md">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis quis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti lacus laoreet congue
          ipsum ferras amet dui. Purus ultricies tincidunt volutpat in eget.
          Ullamcorper dui.
        </p>
      </div>
    </section>
  );
};

export default AboutBitcoin;
