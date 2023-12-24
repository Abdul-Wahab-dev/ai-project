import Image from "next/image";
import FramerDiv from "@/app/(components)/framermotion/divblock";
const Footer = () => {
  return (
    <div className="w-full bg-water py-10 relative overflow-hidden">
      <FramerDiv delay={0.25}>
        <div className="custom_container mx-auto overflow-hidden">
          <div className="flex justify-between text-slate-800 flex-col lg:flex-row  gap-5">
            <div className="logo-section w-[100%] sm:w-[70%] lg:w-[30%]">
              <h1 className="text-lg font-bold">LOGO</h1>
              <div className="w-[100%]">
                <p className="text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicia asjdai
                  doiajdn aois9ad iaocpa?
                </p>
              </div>
            </div>
            <div className="links-section flex flex-col  lg:flex-row gap-5 lg:gap-14 xl:gap-14 items-start pb-5">
              <div className="flex-1 flex  w-full justify-between sm:justify-normal sm:gap-28 lg:gap-14 ">
                <div className="flex gap-5">
                  <div>
                    <h4 className="text-lg font-bold mb-5">Company</h4>
                    <ul className="flex flex-col">
                      <li> About</li>
                      <li> Contact us</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-5  ">
                  <div>
                    <h4 className="text-lg font-bold mb-5">Useful links</h4>
                    <ul className="flex flex-col">
                      <li> About</li>
                      <li> About</li>
                      <li> About</li>

                      <li> Contact us</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex  w-full justify-between sm:flex-row flex-col gap-5 sm:justify-normal sm:gap-28 lg:gap-14 ">
                <div className="flex gap-5  ">
                  <div>
                    <h4 className="text-lg font-bold mb-5">Legal</h4>
                    <ul className="flex flex-col">
                      <li> About</li>
                      <li> Contact us</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-5  ">
                  <ul className="flex flex-col gap-4 md:flex-row lg:flex-col">
                    <li className="flex gap-3 items-center ">
                      <div className="w-[40px] h-[40px] bg-white flex items-center justify-center shadow-lg rounded-md">
                        <Image
                          src={"/assests/index/icons/email.png"}
                          width={23}
                          height={60}
                          alt="ai-icon"
                        />
                      </div>
                      <div className="text-slate-800 leading-tight">
                        <p className="font-semibold text-sm">Email</p>
                        <p className="text-sm">abdulwahabdev0@gmail.com</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="w-[40px] h-[40px] bg-white flex items-center justify-center shadow-lg rounded-md">
                        <Image
                          src={"/assests/index/icons/telephone.png"}
                          width={20}
                          height={60}
                          alt="ai-icon"
                        />
                      </div>
                      <div className="text-slate-800 leading-tight">
                        <p className="font-semibold text-sm">Phone</p>
                        <p className="text-sm">+923096171080</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-center">
                      <div className="w-[40px] h-[40px] bg-white flex items-center justify-center shadow-lg rounded-md border-gray-400">
                        <Image
                          src={"/assests/index/icons/location.png"}
                          width={23}
                          height={60}
                          alt="ai-icon"
                        />
                      </div>
                      <div className="text-slate-800 leading-tight">
                        <p className="font-semibold text-sm">Address</p>
                        <p className="text-sm">Lahore , Pakistan</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FramerDiv>
    </div>
  );
};

export default Footer;
