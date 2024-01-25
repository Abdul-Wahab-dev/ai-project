import Image from "next/image";
import FramerDiv from "@/app/(components)/framermotion/divblock";
const Footer = () => {
  return (
    <div>
      <div className="w-full bg-water py-10 relative overflow-hidden">
        <FramerDiv delay={0.25}>
          <div className="custom_container mx-auto overflow-hidden">
            <div className="flex justify-between text-slate-800 flex-col items-center gap-10">
              <div className="w-[100%]">
                <h1 className="text-lg font-bold">LOGO</h1>
                <p className="text-center mt-3 text-lg">
                  Empowering Digital Excellence for Free – Simplified.
                </p>
              </div>

              <ul className="flex flex-col md:flex-row gap-4 ">
                <li>
                  <a
                    href="mailto:abdulwahabdev0@gmail.com"
                    className="flex gap-3 items-center "
                  >
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
                  </a>
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

              {/* <div className="links-section flex flex-col  lg:flex-row gap-5 lg:gap-14 xl:gap-14 items-start pb-5">
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
              
            </div> */}
            </div>
          </div>
        </FramerDiv>
      </div>
      <div className="bg-winter-wizard p-5">
        <div className="custom_container mx-auto flex items-center justify-center text-gray-800">
          <p>Toolefy © 2023. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
