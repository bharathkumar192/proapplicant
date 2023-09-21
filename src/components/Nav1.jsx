import { useRef } from "react";

const Nav = () => {
  const navref = useRef();
  const navref2 = useRef();
  const navref3 = useRef();
  const click=()=>{
    navref.current.classList.toggle("hidden")
    navref2.current.classList.toggle("md:block")
    navref3.current.classList.toggle("md:h-[230px]")
  }
  return (
    <nav className="flex md:block justify-start h-[99px] md:h-[150px]" ref={navref3}>
      <div className="flex w-full justify-start">
      <img
        src="https://proapplicant.com/wp-content/uploads/2023/07/Untitled-1080-%C3%97-1080-px-2160-%C3%97-1080-px-2160-%C3%97-800-px.svg"
        alt=""
        height={54.81}
        width={148}
      />
      <div className=" hidden justify-end ml-[50%] md:block mt-[2.1rem]">
      <div className="border-2 rounded-md p-[0.1rem] border-gray-700 cursor-pointer" onClick={click}>
      <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      </div>
      </div>
 
      <div className="flex pt-9 md:hidden">
        <ul className="flex px-4 text-[16px] ">
          <li className="mx-4">Home</li>
          <li className="mx-4">Services</li>
          <li className="mx-4">Tools</li>
        </ul>
      </div>
      <div className="pt-8 ml-[40%] flex md:hidden">
        <span className="mr-4 text-[16px]"><span className="font-semibold ">Credits Usage </span>: 3/10</span>
        <span className="text-[#CBFF1E] text-[16px] bg-gradient-to-r from-[#676767] to-[#1A0103] rounded-lg h-7 px-2 flex"><object data="/images/img_fire_green.svg" className="w-[0.78rem] mr-2"></object><div className="pt-[0.2rem]">Get Pro</div></span>
        <span className="text-[#5307B4] text-[16px] bg-transparent border-[3px] ml-4 border-gray-300 rounded-lg h-7 px-2 flex"><object data="/images/img_socials.svg" className="w-[0.78rem] mr-2"></object><div className="pt-[0.1rem]">Socials</div></span>
      </div>
      </div>
      <div className="hidden z-10 pt-2 bg-white-A701 absolute w-full" ref={navref}>
        <span className="divide-y-2 text-center z-30 ">
          <div className="text-[17px] mx-auto hover:bg-lime-300 py-2">Home</div>
          <div className="text-[17px] mx-auto hover:bg-lime-300 py-2">Services</div>
          <div className="text-[17px] mx-auto hover:bg-lime-300 py-2">Tools</div>
          </span>
      </div>
      <div className="hidden md:block pt-4" ref={navref2}>
        <span className="flex justify-center">
        <span className="text-[11px] mr-4 mt-1"><span className="font-semibold ">Credits Usage </span>: 3/10</span>
        <span className="text-[#CBFF1E] text-[11px] bg-gradient-to-r from-[#676767] to-[#1A0103] rounded-lg h-7 px-2 flex"><object data="/images/img_fire_green.svg" className="w-[0.78rem] mr-2 "></object><div className="pt-[0.3rem]">Get Pro</div></span>
        <span className="text-[#5307B4] text-[11px] bg-transparent border-[3px] ml-4 border-gray-300 rounded-lg h-7 px-2 flex"><object data="/images/img_socials.svg" className="w-[0.78rem] mr-2 "></object><div className="pt-[0.2rem]">Socials</div></span>
          </span>
      </div>
    </nav>
  );
};

export default Nav;
