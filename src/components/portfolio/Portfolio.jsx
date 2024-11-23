import { book } from "@/assets/images";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-[100px]">
      <h2 className="text-center font-bold text-linkColor text-[32px] mdl:text-[50px] uppercase mb-[60px]">
        PORTFOLIO
      </h2>
      <div className="grid grid-cols-1 mdl:grid-cols-2 gap-[55px]">
        <a href="https://book.uz/" target="_blank" className="h-auto mdl:h-[443px] relative  rounded-t-[10px] rounded-br-[10px] px-4 pb-[110px] overflow-hidden bg-black/90 cursor-pointer">
            <img src={book} alt="" className="w-full  h-full" />
          <div className="absolute bg-white w-2/3  shadow-lg z-10 bottom-0 left-0 rounded-tr-[10px] px-4">
            <h3 className="font-bold text-[32px] mdl:text-[48px] text-linkColor mdl:leading-[55px]">Book.uz</h3>
            <p>Veb-sayt</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
