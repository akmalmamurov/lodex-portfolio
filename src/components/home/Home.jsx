import { homeImg } from "@/assets/images";

export const Home = () => {
  return (
    <section id="home" className="pt-[100px]">
      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
        <div className="w-full pr-0 lg:pr-[10px]">
          <h1 className="font-semibold text-center text-[32px]   mdl:text-left mdl:text-[44px]  lg:text-[54px] mb-6">
            BIZNESINGIZNI KEYINGI BOSQICHGA
            <span className="text-[#18CA90]">OLIB CHIQING.</span>
          </h1>
          <p className="font-normal text-linkColor w-full text-center text-base mdl:text-left mdl:text-[18px] lg:text-[21px] leading-[33px] mb-[30px] lg:w-auto ">
            Sizning online yechimlar poydevoringiz.
          </p>
        </div>
        <div className="">
          <img src={homeImg} alt="homeImg" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Home;
