import { Link } from "react-scroll";

export const Card = ({ title, image, description, }) => {
  return (
    <div className="bg-white shadow-2xl rounded-[15px] pt-[15px] pb-[29px] pl-7 pr-[22px]">
      <div className="flex justify-between items-center mb-[9px]">
        <h3 className="font-semibold text-2xl mdl:text-[35px] text-black leading-[52px]">
          {title}
        </h3>
        <img src={image} alt="" className="mdl:w-auto mdl:h-auto w-8 h-8" />
      </div>
      <p className="font-normal leading-[20px] text-sm mdl:text-base lg:text-[24px] mdl:leading-7 lg:leading-[36px] lg:text-justify text-textColor">
        {description}
      </p>
      <div className="flex justify-end">
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="contact"
          className="bg-dangerColor px-4 rounded-md py-2 text-white cursor-pointer"
        >
          Buyurtma berish
        </Link>
      </div>
    </div>
  );
};

export default Card;
