export const Card = ({ title, icon, description }) => {
  return (
    <div className="bg-white shadow-2xl rounded-[15px] pt-[15px] pb-[29px] pl-7 pr-[22px]">
      <div className="flex justify-between items-center mb-[9px]">
        <h3 className="font-semibold text-2xl mdl:text-[35px] text-black leading-[52px]">
          {title}
        </h3>
        <span >{icon}</span>
      </div>
      <p className="font-normal leading-[20px] text-sm mdl:text-base lg:text-[24px] mdl:leading-7 lg:leading-[36px] lg:text-justify text-textColor">{description}</p>
    </div>
  );
};

export default Card;
