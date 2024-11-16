import { aboutMidImg } from "@/assets/images";

const AboutMid = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-20 lg:grid-cols-2 place-items-center my-8">
      <div className="lg:inline-flex hidden">
        <img src={aboutMidImg} alt="about-img" />
      </div>
      <div className="">
        <h2 className="font-semibold text-center text-[32px] mdl:text-left mdl:text-[48px] lg:text-[65px] leading-[80px] text-linkColor">
          Hamyonbop <span className="text-titleSpan">narxlar </span>
        </h2>
        <p className="font-normal text-center text-base mdl:text-left mdl:text-xl lg:text-2xl lg:font-medium  lg:leading-[38px] text-linkColor lg:w-[448px]">
          Xizmatlarimiz narxi siz va biznesingiz uchun albatta ma'qul va to'g'ri
          tanlov bo'ladi.
        </p>
      </div>
      <div className="lg:hidden inline-flex">
        <img src={aboutMidImg} alt="about-img" />
      </div>
    </div>
  );
};

export default AboutMid;
