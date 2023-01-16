import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-125 transition-all ease-in-out duration-300`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full  `}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 ">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            className="animate-pulse w-[23px] h-[23px] object-contain"
            alt="arrow"
          />
        </div>
        <p className=" font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
