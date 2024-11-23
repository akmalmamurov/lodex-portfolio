import { aboutTopImg } from "@/assets/images";
import { useTranslation } from "@/hooks";

const AboutTop = () => {
  const t = useTranslation();
  return (
    <div className="grid grid-cols-1 gap-2 lg:gap-20 lg:grid-cols-2 place-items-center">
      <div className="">
        <h2 className="font-semibold text-center text-[32px] mdl:text-left mdl:text-[48px] lg:text-[65px] leading-[97.5px] text-linkColor">{t.strong} <span className="text-titleSpan">{t.team}</span></h2>
        <p className="font-normal text-center text-base mdl:text-left mdl:text-xl lg:text-2xl lg:leading-[38px] text-linkColor">
          <span className="text-titleSpan font-bold">LODE-X IT</span> {t.aboutTop}
        </p>
      </div>
      <div>
        <img src={aboutTopImg} alt="about-img" />
      </div>
    </div>
  );
};

export default AboutTop;
