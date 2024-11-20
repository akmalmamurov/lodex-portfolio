import { Link } from "react-scroll";

export const Card = ({ title, image, description, }) => {
  return (
    <div className="bg-white shadow-2xl rounded-[15px] pt-[15px] pb-4 lg:pb-[29px] pl-7 pr-[22px]">
      <div className="flex justify-between items-center mb-[9px]">
        <h3 className="font-semibold text-lg sml:text-2xl mdl:text-[35px] text-black lg:leading-[52px]">
          {title}
        </h3>
        <img src={image} alt={title} />
      </div>
      <p className="font-normal sml:leading-[20px] text-xs sml:text-sm mdl:text-base lg:text-[24px] mdl:leading-7 lg:leading-[36px] lg:text-justify text-textColor">
        {description}
      </p>
      <div className="flex lg:justify-end lg:mt-0 mt-3">
        <Link
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
          to="contact-add"
          className="bg-dangerColor px-4 rounded-md py-2 text-white cursor-pointer"
        >
          Buyurtma berish
        </Link>
      </div>
    </div>
  );
};

export default Card;
