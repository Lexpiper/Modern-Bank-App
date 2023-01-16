import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] p-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount"
            className="animate-spin w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} "ml-2"`}>
            <span className="text-white">20%</span>{" "}
            <span className="text-secondary"> Discount</span> for {""}
            <span className="text-white">One month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins text-[53px] font-semibold  ss:text-[72px] text-[52] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" /> {""}
            <span className="text-gradient">Generation</span> {""}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className=" font-poppins font-semibold text-[54px] ss:text-[68px] text-[52] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div
      
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate__animated animate__fadeInRight animate__fast transition-all ease-in-out duration-300`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[5%] h-[5%] top-0  left-0 pink__gradient" />
        <div className="absolute z-[1] w-[5%] h-[5%] rounded-full white__gradient left-0 " />
        <div className="absolute z-[0] w-[5%] h-[5%] left=0 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
