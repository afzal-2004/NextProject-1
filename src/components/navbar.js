import Image from "next/image";
import Button from "./ui/button";
const Navbar = () => {
  return (
    <>
      <nav className=" border border-red-500 p-2 flex justify-between items-center  cursor-pointer">
        <Image src="/hilink-logo.svg" width="72" height="20" alt="Logo" />
        <ul className=" flex  gap-2  md:gap-3 xl:gap-5 2xl:gap-7    ">
          <li>Home</li>
          <li> Contact</li>
          <li>How-Hilink-Works?</li>
          <li>Service</li>
          <li>Pricing </li>
        </ul>
        <Button
          text="Sign Up"
          cssClass="bg-black text-white px-4 py-3 rounded-2xl"
        />
      </nav>
    </>
  );
};

export default Navbar;
