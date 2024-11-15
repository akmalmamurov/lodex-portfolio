import { aboutTopImg } from "@/assets/images";

const AboutTop = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-20 lg:grid-cols-2 place-items-center">
      <div className="">
        <h2 className="font-semibold text-[48px] lg:text-[65px] leading-[97.5px] text-linkColor">Kuchli <span className="text-titleSpan">jamoa</span></h2>
        <p className="font-normal text-xl lg:text-2xl lg:leading-[38px] text-linkColor">
          <span className="text-titleSpan font-bold">LODE-X IT</span> Group jamoasi har tomonlama professional va tajribali
          bo'lgan mutaxassislardan iborat,
        </p>
      </div>
      <div>
        <img src={aboutTopImg} alt="about-img" />
      </div>
    </div>
  );
};

export default AboutTop;
