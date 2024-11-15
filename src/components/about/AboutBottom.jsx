import { aboutBottomImg } from "@/assets/images";

const AboutBottom = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-20 lg:grid-cols-2 place-items-center">
      <div className="">
        <h2 className="font-semibold text-[48px] lg:text-[65px] leading-[84.5px] text-linkColor lg:flex lg:flex-col">
          Tezkor va <span className="text-titleSpan">sifatli ish</span>
        </h2>
        <p className="font-normal text-xl lg:text-2xl lg:leading-[38px] text-linkColor">
          Biz doimo mijozlarimizga oz muddatda mukammal bo'lgan loyihalarni
          taqdim etamiz
        </p>
      </div>
      <div>
        <img src={aboutBottomImg} alt="about-img" />
      </div>
    </div>
  );
};

export default AboutBottom;
