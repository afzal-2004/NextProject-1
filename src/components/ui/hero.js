import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaMapMarked } from "react-icons/fa";
import Button from "./button";
import Styles from "./ui.css";
const Hero = () => {
  return (
    <>
      <section className="  md:flex  justify-between  ">
        <div className=" md:w-[50%] w-[100%]">
          <Image src="/Hut.png" width={"50"} height={"50"} alt="camp" />
          <h1 className="text-3xl text-black font-semibold     md:min-w-[50%] mt-5">
            {" "}
            Lorem ipsum camp Area
          </h1>
          <p className=" mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
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
        <div
          className={` md:w-[50%] w-[100%] mt-4 md:mt-0  relative p-4 border border-red-500
          ${Styles.scrollbar_hidden}`}
        >
          <Image src={"/hero-bg.svg"} width={800} height={500} />

          <div className=" w-[200px] h-[150px] border  rounded-xl border-red-500 absolute top-0  right-[40%] bg-black p-2">
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
      <section className=" mt-5  relative">
        <div className=" relative flex overflow-x-scroll overflow-y-hidden  z-20 ">
          <div className="sm:w-[800px] md:w-[1000px] w-[600px] flex-shrink-0">
            <Image src="/img-1.png" width={1000} height={400} alt="camp" />
          </div>
          <div className="sm:w-[800px] md:w-[1000px] w-[600px] flex-shrink-0">
            <Image src="/img-2.png" width={1000} height={400} alt="camp" />
          </div>

          <div className="absolute top-5 left-[5%] text-white">
            <FaMapMarked className="text-[40px]" />
          </div>
          <div className=" absolute top-[40%] text-white left-16">
            <h2 className="text-[25px] font-semibold">Lorem ipsum camp Area</h2>
            <p className="text-[20px]">UttaraKhand ,India</p>
            <div className="flex">
              <Image
                src={"/person-1.png"}
                width={50}
                height={50}
                alt="camp-1"
                className=""
              />
              <Image
                src={"/person-2.png"}
                width={50}
                height={50}
                alt="camp-1"
                className="-ml-3"
              />
              <Image
                src={"/person-3.png"}
                width={50}
                height={50}
                alt="camp-1"
                className="-ml-3"
              />
              <Image
                src={"/person-4.png"}
                width={50}
                height={50}
                alt="camp-1"
                className="-ml-3"
              />
            </div>
          </div>
        </div>
        <div
          className=" z-40  absolute top-[80%]  
          sm:left-[700px] left-[200px] border border-red-500 
          w-[400px] p-5 rounded-2xl   text-center
            h-[200px]  text-white bg-green-600
         "
        >
          <h1 className="text-[27px] font-bold">
            Felling lost Not Knowning the way ?
          </h1>
          <p className="text-[20px]">
            {" "}
            If you use this site regularly and would like{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
