import { aboutBottomImg } from "@/assets/images";
import { useTranslation } from "@/hooks";

const AboutBottom = () => {
  const t = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-20 lg:grid-cols-2 lg:place-items-center">
      <div className="">
        <h2 className="font-semibold text-center mdl:text-left text-[32px] mdl:text-[48px] lg:text-[65px] flex-row lg:leading-[78px] text-linkColor lg:flex lg:flex-col">
          {t.fast} <span className="text-titleSpan">{t.qualityWork}</span>
        </h2>
        <p className="font-normal text-center mdl:text-left text-base mdl:text-xl lg:text-2xl lg:leading-[38px] text-linkColor">
          {t.aboutBottomText}
        </p>
      </div>
      <div>
        <img src={aboutBottomImg} alt="about-img" />
      </div>
    </div>
  );
};

export default AboutBottom;
