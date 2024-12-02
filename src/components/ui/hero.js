import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Button from "./button";
const Hero = () => {
  return (
    <section className="  md:flex  justify-between  ">
      <div className=" md:w-[50%] w-[100%]">
        <Image src="/Hut.png" width={"50"} height={"50"} alt="camp" />
        <h1 className="text-3xl text-black font-semibold     md:min-w-[50%] mt-5">
          {" "}
          Lorem ipsum camp Area
        </h1>
        <p className=" mt-3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </p>
        <div className=" flex  items-center">
          {[0, 1, 2, 3].map((id) => (
            <FaStar key={id} className="text-yellow-300" />
          ))}
          <p>198K Excellent Review</p>
          <br></br>
        </div>
        <Button
          text={"Download App"}
          cssClass={"bg-green-500 px-3 py-2 rounded-3xl mt-4"}
        />
        <span className=" flex gap-2  items-center cursor-pointer">
          <Image src={"/play.svg"} width={30} height={30} alt="map" />
          <p> How we Works</p>
        </span>
      </div>
      <div className=" md:w-[50%] w-[100%] mt-4 md:mt-0  relative p-4 border border-red-500">
        <Image src={"/hero-bg.svg"} width={800} height={500} />

        <div className=" w-[200px] h-[150px] border  rounded-xl border-red-500 absolute top-0 bg-black p-2">
          <p className="text-xl  text-white font-semibold">
            Location :<span className=" font-medium">Toranto</span>
          </p>
          <p className="text-xl  text-white font-semibold">
            Distance :<span className=" font-medium">128 miles</span>
          </p>
          <p className="text-xl  text-white font-semibold">
            Elevation :<span className=" font-medium">148 ° </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
